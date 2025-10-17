# Guia de Importação CSV

Importe seu catálogo de produtos e relacionamentos Shop The Look usando arquivos CSV simples.

## O que é Importação CSV?

A importação CSV (Valores Separados por Vírgula) permite que você envie dados em massa usando arquivos de planilha. Isso é perfeito para:

- **Configuração inicial do catálogo** - Importe todos os produtos de uma só vez
- **Atualizações em massa** - Atualize muitos produtos simultaneamente
- **Gerenciamento offline** - Trabalhe no seu catálogo sem internet
- **Migração** - Mudança de outra plataforma
- **Shop The Look** - Crie combinações de produtos e looks

## Tipos de Importação Disponíveis

### Importação de Produtos
Envie seu catálogo completo de produtos com todos os detalhes como nomes, descrições, imagens, categorias e atributos.

[Saiba mais sobre Importação de Produtos →](./products.md)

### Importação Shop The Look
Crie combinações de produtos e sugestões de looks linkando produtos que funcionam bem juntos.

[Saiba mais sobre Importação Shop The Look →](./shop-the-look.md)

## Como Funciona a Importação CSV

1. **Baixe o Template** - Obtenha o template CSV correto para seu tipo de importação
2. **Selecione o tipo correto de CSV** - Você pode selecionar Produto para importar seu catálogo ou Shop The Look para importar seus produtos relacionados
3. **Envie o Arquivo** - Faça upload do seu CSV através do painel FashionAI
4. **Processamento** - O sistema valida e processa seus dados
5. **Revisão** - Verifique os resultados e corrija quaisquer erros se necessário

## Requisitos Gerais

### Formato do Arquivo
- O arquivo deve estar no **formato CSV** (extensão .csv)
- Use **codificação UTF-8** para caracteres especiais
- Tamanho máximo do arquivo: **10 MB**
- Máximo de linhas: **10.000 por arquivo**

### Qualidade dos Dados
- Campos obrigatórios devem estar preenchidos
- IDs de produtos devem ser únicos
- URLs devem ser válidas e acessíveis
- Sem linhas vazias no meio dos dados

## Dicas para Sucesso

### Antes de Começar
- Revise o template cuidadosamente
- Verifique todos os campos obrigatórios
- Prepare as URLs das imagens com antecedência
- Teste com um lote pequeno primeiro

### Durante o Upload
- Use nomenclatura clara e consistente
- Verifique duas vezes os IDs dos produtos
- Certifique-se de que as URLs das imagens são acessíveis publicamente
- Salve seu trabalho frequentemente

### Depois do Upload
- Revise o resumo da importação
- Verifique se há erros ou avisos
- Verifique se os produtos aparecem corretamente
- Mantenha seu arquivo CSV como backup

## Status de Processamento

Quando você faz upload de um CSV, você verá um destes status:

| Status | O que Significa |
|--------|-----------------|
| ⏳ **Processando** | O arquivo está sendo processado (pode levar até 5 minutos) |
| ✅ **Concluído** | Importação concluída com sucesso |
| ⚠️ **Aviso** | Importação concluída com alguns avisos |
| ❌ **Erro** | Importação falhou - verifique as mensagens de erro |

## Mensagens de Erro Comuns

### Problemas de Formato de Arquivo
**Erro:** `Invalid file format`
**Solução:** Certifique-se de que seu arquivo está salvo como CSV (não Excel .xlsx)

### Colunas Obrigatórias Ausentes
**Erro:** `Missing required columns`
**Solução:** Verifique se todas as colunas obrigatórias existem no seu CSV

### Produtos Não Encontrados
**Erro:** `Products not found in catalog`
**Solução:** Importe os produtos antes de criar relacionamentos (para Shop The Look)

### Formato de Dados Inválido
**Erro:** `Invalid data format in row X`
**Solução:** Verifique a linha específica mencionada para problemas de formatação

## Precisa de Ajuda?

Se você encontrar problemas com importações CSV:

- Verifique o guia de importação específico para seu tipo
- Revise a mensagem de erro para pistas
- Tente fazer upload de um arquivo de teste menor
- Entre em contato com o suporte: support@generativecrm.com

## Próximos Passos

Escolha o tipo de importação que você deseja realizar:

- [Guia de Importação de Produtos](./products.md)
- [Guia de Importação Shop The Look](./shop-the-look.md)
