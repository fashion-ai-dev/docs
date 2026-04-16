---
sidebar_position: 7
---

# Produtos Similares

## Visão Geral

O endpoint `/api/v1/products/protected/similar` retorna uma lista de produtos similares com base em um ID de produto fornecido.

## Informações da Requisição

### Método HTTP
```
POST
```

### URL
```
https://catalog.api.fashionai.dev/api/v1/products/protected/similar
```

### Headers Obrigatórios

| Header | Valor | Descrição |
|--------|-------|-----------|
| `Content-Type` | `application/json` | Define o formato do corpo da requisição |
| `accept` | `application/json` | Define o formato esperado da resposta |
| `X-FashionAI-APP-Token` | `{token}` | Token de autenticação da aplicação |

### Parâmetros de Query

| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `limit` | `integer` | Não | Número máximo de produtos retornados. Mínimo: `1` |

## Corpo da Requisição

### Estrutura

```json
{
  "userId": "",
  "sessionId": "123",
  "data": {
    "id": "979935"
  }
}
```

### Parâmetros

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `userId` | `string \| null` | Não | Identificador do usuário (opcional) |
| `sessionId` | `string` | **Sim** | Identificador único da sessão |
| `data` | `SimilarData` | **Sim** | Objeto contendo os dados da requisição |

#### SimilarData

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `id` | `string` | **Sim** | ID do produto para o qual buscar produtos similares |

## Resposta

### Estrutura

```json
{
  "products": ["product_id_1", "product_id_2", "product_id_3"]
}
```

### Parâmetros

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `products` | `string[]` | Array contendo os IDs dos produtos similares |

## Exemplos

### cURL Request

```bash
curl -X 'POST' \
  'https://catalog.api.fashionai.dev/api/v1/products/protected/similar?limit=10' \
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

## Códigos de Status HTTP

| Código | Descrição |
|--------|-----------|
| `200` | Sucesso. Retorna a lista de produtos similares |
| `400` | Erro na validação da requisição (parâmetros inválidos ou faltando) |
| `401` | Não autorizado. Token inválido ou expirado |
| `404` | Produto não encontrado |
| `500` | Erro interno do servidor |

## Validações

- **sessionId**: Campo obrigatório, deve ser uma string não vazia
- **data.id**: Campo obrigatório, deve ser uma string não vazia representando um ID válido de produto
- **userId**: Opcional, pode ser null ou uma string
- **X-FashionAI-APP-Token**: Token obrigatório para autenticação

## Notas Importantes

- A resposta contém apenas os IDs dos produtos similares, não os dados completos dos produtos
