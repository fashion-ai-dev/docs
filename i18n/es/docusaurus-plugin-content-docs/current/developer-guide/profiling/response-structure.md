---
sidebar_position: 2
---

# Response Structure

All profiling endpoints return the same structure, providing comprehensive customer insights.

## Top-Level Fields

| Field | Type | Description |
|-------|------|-------------|
| `userProfileId` | string | Unique customer identifier |
| `profile` | object | Complete customer profile (details below) |

## Profile Object

The `profile` object contains five main sections:

### perfil_cliente

General customer description and style preferences.

| Field | Type | Description |
|-------|------|-------------|
| `descricao_geral` | string | Customer lifestyle, values, and interests |
| `estilo_geral` | string | Fashion style, color preferences, cuts, and aesthetics |

**Example:**
```json
{
  "descricao_geral": "Homem de 30-40 anos, profissional que valoriza qualidade e atemporalidade",
  "estilo_geral": "Casual-elegante minimalista, tons neutros, cortes regulares"
}
```

### ocasioes_relevantes

Array of relevant occasions with outfit suggestions.

| Field | Type | Description |
|-------|------|-------------|
| `ocasião` | string | Occasion name (work, party, casual, etc.) |
| `persona_na_ocasião` | string | How customer presents themselves on this occasion |
| `sugestao_look` | array | Complete outfit suggestion (list of items) |

**Example:**
```json
[
  {
    "ocasião": "Trabalho business casual",
    "persona_na_ocasião": "Profissional confiante e alinhado",
    "sugestao_look": [
      "Camisa manga longa",
      "Chino escura",
      "Sapato casual"
    ]
  }
]
```

### briefing_marketing

Marketing guidance for campaigns and communications.

| Field | Type | Description |
|-------|------|-------------|
| `tom_de_voz` | array | Communication tone recommendations |
| `direcao_visual` | array | Visual direction for campaigns |
| `orientacao_campanhas` | array | Campaign positioning strategies |

**Example:**
```json
{
  "tom_de_voz": ["inspiracional", "autêntico", "sofisticado"],
  "direcao_visual": ["Paleta neutra", "Cenários urbanos", "Luz natural"],
  "orientacao_campanhas": [
    "Versatilidade",
    "Qualidade premium",
    "Lifestyle urbano"
  ]
}
```

### ganchos_conteudo

Array of content themes that resonate with the customer.

**Example:**
```json
[
  "Guarda-roupa cápsula masculino",
  "Básicos premium que valem o investimento"
]
```

### momento_compra_atual

Current purchase moment analysis and opportunities.

| Field | Type | Description |
|-------|------|-------------|
| `navegacoes` | array | Recent browsing/navigation patterns |
| `resumo_momento` | string | Behavioral interpretation of current moment |
| `relacao_com_historico` | string | How current behavior relates to purchase history |
| `novo_comportamento` | boolean | Whether customer is showing new/different behavior |
| `oportunidades` | array | Recommended actions based on current moment |

**Example:**
```json
{
  "navegacoes": ["01/09: visualizou Short Azul Claro"],
  "resumo_momento": "Explorando peças de verão e lazer",
  "relacao_com_historico": "Expande perfil para momentos de descontração",
  "novo_comportamento": true,
  "oportunidades": [
    "Curadoria looks verão",
    "Bundle viagem"
  ]
}
```

## Complete Response Example

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

## Error Handling

| Status Code | Description | Solution |
|-------------|-------------|----------|
| `200` | Success | Profile returned successfully |
| `401` | Unauthorized | Verify your APP token is correct |
| `404` | Not Found | Profile doesn't exist for the provided identifier |
| `429` | Too Many Requests | Implement rate limiting in your application |
| `500` | Internal Server Error | Contact support |

### Error Response Example

```json
{
  "error": "Unauthorized",
  "message": "Invalid or missing authentication token"
}
```

## Field Interpretation Guide

### Using novo_comportamento

The `novo_comportamento` flag indicates when a customer is exploring new styles or categories:

```javascript
if (profile.profile.momento_compra_atual.novo_comportamento) {
  // Customer is showing new behavior - great opportunity!
  const opportunities = profile.profile.momento_compra_atual.oportunidades;

  // Example: Send personalized email with recommendations
  sendEmail({
    to: customerEmail,
    subject: "We noticed you're exploring something new!",
    recommendations: opportunities
  });
}
```

### Marketing Segmentation

Use `briefing_marketing` to create targeted campaigns:

```javascript
const { tom_de_voz, direcao_visual } = profile.profile.briefing_marketing;

// Segment customers by tone preference
if (tom_de_voz.includes("sofisticado")) {
  // Use premium messaging
}

if (direcao_visual.includes("Paleta neutra")) {
  // Use minimalist visuals
}
```

### Occasion-Based Recommendations

Leverage `ocasioes_relevantes` for contextual product suggestions:

```javascript
const workOccasion = profile.profile.ocasioes_relevantes.find(
  occ => occ.ocasião.toLowerCase().includes("trabalho")
);

if (workOccasion) {
  // Recommend products from work collection
  recommendProducts(workOccasion.sugestao_look);
}
```

---

## Support

For technical questions:
:mailbox: **support@generativecrm.com**
