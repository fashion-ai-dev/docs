---
sidebar_position: 2
---

# Referencia de la API de Personalización

Guía de referencia completa para los endpoints de la API de Personalización de Fashion.AI. Aprende cómo integrar recomendaciones de productos en tiempo real y personalización de categorías.

## Configuración Base

### Endpoint Base
```
https://catalog.api.fashionaiale.com/api/v1/products/protected/recommendation
```

### Encabezados Requeridos
```json
{
  "Content-Type": "application/json",
  "X-FashionAI-APP-Token": "<your_app_token>"
}
```

> Genera tu token accediendo a: https://app.generativecrm.com/settings?tab=app-tokens

## Evento "Category View"

Cuando un usuario visita una página de categoría (ej.: "Pantalones"), se debe disparar un evento de vista de categoría a Fashion.AI.

Este evento es una señal fuerte de intención del usuario y ayuda a la IA a mapear la intención del usuario, sirviendo como base para organización de escaparate, recomendación de productos y enriquecimiento del perfil de CRM.

### Request Body

```json
{
  "userId": 90,              // opcional - identificador de usuario si está autenticado
  "sessionId": "sess456",    // requerido
  "eventType": "categoryView", // requerido
  "data": {
    "id": "category789"      // requerido - ID de la categoría
  }
}
```

### Respuesta Esperada

```json
{
  "products": ["id-del-producto-1", "id-del-producto-2", "id-del-producto-3"]
}
```

> ⚠️ **Nota 1**: Esta respuesta incluirá todos los productos de la categoría clasificados por relevancia de sesión y usuario, que pueden ser usados para organización del escaparate.

> ⚠️ **Nota 2**: Esta respuesta estará vacía mientras la IA no tenga datos suficientes sobre el usuario y/o sesión. En estos casos, organizar el escaparate según la solución nativa de la plataforma.

## Evento "Shop The Look"

Permitir que el botón "shop the look" muestre, vía modal o drawer, productos adicionales que componen el look completo de una pieza principal.

### Request Body

```json
{
  "userId": 90,              // opcional - identificador de usuario si está autenticado
  "sessionId": "sess456",    // requerido
  "eventType": "shopTheLook", // requerido
  "data": {
    "id": "product789"       // requerido - ID del producto
  }
}
```

### Respuesta Esperada

```json
{
  "products": ["id-del-producto-1", "id-del-producto-2", "id-del-producto-3"]
}
```

> ⚠️ **Nota**: Aunque la API filtra productos fuera de stock, la validación de stock debe hacerse localmente antes de renderizar en el frontend.

## Seguridad y CORS

Para proteger el token de autenticación (X-FashionAI-APP-Token), bloqueamos solicitudes directas del navegador. Si se hace una llamada a la API directamente desde el frontend, el navegador bloqueará esta solicitud con un error de CORS.

Esta medida evita que el token quede expuesto en el código fuente del sitio, lo que podría comprometer la seguridad de la API y permitir uso indebido.

Si aún así tu equipo opta por realizar llamadas directamente desde el front, simplemente solicita la liberación del dominio al soporte técnico de FashionAI.