---
sidebar_position: 4
---

# API de perfil do cliente

Referência técnica para a API de perfil do cliente da Fashion.AI. Essa API analisa o comportamento de compra e navegação do cliente para gerar perfis detalhados e acionáveis com insights baseados em IA para personalização de marketing, vendas e CRM.

## Visão geral

O serviço de criação de perfis da Fashion AI gera automaticamente perfis abrangentes de clientes, analisando:

- Histórico de compras
- Padrões de navegação
- Preferências de produtos
- Insights comportamentais

Cada perfil inclui preferências de estilo do cliente, sugestões de roupas para ocasiões específicas, orientações de marketing, temas de conteúdo e análise do momento atual de compra.

Para contexto comercial e casos de uso, consulte o [Guia do usuário: criação de perfis](../../user-guide/profiling).

## Início rápido

Obtenha seu primeiro perfil de cliente em três etapas:

**1. Obtenha seu token de API**

Acesse https://app.generativecrm.com/settings?tab=app-tokens e gere seu token.

**2. Faça sua primeira solicitação**

```bash
curl -X GET \
  ‘https://catalog.api.fashionai.dev/api/v1/crm/protected/profile/email/customer@example.com’ \
  -H ‘Content-Type: application/json’ \
  -H ‘X-FashionAI-APP-Token: YOUR_TOKEN_HERE’
```

**3. Use os dados do perfil**

```javascript
// Acesse as seções do perfil da chave
const { perfil_cliente, briefing_marketing, momento_compra_atual } = response.profile;

// Obtenha o estilo do cliente
console.log(perfil_cliente.estilo_geral);

// Obtenha recomendações de marketing
console.log(briefing_marketing.tom_de_voz);

// Verifique se há novos comportamentos
if (momento_compra_atual.novo_comportamento) {
  console.log(‘Nova oportunidade:’, momento_compra_atual.oportunidades);
}
```

**Importante:** Faça chamadas de API a partir do seu servidor backend para proteger seu token. Consulte a seção [Segurança](#security--cors) abaixo.

## Configuração básica

**URL base:**
```
https://catalog.api.fashionai.dev/api/v1/crm
```

**Cabeçalhos necessários:**
```http
Content-Type: application/json
X-FashionAI-APP-Token: <your_app_token>
```

**Autenticação:** Todos os pontos finais usam o mesmo método de autenticação que outras APIs do Fashion.AI. Consulte [Autenticação da API](../authentication) para obter detalhes.

## Segurança e CORS

> **Importante:** As solicitações diretas do navegador são bloqueadas para proteger seu token de autenticação.

O `X-FashionAI-APP-Token` não deve ser exposto no código front-end. Se você tentar chamar a API diretamente do navegador, receberá um erro CORS.

**Recomendado:** faça todas as chamadas de API a partir do seu servidor back-end.

**Precisa de acesso front-end?** Entre em contato com o suporte para solicitar autorização de domínio:
:mailbox: **support@generativecrm.com**

## Casos de uso

**Marketing personalizado**
Segmente os clientes por `briefing_marketing.tom_de_voz` e crie campanhas direcionadas com tom e direção visual adequados.

**Recomendações de produtos**
Use `ocasioes_relevantes` para sugerir combinações completas de roupas com base no estilo de vida do cliente.

**Criação de conteúdo**
Aproveite `ganchos_conteudo` para criar posts em blogs, mídias sociais e boletins informativos que ressoem com seu público.

**Detecção de mudança de comportamento**
Monitore `momento_compra_atual.novo_comportamento` para identificar clientes que estão explorando novos estilos e oferecer consultas proativas.

**Capacitação de vendas**
Forneça aos times de vendas os dados `perfil_cliente` antes das consultas VIP para um atendimento personalizado.

---

## Próximos passos

- [Endpoints da API](./endpoints) - Pontos finais disponíveis e exemplos de código
- [Estrutura de resposta](./response-structure) - Campos detalhados do perfil e tratamento de erros
- [Guia de autenticação](../authentication) - Detalhes de configuração e autenticação

---

## Suporte

Para questões técnicas ou comerciais:
:mailbox: **support@generativecrm.com**