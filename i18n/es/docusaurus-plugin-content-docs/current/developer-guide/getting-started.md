---
sidebar_position: 1
---

# Primeros Pasos para Desarrolladores

Guía de inicio rápido para desarrolladores integrando FashionAI en sus aplicaciones.

## 🚀 Configuración Rápida (5 minutos)

### 1. Autenticación
Obtén tus credenciales de API y comienza a hacer solicitudes:
- Genera token de API en el panel
- Añade a los encabezados: `Authorization: Bearer TU_TOKEN`
- Prueba con llamada de API de ejemplo

[→ Guía Completa de Autenticación](./authentication)

### 2. APIs Principales
**API de Recomendaciones** - Sugerencias personalizadas de productos
```javascript
POST /api/recommendations
{
  "user_id": "user123",
  "context": "product_page",
  "product_id": "item456"
}
```

**API de Búsqueda** - Búsqueda inteligente de productos
```javascript
POST /api/search
{
  "query": "vestido rojo de verano",
  "filters": { "category": "vestidos" }
}
```

[→ Referencia Completa de API](./api-endpoints)

## 🛠️ Opciones de Integración

### Integración Frontend
Añade widgets de recomendación y búsqueda a tu UI:
- Componentes React/Vue/Angular
- Widgets JavaScript vanilla
- SDKs móviles

[→ Guía de Integración de UI](./ui-integration)

### Específico por Plataforma
Configuración rápida para plataformas de e-commerce populares:
- **Shopify** - Integración de app nativa
- **VTEX** - Componentes personalizados
- **Implementaciones personalizadas** - Ejemplos del mundo real

[→ Todas las Integraciones de Plataforma](./integrations/)

## 📊 Analytics y Seguimiento

### Google Analytics Enhanced Ecommerce
Rastrea el rendimiento de recomendaciones y comportamiento de búsqueda:
```javascript
// Rastrear clics en recomendaciones
gtag('event', 'recommendation_click', {
  'item_id': 'product123',
  'item_category': 'vestidos'
});
```

[→ Configuración de Analytics y Seguimiento](./analytics/)

## 🎯 Características Avanzadas

### Configuración de Búsqueda
- Búsqueda semántica con lenguaje natural
- Búsqueda por similitud visual
- Algoritmos de ranking personalizados

[→ Detalles de API de Búsqueda](./search/overview) | [→ Ejemplos de Búsqueda](./search/examples)

### Organización de Productos
- Auto-categorización con taxonomías
- Clasificación de estilo y tendencia
- Agrupación estacional de productos

[→ Guía de Taxonomías](./taxonomies)

### Ejemplos del Mundo Real
Patrones completos de integración y muestras de código:
- Implementaciones de tiendas e-commerce
- Integraciones de aplicaciones móviles
- Arquitectura de microservicios

[→ Ejemplos de Integración](./integrations/integration-examples)

## 🆘 ¿Necesitas Ayuda?

- **Problemas de API** → Revisa [Autenticación](./authentication)
- **Problemas de UI** → Ve [Integración de UI](./ui-integration)
- **Ayuda de Plataforma** → [Integraciones de Plataforma](./integrations/)
- **Configuración de Analytics** → [Analytics y Seguimiento](./analytics/)
- **Configuración Avanzada** → [Ejemplos de Integración](./integrations/integration-examples)

## 📋 Próximos Pasos

1. **[Configura autenticación](./authentication)** - Obtén tus credenciales de API
2. **[Prueba endpoints de API](./api-endpoints)** - Haz tus primeras llamadas
3. **[Añade a tu UI](./ui-integration)** - Integra componentes frontend
4. **[Configura analytics](./analytics/)** - Rastrea el rendimiento
5. **[Ve en vivo](./integrations/integration-examples)** - Despliegue de producción

---

**¿Listo para integrar?** Comienza con [Autenticación](./authentication) →