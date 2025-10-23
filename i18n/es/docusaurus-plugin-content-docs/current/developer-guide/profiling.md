---
sidebar_position: 4
---

# API de Perfilado de Clientes

Referencia técnica para los endpoints de la API de Perfilado de Clientes de Fashion.AI. Esta API analiza el comportamiento de compra y navegación del cliente para generar perfiles detallados y accionables con insights impulsados por IA para personalización de marketing, ventas y CRM.

## Visión General

El servicio Fashion AI Profiling genera automáticamente perfiles completos de clientes analizando:

- Historial de compras
- Patrones de navegación
- Preferencias de productos
- Insights conductuales

Para una explicación detallada de casos de uso y estructura de perfiles, consulta la [Guía de Usuario: Perfilado](../user-guide/profiling).

## Configuración Base

### Endpoint Base
```
https://catalog.api.fashionaiale.com/api/v1/crm
```

### Headers Requeridos
```json
{
  "Content-Type": "application/json",
  "X-FashionAI-APP-Token": "<your_app_token>"
}
```

> Genera tu token en: https://app.generativecrm.com/settings?tab=app-tokens

## Autenticación

Todos los endpoints de perfilado usan el mismo método de autenticación que las otras APIs de Fashion.AI. Para instrucciones detalladas de autenticación, consulta [Autenticación de API](./authentication).

## Endpoints de la API

### 1. Obtener Perfil por User Profile ID

Recupera un perfil de cliente usando su identificador único de perfil de usuario.

**Endpoint:**
```
GET /protected/profile/user-profile-id/:userProfileId
```

**Parámetros:**

| Parámetro | Tipo | Ubicación | Requerido | Descripción |
|-----------|------|-----------|-----------|-------------|
| `userProfileId` | string | path | Sí | Identificador único del perfil de usuario |

**Ejemplo de Solicitud:**

```bash
curl -X GET \
  'https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/user-profile-id/ddsd23223' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: <your_app_token>'
```

**Ejemplo de Respuesta:**

```json
{
  "userProfileId": "ddsd23223",
  "profile": {
    "perfil_cliente": {
      "descricao_geral": "Hombre de 30-40 años, profesional que valora calidad y atemporalidad",
      "estilo_geral": "Casual-elegante minimalista, tonos neutros, cortes regulares"
    },
    "ocasioes_relevantes": [
      {
        "ocasião": "Trabajo business casual",
        "persona_na_ocasião": "Profesional confiado y alineado",
        "sugestao_look": [
          "Camisa manga larga",
          "Chino oscuro",
          "Zapato casual"
        ]
      }
    ],
    "briefing_marketing": {
      "tom_de_voz": ["inspiracional", "auténtico", "sofisticado"],
      "direcao_visual": ["Paleta neutra", "Escenarios urbanos", "Luz natural"],
      "orientacao_campanhas": [
        "Versatilidad",
        "Calidad premium",
        "Lifestyle urbano"
      ]
    },
    "ganchos_conteudo": [
      "Guardarropa cápsula masculino",
      "Básicos premium que valen la inversión"
    ],
    "momento_compra_atual": {
      "navegacoes": ["01/09: visualizó Short Azul Claro"],
      "resumo_momento": "Explorando piezas de verano y ocio",
      "relacao_com_historico": "Expande perfil para momentos de descontracción",
      "novo_comportamento": true,
      "oportunidades": [
        "Curaduría looks verano",
        "Bundle viaje"
      ]
    }
  }
}
```

---

### 2. Obtener Perfil por Teléfono

Recupera un perfil de cliente usando su número de teléfono.

**Endpoint:**
```
GET /protected/profile/phone/:phone
```

**Parámetros:**

| Parámetro | Tipo | Ubicación | Requerido | Descripción |
|-----------|------|-----------|-----------|-------------|
| `phone` | string | path | Sí | Número de teléfono del cliente |

**Ejemplo de Solicitud:**

```bash
curl -X GET \
  'https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/phone/5511999998888' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: <your_app_token>'
```

