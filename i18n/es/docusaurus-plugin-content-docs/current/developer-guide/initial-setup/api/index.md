---
unlisted: true
---

# Integración API

Configura la integración API directa con FashionAI para tener control completo sobre tu implementación.

## Descripción General

La API de FashionAI proporciona endpoints RESTful para gestión de productos, búsqueda y recomendaciones. Esta guía te guía a través de la configuración inicial de la API.

## Requisitos Previos

- Credenciales API del [panel de FashionAI](https://app.generativecrm.com)
- Comprensión básica de APIs REST
- Datos de tu catálogo de productos listos para importar

## Pasos de Configuración

1. **Obtener Credenciales API**
   - Inicia sesión en tu panel de FashionAI
   - Navega a Configuración > API
   - Genera tu token API

2. **Autenticar Solicitudes**
   - Incluye tu token API en los headers de las solicitudes
   - Usa HTTPS para todas las llamadas API
   - Almacena las credenciales de forma segura

3. **Importar Productos**
   - Usa el endpoint de importación de productos
   - Sigue el esquema de productos
   - Valida los datos importados

4. **Probar Integración**
   - Realiza llamadas API de prueba
   - Verifica que los datos aparezcan correctamente
   - Prueba búsqueda y recomendaciones

## Documentación de la API

Para la referencia detallada de la API, consulta la sección [Referencia de Personalización](../..