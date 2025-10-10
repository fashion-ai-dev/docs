# Detailed Product Search

### Protected Search Detailed Endpoint

#### Overview

Protected endpoint for detailed semantic product search with session and user tracking.

#### Technical Details

- **Route:** `POST /v1/products/protected/search/detailed`
- **Authentication:** `@IsProtected()` - Requires authentication via protection token
- **HTTP Status:** 200 OK

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
Authorization: Bearer {token}
```

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

#### DTOs

- `SearchDetailedQueryDto`: Query parameters validation
- `SearchDetailedDto`: Request body validation
- `SearchDetailedResponseDto`: Response structure

#### Service Method

```typescript
searchDetailed(
  customerId: number,
  searchDetailedQueryDto: SearchDetailedQueryDto,
  searchDetailedDto: SearchDetailedDto
): Promise<SearchDetailedResponseDto>
```

#### Decorators

- `@IsProtected()` - Custom authentication guard
- `@HttpCode(HttpStatus.OK)` - Explicit 200 status
- `@CustomerId()` - Extracts customer ID from request context

#### cURL Example

```bash
curl -X POST 'https://api.example.com/v1/products/protected/search/detailed?query=blue+dress' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer YOUR_TOKEN' \
  -d '{
    "sessionId": "session-123",
    "userId": "user-456"
  }'
```

#### Notes

- `customerId` is automatically extracted from authentication context
- Session tracking is mandatory for analytics
- `userId` is optional for anonymous searches
- Results are filtered by customer's product catalog
