# Importacao de Shop The Look

Crie relacionamentos entre produtos e combinacoes de looks usando o template CSV de Shop The Look.

## Antes de comecar

Seus produtos ja precisam existir no catalogo antes da importacao de relacionamentos de Shop The Look.

Se ainda precisar subir os produtos, use o [guia de importacao de catalogo](./products.md).

## Quando usar esta importacao

Use a importacao de Shop The Look quando quiser:

- conectar produtos que facam sentido juntos
- criar looks completos
- melhorar oportunidades de cross-sell
- enviar muitos relacionamentos de uma vez

O template e os campos aceitos podem variar por cliente, entao sempre use o arquivo CSV baixado do seu painel.

## Passo a passo

### 1. Baixe o template de Shop The Look

1. Entre na FashionAI
2. Va em **Settings** -> **Products Manager**
3. Baixe o template CSV de Shop The Look

### 2. Preencha os relacionamentos

Adicione os relacionamentos entre produtos seguindo a estrutura do template baixado.

Boas praticas:

- garanta que todos os produtos referenciados ja existam no catalogo
- mantenha os identificadores exatamente iguais aos registros do catalogo
- revise o arquivo com cuidado antes do envio
- comece com um lote pequeno se for sua primeira importacao de Shop The Look

### 3. Salve o arquivo em CSV

Salve ou exporte o arquivo em **CSV**.

### 4. Envie o arquivo

1. Volte para **Settings** -> **Products Manager**
2. Selecione o tipo de importacao Shop The Look
3. Faca upload do arquivo CSV
4. Aguarde o processamento terminar

### 5. Revise o resultado da importacao

Confira o resumo da importacao depois do processamento:

- **Sucesso** significa que todos os relacionamentos foram criados corretamente
- **Sucesso parcial** significa que alguns relacionamentos foram criados e outros precisam de revisao
- **Erro** significa que o arquivo precisa ser corrigido antes da importacao dos relacionamentos

Se alguma referencia de produto estiver invalida ou faltando no catalogo, corrija o arquivo CSV e envie novamente.

## O que normalmente causa problemas

- importar relacionamentos antes de os produtos existirem no catalogo
- identificadores de produto divergentes
- usar o template errado
- alterar manualmente a estrutura do CSV
- salvar o arquivo em um formato diferente de CSV

## Dicas para melhores resultados

- crie combinacoes que facam sentido para o cliente
- mantenha grupos sazonais ou por estilo consistentes
- revise os relacionamentos importados no painel apos o envio

## Depois da importacao

Depois que os relacionamentos estiverem ativos, voce pode:

- revisa-los na experiencia do catalogo
- acompanhar engajamento em [Behaviors](../../behaviors/index.md)
- melhorar a experiencia com [Recommendations](../../recomendations/index.md)

## Precisa de ajuda?

Se a importacao falhar, revise o resumo da importacao e entre em contato com **support@generativecrm.com** com os detalhes do erro.
