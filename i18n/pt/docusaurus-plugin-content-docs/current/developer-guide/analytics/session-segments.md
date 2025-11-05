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
   fashionai_addtocart (recomendações gerais)
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

### Análise 3: Funil Completo

Compare o funil completo entre usuários COM e SEM Fashion.AI:

| Etapa | COM Fashion.AI | SEM Fashion.AI | Diferença |
|-------|----------------|----------------|-----------|
| Sessões Totais | 20.000 | 80.000 | - |
| Add to Cart | 12.000 (60%) | 25.000 (31%) | +93% |
| Purchase | 5.000 (25%) | 8.000 (10%) | +150% |
| **ARPU Geral** | **R$ 6,25** | **R$ 1,50** | **+317%** |

**Insights Esperados:**
- Fashion.AI quase dobra a taxa de add to cart
- Fashion.AI mais que dobra a taxa de conversão final
- ARPU geral é significativamente maior com Fashion.AI (30% maior em case anterior)

### Análise 4: Engajamento com Recomendações (View vs Click)

Esta análise é **crucial** pois as recomendações geralmente ficam no final da página. É importante medir se os usuários estão realmente vendo e clicando nas recomendações.

#### Criar Análise de Engajamento

1. **Criar Nova Exploração**
   - Vá para **Explorar > Criar uma exploração em branco**
   - Nome: `Engajamento Fashion.AI`

2. **Adicionar Eventos**
   - Na seção **Dimensões**, adicione:
     - Nome do evento
     - Origem da sessão
     - Tipo de dispositivo

   - Na seção **Métricas**, adicione:
     - Contagem de eventos

3. **Filtrar por Eventos da Fashion.AI**
   - Crie um filtro: `Nome do evento | contém | fashionai`

4. **Criar Tabela Dinâmica**
   - Linhas: Nome do evento
   - Valores: Contagem de eventos

#### Métricas de Engajamento Esperadas

| Evento | Contagem | % do Total | Taxa de Conversão |
|--------|----------|------------|-------------------|
| fashionai_view | 50.000 | 100% | - |
| fashionai_click | 5.000 | 10% | **10% CTR** |
| fashionai_addtocart | 1.500 | 3% | 30% dos cliques |

**Análise dos Resultados:**

**CTR Baixo (< 5%)**
- ⚠️ **Problema**: Poucos usuários clicam mesmo vendo
- **Possíveis Causas**:
  - Recomendações estão muito abaixo do scroll
  - Design pouco atrativo
  - Produtos recomendados não são relevantes
  - Loading muito lento
- **Soluções**:
  - Mova as recomendações mais para cima na página
  - Melhore o design/CTA das recomendações
  - Teste diferentes posicionamentos A/B
  - Adicione lazy loading otimizado

**CTR Médio (5-15%)**
- ✅ **Bom**: Taxa de engajamento aceitável
- **Oportunidades**:
  - Teste diferentes títulos e CTAs
  - Experimente mostrar mais produtos
  - Adicione social proof (mais vendidos, etc)

**CTR Alto (> 15%)**
- 🎯 **Excelente**: Usuários estão engajados
- **Mantenha**:
  - Continue monitorando
  - Expanda para outras páginas
  - Documente as melhores práticas

#### Análise por Posicionamento na Página

Para entender melhor o impacto da posição:

1. **Adicione eventos de scroll** (recomendado):
```javascript
// Disparar quando usuário rola até as recomendações
window.dataLayer.push({
  event: 'fashionai_recommendations_visible',
  event_category: 'engagement',
  event_label: 'recommendations_scrolled_into_view',
  value: 1
});
```

2. **Compare as métricas**:
   - **Views**: Quantas vezes as recomendações foram carregadas
   - **Visible**: Quantas vezes ficaram visíveis no viewport
   - **Clicks**: Quantos cliques aconteceram

3. **Calcule Taxa de Visibilidade**:
   ```
   Taxa de Visibilidade = fashionai_recommendations_visible / fashionai_view
   ```

4. **Calcule CTR Real**:
   ```
   CTR Real = fashionai_click / fashionai_recommendations_visible
   ```

#### Exemplo de Análise Completa

| Métrica | Valor | % |
|---------|-------|---|
| Sessões com Fashion.AI carregada | 10.000 | 100% |
| Sessões onde ficou visível (scroll) | 6.000 | 60% |
| Sessões com clique | 900 | 9% total / **15% dos visíveis** |
| Sessões com add to cart | 270 | 2.7% total / **30% dos cliques** |

**Insights:**
- 40% dos usuários não rolam até as recomendações
- Dos que veem, 15% clicam (bom CTR)
- Oportunidade: Mover recomendações para cima pode aumentar conversão em 40%

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

### Dashboard 4: Análise de Valor

- ARPU por segmento
- LTV projetado
- Valor médio de primeira compra
- Frequência de compra

### Dashboard 5: Engajamento e Visibilidade

**Métricas Principais:**
- fashionai_view (total de carregamentos)
- fashionai_recommendations_visible (quantas ficaram visíveis)
- fashionai_click (total de cliques)
- **CTR**: fashionai_click / fashionai_view
- **CTR Real**: fashionai_click / fashionai_recommendations_visible
- **Taxa de Visibilidade**: fashionai_recommendations_visible / fashionai_view

**Dimensões para Análise:**
- Tipo de dispositivo (mobile vs desktop)
- Página (PDP, categoria, home, etc)
- Posição na página
- Origem do tráfego

**Gráficos Recomendados:**
- Funil: Views → Visible → Clicks → Add to Cart
- Linha temporal: CTR ao longo do tempo
- Comparação: CTR por tipo de dispositivo
- Heatmap: Taxa de visibilidade por página

**Dúvidas?** Consulte a documentação do [Google Analytics 4](./google-analytics) ou [Google Tag Manager](./google-tag-manager).
