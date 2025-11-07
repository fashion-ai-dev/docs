---
sidebar_position: 2
---

# Como Criar e Gerenciar Coleções

Aprenda a criar coleções personalizadas de produtos para exibir em seu site de forma fácil e rápida.

## O que são Coleções?

Coleções são grupos de produtos que você escolhe para destacar em seu site. Por exemplo:
- Lançamentos da semana
- Produtos em promoção
- Looks de verão
- Mais vendidos

## Passo a Passo

### 1. Acesse Coleções

Clique em **Coleções** no menu lateral.

### 2. Crie uma Nova Coleção

Crie uma coleção clicando no link mostrado na imagem:

![Criar Coleção](/img/tela1-vm-builder.png)

### 3. Abra a Coleção

Clique no botão **visualizar slices** para começar a configurar sua coleção:

![Visualizar Slices](/img/tela2-vm-builder.png)

### 4. Configure as Informações da Coleção

Você verá uma página dividida em duas partes:

**Seção Superior**: Informações da coleção
- Nome da coleção
- Descrição
- URL (endpoint) para usar esta coleção em seu site
- Botão gerar link (feed mobile para visualizar produtos da coleção - slice ativo)

**Seção Inferior**: Slices (versões da coleção)

### 5. Entendendo os Slices

Slices são diferentes versões da sua coleção. Você pode criar vários, mas apenas um fica ativo por vez.

**Por que usar slices?**
- Preparar uma nova versão sem afetar a que está no ar
- Realizar testes A/B com diferentes produtos
- Ter versões sazonais prontas para ativar

### 6. Crie um Slice

Crie seu primeiro slice:

![Criar Slice](/img/tela3-vm-builder.png)

Ao criar um slice, você precisará configurar:

- **Nome do slice**: Dê um nome descritivo (ex: "Casacos de Lã", "Produtos Promoção Verão")
- **Tipo**: Escolha o tipo do slice:
  - `MANUAL`: Você seleciona e organiza os produtos manualmente
  - Outros tipos podem estar disponíveis em breve
- **Data de início**: Quando o slice deve se tornar ativo
- **Data de término**: Quando o slice deve expirar

> **Dica**: Para um slice sem expiração, defina uma data de término distante (ex: vários anos no futuro).

#### Indicadores de Status do Slice

Os slices têm indicadores visuais de status baseados em suas datas:
- 🟩 **Verde (Ativo)**: A data atual está entre a data de início e término
- 🟨 **Amarelo (Agendado)**: A data de início ainda não chegou
- 🟥 **Vermelho (Expirado)**: A data de término já passou

### 7. Adicione Produtos

Clique em **Selecionar Produtos** para escolher quais produtos farão parte da coleção.

Selecione os que você deseja adicionar.

### 8. Organize a Ordem dos Produtos

Arraste os produtos para definir a ordem em que aparecerão em seu site.

**Antes de ordenar:**
![Arrastar Produtos - Estado Inicial](/img/tela4-vm-builder.png)

**Após ordenar:**
![Arrastar Produtos - Organizado](/img/tela5-vm-builder.png)

> **Dica**: Os produtos aparecerão no site exatamente na ordem que você definir aqui.

### 9. Limites de Produtos e Status Ativo

**Limites Importantes:**
- Cada slice pode conter **até 500 produtos no máximo**
- Se precisar de mais produtos, considere criar múltiplas coleções

**Status Ativo do Produto:**
Cada produto em um slice tem um campo `active` que indica se o produto está atualmente disponível com base nos filtros aplicados ao slice. Isso é útil para:
- Ocultar produtos fora de estoque
- Aplicar filtros de disponibilidade
- Gerenciar produtos sazonais

## Publicando sua Coleção

Quando sua coleção estiver pronta:

1. Revise se todos os produtos estão corretos
2. Verifique se a ordem está como você deseja
3. Selecione o período em que este slice deve ficar ativo

Pronto! Sua coleção estará disponível no site.

## Dicas Importantes

✅ **Dê nomes claros**: "Verão 2024", "Promoção Black Friday", etc.

✅ **Crie slices extras**: Sempre tenha uma versão de backup pronta

✅ **Apenas um ativo**: Lembre-se que apenas um slice fica ativo por vez

✅ **Teste antes**: Sempre revise antes de ativar um novo slice

## Perguntas Frequentes

**Posso ter múltiplas coleções?**
Sim! Crie quantas coleções precisar para diferentes seções do seu site.

**Como sei qual slice está ativo?**
O slice ativo terá um indicador visual na interface.

**Quanto tempo leva para atualizar no site?**
As mudanças aparecem quase instantaneamente após ativar um slice.

---

**Precisa de ajuda?** Entre em contato com nossa equipe de suporte.