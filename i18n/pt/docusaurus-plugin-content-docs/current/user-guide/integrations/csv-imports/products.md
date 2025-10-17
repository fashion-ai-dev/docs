# Importação CSV de Produtos

Importe seu catálogo completo de produtos usando um arquivo CSV simples.

## Visão Geral

A importação CSV de Produtos permite que você:
- Adicione múltiplos produtos de uma vez
- Atualize produtos existentes em massa
- Importe informações completas de produtos
- Configure seu catálogo inicial rapidamente

## Guia Passo a Passo

### Passo 1: Baixe o Template

1. Faça login no seu painel FashionAI
2. Vá para **Configurações** → **Gerenciador de Produtos**
3. Clique em **Download Products Template**
4. Salve o arquivo CSV no seu computador

### Passo 2: Prepare Seus Dados

Abra o template CSV no seu aplicativo de planilha preferido (Excel, Google Sheets, etc.) e preencha as informações dos seus produtos.

## Formato CSV

### Colunas Obrigatórias

Estas colunas **devem** ser preenchidas para cada produto:

| Coluna | Descrição | Exemplo |
|--------|-----------|---------|
| **Product Name** | Nome de exibição do produto | "Cotton Blue T-Shirt" |
| **Category ID** | Identificador único da categoria | "shirts-123" |
| **Image URL** | Link da imagem principal do produto | "https://example.com/image.jpg" |
| **Category** | Nome da categoria do produto | "T-Shirts" |

### Colunas Opcionais

Estas colunas ajudam a melhorar as recomendações e busca:

| Coluna | Descrição | Exemplo |
|--------|-----------|---------|
| **Product ID** | Seu código interno do produto | "SKU-12345" |
| **Description** | Detalhes do produto | "Camiseta de algodão confortável..." |
| **Brand** | Marca do produto | "Nike" |
| **Color** | Cor do produto | "Blue" |
| **Size** | Tamanhos disponíveis | "M, L, XL" |
| **Price** | Preço do produto | "29.99" |
| **Tags** | Palavras-chave adicionais | "casual, summer, cotton" |
| **Additional Images** | URLs de imagens extras | "https://example.com/img2.jpg" |

## Exemplo de CSV

Veja como seu CSV deve se parecer:

```csv
Product Name,Product ID,Category ID,Category,Image URL,Brand,Color,Price,Description
Cotton Blue T-Shirt,SKU-001,shirts-123,T-Shirts,https://example.com/tshirt.jpg,Nike,Blue,29.99,Comfortable cotton t-shirt for everyday wear
Denim Jeans,SKU-002,pants-456,Jeans,https://example.com/jeans.jpg,Levi's,Blue,79.99,Classic fit denim jeans with stretch
Summer Dress,SKU-003,dress-789,Dresses,https://example.com/dress.jpg,Zara,Floral,49.99,Light and breezy summer dress
```

### Passo 3: Preencha Seus Produtos

Para cada produto, preencha todas as colunas obrigatórias e quaisquer colunas opcionais que se aplicam:

**Dicas:**
- Um produto por linha
- Mantenha as descrições claras e concisas
- Use URLs de imagens de alta qualidade
- Seja consistente com os nomes das categorias
- Inclua nomes de marcas quando disponível

### Passo 4: Salve Seu Arquivo

1. Clique em **Arquivo** → **Salvar Como**
2. Escolha o formato **CSV (Delimitado por vírgula)**
3. Nomeie seu arquivo (exemplo: "products-import-2024.csv")
4. Salve em um local que você vai lembrar

### Passo 5: Envie para o FashionAI

1. Clique em **Escolher Arquivo** ou arraste e solte seu CSV
2. Clique em **Upload**
3. Aguarde o processamento ser concluído (geralmente 5-10 minutos)

### Passo 6: Revise os Resultados da Importação

Após o processamento, você verá um resumo:

