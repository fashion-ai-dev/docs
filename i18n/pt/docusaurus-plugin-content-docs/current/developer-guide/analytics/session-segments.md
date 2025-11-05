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

Esta análise é **crucial** pois as recomendações geralmente ficam no final da página.

> **Importante**: O evento `fashionai_view` só é disparado quando as recomendações ficam **visíveis no viewport** (scroll tracking), não quando são apenas carregadas na página. Isso significa que esse evento já mede quantos usuários realmente viram as recomendações.

#### Criar Análise de Engajamento

1. **Criar Nova Exploração**
   - Vá para **Explorar > Criar uma exploração em branco**
   - Nome: `Engajamento Fashion.AI`

2. **Adicionar Eventos**
   - Na seção **Dimensões**, adicione:
     - Nome do evento
     - Origem da sessão
     - Tipo de dispositivo
     - Página (URL da página)

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
| fashionai_view | 50.000 | 100% (usuários que VIRAM) | - |
| fashionai_click | 5.000 | 10% | **10% CTR** |
| fashionai_addtocart | 1.500 | 3% | 30% dos cliques |

**O que significa CTR (Click-Through Rate)**:
```
CTR = fashionai_click / fashionai_view × 100
```

Esta métrica mostra quantos usuários que **viram** as recomendações (scroll até elas) realmente clicaram.

#### Análise dos Resultados por CTR

**CTR Baixo (< 5%)**
- ⚠️ **Problema**: Poucos usuários clicam mesmo vendo as recomendações
- **Possíveis Causas**:
  - Design pouco atrativo ou confuso
  - Produtos recomendados não são relevantes
  - CTA (Call to Action) não é claro
  - Imagens de baixa qualidade
  - Preços não competitivos
- **Soluções**:
  - Melhore o design/CTA das recomendações
  - Revise algoritmo de recomendação
  - Adicione reviews/ratings nos produtos
  - Teste A/B diferentes layouts
  - Adicione badges ("Mais vendido", "Recomendado para você", etc)

**CTR Médio (5-15%)**
- ✅ **Bom**: Taxa de engajamento aceitável
- **Oportunidades**:
  - Teste diferentes títulos e CTAs
  - Experimente mostrar mais/menos produtos
  - Adicione social proof (mais vendidos, avaliações)
  - Teste diferentes ordenações

**CTR Alto (> 15%)**
- 🎯 **Excelente**: Usuários estão muito engajados
- **Mantenha e Expanda**:
  - Continue monitorando
  - Documente as melhores práticas
  - Replique o sucesso em outras páginas
  - Considere aumentar o destaque das recomendações

#### Análise por Dimensões

**1. Por Tipo de Dispositivo**

Compare CTR entre desktop e mobile:

| Dispositivo | Views | Clicks | CTR |
|-------------|-------|--------|-----|
| Desktop | 30.000 | 4.500 | 15% |
| Mobile | 20.000 | 1.000 | 5% |

**Insights**:
- Mobile com CTR muito menor pode indicar problema de UX/design
- Otimize layout mobile (botões maiores, menos produtos por linha)

**2. Por Página**

Compare CTR entre diferentes páginas:

| Página | Views | Clicks | CTR |
|--------|-------|--------|-----|
| PDP (Página de Produto) | 35.000 | 5.250 | 15% |
| Categoria | 10.000 | 500 | 5% |
| Home | 5.000 | 250 | 5% |

**Insights**:
- PDP tem melhor CTR (usuário já está interessado em produtos)
- Páginas de categoria/home precisam de otimização

**3. Por Posição na Página**

Se você tiver eventos com posição, compare:

| Posição | Views | Clicks | CTR |
|---------|-------|--------|-----|
| Acima da dobra | 15.000 | 3.000 | 20% |
| Meio da página | 20.000 | 2.000 | 10% |
| Final da página | 15.000 | 750 | 5% |

**Insights**:
- Quanto mais acima, melhor o CTR
- Considere mover recomendações para cima quando possível

#### Exemplo de Análise Completa

| Métrica | Desktop | Mobile | Total |
|---------|---------|--------|-------|
| Sessões totais | 40.000 | 60.000 | 100.000 |
| fashionai_view | 30.000 (75%) | 20.000 (33%) | 50.000 (50%) |
| fashionai_click | 4.500 (15%) | 1.000 (5%) | 5.500 (11%) |
| fashionai_addtocart | 1.350 (30% dos clicks) | 300 (30% dos clicks) | 1.650 (30%) |

**Insights:**
- 50% dos usuários rolam até ver as recomendações
- Desktop: 75% veem, 15% clicam → excelente
- Mobile: 33% veem, 5% clicam → **precisa otimizar**
- Taxa de add to cart após click é consistente (30%)

**Ações Recomendadas:**
1. **Prioridade ALTA**: Otimizar experiência mobile
   - Mover recomendações mais para cima
   - Melhorar layout mobile
   - Testar sticky recommendations

2. **Prioridade MÉDIA**: Aumentar visibilidade geral
   - Adicionar âncora/link "Ver recomendações"
   - Destacar seção com animação sutil

3. **Prioridade BAIXA**: Melhorar CTR desktop
   - Já está bom (15%), mas pode testar melhorias incrementais

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

> **Lembre-se**: `fashionai_view` só dispara quando as recomendações ficam visíveis no viewport (scroll tracking).

**Métricas Principais:**
- **fashionai_view**: Usuários que viram as recomendações (scroll até viewport)
- **fashionai_click**: Total de cliques nas recomendações
- **fashionai_addtocart**: Add to cart a partir das recomendações
- **CTR**: `fashionai_click / fashionai_view × 100`
- **Conversion Rate**: `fashionai_addtocart / fashionai_click × 100`
- **View Rate**: `fashionai_view / Sessões × 100` (quantos usuários rolam até as recomendações)

**Dimensões para Análise:**
- Tipo de dispositivo (mobile vs desktop)
- Página (PDP, categoria, home, etc)
- Origem do tráfego
- País/Região

**Gráficos Recomendados:**
- **Funil de Conversão**: Sessões → Views (viram) → Clicks → Add to Cart → Purchase
- **Linha temporal**: CTR e View Rate ao longo do tempo
- **Comparação**: CTR por tipo de dispositivo
- **Tabela**: CTR por página (identificar onde funciona melhor)
- **Mapa de calor**: View Rate por página (quantos usuários chegam nas recomendações)
- **Gráfico de barras**: Comparação de todas as métricas entre mobile e desktop

**Dúvidas?** Consulte a documentação do [Google Analytics 4](./google-analytics) ou [Google Tag Manager](./google-tag-manager).
