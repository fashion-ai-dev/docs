# Importacao de Catalogo de Produtos

Importe ou atualize seu catalogo de produtos usando o template CSV do seu painel da FashionAI.

## Quando usar esta importacao

Use a importacao de catalogo quando quiser:

- criar seu catalogo inicial
- atualizar muitos produtos de uma vez
- corrigir informacoes de produtos em massa
- migrar produtos de outra plataforma

O template e os campos disponiveis podem variar por cliente. Por isso, este guia foca no processo, e o template CSV baixado e a referencia principal.

## Passo a passo

### 1. Baixe o template de produtos

1. Entre na FashionAI
2. Va em **Settings** -> **Products Manager**
3. Baixe o template CSV para produtos

### 2. Preencha seu CSV

Abra o arquivo na ferramenta que preferir e adicione os dados dos produtos.

Boas praticas:

- mantenha um produto por linha
- preserve a estrutura original do template
- use identificadores consistentes para os produtos
- revise nomes, descricoes, categorias e imagens antes do envio

Se tiver duvidas sobre algum campo, consulte **Campos CSV** no painel.

### 3. Salve o arquivo em CSV

Quando o arquivo estiver pronto, salve ou exporte em **CSV**.

### 4. Envie o arquivo

1. Volte para **Settings** -> **Products Manager**
2. Faca upload do arquivo CSV
3. Aguarde o processamento da FashionAI

### 5. Revise o resultado da importacao

Depois do processamento, revise o resumo da importacao:

- **Sucesso** significa que o arquivo foi importado corretamente
- **Sucesso parcial** significa que algumas linhas foram importadas e outras precisam de ajuste
- **Erro** significa que o arquivo precisa ser corrigido antes da importacao ser concluida

Se necessario, ajuste o arquivo CSV e envie novamente. Os itens importados com sucesso sao atualizados, nao duplicados.

## O que normalmente causa problemas

- usar um template antigo
- alterar manualmente a estrutura do CSV
- usar identificadores inconsistentes entre uploads
- diferencas de formato em algumas linhas
- salvar o arquivo em um formato diferente de CSV

## Primeira importacao recomendada

Se este for seu primeiro upload, comece com um lote pequeno. Assim fica mais facil validar se o template, o formato CSV dos campos e o comportamento da importacao estao corretos antes de enviar o catalogo inteiro.

## Depois da importacao

Quando seus produtos estiverem na FashionAI, voce pode seguir para:

- [Importacao de Shop The Look](./shop-the-look.md)
- [Vision Enrichment](../../vision-enrichment/index.md)
- [Recommendations](../../recomendations/index.md)

## Precisa de ajuda?

Se nao estiver claro por que o arquivo falhou, revise o resumo da importacao no painel e entre em contato com **support@generativecrm.com** com os detalhes do erro.
