---
sidebar_position: 3
---

# Google Analytics 4 (GA4)

Esta seção descreve como configurar o tracking dos eventos da Fashion.AI no Google Analytics 4.

## Eventos Obrigatórios

| Evento                            | Quando ocorre                                |
|-----------------------------------|----------------------------------------------|
| `fashionai_view_shopthelook`      | Quando o botão "compre o look" é exibido     |
| `fashionai_click_shopthelook`     | Quando o botão "compre o look" é clicado     |
| `fashionai_addtocart_shopthelook` | Quando o botão "eu quero" do modal é clicado |

## Implementação no DataLayer

### View do botão "compre o look"

```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'fashionai_view_shopthelook',
  event_category: 'engagement',
  event_label: 'shopthelook_button_view',
  value: 1
});
```

### Clique no botão "compre o look"

```javascript
window.dataLayer.push({
  event: 'fashionai_click_shopthelook',
  event_category: 'engagement',
  event_label: 'shopthelook_button_click',
  value: 1
});
```

### Clique em "eu quero" dentro do modal

```javascript
window.dataLayer.push({
  event: 'fashionai_addtocart_shopthelook',
  event_category: 'ecommerce',
  event_label: 'add_to_cart_from_shopthelook',
  value: 1
});
```

## Verificação dos Eventos

Para verificar se os eventos estão sendo disparados corretamente:

1. Abra o Developer Tools do navegador (F12)
2. Vá para a aba Console
3. Digite `dataLayer` e pressione Enter
4. Verifique se os eventos aparecem no array do dataLayer

Alternativamente, você pode usar a extensão "Google Analytics Debugger" ou "GA4 Debug View" no Google Analytics para monitorar os eventos em tempo real.