---
sidebar_position: 4
---

# Guia de Autenticação da API

Aprenda como autenticar suas requisições para todas as APIs da Fashion.AI usando tokens de app seguros.

## Visão Geral

Todas as APIs da FashionAI (Busca, Personalização, Analytics) usam o mesmo método de autenticação com tokens de app. Esta abordagem unificada simplifica a integração e permite que você use um único token em todos os serviços.

## Método de Autenticação

Todas as APIs usam **Autenticação por Bearer Token** via cabeçalhos customizados.

### Cabeçalhos Obrigatórios

| Cabeçalho | Obrigatório | Descrição |
|--------|----------|-------------|
| `Content-Type` | Sim | Deve ser `application/json` |
| `X-FashionAI-APP-Token` | Sim | Seu token de aplicação |

## Obtendo Seu Token

### Passo 1: Acessar Dashboard

1. Faça login no seu [Dashboard FashionAI](https://app.generativecrm.com)
2. Navegue para **Configurações da API** na barra lateral
3. Clique na seção **Tokens da API**

### Step 2: Generate Token

1. Click **"Generate New Token"**
2. Enter a descriptive name (e.g., "Production API Token")
4. Click **"Create Token"**

![App Token Generation](/img/app-token.png)

### Step 3: Copy Token

```bash
# Your token will look like this:
X-FashionAI-APP-Token: fai_live_sk_1234567890abcdef...
```

⚠️ **Important**: Copy and store your token immediately. It won't be shown again for security reasons.

### Common Issues

1. **Wrong Header Name**
   ```javascript
   // ❌ Wrong
   headers: { 'Authorization': 'Bearer ' + token }

   // ✅ Correct
   headers: { 'X-FashionAI-APP-Token': token }
   ```

## Next Steps

Now that you understand authentication, explore specific APIs:

- [Search API](./search/overview) - Product search functionality
- [API Endpoints](./api-endpoints) - Complete endpoint reference
- [UI Integration](./ui-integration) - Frontend integration guides