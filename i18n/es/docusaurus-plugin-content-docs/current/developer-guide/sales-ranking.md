---
sidebar_position: 8
---

# Más Vendidos

## Descripción General

El endpoint `/api/v1/products/protected/sales-ranking` devuelve una lista clasificada de los productos más vendidos. Se puede filtrar por categoría — sin `categoryId`, devuelve el ranking global de todas las categorías.

## Información de la Solicitud

### Método HTTP
```
GET
```

### URL
```
https://catalog.api.fashionai.dev/api/v1/products/protected/sales-ranking
```

### Headers Obligatorios

| Header | Valor | Descripción |
|--------|-------|-----------|
| `X-FashionAI-APP-Token` | `{token}` | Token de autenticación de la aplicación |

### Parámetros de Query

| Parámetro | Tipo | Obligatorio | Descripción |
|-----------|------|-------------|-----------|
| `categoryId` | `string` | No | ID de categoría para filtrar el ranking. Si se omite, devuelve el ranking global |

## Respuesta (200)

### Estructura

**Con categoría:**
```json
{
  "categoryId": "2020602",
  "products": ["49373", "12345", "67890"]
}
```

**Sin categoría (ranking global):**
```json
{
  "categoryId": null,
  "products": ["101905", "40749", "8988"]
}
```

### Parámetros

| Campo | Tipo | Descripción |
|-------|------|-----------|
| `categoryId` | `string \| null` | ID de categoría usada para filtrar, o `null` para el ranking global |
| `products` | `string[]` | Array ordenado con los IDs de los productos más vendidos (de mayor a menor venta) |

## Ejemplos

### cURL — Ranking Global

```bash
curl -X 'GET' \
  'https://catalog.api.fashionai.dev/api/v1/products/protected/sales-ranking' \
  -H 'accept: application/json' \
  -H 'X-FashionAI-APP-Token: YOUR_TOKEN_HERE'
```

### cURL — Ranking por Categoría

```bash
curl -X 'GET' \
  'https://catalog.api.fashionai.dev/api/v1/products/protected/sales-ranking?categoryId=2020602' \
  -H 'accept: application/json' \
  -H 'X-FashionAI-APP-Token: YOUR_TOKEN_HERE'
```

## Códigos de Estado HTTP

| Código | Descripción |
|--------|-----------|
| `200` | Éxito. Devuelve el ranking de más vendidos |
| `401` | No autorizado. Token inválido o expirado |
| `403` | Prohibido. Permisos insuficientes |
| `500` | Error interno del servidor |

## Notas Importantes

- El array `products` está ordenado de mayor a menor venta
- Este es un endpoint protegido y requiere autenticación mediante `X-FashionAI-APP-Token`
