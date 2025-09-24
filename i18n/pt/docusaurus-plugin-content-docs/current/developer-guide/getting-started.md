---
sidebar_position: 1
---

# Primeiros Passos para Desenvolvedores

Guia de início rápido para desenvolvedores integrando FashionAI em suas aplicações.

## 🚀 Configuração Rápida (5 minutos)

### 1. Autenticação
Obtenha suas credenciais de API e comece a fazer solicitações:
- Gere token da API no painel
- Adicione aos cabeçalhos: `Authorization: Bearer SEU_TOKEN`
- Teste com chamada de API de exemplo

[→ Guia Completo de Autenticação](./authentication)

### 2. APIs Principais
**API de Recomendações** - Sugestões personalizadas de produtos
```javascript
POST /api/recommendations
{
  "user_id": "user123",
  "context": "product_page",
  "product_id": "item456"
}
```

**API de Busca** - Busca inteligente de produtos
```javascript
POST /api/search
{
  "query": "vestido vermelho de verão",
  "filters": { "category": "vestidos" }
}
```

[→ Referência Completa da API](./api-endpoints)

## 🔧 Opções de Integração

### Integração Frontend
Adicione widgets de recomendação e busca à sua UI:
- Componentes React/Vue/Angular
- Widgets JavaScript vanilla
- SDKs mobile

[→ Guia de Integração de UI](./ui-integration)

### Específico por Plataforma
Configuração rápida para plataformas de e-commerce populares:
- **Shopify** - Integração de app nativa
- **VTEX** - Componentes personalizados
- **Implementações customizadas** - Exemplos do mundo real

[→ Todas as Integrações de Plataforma](./integrations/)

## 📊 Analytics & Rastreamento

### Google Analytics Enhanced Ecommerce
Rastreie o desempenho de recomendações e comportamento de busca:
```javascript
// Rastrear cliques em recomendações
gtag('event', 'recommendation_click', {
  'item_id': 'product123',
  'item_category': 'vestidos'
});
```

[→ Configuração de Analytics & Rastreamento](./analytics/)

## 🎯 Recursos Avançados

### Configuração de Busca
- Busca semântica com linguagem natural
- Busca por similaridade visual
- Algoritmos de ranking personalizados

[→ Detalhes da API de Busca](./search/overview) | [→ Exemplos de Busca](./search/examples)

### Organização de Produtos
- Auto-categorização com taxonomias
- Classificação de estilo e tendência
- Agrupamento sazonal de produtos

[→ Guia de Taxonomias](./taxonomies)

### Exemplos do Mundo Real
Padrões completos de integração e amostras de código:
- Implementações de lojas e-commerce
- Integrações de aplicativos mobile
- Arquitetura de microsserviços

[→ Exemplos de Integração](./integrations/integration-examples)

## 🆘 Precisa de Ajuda?

- **Problemas de API** → Verifique [Autenticação](./authentication)
- **Problemas de UI** → Veja [Integração de UI](./ui-integration)
- **Ajuda de Plataforma** → [Integrações de Plataforma](./integrations/)
- **Configuração de Analytics** → [Analytics & Rastreamento](./analytics/)
- **Configuração Avançada** → [Exemplos de Integração](./integrations/integration-examples)

## 📋 Próximos Passos

1. **[Configure autenticação](./authentication)** - Obtenha suas credenciais de API
2. **[Teste endpoints da API](./api-endpoints)** - Faça suas primeiras chamadas
3. **[Adicione à sua UI](./ui-integration)** - Integre componentes frontend
4. **[Configure analytics](./analytics/)** - Rastreie o desempenho
5. **[Entre em produção](./integrations/integration-examples)** - Deploy de produção

---

**Pronto para integrar?** Comece com [Autenticação](./authentication) →