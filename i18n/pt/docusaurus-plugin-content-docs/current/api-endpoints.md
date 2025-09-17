---
sidebar_position: 2
---

# Referência da API de Personalização

Guia de referência completo para os endpoints da API de Personalização da Fashion.AI. Aprenda como integrar recomendações de produtos em tempo real e personalização de categorias.

## Configuração Base

### Endpoint Base
```
https://catalog.api.fashionaiale.com/api/v1/products/protected/recommendation
```

### Headers Obrigatórios
```json
{
  "Content-Type": "application/json",
  "X-FashionAI-APP-Token": "<your_app_token>"
}
```

> Gere seu token acessando: https://app.generativecrm.com/settings?tab=app-tokens

## Evento "Category View"

Em uma sessão, quando o usuário acessar a página de uma categoria (ex: Calças) será disparado um evento para fashionAI.

Este evento é um sinal forte de intenção do usuário e ajudará a IA a mapear a intenção do usuário, servindo como base para organização da VM, recomendação de produtos e enriquecimento do perfil de CRM.

### Request Body

```json
{
  "userId": 90,              // optional - user identifier if authenticated
  "sessionId": "sess456",    // required
  "eventType": "categoryView", // required
  "data": {
    "id": "category789"      // required - ID da categoria
  }
}
```

### Response Esperado

```json
{
  "products": ["id-do-produto-1", "id-do-produto-2", "id-do-produto-3"]
}
```

> ⚠️ **Nota 1**: Este retorno incluirá todos os produtos da categoria rankeados por relevância da sessão e usuário podendo ser usados como organização da vitrine.

> ⚠️ **Nota 2**: Este retorno será vazio enquanto a IA não tiver dados suficientes sobre o usuário e/ou sessão. Nestes casos organizar a vitrine de acordo com a solução nativa da plataforma.

## Evento "shopTheLook"

Permitir que o botão "compre o look" exiba, via modal ou drawer, os demais produtos que compõem o visual de uma peça principal.

### Request Body

```json
{
  "userId": 90,              // optional - user identifier if authenticated
  "sessionId": "sess456",    // required
  "eventType": "shopTheLook", // required
  "data": {
    "id": "product789"       // required - ID of product viewed
  }
}
```

### Response Esperado

```json
{
  "products": ["id-do-produto-1", "id-do-produto-2", "id-do-produto-3"]
}
```

> ⚠️ **Nota**: Embora a API filtre produtos fora de estoque, a validação de estoque deve ser feita localmente antes de renderizar no frontend.

## Segurança e CORS

Para proteger o token de autenticação (X-FashionAI-APP-Token), bloqueamos requisições diretas do navegador. Se uma chamada à API for feita diretamente do frontend, o navegador bloqueará essa requisição com um erro de CORS.

Essa medida evita que o token fique exposto no código-fonte do site, o que poderia comprometer a segurança da API e permitir uso indevido.

Se, ainda assim, a sua equipe optar por realizar chamadas diretamente do front, basta solicitar liberação do domínio junto ao suporte técnico da FashionAI.