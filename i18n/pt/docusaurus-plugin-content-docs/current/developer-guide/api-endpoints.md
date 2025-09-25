---
sidebar_position: 2
---

# Referência de Personalização

Referência técnica para os endpoints da API de Personalização da Fashion.AI. Para uma visão geral dos tipos de recomendação e como nossa IA funciona, veja [Primeiros Passos com Recomendações](../user-guide/getting-started).

## Configuração Base

### Endpoint Base
```
https://catalog.api.fashionaiale.com/api/v1/products/protected/recommendation
```

### Cabeçalhos Obrigatórios
```json
{
  "Content-Type": "application/json",
  "X-FashionAI-APP-Token": "<seu_token_do_app>"
}
```

> Gere seu token em: https://app.generativecrm.com/settings?tab=app-tokens

## Como Nossa IA Funciona

### Processo de Mapeamento de Intenção

1. **Navegação de Produtos**: Rastreia produtos que os usuários navegaram durante a sessão
2. **Elementos de Categoria**: Analisa elementos visuais como silhuetas, padrões e detalhes de estilo
3. **Insights de Padrões**: Identifica texturas, tecidos e elementos estruturais
4. **Intenção de Estilo**: Entende ocasião, preferências de estilo e necessidades de versatilidade
5. **Comportamento do Usuário**: Cruza referências de buscas, produtos e compras passadas para usuários logados
6. **Predição de Intenção**: Relaciona produtos de diferentes categorias baseado no mapeamento de estilo

## Endpoints da API

### Evento de Visualização de Categoria

Quando um usuário visita uma página de categoria (ex: "Calças"), um evento de visualização de categoria deve ser disparado para a Fashion.AI.

Este evento é um sinal forte de intenção do usuário e ajuda a IA a mapear a intenção do usuário, servindo como base para organização da vitrine, recomendações de produtos e enriquecimento de perfil CRM.

### Corpo da Requisição

```json
{
  "userId": 90,              // opcional - identificador do usuário se autenticado
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

> ⚠️ **Nota 1**: Esta resposta inclui todos os produtos da categoria classificados por relevância de sessão e usuário, que pode ser usada para organização da vitrine.

> ⚠️ **Nota 2**: Esta resposta estará vazia enquanto a IA não tiver dados suficientes sobre o usuário e/ou sessão. Nestes casos, organize a vitrine de acordo com a solução nativa da sua plataforma.

## Evento Compre o Look

Habilite o botão "compre o look" para exibir, via modal ou gaveta, produtos adicionais que compõem o look completo de uma peça principal.

### Corpo da Requisição

```json
{
  "userId": 90,              // opcional - identificador do usuário se autenticado
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

> ⚠️ **Nota**: Embora a API filtre produtos fora de estoque, a validação de estoque deve ser feita localmente antes de renderizar no frontend.

## Segurança e CORS

Para proteger o token de autenticação (X-FashionAI-APP-Token), bloqueamos requisições diretas do navegador. Se uma chamada de API for feita diretamente do frontend, o navegador bloqueará esta requisição com um erro de CORS.

Esta medida previne que o token seja exposto no código fonte do website, o que poderia comprometer a segurança da API e permitir uso não autorizado.

Se sua equipe ainda escolher fazer chamadas diretamente do frontend, simplesmente solicite autorização de domínio do suporte técnico da FashionAI. :mailbox: **support@generativecrm.com**