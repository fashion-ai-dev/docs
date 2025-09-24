---
sidebar_position: 4
---

# Guía de Autenticación de API

Aprende a autenticar tus solicitudes a todas las APIs de Fashion.AI usando tokens de aplicación seguros.

## Resumen

Todas las APIs de FashionAI (Búsqueda, Personalización, Analíticas) usan el mismo método de autenticación con tokens de aplicación. Este enfoque unificado simplifica la integración y te permite usar un único token en todos los servicios.

## Método de Autenticación

Todas las APIs usan **Autenticación de tipo Bearer** (Bearer Token) a través de encabezados personalizados.

### Encabezados Requeridos

| Encabezado              | Requerido | Descripción                    |
| ----------------------- | --------- | ------------------------------ |
| `Content-Type`          | Sí        | Debe ser `application/json`    |
| `X-FashionAI-APP-Token` | Sí        | Tu token de aplicación         |

## Cómo Obtener Tu Token

### Paso 1: Accede al Panel de Control

1.  Inicia sesión en tu [Panel de FashionAI](https://app.generativecrm.com)
2.  Navega a **Configuración de API** en la barra lateral
3.  Haz clic en la sección **Tokens de API**

### Paso 2: Genera el Token

1.  Haz clic en **"Generar Nuevo Token"**
2.  Ingresa un nombre descriptivo (ej., "Token de API de Producción")
3.  Haz clic en **"Crear Token"**

![Generación de Token de Aplicación](/img/app-token.png)

### Paso 3: Copia el Token

```bash
# Tu token se verá así:
X-FashionAI-APP-Token: fai_live_sk_1234567890abcdef...