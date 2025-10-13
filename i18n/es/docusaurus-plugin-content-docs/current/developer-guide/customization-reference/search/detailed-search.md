# Búsqueda Detallada de Productos

### Búsqueda Detallada - Whatsapp

#### Descripción General

Endpoint para búsqueda semántica detallada de productos en whatsapp con seguimiento de sesión y usuario.

#### Detalles Técnicos

- **Ruta:** `POST /v1/products/protected/search/detailed`
- **Autenticación:** Requiere autenticación vía token

#### Solicitud

**Parámetros de Consulta:**
- `query` (string, requerido) - Término de búsqueda

**Cuerpo de la Solicitud:**
```typescript
{
  sessionId: string;  // Requerido - ID de seguimiento de sesión
  userId?: string;    // Opcional - Identificador de usuario
}
```

**Encabezados:**
```
Content-Type: application/json
X-FashionAI-APP-Token: {token}
```

[¿Cómo generar mi token?](../authentication)

#### Respuesta

**Éxito (200):**
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

#### Ejemplo cURL

```bash
curl -X POST 'https://catalog.api.fashionaiale.com/v1/products/protected/search/detailed?query=vestido+azul' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: {token}' \
  -d '{
    "sessionId": "session-123",
    "userId": "user-456"
  }'
```

#### Notas

- `userId` es opcional para búsquedas anónimas
- Los resultados se filtran por el catálogo de productos del cliente

