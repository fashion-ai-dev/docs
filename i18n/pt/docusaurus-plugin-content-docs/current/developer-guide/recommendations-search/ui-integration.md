---
sidebar_position: 4
---

# Integração de Frontend

Este guia abrangente descreve como implementar componentes de interface de usuário para recursos do Fashion.AI em sua aplicação frontend.

## Referência Visual

Sugestões visuais para o componente "shop the look" estão disponíveis em nosso design de exemplo do Figma.

## Componentes de Interface

### Botão "Shop The Look"

- Posicionado sobre a imagem principal do produto
- Exibido apenas quando há recomendações disponíveis
- Aciona a abertura do modal/drawer de produtos relacionados

### Modal de Produtos Relacionados

O modal deve exibir:

- **Produtos retornados pela API** com botão "Eu quero" para adicionar ao carrinho
- **Informações do produto**: nome, preço, tamanhos disponíveis
- **Validação de estoque local** antes de renderizar
- **Botão de fechar modal**

### Comportamento

1. **Exibição do botão**: Mostrar apenas se houver produtos recomendados com estoque válido
2. **Abertura do modal**: Ao clicar no botão "shop the look"
3. **Adicionar ao carrinho**: Através do botão "Eu quero" para cada produto
4. **Fechamento**: Botão X ou clique fora do modal

## Validações Importantes

- ✅ Verificar estoque localmente antes de renderizar
- ✅ Validar se há produtos retornados pela API
- ✅ Implementar estados de carregamento durante as chamadas à API
- ✅ Lidar com erros de conectividade ou API indisponível

## Exemplo de Implementação

```javascript
// Pseudo-código para abertura de modal
function openShopTheLookModal(productId) {
  // 1. Fazer chamada à API
  const recommendations = await fetchShopTheLook(productId);

  // 2. Validar estoque localmente
  const validProducts = recommendations.filter(product =>
    hasStock(product.id)
  );

  // 3. Abrir modal apenas se houver produtos válidos
  if (validProducts.length > 0) {
    renderModal(validProducts);
  }
}
```
