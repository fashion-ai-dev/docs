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

### Endpoint Base
```
https://catalog.api.fashionaiale.com/api/v1/crm
```

### Headers Obrigatórios
```json
{
  "Content-Type": "application/json",
  "X-FashionAI-APP-Token": "<seu_app_token>"
}
```

> Gere seu token em: https://app.generativecrm.com/settings?tab=app-tokens

## Autenticação

Todos os endpoints de perfilagem usam o mesmo método de autenticação das outras APIs Fashion.AI. Para instruções detalhadas de autenticação, consulte [Autenticação da API](./authentication).

## Endpoints da API

### 1. Obter Perfil por ID do Perfil do Usuário

Recupera um perfil de cliente usando seu identificador único de perfil de usuário.

**Endpoint:**
```
GET /protected/profile/user-profile-id/:userProfileId
```

**Parâmetros:**

| Parâmetro | Tipo | Localização | Obrigatório | Descrição |
|-----------|------|-------------|-------------|-----------|
| `userProfileId` | string | path | Sim | Identificador único do perfil do usuário |

**Exemplo de Requisição:**

```bash
curl -X GET \
  'https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/user-profile-id/ddsd23223' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: <seu_app_token>'
```

**Exemplo de Resposta:**

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

### 2. Obter Perfil por Telefone

Recupera um perfil de cliente usando seu número de telefone.

**Endpoint:**
```
GET /protected/profile/phone/:phone
```

**Parâmetros:**

| Parâmetro | Tipo | Localização | Obrigatório | Descrição |
|-----------|------|-------------|-------------|-----------|
| `phone` | string | path | Sim | Número de telefone do cliente |

**Exemplo de Requisição:**

```bash
curl -X GET \
  'https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/phone/5511999998888' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: <seu_app_token>'
```

**Exemplo em JavaScript:**

```javascript
const obterPerfilPorTelefone = async (telefone) => {
  const response = await fetch(
    `https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/phone/${telefone}`,
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

// Uso
const perfil = await obterPerfilPorTelefone('5511999998888');
console.log(perfil.profile.briefing_marketing.tom_de_voz);
```

### 3. Obter Perfil por Email

Recupera um perfil de cliente usando seu endereço de email.

**Endpoint:**
```
GET /protected/profile/email/:email
```

**Parâmetros:**

| Parâmetro | Tipo | Localização | Obrigatório | Descrição |
|-----------|------|-------------|-------------|-----------|
| `email` | string | path | Sim | Endereço de email do cliente |

**Exemplo de Requisição:**

```bash
curl -X GET \
  'https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/email/cliente@exemplo.com' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: <seu_app_token>'
```

**Exemplo em Python:**

```python
import requests
import os

def obter_perfil_por_email(email):
    url = f"https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/email/{email}"
    headers = {
        "Content-Type": "application/json",
        "X-FashionAI-APP-Token": os.getenv("FASHION_AI_TOKEN")
    }

    response = requests.get(url, headers=headers)
    response.raise_for_status()

    return response.json()

# Uso
perfil = obter_perfil_por_email("cliente@exemplo.com")

# Acesso a seções específicas do perfil
briefing_marketing = perfil["profile"]["briefing_marketing"]
momento_atual = perfil["profile"]["momento_compra_atual"]

print(f"Tom de voz: {briefing_marketing['tom_de_voz']}")
print(f"Oportunidades: {momento_atual['oportunidades']}")
```

### 4. Obter Perfil por Documento

Recupera um perfil de cliente usando seu número de documento (CPF, RG, etc.).

**Endpoint:**
```
GET /protected/profile/document/:document
```

**Parâmetros:**

| Parâmetro | Tipo | Localização | Obrigatório | Descrição |
|-----------|------|-------------|-------------|-----------|
| `document` | string | path | Sim | Número do documento do cliente |

**Exemplo de Requisição:**

```bash
curl -X GET \
  'https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/document/12345678900' \
  -H 'Content-Type: application/json' \
  -H 'X-FashionAI-APP-Token: <seu_app_token>'
```

**Exemplo em Node.js/TypeScript:**

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

