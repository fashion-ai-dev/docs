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

### Base Endpoint
```
https://catalog.api.fashionaiale.com/api/v1/crm
```

### Required Headers
```json
{
  "Content-Type": "application/json",
  "X-FashionAI-APP-Token": "<your_app_token>"
}
```

> Generate your token at: https://app.generativecrm.com/settings?tab=app-tokens

## Authentication

All profiling endpoints use the same authentication method as other Fashion.AI APIs. For detailed authentication instructions, see [API Authentication](./authentication).

## API Endpoints

### 1. Get Profile by User Profile ID

Retrieves a customer profile using their unique user profile identifier.

**Endpoint:**
```
GET /protected/profile/user-profile-id/:userProfileId
```

**Parameters:**

| Parameter | Type | Location | Required | Description |
|-----------|------|----------|----------|-------------|
| `userProfileId` | string | path | Yes | Unique user profile identifier |

**Example Request:**

```bash
curl -X GET \
  'https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/user-profile-id/ddsd23223' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: <your_app_token>'
```

**Example Response:**

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

---

### 2. Get Profile by Phone

Retrieves a customer profile using their phone number.

**Endpoint:**
```
GET /protected/profile/phone/:phone
```

**Parameters:**

| Parameter | Type | Location | Required | Description |
|-----------|------|----------|----------|-------------|
| `phone` | string | path | Yes | Customer phone number |

**Example Request:**

```bash
curl -X GET \
  'https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/phone/5511999998888' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: <your_app_token>'
```

**JavaScript Example:**

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

// Usage
const profile = await getProfileByPhone('5511999998888');
console.log(profile.profile.briefing_marketing.tom_de_voz);
```

---

### 3. Get Profile by Email

Retrieves a customer profile using their email address.

**Endpoint:**
```
GET /protected/profile/email/:email
```

**Parameters:**

| Parameter | Type | Location | Required | Description |
|-----------|------|----------|----------|-------------|
| `email` | string | path | Yes | Customer email address |

**Example Request:**

```bash
curl -X GET \
  'https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/email/customer@example.com' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: <your_app_token>'
```

**Python Example:**

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

# Usage
profile = get_profile_by_email("customer@example.com")

# Access specific profile sections
marketing_brief = profile["profile"]["briefing_marketing"]
current_moment = profile["profile"]["momento_compra_atual"]

print(f"Voice tone: {marketing_brief['tom_de_voz']}")
print(f"Opportunities: {current_moment['oportunidades']}")
```

---

### 4. Get Profile by Document

Retrieves a customer profile using their document number (CPF, ID, etc.).

**Endpoint:**
```
GET /protected/profile/document/:document
```

**Parameters:**

| Parameter | Type | Location | Required | Description |
|-----------|------|----------|----------|-------------|
| `document` | string | path | Yes | Customer document number |

**Example Request:**

```bash
curl -X GET \
  'https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/document/12345678900' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: <your_app_token>'
```

**Node.js/TypeScript Example:**

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

// Usage
const profile = await getProfileByDocument('12345678900');

// Type-safe access to profile data
const { briefing_marketing, momento_compra_atual } = profile.profile;

