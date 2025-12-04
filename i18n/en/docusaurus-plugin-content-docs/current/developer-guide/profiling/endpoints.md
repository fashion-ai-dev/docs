---
sidebar_position: 1
---

# API Endpoints

All profiling endpoints return the same profile structure. Choose the endpoint based on the customer identifier you have available.

## Available Endpoints

| Endpoint | Parameter | Description |
|----------|-----------|-------------|
| `GET /protected/profile/user-profile-id/:userProfileId` | User Profile ID | Retrieve profile by Fashion AI identifier |
| `GET /protected/profile/phone/:phone` | Phone | Retrieve profile by phone number |
| `GET /protected/profile/email/:email` | Email | Retrieve profile by email address |
| `GET /protected/profile/document/:document` | Document | Retrieve profile by document (CPF, ID, etc.) |

## Basic Example

```bash
curl -X GET \
  'https://catalog.api.fashionai.dev/api/v1/crm/protected/profile/email/customer@example.com' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: <your_app_token>'
```

## Code Examples

### JavaScript/Node.js

```javascript
const getProfile = async (identifier, type = 'email') => {
  const response = await fetch(
    `https://catalog.api.fashionai.dev/api/v1/crm/protected/profile/${type}/${identifier}`,
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

### TypeScript

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
    `https://catalog.api.fashionai.dev/api/v1/crm/protected/profile/${type}/${identifier}`,
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

### Python

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
    url = f"https://catalog.api.fashionai.dev/api/v1/crm/protected/profile/{profile_type}/{identifier}"
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

## Example Response

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

For detailed field descriptions, see [Response Structure](./response-structure).