**Ejemplo en JavaScript:**

```javascript
const getProfileByPhone = async (phone) => {
  const response = await fetch(
    `https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/phone/${phone}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-FashionAI-APP-Token': process.env.FASHION_AI_TOKEN
      }
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};

// Uso
const profile = await getProfileByPhone('5511999998888');
console.log(profile.profile.briefing_marketing.tom_de_voz);
```

---

### 3. Obtener Perfil por Email

Recupera un perfil de cliente usando su dirección de correo electrónico.

**Endpoint:**
```
GET /protected/profile/email/:email
```

**Parámetros:**

| Parámetro | Tipo | Ubicación | Requerido | Descripción |
|-----------|------|-----------|-----------|-------------|
| `email` | string | path | Sí | Dirección de correo electrónico del cliente |

**Ejemplo de Solicitud:**

```bash
curl -X GET \
  'https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/email/customer@example.com' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: <your_app_token>'
```

**Ejemplo en Python:**

```python
import requests
import os

def get_profile_by_email(email):
    url = f"https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/email/{email}"
    headers = {
        "Content-Type": "application/json",
        "X-FashionAI-APP-Token": os.getenv("FASHION_AI_TOKEN")
    }

    response = requests.get(url, headers=headers)
    response.raise_for_status()

    return response.json()

# Uso
profile = get_profile_by_email("customer@example.com")

# Acceder a secciones específicas del perfil
marketing_brief = profile["profile"]["briefing_marketing"]
current_moment = profile["profile"]["momento_compra_atual"]

print(f"Tono de voz: {marketing_brief['tom_de_voz']}")
print(f"Oportunidades: {current_moment['oportunidades']}")
```

---

### 4. Obtener Perfil por Documento

Recupera un perfil de cliente usando su número de documento (CPF, ID, etc.).

**Endpoint:**
```
GET /protected/profile/document/:document
```

**Parámetros:**

| Parámetro | Tipo | Ubicación | Requerido | Descripción |
|-----------|------|-----------|-----------|-------------|
| `document` | string | path | Sí | Número de documento del cliente |

**Ejemplo de Solicitud:**

```bash
curl -X GET \
  'https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/document/12345678900' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: <your_app_token>'
```

**Ejemplo en Node.js/TypeScript:**

```typescript
interface CustomerProfile {
  userProfileId: string;
  profile: {
    perfil_cliente: {
      descricao_geral: string;
      estilo_geral: string;
    };
    ocasioes_relevantes: Array<{
      ocasião: string;
      persona_na_ocasião: string;
      sugestao_look: string[];
    }>;
    briefing_marketing: {
      tom_de_voz: string[];
      direcao_visual: string[];
      orientacao_campanhas: string[];
    };
    ganchos_conteudo: string[];
    momento_compra_atual: {
      navegacoes: string[];
      resumo_momento: string;
      relacao_com_historico: string;
      novo_comportamento: boolean;
      oportunidades: string[];
    };
  };
}

async function getProfileByDocument(document: string): Promise<CustomerProfile> {
  const response = await fetch(
    `https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/document/${document}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-FashionAI-APP-Token': process.env.FASHION_AI_TOKEN!
      }
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch profile: ${response.statusText}`);
  }

  return await response.json();
}

// Uso
const profile = await getProfileByDocument('12345678900');

// Acceso type-safe a los datos del perfil
const { briefing_marketing, momento_compra_atual } = profile.profile;

