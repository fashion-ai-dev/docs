---
sidebar_position: 2
---

# Resumen de Recomendaciones

Aprende sobre el sistema inteligente de recomendaciones de Fashion.AI y cómo mejora la experiencia del cliente a través de sugerencias de productos personalizadas impulsadas por IA avanzada.

## Tipos de Recomendación

### 🎯 Productos Similares
Entrega sugerencias de productos personalizadas basadas en el historial de navegación del usuario. Impulsado por más de 4,500 atributos de productos, esta API ayuda a aumentar la conversión mostrando artículos que coinciden con el estilo e intención del comprador.

**Casos de Uso:**
- Recomendaciones en página de producto
- Mejora de navegación por categorías
- Oportunidades de venta cruzada

[Aprende más sobre Productos Similares →](./api-endpoints#category-view-event)

### 👗 Compra el Look
Identifica automáticamente y recomienda productos adicionales destacados en la misma imagen. Convierte cada look en un conjunto completo—tal como lo haría un estilista personal.

**Casos de Uso:**
- Sugerencias de conjuntos completos
- Inspiración de estilo
- Venta adicional de artículos complementarios

[Aprende más sobre Compra el Look →](./api-endpoints#shop-the-look-event)

### 📋 Visual Merchandising
Reorganiza las listas de productos dinámicamente basado en lo que el usuario realmente está buscando. Crea displays de categoría personalizados y de alto rendimiento que se sienten como una tienda personalizada.

**Casos de Uso:**
- Organización dinámica de categorías
- Diseños personalizados de página de inicio
- Destacado de tendencias estacionales

[Aprende más sobre Visual Merchandising →](./api-endpoints#category-view-event)

## Cómo Funciona Nuestra IA

### Proceso de Mapeo de Intención

1. **Navegación de Productos**: Rastrea productos que los usuarios han navegado durante la sesión
2. **Elementos de Categoría**: Analiza elementos visuales como siluetas, patrones y detalles de estilo
3. **Insights de Patrones**: Identifica texturas, telas y elementos estructurales
4. **Intención de Estilo**: Entiende la ocasión, preferencias de estilo y necesidades de versatilidad
5. **Comportamiento del Usuario**: Cruza referencias de búsquedas, productos y compras pasadas para usuarios con sesión iniciada
6. **Predicción de Intención**: Relaciona productos de diferentes categorías basado en el mapeo de estilo

### Ejemplo: Análisis de Navegación de Vestidos

Cuando un usuario navega vestidos, nuestra IA identifica:

**Elementos de Categoría:**
- Silueta de escote en V
- Tirantes finos
- Cintura definida
- Falda en A o acuñada

**Insights de Patrones:**
- Plisado vertical
- Texturas botánicas o minimalistas
- Telas ligeras y aireadas
- Sastrería estructurada sutil

**Intención de Estilo:**
- Femenino pero contemporáneo
- Sugiere confianza, delicadeza y movimiento
- Versatilidad día-noche
- Ideal para ocasiones sociales primavera/verano

## Próximos Pasos

🚀 **¿Listo para implementar recomendaciones?** Elige tu ruta de integración:

- **[Referencia de API](./api-endpoints)** - Guía de implementación técnica
- **[Autenticación](./authentication)** - Configura tu acceso a la API
- **[Integración de UI](./ui-integration)** - Ejemplos de implementación frontend
- **[API de Búsqueda](./search/overview)** - Búsqueda inteligente de productos
- **[Configuración de Analytics](./google-analytics)** - Rastrea el rendimiento