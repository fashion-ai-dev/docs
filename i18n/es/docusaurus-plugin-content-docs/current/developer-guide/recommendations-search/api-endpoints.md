---
sidebar_position: 2
---

# Referencia de personalización

Referencia técnica para los endpoints de la API de personalización de Fashion.AI. Para obtener una descripción general de los tipos de recomendaciones y cómo funciona nuestra IA, consulte [Introducción a las recomendaciones](../../user-guide/getting-started).

## Configuración básica

### Endpoint básico
```
https://catalog.api.fashionaiale.com/api/v1/products/protected/recommendation
```

### Encabezados necesarios
```json
{
  "Content-Type": "application/json",
  "X-FashionAI-APP-Token": "<su_token_de_aplicación>"
}
```

> Genere su token en: https://app.generativecrm.com/settings?tab=app-tokens

## Cómo funciona nuestra IA

### Proceso de mapeo de intenciones

1. **Navegación por productos**: realiza un seguimiento de los productos por los que han navegado los usuarios durante la sesión.
2. **Elementos de categoría**: analiza elementos visuales como siluetas, patrones y detalles de estilo.
3. **Información sobre patrones**: identifica texturas, tejidos y elementos estructurales.
4. **Intención de estilo**: comprende la ocasión, las preferencias de estilo y las necesidades de versatilidad.
5. **Comportamiento del usuario**: cruza referencias de búsquedas, productos y compras anteriores de los usuarios que han iniciado sesión.
6. **Predicción de intenciones**: relaciona productos de diferentes categorías basándose en el mapeo de estilos.

## Endpoints de la API

### Evento de visualización de productos

Cuando un usuario hace clic en un producto, se debe activar un evento de visualización de productos en Fashion.AI, que muestra al usuario un conjunto de productos similares.
Si el usuario ha iniciado sesión, Fashion muestra un conjunto específico de productos basado en su historial.
Este evento es una señal clara de la intención del usuario y ayuda a la IA a mapear la intención del usuario, lo que sirve de base para la organización del escaparate, las recomendaciones de productos y el enriquecimiento del perfil CRM.

#### Cuerpo de la solicitud

```json
{
  "userId": 90,              // opcional: identificador de usuario si está autenticado
  "sessionId": "sess456",    // obligatorio
  "eventType": "productView", // obligatorio
  "data": {
    "id": "id789"      // obligatorio: ID del producto
  }
}
```

#### Respuesta esperada

```json
{
  "products": ["product-id-1", "product-id-2", "product-id-3"]
}
```

> ⚠️ **Nota 1**: Esta respuesta incluye todos los productos similares clasificados por sesión y relevancia para el usuario, lo que puede utilizarse para organizar el escaparate.

> ⚠️ **Nota 2**: Esta respuesta estará vacía mientras la IA no tenga datos suficientes sobre el usuario y/o la sesión. En estos casos, organice el escaparate según la solución nativa de su plataforma.

### Evento de visualización de categoría

Cuando un usuario visita una página de categoría (por ejemplo, «Pantalones»), se debe activar un evento de visualización de categoría en Fashion.AI.
Si el usuario ha iniciado sesión, Fashion muestra una vista de categoría específica basada en su historial.
Este evento es una señal clara de la intención del usuario y ayuda a la IA a mapearla, lo que sirve de base para la organización de la tienda, las recomendaciones de productos y el enriquecimiento del perfil CRM.

#### Cuerpo de la solicitud

```json
{
  "userId": 90,              // opcional: identificador de usuario si está autenticado
  "sessionId": "sess456",    // obligatorio
  "eventType": "categoryView", // obligatorio
  "data": {
    "id": "category789"      // obligatorio: ID de categoría
  }
}
```

#### Respuesta esperada

```json
{
  "products": ["product-id-1", "product-id-2", "product-id-3"]
}
```

> ⚠️ **Nota 1**: Esta respuesta incluye todos los productos de la categoría clasificados por sesión y relevancia para el usuario, lo que puede utilizarse para la organización de la tienda.

> ⚠️ **Nota 2**: Esta respuesta estará vacía mientras la IA no tenga datos suficientes sobre el usuario y/o la sesión. En estos casos, organice la tienda según la solución nativa de su plataforma.

### Evento «Comprar el look»

Habilite el botón «Comprar el look» para mostrar, a través de un modal o un cajón, productos adicionales que completan el look de una prenda principal.

#### Cuerpo de la solicitud

```json
{
  "userId": 90,              // opcional: identificador de usuario si está autenticado
  "sessionId": "sess456",    // obligatorio
  "eventType": "shopTheLook", // obligatorio
  "data": {
    "id": "product789"       // obligatorio: ID del producto
  }
}
```

#### Respuesta esperada

```json
{
  "products": ["product-id-1", "product-id-2", "product-id-3"]
}
```

> ⚠️ **Nota**: Aunque la API filtra los productos agotados, la validación del stock debe realizarse localmente antes de renderizar en el frontend.

## Seguridad y CORS

Para proteger el token de autenticación (X-FashionAI-APP-Token), bloqueamos las solicitudes directas del navegador. Si se realiza una llamada a la API directamente desde el frontend, el navegador bloqueará esta solicitud con un error CORS.

Esta medida evita que el token quede expuesto en el código fuente del sitio web, lo que podría comprometer la seguridad de la API y permitir su uso no autorizado.

Si su equipo sigue optando por realizar llamadas directamente desde la interfaz, solo tiene que solicitar la autorización del dominio al servicio técnico de FashionAI. :mailbox: **support@generativecrm.com**