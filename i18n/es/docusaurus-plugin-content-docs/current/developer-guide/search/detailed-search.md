# Búsqueda Detallada de Productos

### Protected Search Detailed Endpoint

#### Visión General

Endpoint protegido para búsqueda semántica detallada de productos con seguimiento de sesión y usuario.

#### Detalles Técnicos

- **Ruta:** `POST /v1/products/protected/search/detailed`
- **Autenticación:** `@IsProtected()` - Requiere autenticación mediante token de protección
- **HTTP Status:** 200 OK

#### Request

**Query Parameters:**
- `query` (string, required) - Término de búsqueda

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

- `SearchDetailedQueryDto`: Validación de parámetros de query
- `SearchDetailedDto`: Validación del cuerpo de la solicitud
- `SearchDetailedResponseDto`: Estructura de respuesta

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

#### Ejemplo cURL

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

- `customerId` se extrae automáticamente del contexto de autenticación
- El seguimiento de sesión es obligatorio para analytics
- `userId` es opcional para búsquedas anónimas
- Los resultados se filtran por el catálogo de productos del cliente
