# Guia de Autenticação

Aprenda como autenticar suas solicitações para todas as APIs da Fashion.AI usando tokens de aplicativo.

## Visão Geral

Todas as APIs da FashionAI (Busca, Personalização, Analytics) usam o mesmo método de autenticação com tokens de aplicativo. Esta abordagem unificada simplifica a integração e permite que você use um único token em todos os serviços.

## Método de Autenticação

Todas as APIs usam **Autenticação com Bearer Token** via cabeçalhos personalizados.

### Cabeçalhos Obrigatórios

| Cabeçalho | Obrigatório | Descrição |
|-----------|-------------|-----------|
| `Content-Type` | Sim | Deve ser `application/json` |
| `X-FashionAI-APP-Token` | Sim | Seu token de aplicativo |

## Obtendo Seu Token

### Passo 1: Acessar o Dashboard

1. Faça login no seu [Dashboard FashionAI](https://dashboard.fashionaiale.com)
2. Navegue até **Configurações da API** na barra lateral
3. Clique na seção **Tokens da API**

### Passo 2: Gerar Token

1. Clique em **"Gerar Novo Token"**
2. Digite um nome descritivo (ex.: "Token da API de Produção")
4. Clique em **"Criar Token"**

![Geração de Token do App](/img/app-token.png)

### Passo 3: Copiar Token

```bash
# Seu token ficará assim:
X-FashionAI-APP-Token: fai_live_sk_1234567890abcdef...
```

⚠️ **Importante**: Copie e armazene seu token imediatamente. Ele não será mostrado novamente por razões de segurança.

### Problemas Comuns

1. **Nome do Cabeçalho Incorreto**
   ```javascript
   // ❌ Errado
   headers: { 'Authorization': 'Bearer ' + token }

   // ✅ Correto
   headers: { 'X-FashionAI-APP-Token': token }
   ```

## Próximos Passos

Agora que você entende a autenticação, explore APIs específicas:

- [API de Busca](./search/overview) - Funcionalidade de busca de produtos
- [Endpoints da API](./api-endpoints) - Referência completa de endpoints
- [Integração de UI](./ui-integration) - Guias de integração de frontend