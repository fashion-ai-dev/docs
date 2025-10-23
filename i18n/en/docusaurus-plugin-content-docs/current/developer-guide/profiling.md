---
sidebar_position: 4
---

# Customer Profiling API

Technical reference for Fashion.AI's Customer Profiling API endpoints. This API analyzes customer purchase and navigation behavior to generate detailed, actionable profiles with AI-driven insights for marketing, sales, and CRM personalization.

## Overview

The Fashion AI Profiling service automatically generates comprehensive customer profiles by analyzing:

- Purchase history
- Navigation patterns
- Product preferences
- Behavioral insights

For a detailed explanation of use cases and profile structure, see the [User Guide: Profiling](../user-guide/profiling).

## Base Configuration

**Base URL:**
```
https://catalog.api.fashionaiale.com/api/v1/crm
```

**Required Headers:**
```http
Content-Type: application/json
X-FashionAI-APP-Token: <your_app_token>
```

> **Get your token:** https://app.generativecrm.com/settings?tab=app-tokens

**Authentication:** All endpoints use the same authentication method as other Fashion.AI APIs. See [API Authentication](./authentication) for details.

## API Endpoints

All endpoints return the same profile structure. Choose the endpoint based on the customer identifier you have available.

### Available Endpoints

| Endpoint | Parameter | Description |
|----------|-----------|-------------|
| `GET /protected/profile/user-profile-id/:userProfileId` | User Profile ID | Retrieve profile by Fashion AI identifier |
| `GET /protected/profile/phone/:phone` | Phone | Retrieve profile by phone number |
| `GET /protected/profile/email/:email` | Email | Retrieve profile by email address |
| `GET /protected/profile/document/:document` | Document | Retrieve profile by document (CPF, ID, etc.) |

### Basic Example

```bash
curl -X GET \
  'https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/email/customer@example.com' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: <your_app_token>'
```

### Code Examples

<details>
<summary><strong>JavaScript/Node.js</strong></summary>

```javascript
const getProfile = async (identifier, type = 'email') => {
  const response = await fetch(
    `https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/${type}/${identifier}`,
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

// Usage examples
const profileByEmail = await getProfile('customer@example.com', 'email');
const profileByPhone = await getProfile('5511999998888', 'phone');
const profileByDoc = await getProfile('12345678900', 'document');
```
</details>

<details>
<summary><strong>TypeScript</strong></summary>

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

