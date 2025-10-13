---
sidebar_position: 2
---

# Referencia de Personalización

Referencia técnica para los endpoints de la API de Personalización de Fashion.AI. Para una descripción general de tipos de recomendaciones y cómo funciona nuestra IA, consulta [Primeros Pasos con Recomendaciones](../user-guide/getting-started).

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
4. **Intención de Estilo**: Comprende ocasión, preferencias de estilo y necesidades de versatilidad
5. **Comportamiento de Usuario**: Referencias cruzadas de búsquedas, productos y compras pasadas para usuarios conectados
6. **Predicción de Intención**: Relaciona productos de diferentes categorías basándose en mapeo de estilos

## Endpoints de API

### Evento de Vista de Categoría

Cuando un usuario visita una página de categoría (ej., "Pantalones"), se debe activar un evento de vista de categoría a Fashion.AI.
Si el usuario está conectado, fashion muestra una vista de categoría específica basada en su historial.
Este evento es una señal fuerte de intención del usuario y ayuda a la IA a mapear la intención del usuario, sirviendo como base para la organización de la tienda, recomendaciones de productos y enriquecimiento del perfil CRM.

### Cuerpo de la Solicitud

```json
{
  "userId": 90,              // opcional - identificador de usuario si está autenticado
  "sessionId": "sess456",    // requerido
  "eventType": "categoryView", // requerido
  "data": {
    "id": "category789"      // requerido - ID de categoría
  }
}
```

### Respuesta Esperada

```json
{
  "products": ["product-id-1", "product-id-2", "product-id-3"]
}
```

> ⚠️ **Nota 1**: Esta respuesta incluye todos los productos de categoría clasificados por sesión y relevancia de usuario, que pueden usarse para organización de tienda.

> ⚠️ **Nota 2**: Esta respuesta estará vacía mientras la IA no tenga suficientes datos sobre el usuario y/o sesión. En estos casos, organiza la tienda según la solución nativa de tu plataforma.

## Evento Shop The Look

Habilita el botón "shop the look" para mostrar, vía modal o cajón, productos adicionales que componen el look completo para una pieza principal.

### Cuerpo de la Solicitud

```json
{
  "userId": 90,              // opcional - identificador de usuario si está autenticado
  "sessionId": "sess456",    // requerido
  "eventType": "shopTheLook", // requerido
  "data": {
    "id": "product789"       // requerido - ID de producto
  }
}
```

### Respuesta Esperada

```json
{
  "products": ["product-id-1", "product-id-2", "product-id-3"]
}
```

> ⚠️ **Nota**: Aunque la API filtra productos sin stock, la validación de stock debe hacerse localmente antes de renderizar en el frontend.

## Seguridad y CORS

Para proteger el token de autenticación (X-FashionAI-APP-Token), bloqueamos solicitudes directas del navegador. Si se realiza una llamada API directamente desde el frontend, el navegador bloqueará esta solicitud con un error CORS.

Esta medida evita que el token se exponga en el código fuente del sitio web, lo que podría comprometer la seguridad de la API y permitir uso no autorizado.

Si tu equipo aún elige realizar llamadas directamente desde el frontend, simplemente solicita autorización de dominio al soporte técnico de FashionAI. :mailbox: **support@generativecrm.com**
