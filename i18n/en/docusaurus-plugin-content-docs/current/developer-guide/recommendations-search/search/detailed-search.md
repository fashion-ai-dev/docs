# Detailed Product Search

## Search for WhatsApp

Endpoint for detailed semantic product search on WhatsApp with session and user tracking. This endpoint uses an advanced search engine to find relevant products and returns a maximum of 5 products sorted by relevance.

## Technical Details

- **Route:** `POST /v1/products/protected/search/detailed`
- **Authentication:** Requires authentication via token

### Request

**Query Parameters:**
- `query` (string, required) - Search term to find products
- `size` (string, optional) - Product size/number to filter results (e.g., “42,” “M,” “GG”). The comparison is case-insensitive

**Request Body:**
```typescript
{
  sessionId: string;         // Required - Unique ID for tracking the search session
  userId?: string | null;    // Optional - User identifier (can be omitted for anonymous searches)
}
```

**Headers:**
```
Content-Type: application/json
X-FashionAI-APP-Token: {token}
```

[How do I generate my token?](../../authentication)

### Response

**Success (200):**
```typescript
{
  products: Array<{
    productId: string;    // Unique product ID
    sku: string;          // Product SKU (Stock Keeping Unit)
    name: string;         // Product name
    images: string[];     // Product image URLs (up to 2 images)
    price: number;        // Original product price
    salePrice: number;    // Promotional/sale price of the product
    size?: string;        // Product size/numbering (when available)
    link?: string;        // Full URL of the product in the store (when available)
  }>
}
```

**Notes on the response:**
- Returns a maximum of 5 products sorted by relevance
- Only products in stock and active are returned; however, it is recommended to also check stock in the implementation.
- In case of error, returns an empty array: `{ products: [] }`
- If the `size` parameter is specified, only products with the corresponding size will be returned

### Examples of Use

**Example 1: Simple search without size filter**
```bash
curl -X POST ‘https://catalog.api.fashionai.dev/v1/products/protected/search/detailed?query=vestido+azul’ \
  -H ‘Content-Type: application/json’ \
  -H ‘X-FashionAI-APP-Token: your-token-here’ \
  -d '{
    “sessionId”: “session-123”,
    “userId”: “user-456”
  }'
```

**Example 2: Search with specific size filter**
```bash
curl -X POST ‘https://catalog.api.fashionai.dev/v1/products/protected/search/detailed?query=camisas+black&size=42’ \
  -H ‘Content-Type: application/json’ \
  -H ‘X-FashionAI-APP-Token: your-token-here’ \
  -d '{
    “sessionId”: “session-789”,
    “userId”: “user-456”
  }'
```

**Example 3: Anonymous search (without userId)**
```bash
curl -X POST ‘https://catalog.api.fashionai.dev/v1/products/protected/search/detailed?query=tênis+running’ \
  -H ‘Content-Type: application/json’ \
  -H ‘X-FashionAI-APP-Token: your-token-here’ \
  -d '{
    “sessionId”: “anonymous-session-001”
  }'
```

**Response example:**
```json
{
  “products”: [
    {
      “productId”: “PROD-12345”,
      “sku”: “BLACK-SHIRT-42”,
      “name”: “Black Slim Fit Shirt”,
      “images”: [
        “https://example.com/images/camisa-preta-1.jpg”,
        “https://example.com/images/camisa-preta-2.jpg”
      ],
      “price”: $159.90,
      “salePrice”: $119.90,
      “size”: “42”,
      “link”: “https://minhaloja.com.br/produto/camisa-preta-slim-fit”
    },
    {
      “productId”: “PROD-67890”,
      “sku”: “CAM-CINZA-42”,
      “name”: “Gray Executive Shirt”,
      “images”: [
        “https://example.com/images/camisa-cinza-1.jpg”
      ],
      “price”: 179.90,
      “salePrice”: 139.90,
      “size”: “42”,
      “link”: “https://minhaloja.com.br/produto/camisa-cinza-executiva”
    }
  ]
}
```

#### If you have any questions, please email our support team at :mailbox: **support@generativecrm.com**