# Search API Implementation Guide

Step-by-step implementation examples for the Product Search API using JavaScript and React.

## Basic Search Function

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
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

// Usage
const results = await searchProducts(
  1,           // page
  10,          // limit
  "black shirts", // query
  "your_token_here", // token
  "user123",   // userId (optional)
  "sess456"    // sessionId
);

console.log(`Found ${results.totalItems} products`);
```

## Next Steps

- [Authentication](./authentication) - Quick auth reference
- [Overview](./overview) - Search API overview
