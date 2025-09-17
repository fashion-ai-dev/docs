---
sidebar_position: 3
---

# Integración con Google Analytics 4

Esta sección describe cómo configurar el seguimiento de eventos de Fashion.AI en Google Analytics 4 para monitoreo integral de analytics y conversiones.

## Eventos Requeridos

| Evento                            | Cuándo ocurre                                |
|-----------------------------------|----------------------------------------------|
| `fashionai_view_shopthelook`      | Cuando se muestra el botón "shop the look"  |
| `fashionai_click_shopthelook`     | Cuando se hace clic en el botón "shop the look" |
| `fashionai_addtocart_shopthelook` | Cuando se hace clic en el botón "Lo quiero" del modal |

## Implementación en DataLayer

### Visualización del botón "shop the look"

```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'fashionai_view_shopthelook',
  event_category: 'engagement',
  event_label: 'shopthelook_button_view',
  value: 1
});
```

### Clic en el botón "shop the look"

```javascript
window.dataLayer.push({
  event: 'fashionai_click_shopthelook',
  event_category: 'engagement',
  event_label: 'shopthelook_button_click',
  value: 1
});
```

### Clic en "Lo quiero" dentro del modal

```javascript
window.dataLayer.push({
  event: 'fashionai_addtocart_shopthelook',
  event_category: 'ecommerce',
  event_label: 'add_to_cart_from_shopthelook',
  value: 1
});
```

## Verificación de Eventos

Para verificar si los eventos se están disparando correctamente:

1. Abre las Herramientas de Desarrollador del navegador (F12)
2. Ve a la pestaña Console
3. Escribe `dataLayer` y presiona Enter
4. Verifica si los eventos aparecen en el array del dataLayer

Alternativamente, puedes usar la extensión "Google Analytics Debugger" o "GA4 Debug View" en Google Analytics para monitorear eventos en tiempo real.