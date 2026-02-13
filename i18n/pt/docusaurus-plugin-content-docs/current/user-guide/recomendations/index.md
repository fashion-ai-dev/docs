# Recomendações Inteligentes

Aprenda sobre o sistema inteligente da Fashion.AI e como ele aprimora a experiência do cliente através de sugestões de produtos personalizadas alimentadas por IA avançada.

## Tipos de Recomendações

### Produtos Similares
Entregue sugestões de produtos personalizadas baseadas no histórico de navegação do usuário. Alimentada por mais de 4.500 atributos de produtos, esta API ajuda a aumentar a conversão mostrando itens que correspondem ao estilo e intenção do comprador.

**Casos de Uso:**
- Recomendações em páginas de produtos
- Aprimoramento de navegação por categorias
- Oportunidades de venda cruzada

[Documentação técnica sobre Produtos Similares →](../../developer-guide/recommendations-search/api-endpoints#evento-categoryview)

### Monte o Look
Identifique e recomende automaticamente produtos adicionais apresentados na mesma imagem. Transforme cada look em um conjunto completo—exatamente como um personal stylist faria.

**Casos de Uso:**
- Sugestões de conjuntos completos
- Inspiração de estilo
- Upselling de itens complementares

[Documentação técnica sobre Monte o Look →](../../developer-guide/recommendations-search/api-endpoints#evento-shopthelook)

### Visual Merchandising
Reorganize listagens de produtos dinamicamente com base no que o usuário está realmente procurando. Crie exibições de categoria personalizadas e de alto desempenho que parecem uma vitrine personalizada.

**Casos de Uso:**
- Organização dinâmica de categorias
- Layouts de página inicial personalizados
- Destaque de tendências sazonais

[Documentação técnica sobre Visual Merchandising →](../../developer-guide/recommendations-search/vm-builder)


## Personalize suas Recomendações

Você pode controlar quais produtos a IA recomenda aplicando filtros personalizados para cada tipo de recomendação: **Produto**, **Categoria** e **Compre o Look**.

### Como acessar

1. No menu lateral, acesse **Personalização**
2. Na seção **Guia para Implementação da API**, clique no botão **Filtros de recomendação**

![Página de Personalização com botão de filtros](/img/tela1-recommendationFilter.png)

3. O painel de configurações será aberto:

![Painel de configurações de recomendação](/img/tela2-recommendationFilter.png)

### Filtros disponíveis

| Filtro | O que faz |
|--------|-----------|
| **Grade quebrada** | Prioriza produtos que ajudam a equilibrar a grade de tamanhos do seu estoque |
| **Desconto** | Escolha entre recomendar todos os produtos, apenas com desconto ou apenas sem desconto |
| **Faixa de preço** | Defina um intervalo de preço para os produtos recomendados — use a faixa customizada, filtre acima de R$ 10 mil ou inclua todos |
| **Estoque baixo** | Exclui das recomendações produtos com estoque abaixo do limite definido (ao clicar em "Estoque Baixo" aparecerá um campo para selecionar o número que a sua empresa considere estoque baixo - experiência 100% personalizada)|

### Passo a passo

1. **Escolha o tipo** — selecione a aba **Produto**, **Categoria** ou **Compre o Look**
2. **Ajuste os filtros** — ative ou desative cada filtro conforme sua estratégia
3. **Salve** — clique em **Salvar** para aplicar. Cada tipo é salvo separadamente
4. **Repita** — se quiser configurações diferentes para outro tipo, troque de aba e repita o processo

> 💡 **Dica**: Você pode usar filtros diferentes para cada tipo. Por exemplo, priorizar grade quebrada apenas em recomendações de **Produto**, e filtrar por desconto apenas em **Compre o Look**.

> ⚠️ Para limpar todos os filtros de um tipo, clique em **Limpar**.

## Próximos Passos

🚀 **Pronto para implementar recomendações?** Escolha seu caminho de integração:

- **[Referência de API](../../developer-guide/recommendations-search/api-endpoints)** - Guia de implementação técnica
- **[Autenticação](../../developer-guide/authentication)** - Configure seu acesso à API
- **[Integração de UI](../../developer-guide/recommendations-search/ui-integration)** - Exemplos de implementação frontend
- **[API de Busca](../../developer-guide/recommendations-search/search/overview)** - Busca inteligente de produtos
- **[Configuração de Analytics](../../developer-guide/analytics/google-analytics)** - Rastreie o desempenho
