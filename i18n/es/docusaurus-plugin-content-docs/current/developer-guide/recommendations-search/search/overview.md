# Visión General de Búsqueda de Productos

Integra la API de Búsqueda de Productos para entregar resultados inteligentes y relevantes de tu catálogo. Esta guía proporciona una visión general completa de la funcionalidad de búsqueda y los endpoints disponibles.

## Introducción

La API de Búsqueda proporciona capacidades inteligentes de búsqueda de productos para tu catálogo. Procesa consultas de búsqueda y retorna coincidencias relevantes de productos con soporte de paginación.

## Características Principales

- **Búsqueda de Productos**: Encuentra productos por nombre, categoría o atributos
- **Paginación**: Maneja grandes conjuntos de resultados eficientemente
- **Seguimiento de Sesión**: Rastrea el comportamiento de búsqueda del usuario
- **Soporte Multi-idioma**: Busca en diferentes idiomas
- **Resultados en Tiempo Real**: Tiempos de respuesta rápidos para mejor experiencia del usuario

## Endpoint
```
POST https://catalog.api.fashionai.dev/api/v1/products/protected/search?page={page}&limit={limit}&query={query}
```

## Inicio Rápido

1. **Obtén Tu Token**: Obtén tu token de API desde el panel
2. **Haz una Solicitud**: Envía una solicitud POST con tu consulta de búsqueda
3. **Procesa los Resultados**: Procesa los IDs de productos retornados
4. **Implementa Paginación**: Usa los parámetros page y limit para grandes conjuntos de datos

## Flujo de Solicitud
```mermaid
sequenceDiagram
    Cliente->>API: POST /search con consulta
    API->>Base de Datos: Buscar productos
    Base de Datos->>API: Retornar productos coincidentes
    API->>Cliente: Retornar IDs de productos + paginación
```

## Estructura de Respuesta

La API retorna una estructura de respuesta consistente:
```json
{
  "totalItems": 47,
  "totalPages": 5,
  "currentPage": 1,
  "items": ["147748", "149250", "148070"]
}
```

## Próximos Pasos

- [Autenticación](../../authentication) - Aprende cómo autenticar tus solicitudes
- [Ejemplos de Implementación](./examples) - Ve ejemplos de código en diferentes lenguajes