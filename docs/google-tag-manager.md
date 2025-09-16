---
sidebar_position: 4
---

# Google Tag Manager (GTM)

Esta seção detalha como configurar o Google Tag Manager para capturar e enviar os eventos da Fashion.AI para o Google Analytics 4.

## Configuração das Variáveis

### Criar variáveis no GTM

1. No menu lateral, clique em **Variáveis > Nova**
2. **Tipo**: Variável da camada de dados

Crie as seguintes variáveis:
- `event_category`
- `event_label`
- `value`

## Configuração dos Acionadores (Triggers)

### Trigger: Visualização da recomendação

1. **Acionadores > Novo**
2. **Tipo**: Evento personalizado
3. **Nome do Evento**: `fashionai_view_shopthelook`

### Trigger: Clique na recomendação

1. **Acionadores > Novo**
2. **Tipo**: Evento personalizado
3. **Nome do Evento**: `fashionai_click_shopthelook`

### Trigger: Adicionar ao carrinho

1. **Acionadores > Novo**
2. **Tipo**: Evento personalizado
3. **Nome do Evento**: `fashionai_addtocart_shopthelook`

## Configuração das Tags GA4

### GA4 - Visualização da recomendação

1. **Tags > Nova**
2. **Tipo**: Google Analytics: evento do GA4
3. **ID da métrica**: seu Measurement ID (G-XXXXXXX)
4. **Nome do Evento**: `fashionai_view_shopthelook`
5. **Parâmetros**:
   - `event_category`: `{{event_category}}`
   - `event_label`: `{{event_label}}`
   - `value`: `{{value}}`
6. **Acionamento**: trigger `fashionai_view_shopthelook`

### GA4 - Clique na recomendação

1. **Tags > Nova**
2. **Tipo**: Google Analytics: evento do GA4
3. **ID da métrica**: seu Measurement ID (G-XXXXXXX)
4. **Nome do Evento**: `fashionai_click_shopthelook`
5. **Parâmetros**:
   - `event_category`: `{{event_category}}`
   - `event_label`: `{{event_label}}`
   - `value`: `{{value}}`
6. **Acionamento**: trigger `fashionai_click_shopthelook`

### GA4 - Adicionar ao carrinho

1. **Tags > Nova**
2. **Tipo**: Google Analytics: evento do GA4
3. **ID da métrica**: seu Measurement ID (G-XXXXXXX)
4. **Nome do Evento**: `fashionai_addtocart_shopthelook`
5. **Parâmetros**:
   - `event_category`: `{{event_category}}`
   - `event_label`: `{{event_label}}`
   - `value`: `{{value}}`
6. **Acionamento**: trigger `fashionai_addtocart_shopthelook`

## Teste e Validação

### Testar com o modo Preview

1. Clique em **Visualizar** no GTM
2. Acesse o site, dispare os eventos e verifique se as tags aparecem no Tag Assistant
3. Valide se os parâmetros foram enviados corretamente

### Checklist de Validação

- [ ] Variáveis criadas corretamente
- [ ] Triggers configurados para os eventos corretos
- [ ] Tags GA4 com Measurement ID correto
- [ ] Parâmetros mapeados para as variáveis
- [ ] Teste no modo Preview executado com sucesso
- [ ] Eventos aparecendo no GA4 Debug View