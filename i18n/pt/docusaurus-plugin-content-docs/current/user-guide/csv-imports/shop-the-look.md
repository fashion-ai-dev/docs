# Importação de Shop The Look

Crie relacionamentos entre produtos e combinações de looks usando o template CSV de Shop The Look.

## Antes de começar

Seus produtos já precisam existir no catálogo antes da importação de relacionamentos de Shop The Look.

Se ainda precisar subir os produtos, use o [guia de importação de catálogo](./products.md).

## Quando usar esta importação

Use a importação de Shop The Look quando quiser:

- conectar produtos que façam sentido juntos
- criar looks completos
- melhorar oportunidades de cross-sell
- enviar muitos relacionamentos de uma vez

O template e os campos aceitos podem variar por cliente, então sempre use o arquivo CSV baixado do seu painel.

## Passo a passo

### 1. Baixe o template de Shop The Look

1. Entre na FashionAI
2. Vá em **Settings** -> **Products Manager**
3. Baixe o template CSV de Shop The Look

### 2. Preencha os relacionamentos

Adicione os relacionamentos entre produtos seguindo a estrutura do template baixado.

Boas práticas:

- garanta que todos os produtos referenciados já existam no catálogo
- mantenha os identificadores exatamente iguais aos registros do catálogo
- revise o arquivo com cuidado antes do envio
- comece com um lote pequeno se for sua primeira importação de Shop The Look

### 3. Salve o arquivo em CSV

Salve ou exporte o arquivo em **CSV**.

### 4. Envie o arquivo

1. Volte para **Settings** -> **Products Manager**
2. Selecione o tipo de importação Shop The Look
3. Faça upload do arquivo CSV
4. Aguarde o processamento terminar

### 5. Revise o resultado da importação

Confira o resumo da importação depois do processamento:

- **Sucesso** significa que todos os relacionamentos foram criados corretamente
- **Sucesso parcial** significa que alguns relacionamentos foram criados e outros precisam de revisão
- **Erro** significa que o arquivo precisa ser corrigido antes da importação dos relacionamentos

Se alguma referência de produto estiver inválida ou faltando no catálogo, corrija o arquivo CSV e envie novamente.

## O que normalmente causa problemas

- importar relacionamentos antes de os produtos existirem no catálogo
- identificadores de produto divergentes
- usar o template errado
- alterar manualmente a estrutura do CSV
- salvar o arquivo em um formato diferente de CSV
- problemas de encoding depois da exportação

## Dica de encoding

Se acentos ou caracteres especiais aparecerem errados no arquivo, suba os dados no Google Planilhas e baixe o CSV novamente antes de importar. Isso costuma resolver problemas de encoding.

## Dicas para melhores resultados

- crie combinações que façam sentido para o cliente
- mantenha grupos sazonais ou por estilo consistentes
- revise os relacionamentos importados no painel após o envio

## Depois da importação

Depois que os relacionamentos estiverem ativos, você pode:

- revisá-los na experiência do catálogo
- acompanhar engajamento em [Behaviors](../behaviors/index.md)
- melhorar a experiência com [Recommendations](../recomendations/index.md)
