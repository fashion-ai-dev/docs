# Búsqueda Detallada de Productos

## 📄 Documentación para Usuarios

### ¿Qué hace?

Permite realizar búsquedas avanzadas de productos usando lenguaje natural. El sistema entiende descripciones como "vestido azul para boda" o "zapatillas cómodas para correr" y devuelve productos relevantes.

### ¿Cómo usar?

**Endpoint:** `POST /v1/products/protected/search/detailed`

#### Parámetros

**Query (URL):**
- `query` - Texto de búsqueda (ejemplo: "blusa blanca manga larga")

**Body (JSON):**
- `sessionId` - Identificador único de sesión de búsqueda
- `userId` - (Opcional) Identificador del usuario

#### Ejemplo de solicitud

```http
POST /v1/products/protected/search/detailed?query=blusa blanca manga larga
```

**Body:**
```json
{
  "sessionId": "abc123xyz",
  "userId": "user456"
}
```

#### Respuesta

```json
{
  "products": [
    {
      "productId": "12345",
      "name": "Blusa Blanca Manga Larga",
      "images": ["https://example.com/image1.jpg"],
      "price": 199.90,
      "salePrice": 149.90,
      "link": "https://tienda.com/blusa-blanca"
    }
  ]
}
```
