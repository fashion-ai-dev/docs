---
sidebar_position: 7
---

# Productos Similares

## Descripción General

El endpoint `/api/v1/products/protected/similar` devuelve una lista de productos similares basada en un ID de producto proporcionado.

## Información de la Solicitud

### Método HTTP
```
POST
```

### URL
```
https://catalog.api.fashionai.dev/api/v1/products/protected/similar
```

### Headers Obligatorios

| Header | Valor | Descripción |
|--------|-------|-----------|
| `Content-Type` | `application/json` | Define el formato del cuerpo de la solicitud |
| `accept` | `application/json` | Define el formato esperado de la respuesta |
| `X-FashionAI-APP-Token` | `{token}` | Token de autenticación de la aplicación |

## Cuerpo de la Solicitud

### Estructura

```json
{
  "userId": "",
  "sessionId": "123",
  "data": {
    "id": "979935"
  }
}
```

### Parámetros

| Campo | Tipo | Obligatorio | Descripción |
|-------|------|-------------|-----------|
| `userId` | `string \| null` | No | Identificador del usuario (opcional) |
| `sessionId` | `string` | **Sí** | Identificador único de la sesión |
| `data` | `SimilarData` | **Sí** | Objeto que contiene los datos de la solicitud |

#### SimilarData

| Campo | Tipo | Obligatorio | Descripción |
|-------|------|-------------|-----------|
| `id` | `string` | **Sí** | ID del producto para el cual buscar productos similares |

## Respuesta

### Estructura

```json
{
  "products": ["product_id_1", "product_id_2", "product_id_3"]
}
```

### Parámetros

| Campo | Tipo | Descripción |
|-------|------|-----------|
| `products` | `string[]` | Array que contiene los IDs de los productos similares |

## Ejemplos

### cURL Request

```bash
curl -X 'POST' \
  'https://catalog.api.fashionai.dev/api/v1/products/protected/similar' \
  -H 'accept: application/json' \
  -H 'X-FashionAI-APP-Token: YOUR_TOKEN_HERE' \
  -H 'Content-Type: application/json' \
  -d '{
  "userId": "",
  "sessionId": "123",
  "data": {
    "id": "979935"
  }
}'
```

## Códigos de Estado HTTP

| Código | Descripción |
|--------|-----------|
| `200` | Éxito. Devuelve la lista de productos similares |
| `400` | Error en la validación de la solicitud (parámetros inválidos o faltantes) |
| `401` | No autorizado. Token inválido o expirado |
| `404` | Producto no encontrado |
| `500` | Error interno del servidor |

## Validaciones

- **sessionId**: Campo obligatorio, debe ser una cadena no vacía
- **data.id**: Campo obligatorio, debe ser una cadena no vacía que representa un ID de producto válido
- **userId**: Opcional, puede ser null o una cadena
- **X-FashionAI-APP-Token**: Token obligatorio para la autenticación

## Notas Importantes

- La respuesta contiene solo los IDs de los productos similares, no los datos completos de los productos
