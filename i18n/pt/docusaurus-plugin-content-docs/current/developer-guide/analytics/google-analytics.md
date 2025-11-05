---
sidebar_position: 3
---

# Integração com Google Analytics 4

Esta seção descreve como configurar o rastreamento de eventos da Fashion.AI no Google Analytics 4 para análises abrangentes e monitoramento de conversão.

## Eventos Obrigatórios

### Eventos Gerais de Recomendação

| Evento              | Quando ocorre                                           |
|---------------------|---------------------------------------------------------|
| `fashionai_view`    | Quando uma recomendação da Fashion.AI é exibida         |
| `fashionai_click`   | Quando o usuário clica em uma recomendação da Fashion.AI|
| `fashionai_addtocart`| Quando um produto recomendado é adicionado ao carrinho |

### Eventos Específicos do Shop The Look

| Evento                            | Quando ocorre                                     |
|-----------------------------------|---------------------------------------------------|
| `fashionai_view_shopthelook`      | Quando o botão "compre o look" é exibido          |
| `fashionai_click_shopthelook`     | Quando o botão "compre o look" é clicado          |
| `fashionai_addtocart_shopthelook` | Quando o botão "Eu quero" no modal é clicado     |

## Implementação do DataLayer

### Eventos Gerais de Recomendação

#### Visualização de Recomendação

```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'fashionai_view',
  event_category: 'engagement',
  event_label: 'recommendation_view',
  value: 1
});
```

#### Clique em Recomendação

```javascript
window.dataLayer.push({
  event: 'fashionai_click',
  event_category: 'engagement',
  event_label: 'recommendation_click',
  value: 1
});
```

#### Adicionar ao Carrinho de Recomendação

```javascript
window.dataLayer.push({
  event: 'fashionai_addtocart',
  event_category: 'ecommerce',
  event_label: 'add_to_cart_from_recommendation',
  value: 1
});
```

### Lembre de adicionar os eventos específicos do Shop The Look

## Verificação de Eventos

Para verificar se os eventos estão sendo disparados corretamente:

1. Abra as Ferramentas do Desenvolvedor do navegador (F12)
2. Vá para a aba Console
3. Digite `dataLayer` e pressione Enter
4. Verifique se os eventos aparecem no array dataLayer

Alternativamente, você pode usar a extensão "Google Analytics Debugger" ou "GA4 Debug View" no Google Analytics para monitorar eventos em tempo real.