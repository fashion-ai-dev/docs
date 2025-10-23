---
sidebar_position: 4
---

# API de Perfilagem de Clientes

Referência técnica dos endpoints da API de Perfilagem de Clientes da Fashion.AI. Esta API analisa o comportamento de compra e navegação dos clientes para gerar perfis detalhados e acionáveis com insights impulsionados por IA para personalização de marketing, vendas e CRM.

## Visão Geral

O serviço Fashion AI Profiling gera automaticamente perfis abrangentes de clientes analisando:

- Histórico de compras
- Padrões de navegação
- Preferências de produtos
- Insights comportamentais

Para uma explicação detalhada dos casos de uso e estrutura do perfil, consulte o [Guia do Usuário: Perfilagem](../user-guide/profiling).

## Configuração Base

**URL Base:**
```
https://catalog.api.fashionaiale.com/api/v1/crm
```

**Headers Obrigatórios:**
```http
Content-Type: application/json
X-FashionAI-APP-Token: <seu_app_token>
```

> **Obtenha seu token:** https://app.generativecrm.com/settings?tab=app-tokens

**Autenticação:** Todos os endpoints usam o mesmo método de autenticação das outras APIs Fashion.AI. Consulte [Autenticação da API](./authentication) para detalhes.

## Endpoints da API

Todos os endpoints retornam a mesma estrutura de perfil. Escolha o endpoint baseado no identificador de cliente que você tem disponível.

### Endpoints Disponíveis

| Endpoint | Parâmetro | Descrição |
|----------|-----------|-----------|
| `GET /protected/profile/user-profile-id/:userProfileId` | User Profile ID | Recuperar perfil por identificador Fashion AI |
| `GET /protected/profile/phone/:phone` | Telefone | Recuperar perfil por número de telefone |
| `GET /protected/profile/email/:email` | Email | Recuperar perfil por endereço de email |
| `GET /protected/profile/document/:document` | Documento | Recuperar perfil por documento (CPF, RG, etc.) |

### Exemplo Básico

```bash
curl -X GET \
  'https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/email/cliente@exemplo.com' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: <seu_app_token>'
```

### Exemplos de Código

<details>
<summary><strong>JavaScript/Node.js</strong></summary>

```javascript
const obterPerfil = async (identificador, tipo = 'email') => {
  const response = await fetch(
    `https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/${tipo}/${identificador}`,
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
</details>

<details>
<summary><strong>TypeScript</strong></summary>

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
    `https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/${tipo}/${identificador}`,
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
</details>

<details>
<summary><strong>Python</strong></summary>

```python
import requests
import os

def obter_perfil(identificador, tipo_perfil='email'):
    """
    Recupera perfil de cliente por identificador.

    Args:
        identificador: O identificador do cliente (email, phone, document ou userProfileId)
        tipo_perfil: Tipo do identificador ('email', 'phone', 'document', 'user-profile-id')
    """
    url = f"https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/{tipo_perfil}/{identificador}"
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
</details>

### Exemplo de Resposta

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

## Estrutura da Resposta

Todos os endpoints retornam a mesma estrutura:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `userProfileId` | string | Identificador único do cliente |
| `profile` | object | Perfil completo do cliente (detalhes abaixo) |

### Campos do Perfil

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `perfil_cliente` | object | Descrição geral do cliente e preferências de estilo |
| `perfil_cliente.descricao_geral` | string | Estilo de vida, valores e interesses do cliente |
| `perfil_cliente.estilo_geral` | string | Estilo de moda, preferências de cores, cortes e estéticas |
| `ocasioes_relevantes` | array | Lista de ocasiões relevantes com sugestões de looks |
| `ocasioes_relevantes[].ocasião` | string | Nome da ocasião (trabalho, festa, casual, etc.) |
| `ocasioes_relevantes[].persona_na_ocasião` | string | Como o cliente se apresenta nesta ocasião |
| `ocasioes_relevantes[].sugestao_look` | array | Sugestão de look completo (lista de itens) |
| `briefing_marketing` | object | Orientações de marketing para campanhas |
| `briefing_marketing.tom_de_voz` | array | Recomendações de tom de comunicação |
| `briefing_marketing.direcao_visual` | array | Direção visual para campanhas |
| `briefing_marketing.orientacao_campanhas` | array | Estratégias de posicionamento de campanha |
| `ganchos_conteudo` | array | Temas de conteúdo que ressoam com o cliente |
| `momento_compra_atual` | object | Análise do momento de compra atual |
| `momento_compra_atual.navegacoes` | array | Padrões de navegação/browsing recentes |
| `momento_compra_atual.resumo_momento` | string | Interpretação comportamental do momento atual |
| `momento_compra_atual.relacao_com_historico` | string | Como o comportamento atual se relaciona com o histórico de compras |
| `momento_compra_atual.novo_comportamento` | boolean | Se o cliente está mostrando comportamento novo/diferente |
| `momento_compra_atual.oportunidades` | array | Ações recomendadas baseadas no momento atual |

## Tratamento de Erros

| Código de Status | Descrição | Solução |
|-----------------|-----------|---------|
| `200` | Sucesso | Perfil retornado com sucesso |
| `401` | Não Autorizado | Verifique se seu token APP está correto |
| `404` | Não Encontrado | Perfil não existe para o identificador fornecido |
| `429` | Muitas Requisições | Implemente rate limiting na sua aplicação |
| `500` | Erro Interno do Servidor | Entre em contato com o suporte |

## Segurança e CORS

> **Importante:** Requisições diretas do navegador são bloqueadas para proteger seu token de autenticação.

O `X-FashionAI-APP-Token` não deve ser exposto no código frontend. Se você tentar chamar a API diretamente do navegador, receberá um erro CORS.

**Recomendado:** Faça todas as chamadas de API a partir do seu servidor backend.

**Precisa de acesso frontend?** Entre em contato com o suporte para solicitar autorização de domínio:
:mailbox: **support@generativecrm.com**

## Casos de Uso

**Marketing Personalizado**
Segmente clientes por `briefing_marketing.tom_de_voz` e crie campanhas direcionadas com tom e direção visual apropriados.

**Recomendações de Produtos**
Use `ocasioes_relevantes` para sugerir combinações completas de looks baseadas no estilo de vida do cliente.

**Criação de Conteúdo**
Aproveite `ganchos_conteudo` para criar posts de blog, redes sociais e newsletters que ressoam com seu público.

**Detecção de Mudança de Comportamento**
Monitore `momento_compra_atual.novo_comportamento` para identificar clientes explorando novos estilos e oferecer consultorias proativas.

**Capacitação de Vendas**
Forneça aos times de vendas dados de `perfil_cliente` antes de consultorias VIP para serviço personalizado.

---

## Suporte

Para questões técnicas ou comerciais:
:mailbox: **support@generativecrm.com**

---

## Documentação Relacionada

- [Guia de Autenticação](./authentication) - Detalhes de configuração e autenticação
- [Guia do Usuário: Perfilagem](../user-guide/profiling) - Casos de uso e estrutura do perfil
- [Primeiros Passos](./getting-started) - Guia de integração inicial
