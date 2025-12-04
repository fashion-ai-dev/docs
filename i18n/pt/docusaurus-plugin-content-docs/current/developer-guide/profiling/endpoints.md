---
sidebar_position: 1
---

# Endpoints da API

Todos os endpoints de perfil retornam a mesma estrutura. Escolha o endpoint baseado no identificador do cliente que você tem disponível.

## Endpoints Disponíveis

| Endpoint | Parâmetro | Descrição |
|----------|-----------|-------------|
| `GET /protected/profile/user-profile-id/:userProfileId` | ID do Perfil do Usuário | Recupera perfil pelo identificador Fashion AI |
| `GET /protected/profile/phone/:phone` | Telefone | Recupera perfil por número de telefone |
| `GET /protected/profile/email/:email` | Email | Recupera perfil por endereço de email |
| `GET /protected/profile/document/:document` | Documento | Recupera perfil por documento (CPF, RG, etc.) |

## Exemplo Básico
```bash
curl -X GET \
  'https://catalog.api.fashionai.dev/api/v1/crm/protected/profile/email/cliente@exemplo.com' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: <seu_token_app>'
```

## Exemplos de Código

### JavaScript/Node.js
```javascript
const obterPerfil = async (identificador, tipo = 'email') => {
  const response = await fetch(
    `https://catalog.api.fashionai.dev/api/v1/crm/protected/profile/${tipo}/${identificador}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-FashionAI-APP-Token': process.env.FASHION_AI_TOKEN
      }
    }
  );

  if (!response.ok) {
    throw new Error(`Erro HTTP! status: ${response.status}`);
  }

  return await response.json();
};

// Exemplos de uso
const perfilPorEmail = await obterPerfil('cliente@exemplo.com', 'email');
const perfilPorTelefone = await obterPerfil('5511999998888', 'phone');
const perfilPorDoc = await obterPerfil('12345678900', 'document');
```

### TypeScript
```typescript
interface PerfilCliente {
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

async function obterPerfil(
  identificador: string,
  tipo: 'email' | 'phone' | 'document' | 'user-profile-id'
): Promise<PerfilCliente> {
  const response = await fetch(
    `https://catalog.api.fashionai.dev/api/v1/crm/protected/profile/${tipo}/${identificador}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-FashionAI-APP-Token': process.env.FASHION_AI_TOKEN!
      }
    }
  );

  if (!response.ok) {
    throw new Error(`Falha ao buscar perfil: ${response.statusText}`);
  }

  return await response.json();
}

// Uso
const perfil = await obterPerfil('cliente@exemplo.com', 'email');

if (perfil.profile.momento_compra_atual.novo_comportamento) {
  console.log('Novo comportamento detectado!');
  console.log('Oportunidades:', perfil.profile.momento_compra_atual.oportunidades);
}
```

### Python
```python
import requests
import os

def obter_perfil(identificador, tipo_perfil='email'):
    """
    Recupera perfil do cliente por identificador.

    Args:
        identificador: O identificador do cliente (email, telefone, documento ou userProfileId)
        tipo_perfil: Tipo do identificador ('email', 'phone', 'document', 'user-profile-id')
    """
    url = f"https://catalog.api.fashionai.dev/api/v1/crm/protected/profile/{tipo_perfil}/{identificador}"
    headers = {
        "Content-Type": "application/json",
        "X-FashionAI-APP-Token": os.getenv("FASHION_AI_TOKEN")
    }

    response = requests.get(url, headers=headers)
    response.raise_for_status()

    return response.json()

# Exemplos de uso
perfil = obter_perfil("cliente@exemplo.com", "email")
perfil = obter_perfil("5511999998888", "phone")
perfil = obter_perfil("12345678900", "document")

# Acessar dados do perfil
briefing_marketing = perfil["profile"]["briefing_marketing"]
print(f"Tom de voz: {briefing_marketing['tom_de_voz']}")
```

## Exemplo de Resposta

Todos os endpoints retornam a mesma estrutura:
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

Para descrições detalhadas dos campos, veja [Estrutura da Resposta](./response-structure).