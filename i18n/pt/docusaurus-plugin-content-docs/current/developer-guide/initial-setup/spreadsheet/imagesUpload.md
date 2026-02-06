# Upload de Imagens de Produtos

O sistema permite fazer upload de imagens para seus produtos em Configurações > Gerenciador de Imagens

## Formatos Aceitos

| Formato | Extensao |
|---------|----------|
| JPEG    | .jpg ou .jpeg |
| PNG     | .png |
| GIF     | .gif |
| WebP    | .webp |

## Limites

- **Tamanho maximo:** 10 MB por arquivo
- **Quantidade:** ate 500 imagens por upload

## Regra de Nomenclatura

:::tip Dica importante
Nomeie seus arquivos com o **codigo do produto** seguido de `_01`, `_02`, etc que será a ordem que as imagens apareceram no nosso site e serão descritas para SEO.

Exemplo: `SKU12345_01.jpg`, `SKU12345_02.jpg`, `SKU12345_03.jpg`
:::

O nome do arquivo **deve terminar** com `_01` ate `_10`:

| Nome Original | Nome Final |
|---------------|------------|
| camiseta-azul_01.jpg | CAMISETA-AZUL_01.jpg |
| camiseta-azul_1.jpg | CAMISETA-AZUL_1.jpg |
| camiseta-azul.jpg | CAMISETA-AZUL_01.jpg (sufixo adicionado automaticamente) |
| Camisa Polo.png | CAMISA-POLO_01.png (sufixo adicionado automaticamente) |

## Checklist Antes do Upload

- [ ] Arquivos estao em formato aceito (jpg, png, gif, webp)?
- [ ] Cada arquivo tem menos de 10 MB?
- [ ] Nome do arquivo termina com `_01` a `_10`?

## Erros Comuns

| Erro | Causa | Solucao |
|------|-------|---------|
| Tipo de arquivo invalido | Formato não aceito | Use jpg, png, gif ou webp |
| Arquivo muito grande | Arquivo maior que 10 MB | Reduza o tamanho da imagem |
| Nenhuma imagem enviada | Campo vazio | Verifique se anexou os arquivos |
| Extensão inválida | Nome sem extensão valida | Renomeie com .jpg, .png, etc. |

## Resumo

| Caracteristica | Valor |
|----------------|-------|
| Formatos | jpg, jpeg, png, gif, webp |
| Tamanho maximo | 10 MB por arquivo |
| Limite de arquivos | 500 imagens |
| Padrão de nome | NOME_01.ext ate NOME_10.ext |
