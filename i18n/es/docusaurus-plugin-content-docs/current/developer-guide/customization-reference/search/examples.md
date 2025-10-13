# Guía de Implementación de Búsqueda

Ejemplos de implementación paso a paso para la API de Búsqueda de Productos usando JavaScript y React.

## Función de Búsqueda Básica

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
      throw new Error(`La solicitud a la API falló con estado ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return [];
  }
}

// Uso
const results = await searchProducts(
  1,           // página
  10,          // límite
  "camisas negras", // consulta
  "tu_token_aquí", // token
  "usuario123",   // userId (opcional)
  "sess456"    // sessionId
);

console.log(`Se encontraron ${results.totalItems} productos`);
```

## Próximos Pasos

- [Autenticación](../authentication) - Referencia rápida de autenticación
- [Descripción General](./overview) - Descripción general de la API de Búsqueda

