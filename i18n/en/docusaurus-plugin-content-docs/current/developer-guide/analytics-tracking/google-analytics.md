# Google Analytics 4 Integration

This section describes how to configure Fashion.AI event tracking in Google Analytics 4 for comprehensive analytics and conversion monitoring.

## Required Events

| Event                             | When it occurs                                |
|-----------------------------------|-----------------------------------------------|
| `fashionai_view_shopthelook`      | When "shop the look" button is displayed     |
| `fashionai_click_shopthelook`     | When "shop the look" button is clicked       |
| `fashionai_addtocart_shopthelook` | When "I want it" button in modal is clicked  |

## DataLayer Implementation

### "Shop the Look" Button View

```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'fashionai_view_shopthelook',
  event_category: 'engagement',
  event_label: 'shopthelook_button_view',
  value: 1
});
```

### "Shop the Look" Button Click

```javascript
window.dataLayer.push({
  event: 'fashionai_click_shopthelook',
  event_category: 'engagement',
  event_label: 'shopthelook_button_click',
  value: 1
});
```

### "I Want It" Click Inside Modal

```javascript
window.dataLayer.push({
  event: 'fashionai_addtocart_shopthelook',
  event_category: 'ecommerce',
  event_label: 'add_to_cart_from_shopthelook',
  value: 1
});
```

## Event Verification

To verify if events are being triggered correctly:

1. Open browser Developer Tools (F12)
2. Go to the Console tab
3. Type `dataLayer` and press Enter
4. Check if events appear in the dataLayer array

Alternatively, you can use the "Google Analytics Debugger" extension or "GA4 Debug View" in Google Analytics to monitor events in real-time.