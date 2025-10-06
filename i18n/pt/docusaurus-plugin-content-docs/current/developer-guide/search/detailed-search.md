# Busca Detalhada de Produtos

### Protected Search Detailed Endpoint

#### Visão Geral

Endpoint protegido para busca semântica detalhada de produtos com rastreamento de sessão e usuário.

#### Detalhes Técnicos

- **Rota:** `POST /v1/products/protected/search/detailed`
- **Autenticação:** `@IsProtected()` - Requer autenticação via token de proteção
- **HTTP Status:** 200 OK

#### Request

**Query Parameters:**
- `query` (string, required) - Termo de busca

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

#### Exemplo cURL

```bash
curl -X POST 'https://api.example.com/v1/products/protected/search/detailed?query=vestido+azul' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer YOUR_TOKEN' \
  -d '{
    "sessionId": "session-123",
    "userId": "user-456"
  }'
```

#### Notas

- `customerId` é extraído automaticamente do contexto de autenticação
- Rastreamento de sessão é obrigatório para analytics
- `userId` é opcional para buscas anônimas
- Resultados são filtrados pelo catálogo de produtos do cliente
