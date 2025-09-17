---
sidebar_position: 5
---

# Guia de Integração Frontend

Este guia abrangente descreve como implementar componentes de interface do usuário para recursos da Fashion.AI em sua aplicação frontend.

## Referência Visual

Sugestões visuais para o componente "compre o look" estão disponíveis em nosso design de exemplo no Figma.

## Componentes de Interface

### Botão "Compre o Look"

- Posicionado sobre a imagem principal do produto
- Exibido apenas quando recomendações estão disponíveis
- Aciona a abertura do modal/gaveta de produtos relacionados

### Modal de Produtos Relacionados

O modal deve exibir:

- **Produtos retornados pela API** com botão "Eu quero" para adicionar ao carrinho
- **Informações do produto**: nome, preço, tamanhos disponíveis
- **Validação de estoque local** antes da renderização
- **Botão de fechar modal**

### Comportamento

1. **Exibição do botão**: Mostrar apenas se houver produtos recomendados com estoque válido
2. **Abertura do modal**: Ao clicar no botão "compre o look"
3. **Adicionar ao carrinho**: Através do botão "Eu quero" para cada produto
4. **Fechamento**: Botão X ou clique fora do modal

## Validações Importantes

- ✅ Verificar estoque localmente antes da renderização
- ✅ Validar se há produtos retornados pela API
- ✅ Implementar estados de carregamento durante chamadas da API
- ✅ Tratar erros de conectividade ou API indisponível

## Exemplo de Implementação

```javascript
// Pseudo-código para abertura do modal
function openShopTheLookModal(productId) {
  // 1. Fazer chamada da API
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