---
sidebar_position: 4
---

# Frontend Integration

This comprehensive guide describes how to implement user interface components for Fashion.AI features in your frontend application.

## Visual Reference

Visual suggestions for the "shop the look" component are available in our example Figma design.

## Interface Components

### "Shop The Look" Button

- Positioned over the main product image
- Displayed only when recommendations are available
- Triggers the opening of related products modal/drawer

### Related Products

The modal should display:

- **API-returned products** with "I want it" button to add to cart
- **Product information**: name, price, available sizes
- **Local stock validation** before rendering
- **Modal close button**

### Behavior

1. **Button display**: Only show if there are recommended products with valid stock
2. **Modal opening**: When clicking the "shop the look" button
3. **Add to cart**: Through the "I want it" button for each product
4. **Closing**: X button or click outside the modal

## Important Validations

- ✅ Check stock locally before rendering
- ✅ Validate if there are products returned by the API
- ✅ Implement loading states during API calls
- ✅ Handle connectivity errors or unavailable API

## Implementation Example

```javascript
// Pseudo-code for modal opening
function openShopTheLookModal(productId) {
  // 1. Make API call
  const recommendations = await fetchShopTheLook(productId);

  // 2. Validate stock locally
  const validProducts = recommendations.filter(product =>
    hasStock(product.id)
  );

  // 3. Only open modal if there are valid products
  if (validProducts.length > 0) {
    renderModal(validProducts);
  }
}
```