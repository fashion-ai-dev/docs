---
sidebar_position: 2
---

# Referência de Personalização

Referência técnica para os endpoints da API de Personalização do Fashion.AI. Para uma visão geral dos tipos de recomendações e como nossa IA funciona, consulte [Primeiros Passos com Recomendações](../../user-guide/getting-started).

## Configuração Base

### Endpoint Base
```
https://catalog.api.fashionaiale.com/api/v1/products/protected/recommendation
```

### Cabeçalhos Necessários
```json
{
  "Content-Type": "application/json",
  "X-FashionAI-APP-Token": "<seu_token_de_app>"
}
```

> Gere seu token em: https://app.generativecrm.com/settings?tab=app-tokens

## Como Nossa IA Funciona

### Processo de Mapeamento de Intenção

1. **Navegação de Produtos**: Rastreia produtos que os usuários navegaram durante a sessão
2. **Elementos de Categoria**: Analisa elementos visuais como silhuetas, padrões e detalhes de estilo
3. **Insights de Padrões**: Identifica texturas, tecidos e elementos estruturais
4. **Intenção de Estilo**: Compreende ocasião, preferências de estilo e necessidades de versatilidade
5. **Comportamento do Usuário**: Referências cruzadas de buscas, produtos e compras passadas para usuários conectados
6. **Previsão de Intenção**: Relaciona produtos de diferentes categorias com base em mapeamento de estilos

## Endpoints de API

### Evento de Visualização de Categoria

Quando um usuário visita uma página de categoria (ex., "Calças"), um evento de visualização de categoria deve ser acionado para o Fashion.AI.
Se o usuário estiver conectado, o fashion mostra uma visualização de categoria específica baseada em seu histórico.
Este evento é um sinal forte de intenção do usuário e ajuda a IA a mapear a intenção do usuário, servindo como base para organização da loja, recomendações de produtos e enriquecimento do perfil CRM.

### Corpo da Solicitação

```json
{
  "userId": 90,              // opcional - identificador de usuário se autenticado
  "sessionId": "sess456",    // obrigatório
  "eventType": "categoryView", // obrigatório
  "data": {
    "id": "category789"      // obrigatório - ID da categoria
  }
}
```

### Resposta Esperada

```json
{
  "products": ["product-id-1", "product-id-2", "product-id-3"]
}
```

> ⚠️ **Nota 1**: Esta resposta inclui todos os produtos da categoria classificados por sessão e relevância do usuário, que podem ser usados para organização da loja.

> ⚠️ **Nota 2**: Esta resposta estará vazia enquanto a IA não tiver dados suficientes sobre o usuário e/ou sessão. Nesses casos, organize a loja de acordo com a solução nativa da sua plataforma.

## Evento Shop The Look

Habilite o botão "shop the look" para exibir, via modal ou drawer, produtos adicionais que compõem o look completo para uma peça principal.

### Corpo da Solicitação

```json
{
  "userId": 90,              // opcional - identificador de usuário se autenticado
  "sessionId": "sess456",    // obrigatório
  "eventType": "shopTheLook", // obrigatório
  "data": {
    "id": "product789"       // obrigatório - ID do produto
  }
}
```

### Resposta Esperada

```json
{
  "products": ["product-id-1", "product-id-2", "product-id-3"]
}
```

> ⚠️ **Nota**: Embora a API filtre produtos sem estoque, a validação de estoque deve ser feita localmente antes de renderizar no frontend.

## Segurança e CORS

Para proteger o token de autenticação (X-FashionAI-APP-Token), bloqueamos solicitações diretas do navegador. Se uma chamada de API for feita diretamente do frontend, o navegador bloqueará esta solicitação com um erro CORS.

Esta medida evita que o token seja exposto no código-fonte do site, o que poderia comprometer a segurança da API e permitir uso não autorizado.

Se sua equipe ainda optar por fazer chamadas diretamente do frontend, simplesmente solicite autorização de domínio ao suporte técnico do FashionAI. :mailbox: **support@generativecrm.com**