if (momento_compra_atual.novo_comportamento) {
  console.log('Customer is showing new behavior!');
  console.log('Opportunities:', momento_compra_atual.oportunidades);
}
```

---

## Response Structure

All endpoints return the same profile structure:

### Profile Object

| Field | Type | Description |
|-------|------|-------------|
| `userProfileId` | string | Unique customer identifier |
| `profile` | object | Complete customer profile |

### Profile Details

#### perfil_cliente
General customer description and style preferences.

```json
{
  "descricao_geral": "Customer lifestyle, values, and interests",
  "estilo_geral": "Fashion style, color preferences, cuts, and aesthetics"
}
```

#### ocasioes_relevantes
Array of relevant occasions with outfit suggestions.

```json
[
  {
    "ocasião": "Occasion name (work, party, casual, etc.)",
    "persona_na_ocasião": "How customer presents themselves",
    "sugestao_look": ["Item 1", "Item 2", "Item 3"]
  }
]
```

#### briefing_marketing
Marketing guidance for campaigns.

```json
{
  "tom_de_voz": ["tone1", "tone2"],
  "direcao_visual": ["visual1", "visual2"],
  "orientacao_campanhas": ["strategy1", "strategy2"]
}
```

#### ganchos_conteudo
Content themes that resonate with the customer.

```json
["theme1", "theme2", "theme3"]
```

#### momento_compra_atual
Current purchase moment analysis.

```json
{
  "navegacoes": ["Recent navigation patterns"],
  "resumo_momento": "Behavioral interpretation",
  "relacao_com_historico": "How it connects to purchase history",
  "novo_comportamento": true,
  "oportunidades": ["Recommended action 1", "Recommended action 2"]
}
```

---

## Error Handling

### Common HTTP Status Codes

| Status Code | Description | Solution |
|-------------|-------------|----------|
| `200` | Success | Profile returned successfully |
| `401` | Unauthorized | Check your APP token |
| `404` | Not Found | Profile doesn't exist for provided identifier |
| `429` | Too Many Requests | Implement rate limiting in your application |
| `500` | Internal Server Error | Contact support |

### Error Response Format

```json
{
  "statusCode": 404,
  "message": "Profile not found",
  "error": "Not Found"
}
```

### JavaScript Error Handling Example

```javascript
async function getProfile(email) {
  try {
    const response = await fetch(
      `https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/email/${email}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-FashionAI-APP-Token': process.env.FASHION_AI_TOKEN
        }
      }
    );

    if (response.status === 404) {
      console.log('Profile not found for this email');
      return null;
    }

    if (response.status === 401) {
      throw new Error('Invalid or expired API token');
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch profile:', error);
    throw error;
  }
}
```

---

## Integration Examples

### CRM Integration

```javascript
// Enrich CRM contact with Fashion AI profile
async function enrichCRMContact(contactEmail) {
  const profile = await getProfileByEmail(contactEmail);

  if (!profile) {
    return null;
  }

  return {
    email: contactEmail,
    marketingSegment: profile.profile.briefing_marketing.tom_de_voz.join(', '),
    contentThemes: profile.profile.ganchos_conteudo,
    hasNewBehavior: profile.profile.momento_compra_atual.novo_comportamento,
    opportunities: profile.profile.momento_compra_atual.oportunidades
  };
}
```

### Email Campaign Personalization

```javascript
async function createPersonalizedEmail(customerPhone) {
  const profile = await getProfileByPhone(customerPhone);

  if (!profile) {
    return getDefaultEmailTemplate();
  }

  const { briefing_marketing, momento_compra_atual, ocasioes_relevantes } = profile.profile;

  return {
    voiceTone: briefing_marketing.tom_de_voz[0],
    visualDirection: briefing_marketing.direcao_visual,
    productSuggestions: ocasioes_relevantes[0]?.sugestao_look || [],
    opportunities: momento_compra_atual.oportunidades,
    isUrgent: momento_compra_atual.novo_comportamento
  };
}
```

### VIP Customer Service

```javascript
// Pre-consultation profile for sales team
async function getConsultationBrief(customerDocument) {
  const profile = await getProfileByDocument(customerDocument);

  if (!profile) {
    return null;
  }

  const { perfil_cliente, ocasioes_relevantes, momento_compra_atual } = profile.profile;

  return {
    customerStyle: perfil_cliente.estilo_geral,
    keyOccasions: ocasioes_relevantes.map(occ => occ.ocasião),
    outfitSuggestions: ocasioes_relevantes.map(occ => ({
      occasion: occ.ocasião,
      items: occ.sugestao_look
    })),
    currentInterest: momento_compra_atual.resumo_momento,
    opportunitiesToExplore: momento_compra_atual.oportunidades
  };
}
```

---

## Best Practices

### 1. Caching

Profile generation can take 3-8 seconds. Implement caching to improve performance:

```javascript
const profileCache = new Map();
const CACHE_TTL = 1000 * 60 * 30; // 30 minutes

async function getCachedProfile(email) {
  const cached = profileCache.get(email);

  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }

  const profile = await getProfileByEmail(email);

  if (profile) {
    profileCache.set(email, {
      data: profile,
      timestamp: Date.now()
    });
  }

  return profile;
}
```

### 2. Rate Limiting

Implement rate limiting to avoid hitting API limits:

```javascript
const rateLimit = require('express-rate-limit');

const profileLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 30, // 30 requests per minute
  message: 'Too many profile requests, please try again later'
});

app.get('/api/customer-profile/:email', profileLimiter, async (req, res) => {
  // Your profile fetching logic
});
```

### 3. Asynchronous Processing

For batch operations, process profiles asynchronously:

```javascript
async function processBatchProfiles(customerEmails) {
  const results = await Promise.allSettled(
    customerEmails.map(email => getProfileByEmail(email))
  );

  return results.map((result, index) => ({
    email: customerEmails[index],
    profile: result.status === 'fulfilled' ? result.value : null,
    error: result.status === 'rejected' ? result.reason : null
  }));
}
```

### 4. Null Checks

Always handle cases where profiles might not exist:

```javascript
async function getProfileSafely(identifier, method = 'email') {
  try {
    const endpoint = `protected/profile/${method}/${identifier}`;
    const profile = await fetchProfile(endpoint);

    return profile?.profile || null;
  } catch (error) {
    if (error.status === 404) {
      console.log(`No profile found for ${method}: ${identifier}`);
      return null;
    }
    throw error;
  }
}
```

---

## Security and CORS

To protect the authentication token (X-FashionAI-APP-Token), direct browser requests are blocked. If an API call is made directly from the frontend, the browser will block this request with a CORS error.

This measure prevents the token from being exposed in the website's source code, which could compromise API security and allow unauthorized use.

**Recommended approach**: Make all profiling API calls from your backend server.

If your team needs to make calls directly from the frontend, contact FashionAI technical support to request domain authorization: :mailbox: **support@generativecrm.com**

---

## Use Cases

### 1. Personalized Marketing Campaigns

Segment customers by `briefing_marketing.tom_de_voz` and create targeted email campaigns with appropriate voice tone and visual direction.

### 2. Product Recommendations

Use `ocasioes_relevantes` to suggest complete outfit combinations based on customer lifestyle.

### 3. Content Creation

Leverage `ganchos_conteudo` to create blog posts, social media content, and newsletters that resonate with your audience.

### 4. Behavior Change Detection

Monitor `momento_compra_atual.novo_comportamento` to identify customers exploring new styles and proactively offer styling consultations.

### 5. Sales Team Enablement

Provide sales representatives with `perfil_cliente` before VIP consultations to deliver personalized service.

---

## Support

For technical questions or commercial inquiries, contact the Fashion AI team:

:mailbox: **support@generativecrm.com**

---

## Next Steps

- [Authentication Guide](./authentication) - Detailed authentication instructions
- [User Guide: Profiling](../user-guide/profiling) - Understand profile structure and use cases
- [Getting Started](./getting-started) - Initial setup and integration guide
