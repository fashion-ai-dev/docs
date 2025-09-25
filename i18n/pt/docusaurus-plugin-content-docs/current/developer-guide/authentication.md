---
sidebar_position: 3
---

# Autenticação de API - Token do App

Aprenda como autenticar suas requisições para todas as APIs da Fashion.AI usando tokens de app seguros.

## Visão Geral

Todas as APIs da FashionAI (Busca, Recomendações) usam o mesmo método de autenticação com tokens de app. Esta abordagem unificada simplifica a integração e permite que você use um único token em ambos os serviços.

## Método de Autenticação

Todas as APIs usam **X-FashionAI-APP-Token** via cabeçalhos personalizados.

### Cabeçalhos Obrigatórios

| Cabeçalho | Obrigatório | Descrição |
|-------------|---------------|-------------|
| `Content-Type` | Sim | Deve ser `application/json` |
| `X-FashionAI-APP-Token` | Sim | Seu token de aplicação |

## Obtendo Seu Token

### Passo 1: Acessar o Painel

1. Faça login no seu [Painel FashionAI](https://dashboard.fashionaiale.com)
2. Navegue para **Configurações de API** na barra lateral
3. Clique na seção **Tokens de API**

### Passo 2: Gerar Token

1. Clique em **"Gerar Novo Token"**
2. Digite um nome descritivo (ex: "Token de API de Produção")
4. Clique em **"Criar Token"**

![Geração de Token do App](/img/app-token.png)

### Passo 3: Copiar Token

```bash
# Seu token se parecerá com isto:
X-FashionAI-APP-Token: ab1234567890abcdef...
```

⚠️ **Importante**: Copie e armazene seu token imediatamente. Ele não será mostrado novamente por motivos de segurança.

### Problemas Comuns

1. **Nome de Cabeçalho Errado**
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
- [Integração de UI](./ui-integration) - Guias de integração frontend