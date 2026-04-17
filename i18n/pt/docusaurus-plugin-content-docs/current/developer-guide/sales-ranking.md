---
sidebar_position: 8
---

# Mais Vendidos

## Visão Geral

O endpoint `/api/v1/products/protected/sales-ranking` retorna uma lista ranqueada dos produtos mais vendidos. Pode ser filtrado por categoria — sem `categoryId`, retorna o ranking geral de todas as categorias.

## Informações da Requisição

### Método HTTP
```
GET
```

### URL
```
https://catalog.api.fashionai.dev/api/v1/products/protected/sales-ranking
```

### Headers Obrigatórios

| Header | Valor | Descrição |
|--------|-------|-----------|
| `X-FashionAI-APP-Token` | `{token}` | Token de autenticação da aplicação |

### Parâmetros de Query

| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `categoryId` | `string` | Não | ID da categoria para filtrar o ranking. Se omitido, retorna o ranking geral |

## Resposta

### Estrutura

**Com categoria:**
```json
{
  "categoryId": "2020602",
  "products": ["49373", "12345", "67890"]
}
```

**Sem categoria (ranking geral):**
```json
{
  "categoryId": null,
  "products": ["101905", "40749", "8988"]
}
```

### Parâmetros

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `categoryId` | `string \| null` | ID da categoria usada no filtro, ou `null` para o ranking geral |
| `products` | `string[]` | Array ordenado com os IDs dos produtos mais vendidos (do mais vendido ao menos vendido) |

## Exemplos

### cURL — Ranking Geral

```bash
curl -X 'GET' \
  'https://catalog.api.fashionai.dev/api/v1/products/protected/sales-ranking' \
  -H 'accept: application/json' \
  -H 'X-FashionAI-APP-Token: YOUR_TOKEN_HERE'
```

### cURL — Ranking por Categoria

```bash
curl -X 'GET' \
  'https://catalog.api.fashionai.dev/api/v1/products/protected/sales-ranking?categoryId=2020602' \
  -H 'accept: application/json' \
  -H 'X-FashionAI-APP-Token: YOUR_TOKEN_HERE'
```

## Códigos de Status HTTP

| Código | Descrição |
|--------|-----------|
| `200` | Sucesso. Retorna o ranking de mais vendidos |
| `401` | Não autorizado. Token inválido ou expirado |
| `403` | Proibido. Permissões insuficientes |
| `500` | Erro interno do servidor |

## Notas Importantes

- O array `products` está ordenado do mais vendido para o menos vendido
- Este é um endpoint protegido e requer autenticação via `X-FashionAI-APP-Token`
