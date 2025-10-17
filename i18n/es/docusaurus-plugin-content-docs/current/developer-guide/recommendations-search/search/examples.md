# Guía de Implementación de Búsqueda

Ejemplos de implementación paso a paso para la API de Búsqueda de Productos usando JavaScript y React.

## Función Básica de Búsqueda
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
      throw new Error(`Solicitud de API falló con estado ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al buscar productos:", error);
    return [];
  }
}

// Uso
const results = await searchProducts(
  1,           // página
  10,          // límite
  "camisas negras", // consulta
  "tu_token_aquí", // token
  "user123",   // userId (opcional)
  "sess456"    // sessionId
);

console.log(`Encontrados ${results.totalItems} productos`);
```

## Próximos Pasos

- [Autenticación](../../authentication) - Referencia rápida de autenticación
- [Visión General](./overview) - Visión general de la API de Búsqueda