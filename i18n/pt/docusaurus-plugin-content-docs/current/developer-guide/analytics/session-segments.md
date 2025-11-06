---
sidebar_position: 5
---

# Análise de Segmentos de Sessão e ARPU

Este guia explica como criar segmentos de sessão no Google Analytics 4 para comparar o impacto da Fashion.AI nas métricas de conversão e ARPU (Average Revenue Per User).

## Visão Geral

Criar segmentos de sessão permite comparar o comportamento e performance entre usuários que interagiram com recomendações da Fashion.AI e aqueles que não interagiram, possibilitando medir o impacto real da ferramenta nas conversões e no carrinho.

## Métricas Principais

- **ARPU (Average Revenue Per User)**: Receita média por usuário
- **Taxa de Conversão**: Percentual de sessões que resultam em compra
- **Add to Cart Rate**: Percentual de sessões com adição ao carrinho
- **Taxa de Cliques**: Percentual de visualizações que geram cliques

## Estrutura dos Segmentos

Vamos criar 4 segmentos para análise comparativa:

1. **Purchase COM Fashion.AI**: Sessões com compra E interação com Fashion.AI
2. **Purchase SEM Fashion.AI**: Sessões com compra MAS sem interação com Fashion.AI
3. **Add to Cart COM Fashion.AI**: Sessões com add to cart E interação com Fashion.AI
4. **Add to Cart SEM Fashion.AI**: Sessões com add to cart MAS sem interação com Fashion.AI

## Criando os Segmentos

### Segmento 1: Purchase COM Fashion.AI

Este segmento identifica usuários que realizaram compra E interagiram com Fashion.AI.

#### Passo a Passo

1. **Acesse o Google Analytics 4**
   - Vá para **Explorar > Criar uma exploração em branco**

2. **Criar o Segmento**
   - Na guia **Variáveis**, clique em **+** ao lado de **Segmentos**
   - Selecione **Criar um segmento personalizado**
   - Escolha **Segmento de sessão**

3. **Configurar as Condições**
   - Nome: `Purchase COM Fashion.AI`
   - Adicione um **grupo de condições** com operador **E** entre os grupos:

   **Grupo 1: Teve Purchase**
   ```
   purchase
   ```

   **Grupo 2: Interagiu com Fashion.AI**
   ```
   fashionai_click
   ```

4. **Salvar o Segmento**
   - Clique em **Salvar e aplicar**

### Segmento 2: Purchase SEM Fashion.AI

Este segmento identifica usuários que realizaram compra MAS NÃO interagiram com Fashion.AI.

#### Passo a Passo

1. **Criar Novo Segmento**
   - Na guia **Variáveis**, clique em **+** ao lado de **Segmentos**
   - Selecione **Criar um segmento personalizado**
   - Escolha **Segmento de sessão**

2. **Configurar as Condições**
   - Nome: `Purchase SEM Fashion.AI`
   - Adicione um **grupo de condições** com operador **E** entre os grupos:

   **Grupo 1: Teve Purchase**
   ```
   purchase
   ```

   **Grupo 2: NÃO Interagiu com Fashion.AI, clique em "Adicionar Grupo de Exclusão"**
   ```
   fashionai_click
   ```

3. **Salvar o Segmento**
   - Clique em **Salvar e aplicar**

### Segmento 3: Add to Cart COM Fashion.AI

Este segmento identifica usuários que adicionaram ao carrinho E interagiram com Fashion.AI.

#### Passo a Passo

1. **Criar Novo Segmento**
   - Na guia **Variáveis**, clique em **+** ao lado de **Segmentos**
   - Selecione **Criar um segmento personalizado**
   - Escolha **Segmento de sessão**

2. **Configurar as Condições**
   - Nome: `Add to Cart COM Fashion.AI`
   - Adicione um **grupo de condições** com operador **E** entre os grupos:

   **Grupo 1: Teve Add to Cart**
   ```
   add_to_cart
   ```

   **Grupo 2: Interagiu com Fashion.AI (use operador OU entre as condições abaixo)**
   ```
   fashionai_addtocart (produtos simmilares e vitrines)
   OU
   fashionai_addtocart_shopthelook (botão do compre o look na página de produto)
   ```

3. **Salvar o Segmento**
   - Clique em **Salvar e aplicar**

### Segmento 4: Add to Cart SEM Fashion.AI

Este segmento identifica usuários que adicionaram ao carrinho MAS NÃO interagiram com Fashion.AI.

#### Passo a Passo

1. **Criar Novo Segmento**
   - Na guia **Variáveis**, clique em **+** ao lado de **Segmentos**
   - Selecione **Criar um segmento personalizado**
   - Escolha **Segmento de sessão**

2. **Configurar as Condições**
   - Nome: `Add to Cart SEM Fashion.AI`
   - Adicione um **grupo de condições** com operador **E** entre os grupos:

   **Grupo 1: Teve Add to Cart**
   ```
   add_to_cart
   ```

   **Grupo 2: NÃO Interagiu com Fashion.AI, clique em "Adicionar Grupo de Exclusão"**
   ```
   Nome do evento | não corresponde exatamente | fashionai_addtocart
   OU
   Nome do evento | não corresponde exatamente | fashionai_addtocart_shopthelook
   ```

3. **Salvar o Segmento**
   - Clique em **Salvar e aplicar**

