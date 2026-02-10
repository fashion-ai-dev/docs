# Upload de Imagens de Produtos

O sistema permite fazer upload de imagens para seus produtos em Configurações > Gerenciador de Imagens

## Formatos Aceitos

| Formato | Extensão |
|---------|----------|
| JPEG    | .jpg ou .jpeg |
| PNG     | .png |
| GIF     | .gif |
| WebP    | .webp |

## Limites

- **Tamanho máximo:** 10 MB por arquivo
- **Quantidade:** até 500 imagens por upload

## Regra de Nomenclatura

:::tip Dica importante
Nomeie seus arquivos com o **código do produto** seguido de `_01`, `_02`, etc que será a ordem que as imagens aparecerão no nosso site e serão descritas para SEO.

Exemplo: `SKU12345_01.jpg`, `SKU12345_02.jpg`, `SKU12345_03.jpg`
:::

O nome do arquivo **deve terminar** com `_01` até `_10`:

| Nome Original | Nome Final |
|---------------|------------|
| camiseta-azul_01.jpg | CAMISETA-AZUL_01.jpg |
| camiseta-azul_1.jpg | CAMISETA-AZUL_1.jpg |
| camiseta-azul.jpg | CAMISETA-AZUL_01.jpg (sufixo adicionado automaticamente) |
| Camisa Polo.png | CAMISA-POLO_01.png (sufixo adicionado automaticamente) |

### Transformações Automáticas

O sistema padroniza automaticamente os nomes dos arquivos:

- Nome convertido para **MAIÚSCULAS**
- Espaços e caracteres especiais viram `-`
- Acentos são removidos (café → CAFE)
- Extensão sempre em minúsculas

## Checklist Antes do Upload

- [ ] Arquivos estão em formato aceito (jpg, png, gif, webp)?
- [ ] Cada arquivo tem menos de 10 MB?
- [ ] Nome do arquivo termina com `_01` a `_10`?

## Erros Comuns

| Erro | Causa | Solução |
|------|-------|---------|
| Tipo de arquivo inválido | Formato não aceito | Use jpg, png, gif ou webp |
| Arquivo muito grande | Arquivo maior que 10 MB | Reduza o tamanho da imagem |
| Nenhuma imagem enviada | Campo vazio | Verifique se anexou os arquivos |
| Extensão inválida | Nome sem extensão válida | Renomeie com .jpg, .png, etc. |

## Resumo

| Característica | Valor |
|----------------|-------|
| Formatos | jpg, jpeg, png, gif, webp |
| Tamanho máximo | 10 MB por arquivo |
| Limite de arquivos | 500 imagens |
| Padrão de nome | NOME_01.ext até NOME_10.ext |
