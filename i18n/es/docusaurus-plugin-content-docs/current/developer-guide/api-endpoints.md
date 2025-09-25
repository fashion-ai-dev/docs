---
sidebar_position: 2
---

# Referencia de Personalización

Referencia técnica para los endpoints de la API de Personalización de Fashion.AI. Para una visión general de los tipos de recomendación y cómo funciona nuestra IA, ve [Primeros Pasos con Recomendaciones](../user-guide/getting-started).

## Configuración Base

### Endpoint Base
```
https://catalog.api.fashionaiale.com/api/v1/products/protected/recommendation
```

### Encabezados Requeridos
```json
{
  "Content-Type": "application/json",
  "X-FashionAI-APP-Token": "<tu_token_de_app>"
}
```

> Genera tu token en: https://app.generativecrm.com/settings?tab=app-tokens

## Cómo Funciona Nuestra IA

### Proceso de Mapeo de Intención

1. **Navegación de Productos**: Rastrea productos que los usuarios han navegado durante la sesión
2. **Elementos de Categoría**: Analiza elementos visuales como siluetas, patrones y detalles de estilo
3. **Insights de Patrones**: Identifica texturas, telas y elementos estructurales
4. **Intención de Estilo**: Entiende la ocasión, preferencias de estilo y necesidades de versatilidad
5. **Comportamiento del Usuario**: Cruza referencias de búsquedas, productos y compras pasadas para usuarios logueados
6. **Predicción de Intención**: Relaciona productos de diferentes categorías basado en el mapeo de estilo

## Endpoints de la API

### Evento de Vista de Categoría

Cuando un usuario visita una página de categoría (ej: "Pantalones"), un evento de vista de categoría debe ser disparado a Fashion.AI.
Si el usuario está logueado, fashion muestra una vista de categoría específica basada en su historial.
Este evento es una señal fuerte de intención del usuario y ayuda a la IA a mapear la intención del usuario, sirviendo como base para organización del escaparate, recomendaciones de productos y enriquecimiento de perfil CRM.

### Cuerpo de la Solicitud

```json
{
  "userId": 90,              // opcional - identificador del usuario si está autenticado
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
  "products": ["product-id-1", "product-id-2", "product-id-3"]
}
```

> ⚠️ **Nota 1**: Esta respuesta incluye todos los productos de la categoría clasificados por relevancia de sesión y usuario, que puede ser usada para organización del escaparate.

> ⚠️ **Nota 2**: Esta respuesta estará vacía mientras la IA no tenga suficientes datos sobre el usuario y/o sesión. En estos casos, organiza el escaparate según la solución nativa de tu plataforma.

## Evento Compra el Look

Habilita el botón "compra el look" para mostrar, vía modal o cajón, productos adicionales que conforman el look completo de una pieza principal.

### Cuerpo de la Solicitud

```json
{
  "userId": 90,              // opcional - identificador del usuario si está autenticado
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
  "products": ["product-id-1", "product-id-2", "product-id-3"]
}
```

> ⚠️ **Nota**: Aunque la API filtra productos fuera de stock, la validación de stock debe hacerse localmente antes de renderizar en el frontend.

## Seguridad y CORS

Para proteger el token de autenticación (X-FashionAI-APP-Token), bloqueamos solicitudes directas del navegador. Si una llamada de API se hace directamente desde el frontend, el navegador bloqueará esta solicitud con un error de CORS.

Esta medida previene que el token sea expuesto en el código fuente del sitio web, lo que podría comprometer la seguridad de la API y permitir uso no autorizado.

Si tu equipo aún elige hacer llamadas directamente desde el frontend, simplemente solicita autorización de dominio del soporte técnico de FashionAI. :mailbox: **support@generativecrm.com**