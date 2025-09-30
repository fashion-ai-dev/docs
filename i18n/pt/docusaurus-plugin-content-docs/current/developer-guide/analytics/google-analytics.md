---
sidebar_position: 3
---

# Integração com Google Analytics 4

Esta seção descreve como configurar o rastreamento de eventos da Fashion.AI no Google Analytics 4 para análises abrangentes e monitoramento de conversão.

## Eventos Obrigatórios

| Evento                            | Quando ocorre                                     |
|-----------------------------------|---------------------------------------------------|
| `fashionai_view_shopthelook`      | Quando o botão "compre o look" é exibido          |
| `fashionai_click_shopthelook`     | Quando o botão "compre o look" é clicado          |
| `fashionai_addtocart_shopthelook` | Quando o botão "Eu quero" no modal é clicado     |

## Implementação do DataLayer

### Visualização do Botão "Compre o Look"

```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'fashionai_view_shopthelook',
  event_category: 'engagement',
  event_label: 'shopthelook_button_view',
  value: 1
});
```

### Clique no Botão "Compre o Look"

```javascript
window.dataLayer.push({
  event: 'fashionai_click_shopthelook',
  event_category: 'engagement',
  event_label: 'shopthelook_button_click',
  value: 1
});
```

### Clique "Eu Quero" Dentro do Modal

```javascript
window.dataLayer.push({
  event: 'fashionai_addtocart_shopthelook',
  event_category: 'ecommerce',
  event_label: 'add_to_cart_from_shopthelook',
  value: 1
});
```

## Verificação de Eventos

Para verificar se os eventos estão sendo disparados corretamente:

1. Abra as Ferramentas do Desenvolvedor do navegador (F12)
2. Vá para a aba Console
3. Digite `dataLayer` e pressione Enter
4. Verifique se os eventos aparecem no array dataLayer

Alternativamente, você pode usar a extensão "Google Analytics Debugger" ou "GA4 Debug View" no Google Analytics para monitorar eventos em tempo real.