---
sidebar_position: 2
---

# Referência de personalização

Referência técnica para os endpoints da API de personalização da Fashion.AI. Para obter uma visão geral dos tipos de recomendações e de como nossa IA funciona, consulte [Introdução às recomendações](../../user-guide/getting-started).

## Configuração básica

### Endpoint básico
```
https://catalog.api.fashionaiale.com/api/v1/products/protected/recommendation
```

### Cabeçalhos necessários
```json
{
  “Content-Type”: “application/json”,
  “X-FashionAI-APP-Token”: “<your_app_token>”
}
```

> Gere seu token em: https://app.generativecrm.com/settings?tab=app-tokens

## Como nossa IA funciona

### Processo de mapeamento de intenções

1. **Navegação pelo produto**: rastreia os produtos pelos quais os usuários navegaram durante a sessão
2. **Elementos da categoria**: analisa elementos visuais como silhuetas, padrões e detalhes de estilo
3. **Informações sobre padrões**: identifica texturas, tecidos e elementos estruturais
4. **Intenção de estilo**: compreende a ocasião, as preferências de estilo e as necessidades de versatilidade
5. **Comportamento do usuário**: cruza referências de pesquisas, produtos e compras anteriores para usuários conectados
6. **Previsão de intenção**: relaciona produtos de diferentes categorias com base no mapeamento de estilo

## Endpoints da API

### Evento productView

Quando um usuário clica em um produto, um evento de visualização do produto deve ser acionado para o Fashion.AI, mostrando ao usuário um conjunto de produtos semelhantes.
Se o usuário estiver conectado, o Fashion mostra um conjunto específico de produtos com base em seu histórico.
Este evento é um forte sinal da intenção do usuário e ajuda a IA a mapear a intenção do usuário, servindo como base para a organização da loja, recomendações de produtos e enriquecimento do perfil de CRM.

#### Corpo da solicitação

```json
{
  “userId”: 90,              // opcional - identificador do usuário, se autenticado
  “sessionId”: “sess456”,    // obrigatório
  “eventType”: “productView”, // obrigatório
  “data”: {
    “id”: “id789”      // obrigatório - ID do produto
  }
}
```

#### Resposta esperada

```json
{
  “products”: [“product-id-1”, “product-id-2”, “product-id-3”]
}
```

> ⚠️ **Observação 1**: esta resposta inclui todos os produtos semelhantes classificados por sessão e relevância do usuário, que podem ser usados para organizar a loja virtual.

> ⚠️ **Observação 2**: esta resposta ficará vazia enquanto a IA não tiver dados suficientes sobre o usuário e/ou a sessão. Nesses casos, organize a loja virtual de acordo com a solução nativa da sua plataforma.

### Evento categoryView

Quando um usuário visita uma página de categoria (por exemplo, “Calças”), um evento de visualização de categoria deve ser acionado para o Fashion.AI.
Se o usuário estiver conectado, o Fashion exibe uma visualização de categoria específica com base em seu histórico.
Este evento é um forte sinal da intenção do usuário e ajuda a IA a mapear a intenção do usuário, servindo como base para a organização da loja virtual, recomendações de produtos e enriquecimento do perfil de CRM.

#### Corpo da solicitação

```json
{
  “userId”: 90,              // opcional - identificador do usuário, se autenticado
  “sessionId”: “sess456”,    // obrigatório
  “eventType”: “categoryView”, // obrigatório
  “data”: {
    “id”: “category789”      // obrigatório - ID da categoria
  }
}
```

#### Resposta esperada

```json
{
  “products”: [“product-id-1”, “product-id-2”, “product-id-3”]
}
```

> ⚠️ **Observação 1**: esta resposta inclui todos os produtos da categoria classificados por sessão e relevância do usuário, que podem ser usados para a organização da loja virtual.

> ⚠️ **Observação 2**: esta resposta ficará vazia enquanto a IA não tiver dados suficientes sobre o usuário e/ou a sessão. Nesses casos, organize a loja de acordo com a solução nativa da sua plataforma.

### Evento shopTheLook

Habilite o botão “Compre o look” para exibir, por meio de modal ou gaveta, produtos adicionais que compõem o look completo de uma peça principal.

#### Corpo da solicitação

```json
{
  “userId”: 90,              // opcional - identificador do usuário, se autenticado
  “sessionId”: “sess456”,    // obrigatório
  “eventType”: “shopTheLook”, // obrigatório
  “data”: {
    “id”: “product789”       // obrigatório - ID do produto
  }
}
```

#### Resposta esperada

```json
{
  “products”: [“product-id-1”, “product-id-2”, “product-id-3”]
}
```

> ⚠️ **Observação**: embora a API filtre produtos fora de estoque, a validação do estoque deve ser feita localmente antes da renderização no front-end.

## Segurança e CORS

Para proteger o token de autenticação (X-FashionAI-APP-Token), bloqueamos solicitações diretas do navegador. Se uma chamada de API for feita diretamente do front-end, o navegador bloqueará essa solicitação com um erro CORS.

Essa medida evita que o token seja exposto no código-fonte do site, o que poderia comprometer a segurança da API e permitir o uso não autorizado.

Se sua equipe ainda optar por fazer chamadas diretamente do front-end, basta solicitar a autorização de domínio ao suporte técnico da FashionAI. :mailbox: **support@generativecrm.com**