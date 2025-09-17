# Guía de Autenticación

Aprende cómo autenticar tus solicitudes a todas las APIs de Fashion.AI usando tokens de aplicación.

## Resumen

Todas las APIs de FashionAI (Búsqueda, Personalización, Analytics) usan el mismo método de autenticación con tokens de aplicación. Este enfoque unificado simplifica la integración y te permite usar un solo token en todos los servicios.

## Método de Autenticación

Todas las APIs usan **Autenticación con Bearer Token** a través de encabezados personalizados.

### Encabezados Requeridos

| Encabezado | Requerido | Descripción |
|------------|-----------|-------------|
| `Content-Type` | Sí | Debe ser `application/json` |
| `X-FashionAI-APP-Token` | Sí | Tu token de aplicación |

## Obteniendo tu Token

### Paso 1: Acceder al Dashboard

1. Inicia sesión en tu [Dashboard FashionAI](https://dashboard.fashionaiale.com)
2. Navega a **Configuración de API** en la barra lateral
3. Haz clic en la sección **Tokens de API**

### Paso 2: Generar Token

1. Haz clic en **"Generar Nuevo Token"**
2. Ingresa un nombre descriptivo (ej.: "Token de API de Producción")
4. Haz clic en **"Crear Token"**

![Generación de Token de App](/img/app-token.png)

### Paso 3: Copiar Token

```bash
# Tu token se verá así:
X-FashionAI-APP-Token: fai_live_sk_1234567890abcdef...
```

⚠️ **Importante**: Copia y almacena tu token inmediatamente. No se mostrará nuevamente por razones de seguridad.

### Problemas Comunes

1. **Nombre de Encabezado Incorrecto**
   ```javascript
   // ❌ Incorrecto
   headers: { 'Authorization': 'Bearer ' + token }

   // ✅ Correcto
   headers: { 'X-FashionAI-APP-Token': token }
   ```

## Próximos Pasos

Ahora que entiendes la autenticación, explora APIs específicas:

- [API de Búsqueda](./search/overview) - Funcionalidad de búsqueda de productos
- [Endpoints de API](./api-endpoints) - Referencia completa de endpoints
- [Integración de UI](./ui-integration) - Guías de integración de frontend