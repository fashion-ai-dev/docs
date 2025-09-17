---
sidebar_position: 5
---

# Guia de Integração Frontend

Este guia abrangente descreve como implementar componentes de interface do usuário para recursos da Fashion.AI em sua aplicação frontend.

## Referência Visual

A sugestão visual para o bloco "compre o look" está disponível no Figma de exemplo.

## Componentes da Interface

### Botão "Compre o Look"

- Posicionado sobre a imagem principal do produto
- Exibido apenas quando há recomendações disponíveis
- Trigger para abrir o modal/drawer de produtos relacionados

### Modal de Produtos Relacionados

O modal deve exibir:

- **Produtos retornados pela API** com botão "eu quero" para adicionar ao carrinho
- **Informações de produto**: nome, preço, tamanhos disponíveis
- **Validação de estoque** local antes da renderização
- **Botão de fechamento** do modal

### Comportamento

1. **Exibição do botão**: Só mostrar se houver produtos recomendados com estoque válido
2. **Abertura do modal**: Ao clicar no botão "compre o look"
3. **Adição ao carrinho**: Através do botão "eu quero" de cada produto
4. **Fechamento**: Botão X ou clique fora do modal

## Validações Importantes

- ✅ Verificar estoque localmente antes de renderizar
- ✅ Validar se há produtos retornados pela API
- ✅ Implementar loading states durante chamadas da API
- ✅ Tratar erros de conectividade ou API indisponível

## Exemplo de Implementação

```javascript
// Pseudo-código para abertura do modal
function openShopTheLookModal(productId) {
  // 1. Fazer chamada para API
  const recommendations = await fetchShopTheLook(productId);
  
  // 2. Validar estoque localmente
  const validProducts = recommendations.filter(product => 
    hasStock(product.id)
  );
  
  // 3. Só abrir modal se houver produtos válidos
  if (validProducts.length > 0) {
    renderModal(validProducts);
  }
}
```