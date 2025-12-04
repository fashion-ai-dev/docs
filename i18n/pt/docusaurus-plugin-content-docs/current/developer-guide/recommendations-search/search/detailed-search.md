# Busca Detalhada de Produtos

### Busca Detalhada - Whatsapp

#### Visão Geral

Endpoint para busca semântica detalhada de produtos no whatsapp com rastreamento de sessão e usuário. Este endpoint utiliza um motor de busca avançado para encontrar produtos relevantes e retorna no máximo 5 produtos ordenados por relevância.

#### Detalhes Técnicos

- **Rota:** `POST /v1/products/protected/search/detailed`
- **Autenticação:** Requer autenticação via token

#### Requisição

**Parâmetros de Query:**
- `query` (string, obrigatório) - Termo de busca para encontrar produtos
- `size` (string, opcional) - Tamanho/numeração do produto para filtrar os resultados (ex: "42", "M", "GG"). A comparação é case-insensitive

**Corpo da Requisição:**
```typescript
{
  sessionId: string;         // Obrigatório - ID único para rastreamento da sessão de busca
  userId?: string | null;    // Opcional - Identificador do usuário (pode ser omitido para buscas anônimas)
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
    productId: string;    // ID único do produto
    sku: string;          // SKU (Stock Keeping Unit) do produto
    name: string;         // Nome do produto
    images: string[];     // URLs das imagens do produto (até 2 imagens)
    price: number;        // Preço original do produto
    salePrice: number;    // Preço promocional/venda do produto
    size?: string;        // Tamanho/numeração do produto (quando disponível)
    link?: string;        // URL completa do produto na loja (quando disponível)
  }>
}
```

**Observações sobre a resposta:**
- Retorna no máximo 5 produtos ordenados por relevância
- Apenas produtos em estoque, ativos são retornados, no entando, recomenda-se verificação de estoque na implementação também.
- Em caso de erro, retorna um array vazio: `{ products: [] }`
- Se o parâmetro `size` for informado, apenas produtos com o tamanho correspondente serão retornados

#### Exemplos de Uso

**Exemplo 1: Busca simples sem filtro de tamanho**
```bash
curl -X POST 'https://catalog.api.fashionai.dev/v1/products/protected/search/detailed?query=vestido+azul' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: seu-token-aqui' \
  -d '{
    "sessionId": "session-123",
    "userId": "user-456"
  }'
```

**Exemplo 2: Busca com filtro de tamanho específico**
```bash
curl -X POST 'https://catalog.api.fashionai.dev/v1/products/protected/search/detailed?query=camisas+preta&size=42' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: seu-token-aqui' \
  -d '{
    "sessionId": "session-789",
    "userId": "user-456"
  }'
```

**Exemplo 3: Busca anônima (sem userId)**
```bash
curl -X POST 'https://catalog.api.fashionai.dev/v1/products/protected/search/detailed?query=tênis+corrida' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: seu-token-aqui' \
  -d '{
    "sessionId": "anonymous-session-001"
  }'
```

**Exemplo de Resposta:**
```json
{
  "products": [
    {
      "productId": "PROD-12345",
      "sku": "CAM-PRETA-42",
      "name": "Camisa Preta Slim Fit",
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
      "name": "Camisa Cinza Executiva",
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

### Dúvidas, mande um e-mail para nosso suporte :mailbox: **support@generativecrm.com**