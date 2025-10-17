# Busca Detalhada de Produtos

### Busca Detalhada - Whatsapp

#### Visão Geral

Endpoint para busca semântica detalhada de produtos no whatsapp com rastreamento de sessão e usuário.

#### Detalhes Técnicos

- **Rota:** `POST /v1/products/protected/search/detailed`
- **Autenticação:** Requer autenticação via token

#### Requisição

**Parâmetros de Query:**
- `query` (string, obrigatório) - Termo de busca

**Corpo da Requisição:**
```typescript
{
  sessionId: string;  // Obrigatório - ID de rastreamento de sessão
  userId?: string;    // Opcional - Identificador do usuário
}
```

**Headers:**
```
Content-Type: application/json
X-FashionAI-APP-Token: {token}
```

[Como gerar meu token?](../../authentication)

#### Resposta

**Sucesso (200):**
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

#### Exemplo cURL
```bash
curl -X POST 'https://catalog.api.fashionaiale.com/v1/products/protected/search/detailed?query=vestido+azul' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: {token}' \
  -d '{
    "sessionId": "session-123",
    "userId": "user-456"
  }'
```

#### Observações

- `userId` é opcional para buscas anônimas
- Os resultados são filtrados pelo catálogo de produtos do cliente