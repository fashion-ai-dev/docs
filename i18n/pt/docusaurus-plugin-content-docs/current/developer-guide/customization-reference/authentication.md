---
sidebar_position: 3
---

# Autenticação API - App Token

Aprenda como autenticar suas requisições para todas as APIs da Fashion.AI usando tokens de aplicação seguros.

## Visão Geral

Todas as APIs da FashionAI (Busca, Recomendações) usam o mesmo método de autenticação com tokens de aplicação. Esta abordagem unificada simplifica a integração e permite que você use um único token em ambos os serviços.

## Método de Autenticação

Todas as APIs usam **X-FashionAI-APP-Token** via headers customizados.

### Headers Obrigatórios

| Header | Obrigatório | Descrição |
|--------|-------------|-----------|
| `Content-Type` | Sim | Deve ser `application/json` |
| `X-FashionAI-APP-Token` | Sim | Seu token de aplicação |

## Obtendo seu Token

### Passo 1: Acessar o Painel

1. Faça login no seu [Painel FashionAI](https://dashboard.fashionaiale.com)
2. Navegue até **Configurações de API** na barra lateral
3. Clique na seção **Tokens de API**

### Passo 2: Gerar Token

1. Clique em **"Gerar Novo Token"**
2. Insira um nome descritivo (ex: "Token de API de Produção")
3. Clique em **"Criar Token"**

![Geração de App Token](/img/app-token.png)

### Passo 3: Copiar Token
```bash
# Seu token será parecido com isto:
X-FashionAI-APP-Token: ab1234567890abcdef...
```

⚠️ **Importante**: Copie e armazene seu token imediatamente. Ele não será mostrado novamente por razões de segurança.

### Problemas Comuns

1. **Nome de Header Incorreto**
```javascript
   // ❌ Errado
   headers: { 'Authorization': 'Bearer ' + token }

   // ✅ Correto
   headers: { 'X-FashionAI-APP-Token': token }
```

## Próximos Passos

Agora que você compreende a autenticação, explore as APIs específicas:

- [API de Busca](../recommendations-search/search/overview) - Funcionalidade de busca de produtos
- [Endpoints de API](../recommendations-search/api-endpoints) - Referência completa de endpoints
- [Integração UI](./ui-integration) - Guias de integração frontend