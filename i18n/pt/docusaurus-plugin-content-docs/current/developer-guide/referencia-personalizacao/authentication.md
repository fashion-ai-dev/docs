---
sidebar_position: 3
---

# Autenticação de API - Token de Aplicativo

Aprenda como autenticar suas solicitações para todas as APIs do Fashion.AI usando tokens de aplicativo seguros.

## Visão Geral

Todas as APIs do FashionAI (Busca, Recomendações) usam o mesmo método de autenticação com tokens de aplicativo. Esta abordagem unificada simplifica a integração e permite que você use um único token em ambos os serviços.

## Método de Autenticação

Todas as APIs usam **X-FashionAI-APP-Token** através de cabeçalhos personalizados.

### Cabeçalhos Necessários

| Cabeçalho | Obrigatório | Descrição |
|--------|----------|-------------|
| `Content-Type` | Sim | Deve ser `application/json` |
| `X-FashionAI-APP-Token` | Sim | Seu token de aplicativo |

## Obtendo seu Token

### Passo 1: Acessar o Painel de Controle

1. Faça login no seu [Painel de Controle do FashionAI](https://dashboard.fashionaiale.com)
2. Navegue até **Configurações de API** na barra lateral
3. Clique na seção **Tokens de API**

### Passo 2: Gerar Token

1. Clique em **"Gerar Novo Token"**
2. Digite um nome descritivo (ex., "Token de API de Produção")
4. Clique em **"Criar Token"**

![Geração de Token de Aplicativo](/img/app-token.png)

### Passo 3: Copiar Token

```bash
# Seu token será assim:
X-FashionAI-APP-Token: ab1234567890abcdef...
```

⚠️ **Importante**: Copie e guarde seu token imediatamente. Ele não será mostrado novamente por motivos de segurança.

### Problemas Comuns

1. **Nome de Cabeçalho Incorreto**
   ```javascript
   // ❌ Incorreto
   headers: { 'Authorization': 'Bearer ' + token }

   // ✅ Correto
   headers: { 'X-FashionAI-APP-Token': token }
   ```

## Próximos Passos

Agora que você entende a autenticação, explore APIs específicas:

- [API de Busca](./search/overview) - Funcionalidade de busca de produtos
- [Endpoints de API](./api-endpoints) - Referência completa de endpoints
- [Integração de UI](./ui-integration) - Guias de integração de frontend
