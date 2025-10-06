# Busca Detalhada de Produtos

## 📄 Documentação para Usuários

### O que faz?

Permite realizar buscas avançadas de produtos usando linguagem natural. O sistema entende descrições como "vestido azul para casamento" ou "tênis confortável para corrida" e retorna produtos relevantes.

### Como usar?

**Endpoint:** `POST /v1/products/protected/search/detailed`

#### Parâmetros

**Query (URL):**
- `query` - Texto de busca (exemplo: "blusa branca manga longa")

**Body (JSON):**
- `sessionId` - Identificador único da sessão de busca
- `userId` - (Opcional) Identificador do usuário

#### Exemplo de requisição

```http
POST /v1/products/protected/search/detailed?query=blusa branca manga longa
```

**Body:**
```json
{
  "sessionId": "abc123xyz",
  "userId": "user456"
}
```

#### Resposta

```json
{
  "products": [
    {
      "productId": "12345",
      "name": "Blusa Branca Manga Longa",
      "images": ["https://example.com/image1.jpg"],
      "price": 199.90,
      "salePrice": 149.90,
      "link": "https://loja.com/blusa-branca"
    }
  ]
}
```