async function getProfile(
  identifier: string,
  type: 'email' | 'phone' | 'document' | 'user-profile-id'
): Promise<CustomerProfile> {
  const response = await fetch(
    `https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/${type}/${identifier}`,
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

// Usage
const profile = await getProfile('customer@example.com', 'email');

if (profile.profile.momento_compra_atual.novo_comportamento) {
  console.log('New behavior detected!');
  console.log('Opportunities:', profile.profile.momento_compra_atual.oportunidades);
}
```
</details>

<details>
<summary><strong>Python</strong></summary>

```python
import requests
import os

def get_profile(identifier, profile_type='email'):
    """
    Retrieve customer profile by identifier.

    Args:
        identifier: The customer identifier (email, phone, document, or userProfileId)
        profile_type: Type of identifier ('email', 'phone', 'document', 'user-profile-id')
    """
    url = f"https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/{profile_type}/{identifier}"
    headers = {
        "Content-Type": "application/json",
        "X-FashionAI-APP-Token": os.getenv("FASHION_AI_TOKEN")
    }

    response = requests.get(url, headers=headers)
    response.raise_for_status()

    return response.json()

# Usage examples
profile = get_profile("customer@example.com", "email")
profile = get_profile("5511999998888", "phone")
profile = get_profile("12345678900", "document")

# Access profile data
marketing_brief = profile["profile"]["briefing_marketing"]
print(f"Tone of voice: {marketing_brief['tom_de_voz']}")
```
</details>

### Example Response

All endpoints return the same structure:

```json
{
  "userProfileId": "ddsd23223",
  "profile": {
    "perfil_cliente": {
      "descricao_geral": "Homem de 30-40 anos, profissional que valoriza qualidade e atemporalidade",
      "estilo_geral": "Casual-elegante minimalista, tons neutros, cortes regulares"
    },
    "ocasioes_relevantes": [
      {
        "ocasião": "Trabalho business casual",
        "persona_na_ocasião": "Profissional confiante e alinhado",
        "sugestao_look": [
          "Camisa manga longa",
          "Chino escura",
          "Sapato casual"
        ]
      }
    ],
    "briefing_marketing": {
      "tom_de_voz": ["inspiracional", "autêntico", "sofisticado"],
      "direcao_visual": ["Paleta neutra", "Cenários urbanos", "Luz natural"],
      "orientacao_campanhas": [
        "Versatilidade",
        "Qualidade premium",
        "Lifestyle urbano"
      ]
    },
    "ganchos_conteudo": [
      "Guarda-roupa cápsula masculino",
      "Básicos premium que valem o investimento"
    ],
    "momento_compra_atual": {
      "navegacoes": ["01/09: visualizou Short Azul Claro"],
      "resumo_momento": "Explorando peças de verão e lazer",
      "relacao_com_historico": "Expande perfil para momentos de descontração",
      "novo_comportamento": true,
      "oportunidades": [
        "Curadoria looks verão",
        "Bundle viagem"
      ]
    }
  }
}
```

## Response Structure

All endpoints return the same structure:

| Field | Type | Description |
|-------|------|-------------|
| `userProfileId` | string | Unique customer identifier |
| `profile` | object | Complete customer profile (details below) |

### Profile Fields

| Field | Type | Description |
|-------|------|-------------|
| `perfil_cliente` | object | General customer description and style preferences |
| `perfil_cliente.descricao_geral` | string | Customer lifestyle, values, and interests |
| `perfil_cliente.estilo_geral` | string | Fashion style, color preferences, cuts, and aesthetics |
| `ocasioes_relevantes` | array | List of relevant occasions with outfit suggestions |
| `ocasioes_relevantes[].ocasião` | string | Occasion name (work, party, casual, etc.) |
| `ocasioes_relevantes[].persona_na_ocasião` | string | How customer presents themselves on this occasion |
| `ocasioes_relevantes[].sugestao_look` | array | Complete outfit suggestion (list of items) |
| `briefing_marketing` | object | Marketing guidance for campaigns |
| `briefing_marketing.tom_de_voz` | array | Communication tone recommendations |
| `briefing_marketing.direcao_visual` | array | Visual direction for campaigns |
| `briefing_marketing.orientacao_campanhas` | array | Campaign positioning strategies |
| `ganchos_conteudo` | array | Content themes that resonate with the customer |
| `momento_compra_atual` | object | Current purchase moment analysis |
| `momento_compra_atual.navegacoes` | array | Recent browsing/navigation patterns |
| `momento_compra_atual.resumo_momento` | string | Behavioral interpretation of current moment |
| `momento_compra_atual.relacao_com_historico` | string | How current behavior relates to purchase history |
| `momento_compra_atual.novo_comportamento` | boolean | Whether customer is showing new/different behavior |
| `momento_compra_atual.oportunidades` | array | Recommended actions based on current moment |

## Error Handling

| Status Code | Description | Solution |
|-------------|-------------|----------|
| `200` | Success | Profile returned successfully |
| `401` | Unauthorized | Verify your APP token is correct |
| `404` | Not Found | Profile doesn't exist for the provided identifier |
| `429` | Too Many Requests | Implement rate limiting in your application |
| `500` | Internal Server Error | Contact support |

## Security & CORS

> **Important:** Direct browser requests are blocked to protect your authentication token.

The `X-FashionAI-APP-Token` must not be exposed in frontend code. If you attempt to call the API directly from the browser, you'll receive a CORS error.

**Recommended:** Make all API calls from your backend server.

**Need frontend access?** Contact support to request domain authorization:
:mailbox: **support@generativecrm.com**

## Use Cases

**Personalized Marketing**
Segment customers by `briefing_marketing.tom_de_voz` and create targeted campaigns with appropriate tone and visual direction.

**Product Recommendations**
Use `ocasioes_relevantes` to suggest complete outfit combinations based on customer lifestyle.

**Content Creation**
Leverage `ganchos_conteudo` to create blog posts, social media, and newsletters that resonate with your audience.

**Behavior Change Detection**
Monitor `momento_compra_atual.novo_comportamento` to identify customers exploring new styles and offer proactive consultations.

**Sales Enablement**
Provide sales teams with `perfil_cliente` data before VIP consultations for personalized service.

---

## Support

For technical or commercial questions:
:mailbox: **support@generativecrm.com**

---

## Related Documentation

- [Authentication Guide](./authentication) - Setup and authentication details
- [User Guide: Profiling](../user-guide/profiling) - Use cases and profile structure
- [Getting Started](./getting-started) - Initial integration guide
