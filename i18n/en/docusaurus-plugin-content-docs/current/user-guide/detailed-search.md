# Detailed Product Search

## 📄 User Documentation

### What does it do?

Allows advanced product searches using natural language. The system understands descriptions like "blue dress for wedding" or "comfortable running shoes" and returns relevant products.

### How to use?

**Endpoint:** `POST /v1/products/protected/search/detailed`

#### Parameters

**Query (URL):**
- `query` - Search text (example: "white long sleeve shirt")

**Body (JSON):**
- `sessionId` - Unique session identifier for search tracking
- `userId` - (Optional) User identifier

#### Request Example

```http
POST /v1/products/protected/search/detailed?query=white long sleeve shirt
```

**Body:**
```json
{
  "sessionId": "abc123xyz",
  "userId": "user456"
}
```

#### Response

```json
{
  "products": [
    {
      "productId": "12345",
      "name": "White Long Sleeve Shirt",
      "images": ["https://example.com/image1.jpg"],
      "price": 199.90,
      "salePrice": 149.90,
      "link": "https://store.com/white-shirt"
    }
  ]
}
```