async function obterPerfilPorDocumento(documento: string): Promise<PerfilCliente> {
  const response = await fetch(
    `https://catalog.api.fashionaiale.com/api/v1/crm/protected/profile/document/${documento}`,
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
const perfil = await obterPerfilPorDocumento('12345678900');

// Acesso type-safe aos dados do perfil
const { briefing_marketing, momento_compra_atual } = perfil.profile;

if (momento_compra_atual.novo_comportamento) {
  console.log('Cliente está mostrando novo comportamento!');
  console.log('Oportunidades:', momento_compra_atual.oportunidades);
}
```

## Estrutura da Resposta

Todos os endpoints retornam a mesma estrutura de perfil:

### Objeto Profile

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `userProfileId` | string | Identificador único do cliente |
| `profile` | object | Perfil completo do cliente |

### Detalhes do Perfil

#### perfil_cliente
Descrição geral do cliente e preferências de estilo.

```json
{
  "descricao_geral": "Estilo de vida, valores e interesses do cliente",
  "estilo_geral": "Estilo de moda, preferências de cores, cortes e estéticas"
}
```

#### ocasioes_relevantes
Array de ocasiões relevantes com sugestões de looks.

```json
[
  {
    "ocasião": "Nome da ocasião (trabalho, festa, casual, etc.)",
    "persona_na_ocasião": "Como o cliente se apresenta",
    "sugestao_look": ["Item 1", "Item 2", "Item 3"]
  }
]
```

#### briefing_marketing
Orientações de marketing para campanhas.

```json
{
  "tom_de_voz": ["tom1", "tom2"],
  "direcao_visual": ["visual1", "visual2"],
  "orientacao_campanhas": ["estrategia1", "estrategia2"]
}
```

#### ganchos_conteudo
Temas de conteúdo que ressoam com o cliente.

```json
["tema1", "tema2", "tema3"]
```

#### momento_compra_atual
Análise do momento de compra atual.

```json
{
  "navegacoes": ["Padrões de navegação recentes"],
  "resumo_momento": "Interpretação comportamental",
  "relacao_com_historico": "Como se conecta ao histórico de compras",
  "novo_comportamento": true,
  "oportunidades": ["Ação recomendada 1", "Ação recomendada 2"]
}
```

## Tratamento de Erros

### Códigos de Status HTTP Comuns

| Código de Status | Descrição | Solução |
|-----------------|-----------|---------|
| `200` | Sucesso | Perfil retornado com sucesso |
| `401` | Não Autorizado | Verifique seu token APP |
| `404` | Não Encontrado | Perfil não existe para o identificador fornecido |
| `429` | Muitas Requisições | Implemente rate limiting na sua aplicação |
| `500` | Erro Interno do Servidor | Entre em contato com o suporte |

## Segurança e CORS

Para proteger o token de autenticação (X-FashionAI-APP-Token), requisições diretas do navegador são bloqueadas. Se uma chamada de API for feita diretamente do frontend, o navegador bloqueará essa requisição com um erro CORS.

Esta medida previne que o token seja exposto no código-fonte do website, o que poderia comprometer a segurança da API e permitir uso não autorizado.

**Abordagem recomendada**: Faça todas as chamadas da API de perfilagem a partir do seu servidor backend.

Se sua equipe precisar fazer chamadas diretamente do frontend, entre em contato com o suporte técnico da FashionAI para solicitar autorização de domínio: :mailbox: **support@generativecrm.com**

## Casos de Uso

### 1. Campanhas de Marketing Personalizadas

Segmente clientes por `briefing_marketing.tom_de_voz` e crie campanhas de email direcionadas com tom de voz e direção visual apropriados.

### 2. Recomendações de Produtos

Use `ocasioes_relevantes` para sugerir combinações completas de looks baseadas no estilo de vida do cliente.

### 3. Criação de Conteúdo

Aproveite `ganchos_conteudo` para criar posts de blog, conteúdo de redes sociais e newsletters que ressoam com seu público.

### 4. Detecção de Mudança de Comportamento

Monitore `momento_compra_atual.novo_comportamento` para identificar clientes explorando novos estilos e oferecer proativamente consultorias de styling.

### 5. Capacitação da Equipe de Vendas

Forneça aos representantes de vendas o `perfil_cliente` antes de consultorias VIP para entregar serviço personalizado.

## Suporte

Para questões técnicas ou comerciais, entre em contato com a equipe Fashion AI:

:mailbox: **support@generativecrm.com**

## Próximos Passos

- [Guia de Autenticação](./authentication) - Instruções detalhadas de autenticação
- [Guia do Usuário: Perfilagem](../user-guide/profiling) - Entenda a estrutura do perfil e casos de uso
- [Primeiros Passos](./getting-started) - Guia de configuração inicial e integração
