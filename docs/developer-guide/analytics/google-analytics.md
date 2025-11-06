---
sidebar_position: 3
---

# Google Analytics 4 Integration

This section describes how to configure Fashion.AI event tracking in Google Analytics 4 for comprehensive analytics and conversion monitoring.

## Required Events

### General Recommendation Events

| Event                | When it occurs                                            |
|----------------------|-----------------------------------------------------------|
| `fashionai_view`     | When a Fashion.AI recommendation is displayed              |
| `fashionai_click`    | When user clicks on a Fashion.AI recommendation            |
| `fashionai_addtocart`| When a recommended product is added to cart               |

### Shop The Look Specific Events

| Event                             | When it occurs                                |
|-----------------------------------|-----------------------------------------------|
| `fashionai_view_shopthelook`      | When "shop the look" button is displayed     |
| `fashionai_click_shopthelook`     | When "shop the look" button is clicked       |
| `fashionai_addtocart_shopthelook` | When "I want it" button in modal is clicked  |

## DataLayer Implementation

### General Recommendation Events

#### Recommendation View

```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'fashionai_view',
  event_category: 'engagement',
  event_label: 'recommendation_view',
  value: 1
});
```

#### Recommendation Click

```javascript
window.dataLayer.push({
  event: 'fashionai_click',
  event_category: 'engagement',
  event_label: 'recommendation_click',
  value: 1
});
```

#### Add to Cart from Recommendation

```javascript
window.dataLayer.push({
  event: 'fashionai_addtocart',
  event_category: 'ecommerce',
  event_label: 'add_to_cart_from_recommendation',
  value: 1
});
```

### Remember to add the Shop The Look specific events

## Event Verification

To verify if events are being triggered correctly:

1. Open browser Developer Tools (F12)
2. Go to the Console tab
3. Type `dataLayer` and press Enter
4. Check if events appear in the dataLayer array

Alternatively, you can use the "Google Analytics Debugger" extension or "GA4 Debug View" in Google Analytics to monitor events in real-time.
