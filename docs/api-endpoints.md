---
sidebar_position: 2
---

# Personalization Reference

Complete reference guide for Fashion.AI's Personalization API endpoints. Learn how to integrate real-time product recommendations and category personalization.

## Base Configuration

### Base Endpoint
```
https://catalog.api.fashionaiale.com/api/v1/products/protected/recommendation
```

### Required Headers
```json
{
  "Content-Type": "application/json",
  "X-FashionAI-APP-Token": "<your_app_token>"
}
```

> Generate your token at: https://app.generativecrm.com/settings?tab=app-tokens

## Category View Event

When a user visits a category page (e.g., "Pants"), a category view event should be triggered to Fashion.AI.

This event is a strong signal of user intention and helps the AI map user intent, serving as the foundation for storefront organization, product recommendations, and CRM profile enrichment.

### Request Body

```json
{
  "userId": 90,              // optional - user identifier if authenticated
  "sessionId": "sess456",    // required
  "eventType": "categoryView", // required
  "data": {
    "id": "category789"      // required - category ID
  }
}
```

### Expected Response

```json
{
  "products": ["product-id-1", "product-id-2", "product-id-3"]
}
```

> ⚠️ **Note 1**: This response includes all category products ranked by session and user relevance, which can be used for storefront organization.

> ⚠️ **Note 2**: This response will be empty while the AI doesn't have sufficient data about the user and/or session. In these cases, organize the storefront according to your platform's native solution.

## Shop The Look Event

Enable the "shop the look" button to display, via modal or drawer, additional products that make up the complete look for a main piece.

### Request Body

```json
{
  "userId": 90,              // optional - user identifier if authenticated
  "sessionId": "sess456",    // required
  "eventType": "shopTheLook", // required
  "data": {
    "id": "product789"       // required - product ID
  }
}
```

### Expected Response

```json
{
  "products": ["product-id-1", "product-id-2", "product-id-3"]
}
```

> ⚠️ **Note**: Although the API filters out-of-stock products, stock validation should be done locally before rendering in the frontend.

## Security and CORS

To protect the authentication token (X-FashionAI-APP-Token), we block direct browser requests. If an API call is made directly from the frontend, the browser will block this request with a CORS error.

This measure prevents the token from being exposed in the website's source code, which could compromise API security and allow unauthorized use.

If your team still chooses to make calls directly from the frontend, simply request domain authorization from FashionAI technical support.