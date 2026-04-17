---
sidebar_position: 8
---

# Sales Ranking

## Overview

The endpoint `/api/v1/products/protected/sales-ranking` returns a ranked list of best-selling products. Optionally filtered by category — without a `categoryId`, it returns the global ranking across all categories.

## Request Information

### HTTP Method
```
GET
```

### URL
```
https://catalog.api.fashionai.dev/api/v1/products/protected/sales-ranking
```

### Required Headers

| Header | Value | Description |
|--------|-------|-----------|
| `X-FashionAI-APP-Token` | `{token}` | Application authentication token |

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-----------|
| `categoryId` | `string` | No | Category ID to filter the ranking. If omitted, returns the global ranking |

## Response (200)

### Structure

**With category:**
```json
{
  "categoryId": "2020602",
  "products": ["49373", "12345", "67890"]
}
```

**Without category (global ranking):**
```json
{
  "categoryId": null,
  "products": ["101905", "40749", "8988"]
}
```

### Parameters

| Field | Type | Description |
|-------|------|-----------|
| `categoryId` | `string \| null` | Category ID used to filter, or `null` for the global ranking |
| `products` | `string[]` | Ordered array of best-selling product IDs (most sold first) |

## Examples

### cURL — Global Ranking

```bash
curl -X 'GET' \
  'https://catalog.api.fashionai.dev/api/v1/products/protected/sales-ranking' \
  -H 'accept: application/json' \
  -H 'X-FashionAI-APP-Token: YOUR_TOKEN_HERE'
```

### cURL — Ranking by Category

```bash
curl -X 'GET' \
  'https://catalog.api.fashionai.dev/api/v1/products/protected/sales-ranking?categoryId=2020602' \
  -H 'accept: application/json' \
  -H 'X-FashionAI-APP-Token: YOUR_TOKEN_HERE'
```

## HTTP Status Codes

| Code | Description |
|--------|-----------|
| `200` | Success. Returns the sales ranking |
| `401` | Unauthorized. Invalid or expired token |
| `500` | Internal server error |

## Important Notes

- The `products` array is ordered from most sold to least sold
- This is a protected endpoint and requires authentication via `X-FashionAI-APP-Token`