## Configurando a Análise Comparativa

### Adicionar Métricas

Na seção **Métricas** da sua exploração, adicione:

1. **Sessões**: Métrica padrão
2. **Usuários ativos**: Para calcular ARPU
3. **Transações**: Número de compras
4. **Receita**: Receita total
5. **Eventos add_to_cart**: Total de adições ao carrinho
6. **Taxa de conversão**: Percentual de conversão

### Adicionar Dimensões

Na seção **Dimensões**, adicione:

1. **Nome do segmento**: Para comparar os segmentos
2. **Data**: Para análise temporal
3. **Origem da sessão**: Para análise de canal

### Criar Tabela de Comparação

1. **Configurar a Tabela**
   - Formato: Tabela
   - Linhas: Nome do segmento
   - Valores: Todas as métricas adicionadas

2. **Adicionar Coluna Calculada para ARPU**
   - Clique em **Métricas > Adicionar métrica calculada**
   - Nome: `ARPU (Average Revenue Per User)`
   - Fórmula: `Receita / Usuários ativos`
   - Formato: Moeda

3. **Adicionar Coluna Calculada para Taxa de Add to Cart**
   - Clique em **Métricas > Adicionar métrica calculada**
   - Nome: `Taxa de Add to Cart`
   - Fórmula: `Eventos add_to_cart / Sessões`
   - Formato: Percentual

4. **Adicionar Coluna Calculada para Taxa de Cliques (CTR)**
   - Clique em **Métricas > Adicionar métrica calculada**
   - Nome: `CTR Fashion.AI (%)`
   - Fórmula: `Eventos fashionai_click / Eventos fashionai_view`
   - Formato: Percentual
   - **Importante**: Esta métrica mostra quantos usuários que viram as recomendações realmente clicaram

5. **Adicionar Coluna Calculada para View Rate**
   - Clique em **Métricas > Adicionar métrica calculada**
   - Nome: `View Rate (%)`
   - Fórmula: `Eventos fashionai_view / Sessões`
   - Formato: Percentual
   - **Importante**: Esta métrica mostra quantos % dos usuários rolam até ver as recomendações

## Interpretando os Resultados

### Análise 1: Comparação de Purchase

Compare os segmentos **Purchase COM Fashion.AI** vs **Purchase SEM Fashion.AI**

| Métrica | Purchase COM Fashion.AI | Purchase SEM Fashion.AI | Diferença |
|---------|-------------------------|-------------------------|-----------|
| Sessões | 5.000 | 8.000 | - |
| Usuários | 4.200 | 6.500 | - |
| Transações | 5.000 | 8.000 | - |
| Receita | R$ 125.000 | R$ 120.000 | - |
| **ARPU** | **R$ 29,76** | **R$ 18,46** | **+61%** |
| **Ticket Médio** | **R$ 25,00** | **R$ 15,00** | **+67%** |

**Insights Esperados:**
- Usuários que compram após interagir com Fashion.AI tendem a ter ARPU maior
- Ticket médio superior indica que recomendações influenciam valor da compra, sugerindo peças que o cliente vai realmente comprar

### Análise 2: Comparação de Add to Cart

Compare os segmentos **Add to Cart COM Fashion.AI** vs **Add to Cart SEM Fashion.AI**

| Métrica | Add to Cart COM Fashion.AI | Add to Cart SEM Fashion.AI | Diferença |
|---------|---------------------------|---------------------------|-----------|
| Sessões | 12.000 | 25.000 | - |
| Usuários | 10.000 | 20.000 | - |
| Add to Cart | 15.000 | 30.000 | - |
| Transações | 3.600 | 5.000 | - |
| **Taxa de Conversão** | **30%** | **20%** | **+50%** |
| **Itens por Sessão** | **1,25** | **1,20** | **+4%** |

**Insights Esperados:**
- Usuários que adicionam ao carrinho com Fashion.AI convertem mais
- Maior taxa de conversão indica melhor qualidade das recomendações
- Fashion.AI aumenta a intenção de compra

### Análise 4: Engajamento com Recomendações (View vs Click)

Esta análise é **crucial** pois as recomendações geralmente ficam no final da página.

> **Importante**: O evento `fashionai_view` só é disparado quando as recomendações ficam **visíveis no viewport** (scroll tracking), não quando são apenas carregadas na página. Isso significa que esse evento já mede quantos usuários realmente viram as recomendações.

## Dashboards e Relatórios

### Dashboard 1: Visão Geral de Purchase

- ARPU: Purchase COM vs SEM Fashion.AI
- Volume de transações por segmento
- Ticket médio comparativo
- Receita total por segmento

### Dashboard 2: Análise de Add to Cart

- Taxa de add to cart: COM vs SEM Fashion.AI
- Taxa de conversão de carrinho para compra
- Itens médios por carrinho
- Abandono de carrinho comparativo

### Dashboard 3: Funil de Conversão

Visualização do funil completo:
```
Sessões
  ↓
Visualizações Fashion.AI
  ↓
Cliques Fashion.AI
  ↓
Add to Cart
  ↓
Purchase
```

Com métricas de conversão em cada etapa para ambos os grupos.

**Dúvidas?** Consulte a documentação do [Google Analytics 4](./google-analytics) ou [Google Tag Manager](./google-tag-manager).
