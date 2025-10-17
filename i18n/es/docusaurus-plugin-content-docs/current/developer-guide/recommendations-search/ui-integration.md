---
sidebar_position: 4
---

# Integración de Frontend

Esta guía completa describe cómo implementar componentes de interfaz de usuario para las funciones de Fashion.AI en tu aplicación frontend.

## Referencia Visual

Las sugerencias visuales para el componente "shop the look" están disponibles en nuestro diseño de ejemplo de Figma.

## Componentes de Interfaz

### Botón "Shop The Look"

- Posicionado sobre la imagen principal del producto
- Se muestra solo cuando hay recomendaciones disponibles
- Activa la apertura del modal/cajón de productos relacionados

### Modal de Productos Relacionados

El modal debe mostrar:

- **Productos devueltos por la API** con botón "Lo quiero" para agregar al carrito
- **Información del producto**: nombre, precio, tallas disponibles
- **Validación de stock local** antes de renderizar
- **Botón de cerrar modal**

### Comportamiento

1. **Visualización del botón**: Solo mostrar si hay productos recomendados con stock válido
2. **Apertura del modal**: Al hacer clic en el botón "shop the look"
3. **Agregar al carrito**: A través del botón "Lo quiero" para cada producto
4. **Cierre**: Botón X o clic fuera del modal

## Validaciones Importantes

- ✅ Verificar stock localmente antes de renderizar
- ✅ Validar si hay productos devueltos por la API
- ✅ Implementar estados de carga durante las llamadas a la API
- ✅ Manejar errores de conectividad o API no disponible

## Ejemplo de Implementación

```javascript
// Pseudo-código para apertura de modal
function openShopTheLookModal(productId) {
  // 1. Realizar llamada a la API
  const recommendations = await fetchShopTheLook(productId);

  // 2. Validar stock localmente
  const validProducts = recommendations.filter(product =>
    hasStock(product.id)
  );

  // 3. Solo abrir modal si hay productos válidos
  if (validProducts.length > 0) {
    renderModal(validProducts);
  }
}
```
