---
sidebar_position: 4
---

# Profiles API

Technical reference for Fashion.AI's Customer Profiling API. This API analyzes customer purchase and navigation behavior to generate detailed, actionable profiles with AI-driven insights for marketing, sales, and CRM personalization.

## Overview

The Fashion AI Profiling service automatically generates comprehensive customer profiles by analyzing:

- Purchase history
- Navigation patterns
- Product preferences
- Behavioral insights

Each profile includes customer style preferences, occasion-based outfit suggestions, marketing guidance, content themes, and current purchase moment analysis.

For business context and use cases, see the [User Guide: Profiling](../../user-guide/profiling).

## Quick Start

Get your first customer profile in 3 steps:

**1. Get your API token**

Visit https://app.generativecrm.com/settings?tab=app-tokens and generate your token.

**2. Make your first request**

```bash
curl -X GET \
  'https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/email/customer@example.com' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: YOUR_TOKEN_HERE'
```

**3. Use the profile data**

```javascript
// Access key profile sections
const { perfil_cliente, briefing_marketing, momento_compra_atual } = response.profile;

// Get customer style
console.log(perfil_cliente.estilo_geral);

// Get marketing recommendations
console.log(briefing_marketing.tom_de_voz);

// Check for new behavior
if (momento_compra_atual.novo_comportamento) {
  console.log('New opportunity:', momento_compra_atual.oportunidades);
}
```

**Important:** Make API calls from your backend server to protect your token. See the [Security section](#security--cors) below.

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

**Authentication:** All endpoints use the same authentication method as other Fashion.AI APIs. See [API Authentication](../authentication) for details.

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

## Next Steps

- [API Endpoints](./endpoints) - Available endpoints and code examples
- [Response Structure](./response-structure) - Detailed profile fields and error handling
- [Authentication Guide](../authentication) - Setup and authentication details

---

## Support

For technical or commercial questions:
:mailbox: **support@generativecrm.com**
