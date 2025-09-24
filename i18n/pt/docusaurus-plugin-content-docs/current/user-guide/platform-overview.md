---
sidebar_position: 2
---

# Visão Geral das Recomendações

Conheça o sistema inteligente de recomendações da Fashion.AI e como ele melhora a experiência do cliente através de sugestões de produtos personalizadas alimentadas por IA avançada.

## Tipos de Recomendação

### 🎯 Produtos Similares
Ofereça sugestões de produtos personalizadas baseadas no histórico de navegação do usuário. Alimentado por mais de 4.500 atributos de produtos, esta API ajuda a aumentar a conversão mostrando itens que combinam com o estilo e intenção do comprador.

**Casos de Uso:**
- Recomendações na página do produto
- Melhoria na navegação por categorias
- Oportunidades de venda cruzada

[Saiba mais sobre Produtos Similares →](../developer-guide/api-endpoints#evento-de-visualização-de-categoria)

### 👗 Compre o Look
Identifique automaticamente e recomende produtos adicionais apresentados na mesma imagem. Transforme cada look em um conjunto completo—como um personal stylist faria.

**Casos de Uso:**
- Sugestões de conjuntos completos
- Inspiração de estilo
- Venda adicional de itens complementares

[Saiba mais sobre Compre o Look →](../developer-guide/api-endpoints#evento-compre-o-look)

### 📋 Visual Merchandising
Reorganize as listagens de produtos dinamicamente baseado no que o usuário realmente está procurando. Crie displays de categoria personalizados e de alta performance que parecem uma vitrine customizada.

**Casos de Uso:**
- Organização dinâmica de categorias
- Layouts personalizados da página inicial
- Destaque de tendências sazonais

[Saiba mais sobre Visual Merchandising →](../developer-guide/api-endpoints#evento-de-visualização-de-categoria)

## Como Nossa IA Funciona

### Processo de Mapeamento de Intenção

1. **Navegação de Produtos**: Rastreia produtos que os usuários navegaram durante a sessão
2. **Elementos de Categoria**: Analisa elementos visuais como silhuetas, padrões e detalhes de estilo
3. **Insights de Padrões**: Identifica texturas, tecidos e elementos estruturais
4. **Intenção de Estilo**: Entende ocasião, preferências de estilo e necessidades de versatilidade
5. **Comportamento do Usuário**: Cruza referências de buscas, produtos e compras passadas para usuários logados
6. **Predição de Intenção**: Relaciona produtos de diferentes categorias baseado no mapeamento de estilo

### Exemplo: Análise de Navegação de Vestidos

Quando um usuário navega por vestidos, nossa IA identifica:

**Elementos de Categoria:**
- Silhueta decote em V
- Alças finas
- Cintura definida
- Saia evasê ou rodada

**Insights de Padrões:**
- Pregas verticais
- Texturas botânicas ou minimalistas
- Tecidos leves e arejados
- Alfaiataria estruturada sutil

**Intenção de Estilo:**
- Feminino porém contemporâneo
- Sugere confiança, delicadeza e movimento
- Versatilidade dia-noite
- Ideal para ocasiões sociais primavera/verão

## Próximos Passos

🚀 **Pronto para implementar recomendações?** Escolha seu caminho de integração:

- **[Referência da API](../developer-guide/api-endpoints)** - Guia de implementação técnica
- **[Autenticação](../developer-guide/authentication)** - Configure seu acesso à API
- **[Integração de UI](../developer-guide/ui-integration)** - Exemplos de implementação frontend
- **[API de Busca](../developer-guide/Search/overview)** - Busca inteligente de produtos
- **[Configuração de Analytics](../developer-guide/Analytics/google-analytics)** - Rastreie performance