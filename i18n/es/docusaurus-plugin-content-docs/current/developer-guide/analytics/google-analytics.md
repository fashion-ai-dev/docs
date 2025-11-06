---
sidebar_position: 3
---

# Integración con Google Analytics 4

Esta sección describe cómo configurar el rastreo de eventos de Fashion.AI en Google Analytics 4 para análisis completos y monitoreo de conversión.

## Eventos Obligatorios

### Eventos Generales de Recomendación

| Evento              | Cuándo ocurre                                           |
|---------------------|---------------------------------------------------------|
| `fashionai_view`    | Cuando se muestra una recomendación de Fashion.AI       |
| `fashionai_click`   | Cuando el usuario hace clic en una recomendación de Fashion.AI |
| `fashionai_addtocart`| Cuando un producto recomendado se agrega al carrito |

### Eventos Específicos del Shop The Look

| Evento                            | Cuándo ocurre                                     |
|-----------------------------------|---------------------------------------------------|
| `fashionai_view_shopthelook`      | Cuando se muestra el botón "compre el look"       |
| `fashionai_click_shopthelook`     | Cuando se hace clic en el botón "compre el look"  |
| `fashionai_addtocart_shopthelook` | Cuando se hace clic en el botón "Lo quiero" en el modal |

## Implementación del DataLayer

### Eventos Generales de Recomendación

#### Visualización de Recomendación

```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'fashionai_view',
  event_category: 'engagement',
  event_label: 'recommendation_view',
  value: 1
});
```

#### Clic en Recomendación

```javascript
window.dataLayer.push({
  event: 'fashionai_click',
  event_category: 'engagement',
  event_label: 'recommendation_click',
  value: 1
});
```

#### Agregar al Carrito de Recomendación

```javascript
window.dataLayer.push({
  event: 'fashionai_addtocart',
  event_category: 'ecommerce',
  event_label: 'add_to_cart_from_recommendation',
  value: 1
});
```

### Recuerde agregar los eventos específicos del Shop The Look

## Verificación de Eventos

Para verificar si los eventos se están disparando correctamente:

1. Abra las Herramientas del Desarrollador del navegador (F12)
2. Vaya a la pestaña Consola
3. Escriba `dataLayer` y presione Enter
4. Verifique si los eventos aparecen en el array dataLayer

Alternativamente, puede usar la extensión "Google Analytics Debugger" o "GA4 Debug View" en Google Analytics para monitorear eventos en tiempo real.
