---
sidebar_position: 4
---

# Integración Frontend

Esta guía completa describe cómo implementar componentes de interfaz de usuario para funciones de Fashion.AI en tu aplicación frontend.

## Referencia Visual

Sugerencias visuales para el componente "compra el look" están disponibles en nuestro diseño de ejemplo en Figma.

## Componentes de Interfaz

### Botón "Compra el Look"

- Posicionado sobre la imagen principal del producto
- Mostrado solo cuando las recomendaciones están disponibles
- Activa la apertura del modal/cajón de productos relacionados

### Modal de Productos Relacionados

El modal debe mostrar:

- **Productos devueltos por la API** con botón "Lo quiero" para agregar al carrito
- **Información del producto**: nombre, precio, tallas disponibles
- **Validación de stock local** antes del renderizado
- **Botón para cerrar el modal**

### Comportamiento

1. **Mostrar botón**: Solo mostrar si hay productos recomendados con stock válido
2. **Apertura del modal**: Al hacer clic en el botón "compra el look"
3. **Agregar al carrito**: A través del botón "Lo quiero" para cada producto
4. **Cerrar**: Botón X o clic fuera del modal

## Validaciones Importantes

- ✅ Verificar stock localmente antes del renderizado
- ✅ Validar si hay productos devueltos por la API
- ✅ Implementar estados de carga durante llamadas de API
- ✅ Manejar errores de conectividad o API no disponible

## Ejemplo de Implementación

```javascript
// Pseudo-código para apertura del modal
function openShopTheLookModal(productId) {
  // 1. Hacer llamada a la API
  const recommendations = await fetchShopTheLook(productId);

  // 2. Validar stock localmente
  const validProducts = recommendations.filter(product =>
    hasStock(product.id)
  );

  // 3. Abrir modal solo si hay productos válidos
  if (validProducts.length > 0) {
    renderModal(validProducts);
  }
}
```