if (momento_compra_atual.novo_comportamento) {
  console.log('¡El cliente está mostrando un nuevo comportamiento!');
  console.log('Oportunidades:', momento_compra_atual.oportunidades);
}
```

---

## Estructura de Respuesta

Todos los endpoints devuelven la misma estructura de perfil:

### Objeto Profile

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `userProfileId` | string | Identificador único del cliente |
| `profile` | object | Perfil completo del cliente |

### Detalles del Perfil

#### perfil_cliente
Descripción general del cliente y preferencias de estilo.

```json
{
  "descricao_geral": "Estilo de vida, valores e intereses del cliente",
  "estilo_geral": "Estilo de moda, preferencias de color, cortes y estéticas"
}
```

#### ocasioes_relevantes
Array de ocasiones relevantes con sugerencias de outfits.

```json
[
  {
    "ocasião": "Nombre de la ocasión (trabajo, fiesta, casual, etc.)",
    "persona_na_ocasião": "Cómo se presenta el cliente",
    "sugestao_look": ["Item 1", "Item 2", "Item 3"]
  }
]
```

#### briefing_marketing
Orientación de marketing para campañas.

```json
{
  "tom_de_voz": ["tono1", "tono2"],
  "direcao_visual": ["visual1", "visual2"],
  "orientacao_campanhas": ["estrategia1", "estrategia2"]
}
```

#### ganchos_conteudo
Temas de contenido que resuenan con el cliente.

```json
["tema1", "tema2", "tema3"]
```

#### momento_compra_atual
Análisis del momento de compra actual.

```json
{
  "navegacoes": ["Patrones de navegación recientes"],
  "resumo_momento": "Interpretación conductual",
  "relacao_com_historico": "Cómo se conecta con el historial de compras",
  "novo_comportamento": true,
  "oportunidades": ["Acción recomendada 1", "Acción recomendada 2"]
}
```

---

## Manejo de Errores

### Códigos de Estado HTTP Comunes

| Código de Estado | Descripción | Solución |
|------------------|-------------|----------|
| `200` | Éxito | Perfil devuelto exitosamente |
| `401` | No autorizado | Verifica tu token APP |
| `404` | No encontrado | El perfil no existe para el identificador proporcionado |
| `429` | Demasiadas solicitudes | Implementa limitación de tasa en tu aplicación |
| `500` | Error interno del servidor | Contacta soporte |

---

## Seguridad y CORS

Para proteger el token de autenticación (X-FashionAI-APP-Token), las solicitudes directas desde el navegador están bloqueadas. Si se realiza una llamada a la API directamente desde el frontend, el navegador bloqueará esta solicitud con un error CORS.

Esta medida evita que el token quede expuesto en el código fuente del sitio web, lo que podría comprometer la seguridad de la API y permitir el uso no autorizado.

**Enfoque recomendado**: Realiza todas las llamadas a la API de perfilado desde tu servidor backend.

Si tu equipo necesita realizar llamadas directamente desde el frontend, contacta al soporte técnico de FashionAI para solicitar autorización de dominio: :mailbox: **support@generativecrm.com**

---

## Casos de Uso

### 1. Campañas de Marketing Personalizadas

Segmenta clientes por `briefing_marketing.tom_de_voz` y crea campañas de email dirigidas con tono de voz y dirección visual apropiados.

### 2. Recomendaciones de Productos

Usa `ocasioes_relevantes` para sugerir combinaciones completas de outfits basadas en el estilo de vida del cliente.

### 3. Creación de Contenido

Aprovecha `ganchos_conteudo` para crear posts de blog, contenido de redes sociales y newsletters que resuenen con tu audiencia.

### 4. Detección de Cambio de Comportamiento

Monitorea `momento_compra_atual.novo_comportamento` para identificar clientes explorando nuevos estilos y ofrecer proactivamente consultas de styling.

### 5. Habilitación del Equipo de Ventas

Proporciona a los representantes de ventas el `perfil_cliente` antes de consultas VIP para ofrecer servicio personalizado.

---

## Soporte

Para preguntas técnicas o consultas comerciales, contacta al equipo de Fashion AI:

:mailbox: **support@generativecrm.com**

---

## Próximos Pasos

- [Guía de Autenticación](./authentication) - Instrucciones detalladas de autenticación
- [Guía de Usuario: Perfilado](../user-guide/profiling) - Comprende la estructura del perfil y casos de uso
- [Comenzando](./getting-started) - Guía de configuración inicial e integración