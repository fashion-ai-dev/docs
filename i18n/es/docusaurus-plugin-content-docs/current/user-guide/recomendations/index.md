# Recomendaciones Inteligentes

Aprende sobre el sistema inteligente de Fashion.AI y cómo mejora la experiencia del cliente a través de sugerencias de productos personalizadas impulsadas por IA avanzada.

## Tipos de Recomendaciones

### Productos Similares
Entrega sugerencias de productos personalizadas basadas en el historial de navegación del usuario. Impulsada por más de 4,500 atributos de productos, esta API ayuda a aumentar la conversión mostrando artículos que coinciden con el estilo e intención del comprador.

**Casos de Uso:**
- Recomendaciones en páginas de productos
- Mejora de navegación por categorías
- Oportunidades de venta cruzada

[Documentación técnica sobre Productos Similares →](../../developer-guide/recommendations-search/api-endpoints#evento-categoryview)

### Compra el Look
Identifica y recomienda automáticamente productos adicionales que aparecen en la misma imagen. Convierte cada look en un outfit completo—justo como lo haría un estilista personal.

**Casos de Uso:**
- Sugerencias de outfits completos
- Inspiración de estilo
- Upselling de artículos complementarios

[Documentación técnica sobre Compra el Look →](../../developer-guide/recommendations-search/api-endpoints#evento-shopthelook)

### Visual Merchandising
Reorganiza dinámicamente los listados de productos según lo que el usuario realmente está buscando. Crea exhibiciones de categorías personalizadas y de alto rendimiento que se sienten como una tienda personalizada.

**Casos de Uso:**
- Organización dinámica de categorías
- Diseños de página de inicio personalizados
- Destacado de tendencias estacionales

[Documentación técnica sobre Visual Merchandising →](../../developer-guide/recommendations-search/vm-builder)


## Personalice sus Recomendaciones

Puede controlar qué productos recomienda la IA aplicando filtros personalizados para cada tipo de recomendación: **Producto**, **Categoría** y **Comprar el Look**.

### Cómo acceder

1. En el menú lateral, acceda a **Personalización**
2. En la sección **Guía para la Implementación de la API**, haga clic en el botón **Filtros de recomendación**

![Página de Personalización con botón de filtros](/img/tela1-recommendationFilter.png)

3. Se abrirá el panel de configuración:

![Panel de configuración de recomendaciones](/img/tela2-recommendationFilter.png)

### Filtros disponibles

| Filtro | Qué hace |
|--------|----------|
| **Tallas descontinuadas** | Prioriza productos que ayudan a equilibrar la grilla de tallas de su stock |
| **Descuento** | Elija entre recomendar todos los productos, solo con descuento o solo a precio completo |
| **Rango de precios** | Defina un rango de precios para los productos recomendados — use un rango personalizado, filtre por encima de R$ 10 mil o incluya todos |
| **Stock bajo** | Excluye de las recomendaciones productos con stock por debajo del límite definido (al hacer clic en "Stock Bajo" aparecerá un campo para seleccionar el número que su empresa considere stock bajo - experiencia 100% personalizada) |

### Paso a paso

1. **Elija el tipo** — seleccione la pestaña **Producto**, **Categoría** o **Comprar el Look**
2. **Ajuste los filtros** — active o desactive cada filtro según su estrategia
3. **Guarde** — haga clic en **Guardar** para aplicar. Cada tipo se guarda por separado
4. **Repita** — si desea configuraciones diferentes para otro tipo, cambie de pestaña y repita el proceso

> 💡 **Consejo**: Puede usar filtros diferentes para cada tipo. Por ejemplo, priorizar tallas descontinuadas solo en recomendaciones de **Producto**, y filtrar por descuento solo en **Comprar el Look**.

> ⚠️ Para limpiar todos los filtros de un tipo, haga clic en **Limpiar**.

## Próximos Pasos

🚀 **¿Listo para implementar recomendaciones?** Elige tu ruta de integración:

- **[Referencia de API](../../developer-guide/recommendations-search/api-endpoints)** - Guía de implementación técnica
- **[Autenticación](../../developer-guide/authentication)** - Configura tu acceso API
- **[Integración de UI](../../developer-guide/recommendations-search/ui-integration)** - Ejemplos de implementación frontend
- **[API de Búsqueda](./search/)** - Búsqueda inteligente de productos
- **[Configuración de Analytics](../../developer-guide/analytics/google-analytics)** - Rastrea el rendimiento
