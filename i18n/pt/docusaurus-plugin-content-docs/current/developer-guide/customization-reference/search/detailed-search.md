# Detailed Product Search

### Search Detailed - Whatsapp

#### Overview

Endpoint for detailed semantic product search on whatsapp with session and user tracking.

#### Technical Details

- **Route:** `POST /v1/products/protected/search/detailed`
- **Authentication:**  Requires authentication via token

#### Request

**Query Parameters:**
- `query` (string, required) - Search term

**Request Body:**
```typescript
{
  sessionId: string;  // Required - Session tracking ID
  userId?: string;    // Optional - User identifier
}
```

**Headers:**
```
Content-Type: application/json
X-FashionAI-APP-Token: {token}
```

[How generate my token?](../authentication)

#### Response

**Success (200):**
```typescript
{
  products: Array<{
    productId: string;
    name: string;
    images: string[];
    price: number;
    salePrice: number;
    link?: string;
  }>
}
```

#### cURL Example

```bash
curl -X POST 'https://catalog.api.fashionaiale.com/v1/products/protected/search/detailed?query=blue+dress' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: {token}' \
  -d '{
    "sessionId": "session-123",
    "userId": "user-456"
  }'
```

#### Notes

- `userId` is optional for anonymous searches
- Results are filtered by customer's product catalog
