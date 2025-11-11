# Búsqueda detallada de productos

### Búsqueda detallada - Whatsapp

#### Descripción general

Endpoint para la búsqueda semántica detallada de productos en Whatsapp con seguimiento de sesión y usuario. Este endpoint utiliza un motor de búsqueda avanzado para encontrar productos relevantes y devuelve un máximo de 5 productos ordenados por relevancia.

#### Detalles técnicos

- **Ruta:** `POST /v1/products/protected/search/detailed`
- **Autenticación:** Requiere autenticación mediante token

#### Solicitud

**Parámetros de consulta:**
- `query` (cadena, obligatorio): término de búsqueda para encontrar productos
- `size` (cadena, opcional): tamaño/talla del producto para filtrar los resultados (por ejemplo, «42», «M», «GG»). La comparación no distingue entre mayúsculas y minúsculas

**Cuerpo de la solicitud:**
```typescript
{
  sessionId: string;         // Obligatorio: ID único para rastrear la sesión de búsqueda
  userId?: string | null;    // Opcional: identificador del usuario (se puede omitir para búsquedas anónimas)
}
```

**Encabezados:**
```
Content-Type: application/json
X-FashionAI-APP-Token: {token}
```

[¿Cómo generar mi token?](../../authentication)

#### Respuesta

**Éxito (200):**
```typescript
{
  products: Array<{
    productId: string;    // ID único del producto
    sku: string;          // SKU (unidad de mantenimiento de stock) del producto
    name: string;         // Nombre del producto
    images: string[];     // URL de las imágenes del producto (hasta 2 imágenes)
    price: número;        // Precio original del producto
    salePrice: número;    // Precio promocional/de venta del producto
    size?: cadena;        // Talla/numeración del producto (cuando esté disponible)
    link?: cadena;        // URL completa del producto en la tienda (cuando esté disponible)
  }>
}
```

**Observaciones sobre la respuesta:**
- Devuelve un máximo de 5 productos ordenados por relevancia
- Solo se devuelven los productos en stock y activos; sin embargo, se recomienda verificar el stock en la implementación.
- En caso de error, devuelve una matriz vacía: `{ products: [] }`
- Si se informa el parámetro `size`, solo se devolverán los productos con el tamaño correspondiente

#### Ejemplos de uso

**Ejemplo 1: Búsqueda simple sin filtro de tamaño**
```bash
curl -X POST 'https://catalog.api.fashionaiale.com/v1/products/protected/search/detailed?query=vestido+azul' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: su-token-aquí' \
  -d '{
    "sessionId": "session-123",
    "userId": "user-456"
  }'
```

**Ejemplo 2: Búsqueda con filtro de talla específica**
```bash
curl -X POST 'https://catalog.api.fashionaiale.com/v1/products/protected/search/detailed?query=camisas+preta&size=42' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: su-token-aquí' \
  -d '{
    "sessionId": "session-789",
    "userId": "user-456"
  }'
```

**Ejemplo 3: Búsqueda anónima (sin userId)**
```bash
curl -X POST 'https://catalog.api.fashionaiale.com/v1/products/protected/search/detailed?query=tênis+corrida' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: su-token-aquí' \
  -d '{
    "sessionId": "anonymous-session-001"
  }'
```

**Ejemplo de respuesta:**
```json
{
  "products": [
    {
      "productId": "PROD-12345",
      "sku": "CAM-PRETA-42",
      "name": "Camisa negra Slim Fit",
      "images": [
        "https://example.com/images/camisa-preta-1.jpg",
        "https://example.com/images/camisa-preta-2.jpg"
      ],
      "price": 159.90,
      "salePrice": 119.90,
      "size": "42",
      "link": "https://minhaloja.com.br/produto/camisa-preta-slim-fit"
    },
    {
      "productId": "PROD-67890",
      "sku": "CAM-CINZA-42",
      "name": "Camisa Ejecutiva Gris",
      "images": [
        "https://example.com/images/camisa-cinza-1.jpg"
      ],
      "price": 179.90,
      "salePrice": 139.90,
      "size": "42",
      "link": "https://minhaloja.com.br/produto/camisa-cinza-executiva"
    }
  ]
}
```

### Si tiene alguna pregunta, envíe un correo electrónico a nuestro servicio de asistencia :mailbox: **support@generativecrm.com**