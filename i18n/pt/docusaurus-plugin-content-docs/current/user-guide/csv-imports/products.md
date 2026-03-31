# Importação de Catálogo de Produtos

Importe ou atualize seu catálogo de produtos usando o template CSV do seu painel da FashionAI.

## Quando usar esta importação

Use a importação de catálogo quando quiser:

- criar seu catálogo inicial
- atualizar muitos produtos de uma vez
- corrigir informações de produtos em massa
- migrar produtos de outra plataforma

O template e os campos disponíveis podem variar por cliente. Por isso, este guia foca no processo, e o template CSV baixado é a referência principal.

## Passo a passo

### 1. Baixe o template de produtos

1. Entre na FashionAI
2. Vá em **Settings** -> **Products Manager**
3. Baixe o template CSV para produtos

### 2. Preencha seu CSV

Abra o arquivo na ferramenta que preferir e adicione os dados dos produtos.

Boas práticas:

- mantenha um produto por linha
- preserve a estrutura original do template
- use identificadores consistentes para os produtos
- revise nomes, descrições, categorias e imagens antes do envio

Se tiver dúvidas sobre algum campo, consulte **Campos da Planilha** no painel.

### 3. Salve o arquivo em CSV

Quando o arquivo estiver pronto, salve ou exporte em **CSV**.

### 4. Envie o arquivo

1. Volte para **Settings** -> **Products Manager**
2. Faça upload do arquivo CSV
3. Aguarde o processamento da FashionAI

### 5. Revise o resultado da importação

Depois do processamento, revise o resumo da importação:

- **Sucesso** significa que o arquivo foi importado corretamente
- **Sucesso parcial** significa que algumas linhas foram importadas e outras precisam de ajuste
- **Erro** significa que o arquivo precisa ser corrigido antes da importação ser concluída

Se necessário, ajuste o arquivo CSV e envie novamente. Os itens importados com sucesso são atualizados, não duplicados.

## O que normalmente causa problemas

- usar um template antigo
- alterar manualmente a estrutura do CSV
- usar identificadores inconsistentes entre uploads
- diferenças de formato em algumas linhas
- salvar o arquivo em um formato diferente de CSV
- problemas de encoding depois da exportação

## Dica de encoding

Se acentos ou caracteres especiais aparecerem errados no arquivo, suba os dados no Google Planilhas e baixe o CSV novamente antes de importar. Isso costuma resolver problemas de encoding.

## Primeira importação recomendada

Se este for seu primeiro upload, comece com um lote pequeno. Assim fica mais fácil validar se o template, o formato CSV dos campos e o comportamento da importação estão corretos antes de enviar o catálogo inteiro.

## Depois da importação

Quando seus produtos estiverem na FashionAI, você pode seguir para:

- [Upload de imagens de produtos](./images-upload.md)
- [Importação de Shop The Look](./shop-the-look.md)
- [Vision Enrichment](../vision-enrichment/index.md)
- [Recommendations](../recomendations/index.md)

## Precisa de ajuda?

Se não estiver claro por que o arquivo falhou, revise o resumo da importação no painel e entre em contato com **support@generativecrm.com** com os detalhes do erro.
