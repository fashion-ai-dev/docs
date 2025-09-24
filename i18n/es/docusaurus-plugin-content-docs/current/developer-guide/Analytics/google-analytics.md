---
sidebar_position: 3
---

# Integración con Google Analytics 4

Esta sección describe cómo configurar el seguimiento de eventos de Fashion.AI en Google Analytics 4 para analíticas exhaustivas y monitoreo de conversiones.

## Eventos Requeridos

| Evento                            | Cuándo ocurre                                    |
|-----------------------------------|-----------------------------------------------------|
| `fashionai_view_shopthelook`      | Cuando el botón "compra el look" es mostrado        |
| `fashionai_click_shopthelook`     | Cuando el botón "compra el look" es clicado         |
| `fashionai_addtocart_shopthelook` | Cuando el botón "Lo quiero" en el modal es clicado |

## Implementación del DataLayer

### Vista del Botón "Compra el Look"

```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'fashionai_view_shopthelook',
  event_category: 'engagement',
  event_label: 'shopthelook_button_view',
  value: 1
});
```

### Clic del Botón "Compra el Look"

```javascript
window.dataLayer.push({
  event: 'fashionai_click_shopthelook',
  event_category: 'engagement',
  event_label: 'shopthelook_button_click',
  value: 1
});
```

### Clic "Lo Quiero" Dentro del Modal

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
2. Ve a la pestaña Consola
3. Escribe `dataLayer` y presiona Enter
4. Verifica si los eventos aparecen en el array dataLayer

Alternativamente, puedes usar la extensión "Google Analytics Debugger" o "GA4 Debug View" en Google Analytics para monitorear eventos en tiempo real.