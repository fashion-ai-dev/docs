# Guia de Implementação de Busca

Exemplos passo a passo de implementação para a API de Busca de Produtos usando JavaScript e React.

## Função Básica de Busca
```javascript
async function searchProducts(page, limit, query, token, userId, sessionId) {
  const url = 'https://catalog.api.fashionaiale.com/api/v1/products/protected/search?page={page}&limit={limit}&query={query}';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-FashionAI-APP-Token': token
      },
      body: JSON.stringify({
        userId: userId || null,
        sessionId: sessionId,
      }),
    });

    if (!response.ok) {
      throw new Error(`Requisição de API falhou com status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return [];
  }
}

// Uso
const results = await searchProducts(
  1,           // página
  10,          // limite
  "camisas pretas", // consulta
  "seu_token_aqui", // token
  "user123",   // userId (opcional)
  "sess456"    // sessionId
);

console.log(`Encontrados ${results.totalItems} produtos`);
```

## Próximos Passos

- [Autenticação](../../authentication) - Referência rápida de autenticação
- [Visão Geral](./overview) - Visão geral da API de Busca