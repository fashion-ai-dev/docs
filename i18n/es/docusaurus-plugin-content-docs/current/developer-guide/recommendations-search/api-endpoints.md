---
sidebar_position: 2
---

# Referencia de personalización

Referencia técnica para los endpoints de la API de personalización de Fashion.AI. Para obtener una descripción general de los tipos de recomendaciones y cómo funciona nuestra IA, consulte [Introducción a las recomendaciones](../../user-guide/getting-started).

## Configuración básica

### Endpoint básico
```
https://catalog.api.fashionai.dev/api/v1/products/protected/recommendation
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

### Evento productView

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

### Evento categoryView

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

### Evento shopTheLook

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

## Configuración de Recomendaciones

El panel de configuración permite definir filtros para cada tipo de recomendación de forma individual. Acceda a la configuración y seleccione la pestaña correspondiente al tipo deseado: **Producto**, **Categoría** o **Comprar el Look**. Cada tipo debe guardarse por separado.

En la página de **Personalización**, en **Guía para la Implementación de la API**, haga clic en el botón **Filtros de recomendación** para abrir el panel de configuración:

![Página de Personalización con botón de filtros de recomendación](/img/tela1-recommendationFilter.png)

El modal de configuración se mostrará con los filtros disponibles para cada tipo de recomendación:

![Modal de configuración de recomendaciones](/img/tela2-recommendationFilter.png)

### Filtros disponibles

#### Tallas descontinuadas

Cuando está activado, la IA prioriza productos que complementen la grilla de tallas del stock actual, recomendando artículos que ayuden a equilibrar la disponibilidad de tallas.

#### Descuento

Filtra los productos recomendados según el estado de descuento:

| Opción | Descripción |
|--------|-------------|
| **Todos los productos** | Recomienda productos independientemente de si están en oferta o no |
| **Solo con descuento** | Recomienda únicamente productos que tienen un descuento activo |
| **Solo sin descuento** | Recomienda únicamente productos a precio completo |

#### Rango de precios

Define el rango de precios de los productos recomendados. Hay tres modos disponibles:

| Modo | Descripción |
|------|-------------|
| **Rango personalizado** | Permite definir manualmente los valores mínimo y máximo mediante el control deslizante |
| **Más de 10 mil** | Filtra únicamente productos con precio superior a R$ 10.000,00 |
| **Todos los productos** | No aplica filtro de precio — recomienda productos de cualquier valor |

#### Stock bajo

Cuando está activado, la IA no incluirá productos con stock bajo en las recomendaciones. Aparecerá el campo **Límite**, que permite seleccionar el número que su empresa considere stock bajo (por ejemplo, `10` significa que los productos con 10 o menos unidades en stock no serán recomendados).

### Cómo guardar

1. Seleccione la pestaña del tipo de recomendación que desea configurar (**Producto**, **Categoría** o **Comprar el Look**)
2. Ajuste los filtros según lo deseado
3. Haga clic en **Guardar** para aplicar la configuración de ese tipo
4. Para restablecer los filtros, haga clic en **Limpiar**

> ⚠️ **Nota**: Cada tipo de recomendación tiene su propia configuración. Los cambios realizados en una pestaña no afectan a las demás. Asegúrese de guardar cada tipo individualmente.

## Seguridad y CORS

Para proteger el token de autenticación (X-FashionAI-APP-Token), bloqueamos las solicitudes directas del navegador. Si se realiza una llamada a la API directamente desde el frontend, el navegador bloqueará esta solicitud con un error CORS.

Esta medida evita que el token quede expuesto en el código fuente del sitio web, lo que podría comprometer la seguridad de la API y permitir su uso no autorizado.

Si su equipo sigue optando por realizar llamadas directamente desde la interfaz, solo tiene que solicitar la autorización del dominio al servicio técnico de FashionAI. :mailbox: **support@generativecrm.com**