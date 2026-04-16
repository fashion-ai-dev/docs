---
sidebar_position: 7
---

# Similar Products

## Overview

The endpoint `/api/v1/products/protected/similar` returns a list of similar products based on a provided product ID. This is a protected endpoint that requires authentication via token.

## Request Information

### HTTP Method
```
POST
```

### URL
```
https://catalog.api.fashionai.dev/api/v1/products/protected/similar
```

### Required Headers

| Header | Value | Description |
|--------|-------|-----------|
| `Content-Type` | `application/json` | Sets the format of the request body |
| `accept` | `application/json` | Sets the expected format of the response |
| `X-FashionAI-APP-Token` | `{token}` | Application authentication token |

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-----------|
| `limit` | `integer` | No | Maximum number of products returned. Minimum: `1` |

## Request Body

### Structure

```json
{
  "userId": "",
  "sessionId": "123",
  "data": {
    "id": "979935"
  }
}
```

### Parameters

| Field | Type | Required | Description |
|-------|------|----------|-----------|
| `userId` | `string \| null` | No | User identifier (optional) |
| `sessionId` | `string` | **Yes** | Unique session identifier |
| `data` | `SimilarData` | **Yes** | Object containing the request data |

#### SimilarData

| Field | Type | Required | Description |
|-------|------|----------|-----------|
| `id` | `string` | **Yes** | Product ID to search similar products for |

## Response

### Structure

```json
{
  "products": ["product_id_1", "product_id_2", "product_id_3"]
}
```

### Parameters

| Field | Type | Description |
|-------|------|-----------|
| `products` | `string[]` | Array containing the IDs of similar products |

## Examples

### cURL Request

```bash
curl -X 'POST' \
  'https://catalog.api.fashionai.dev/api/v1/products/protected/similar?limit=10' \
  -H 'accept: application/json' \
  -H 'X-FashionAI-APP-Token: YOUR_TOKEN_HERE' \
  -H 'Content-Type: application/json' \
  -d '{
  "userId": "",
  "sessionId": "123",
  "data": {
    "id": "979935"
  }
}'
```

## HTTP Status Codes

| Code | Description |
|--------|-----------|
| `200` | Success. Returns the list of similar products |
| `400` | Request validation error (invalid or missing parameters) |
| `401` | Unauthorized. Invalid or expired token |
| `403` | Forbidden. Insufficient permissions |
| `404` | Product not found |
| `500` | Internal server error |

## Validations

- **sessionId**: Required field, must be a non-empty string
- **data.id**: Required field, must be a non-empty string representing a valid product ID
- **userId**: Optional, can be null or a string
- **X-FashionAI-APP-Token**: Required token for authentication

## Important Notes

- This is a protected endpoint and requires authentication via token
- The token must be included in the `X-FashionAI-APP-Token` header
- The `sessionId` is required for tracking the user session
- The `userId` field may be optional in some scenarios
- The response contains only the IDs of similar products, not the complete product data