- **Importações bem-sucedidas**: Produtos adicionados/atualizados com sucesso
- **Erros**: Produtos que não puderam ser importados
- **Avisos**: Produtos importados com problemas menores

## Entendendo as Mensagens de Status

### Processando ⏳
Seu arquivo está sendo processado. Isso pode levar até 5 minutos dependendo do tamanho do arquivo. Você pode sair da página e voltar depois.

### Processado
Seus produtos foram enviados com sucesso para o Banco de Dados e nossa IA está lendo as imagens para gerar os dados (tags, descrição, atributos,...).

### Concluído ✅
Todos os produtos foram lidos com sucesso!

### Erros ❌
Alguns produtos não puderam ser importados. Verifique o relatório de erros para detalhes.

## Erros Comuns e Soluções

### Colunas Obrigatórias Ausentes

**Mensagem de Erro:**
```
Missing required data
```

**Solução:**
- Abra seu CSV e verifique os cabeçalhos das colunas
- Certifique-se de que todas as colunas obrigatórias existem
- Verifique se há erros de digitação nos nomes das colunas
- Certifique-se de que as colunas não estão vazias

### URLs de Imagem Inválidas

**Mensagem de Erro:**
```
Invalid or inaccessible image URL
```

**Solução:**
- Verifique se a URL da imagem está correta
- Certifique-se de que as imagens são acessíveis publicamente (não atrás de login)
- Verifique se as URLs começam com `http://` ou `https://`
- Teste a URL em um navegador para confirmar que funciona

### Formato de Arquivo Inválido

**Mensagem de Erro:**
```
File format not supported
```

**Solução:**
- Certifique-se de que o arquivo está salvo como formato CSV (não .xlsx ou .xls)
- Tente salvar como "CSV UTF-8" se disponível
- Remova qualquer formatação especial do Excel

### Arquivo Muito Grande

**Mensagem de Erro:**
```
File exceeds maximum size of 10MB
```

**Solução:**
- Divida sua importação em vários arquivos menores
- Remova colunas desnecessárias
- Comprima imagens grandes antes de fazer upload

## Melhores Práticas

### URLs de Imagens
- Use imagens de alta resolução (mínimo 800x800 pixels)
- Certifique-se de que as imagens estão hospedadas em um servidor confiável
- Use URLs diretas de imagem (terminando em .jpg, .png, etc.)
- Teste as URLs antes de importar

### Testes
- Comece com um arquivo de teste pequeno (10-20 produtos)
- Verifique se a importação foi bem-sucedida
- Verifique se os produtos aparecem corretamente no painel
- Depois importe o resto do seu catálogo

## Atualizando Produtos Existentes

Você pode usar o mesmo formato CSV para atualizar produtos:

1. Inclua a coluna **Product ID** com IDs existentes
2. Altere as informações que você deseja atualizar
3. Faça upload do CSV
4. Os produtos existentes serão atualizados com as novas informações

## Importações Idempotentes

Você pode fazer upload do mesmo CSV múltiplas vezes com segurança:
- Produtos duplicados não serão criados
- Produtos existentes serão atualizados
- Novos produtos serão adicionados

## Retenção de Arquivos

Arquivos CSV enviados são mantidos por **7 dias** após o upload. Depois disso, você precisará fazer novo upload se quiser processá-los novamente.

## Precisa de Ajuda?

Se você encontrar problemas:
- Revise as mensagens de erro cuidadosamente
- Verifique a seção de erros comuns acima
- Tente um arquivo de teste menor primeiro
- Entre em contato com o suporte: support@generativecrm.com

Inclua na sua solicitação de suporte:
- Seu arquivo CSV (ou uma amostra)
- A mensagem de erro que você recebeu
- Número de produtos que você está tentando importar

## Próximos Passos

Depois de importar seus produtos:

- [Configure relacionamentos Shop The Look](./shop-the-look.md)
- [Habilite o Vision Enrichment](../../vision-enrichment/index.md)
- [Configure Recomendações](../../recomendations/index.md)
