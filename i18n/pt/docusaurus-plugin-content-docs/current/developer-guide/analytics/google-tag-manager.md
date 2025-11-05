---
sidebar_position: 4
---

# Guia de Configuração do Google Tag Manager

Este guia abrangente detalha como configurar o Google Tag Manager para capturar e enviar eventos da Fashion.AI para o Google Analytics 4.

## Configuração de Variáveis

### Criar Variáveis no GTM

1. No menu lateral, clique em **Variáveis > Nova**
2. **Tipo**: Variável da Camada de Dados

Crie as seguintes variáveis:
- `event_category`
- `event_label`
- `value`

## Configuração de Acionadores

### Acionador: Visualização de Recomendação

1. **Acionadores > Novo**
2. **Tipo**: Evento Personalizado
3. **Nome do Evento**: `fashionai_view`

### Acionador: Clique de Recomendação

1. **Acionadores > Novo**
2. **Tipo**: Evento Personalizado
3. **Nome do Evento**: `fashionai_click`

### Acionador: Visualização Shop The Look

1. **Acionadores > Novo**
2. **Tipo**: Evento Personalizado
3. **Nome do Evento**: `fashionai_view_shopthelook`

### Acionador: Clique Shop The Look

1. **Acionadores > Novo**
2. **Tipo**: Evento Personalizado
3. **Nome do Evento**: `fashionai_click_shopthelook`

### Acionador: Adicionar ao Carrinho (Geral)

1. **Acionadores > Novo**
2. **Tipo**: Evento Personalizado
3. **Nome do Evento**: `fashionai_addtocart`

### Acionador: Adicionar ao Carrinho (Shop The Look)

1. **Acionadores > Novo**
2. **Tipo**: Evento Personalizado
3. **Nome do Evento**: `fashionai_addtocart_shopthelook`

## Configuração de Tags GA4

### GA4 - Visualização de Recomendação

1. **Tags > Nova**
2. **Tipo**: Google Analytics: Evento GA4
3. **ID de Medição**: seu ID de Medição (G-XXXXXXX)
4. **Nome do Evento**: `fashionai_view`
5. **Parâmetros**:
   - `event_category`: `{{event_category}}`
   - `event_label`: `{{event_label}}`
   - `value`: `{{value}}`
6. **Acionamento**: acionador `fashionai_view`

### GA4 - Clique de Recomendação

1. **Tags > Nova**
2. **Tipo**: Google Analytics: Evento GA4
3. **ID de Medição**: seu ID de Medição (G-XXXXXXX)
4. **Nome do Evento**: `fashionai_click`
5. **Parâmetros**:
   - `event_category`: `{{event_category}}`
   - `event_label`: `{{event_label}}`
   - `value`: `{{value}}`
6. **Acionamento**: acionador `fashionai_click`

### GA4 - Adicionar ao Carrinho (Geral)

1. **Tags > Nova**
2. **Tipo**: Google Analytics: Evento GA4
3. **ID de Medição**: seu ID de Medição (G-XXXXXXX)
4. **Nome do Evento**: `fashionai_addtocart`
5. **Parâmetros**:
   - `event_category`: `{{event_category}}`
   - `event_label`: `{{event_label}}`
   - `value`: `{{value}}`
6. **Acionamento**: acionador `fashionai_addtocart`

### Lembre de adicionar as tags de compre o look (shop the look)

### Testar com Modo de Visualização

1. Clique em **Visualizar** no GTM
2. Acesse o site, dispare eventos e verifique se as tags aparecem no Assistente de Tags
3. Valide se os parâmetros foram enviados corretamente