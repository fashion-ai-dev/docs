# Importação CSV Shop The Look

Crie combinações de produtos e sugestões de looks linkando produtos que funcionam bem juntos.

## Visão Geral

Shop The Look permite que você:
- Crie sugestões de looks completos
- Linke produtos complementares
- Construa combinações de produtos curadas
- Melhore oportunidades de venda cruzada
- Ajude clientes a descobrir itens que combinam

**Exemplo:** Linke um vestido com sapatos, bolsa e acessórios que criam um look completo.

## Antes de Começar

**Importante:** Todos os produtos devem já existir no seu catálogo antes de criar relacionamentos Shop The Look.

Se você ainda não importou seus produtos:
1. [Importe seus produtos primeiro](./products.md)
2. Depois retorne aqui para criar relacionamentos

## Guia Passo a Passo

### Passo 1: Baixe o Template

1. Faça login no seu painel FashionAI
2. Vá para **Configurações** → **Gerenciador de Produtos**
3. Clique em **Download Shop The Look Template**
4. Salve o arquivo CSV no seu computador

### Passo 2: Entenda o Formato

## Formato CSV

### Colunas Obrigatórias

Cada linha deve ter estas colunas preenchidas:

| Coluna | Descrição | Exemplo |
|--------|-----------|---------|
| **MAIN_SKU** | Código/SKU do produto principal | "DRESS-001" |
| **RELATED_SKU_1** ou **RELATED_EAN_1** | Código ou EAN do primeiro produto relacionado | "SHOE-123" ou "7891234567890" |

**Importante:** Você deve fornecer pelo menos UM produto relacionado usando o SKU (código do produto) ou EAN (número de código de barras).

### Colunas Opcionais

Você pode adicionar até 4 produtos relacionados por produto principal (se você precisar de mais de 4 produtos relacionados nos envie uma mensagem :mailbox: **support@generativecrm.com**):

| Coluna | Descrição |
|--------|-----------|
| **RELATED_SKU_1** | Código do 1º produto relacionado |
| **RELATED_EAN_1** | EAN do 1º produto relacionado |
| **RELATED_SKU_2** | Código do 2º produto relacionado |
| **RELATED_EAN_2** | EAN do 2º produto relacionado |
| **RELATED_SKU_3** | Código do 3º produto relacionado |
| **RELATED_EAN_3** | EAN do 3º produto relacionado |
| **RELATED_SKU_4** | Código do 4º produto relacionado |
| **RELATED_EAN_4** | EAN do 4º produto relacionado |

## Exemplo de CSV

Aqui está um exemplo completo mostrando diferentes cenários:

```csv
MAIN_SKU,RELATED_SKU_1,RELATED_EAN_1,RELATED_SKU_2,RELATED_EAN_2,RELATED_SKU_3,RELATED_EAN_3,RELATED_SKU_4,RELATED_EAN_4
DRESS-001,SHOE-123,7891234567890,BAG-456,,NECKLACE-789,,BRACELET-012,
SHIRT-002,PANTS-234,,,BELT-567,,SHOE-890,,
JEANS-003,BELT-111,7891234567891,SHIRT-222,,,,,
SHOE-004,SOCKS-333,,,,,BOTTLE-444,,
```

**O que isso significa:**
- **Linha 1:** Vestido de verão (DRESS-001) combinado com sapatos (usando SKU e EAN), bolsa, colar e pulseira
- **Linha 2:** Camisa polo (SHIRT-002) combinada com calças (somente SKU), cinto (usando EAN) e sapatos
- **Linha 3:** Jeans (JEANS-003) combinado com cinto (usando SKU e EAN) e camisa
- **Linha 4:** Tênis de corrida (SHOE-004) combinado com meias (somente SKU) e garrafa de água (usando EAN)

### Passo 3: Preencha Seus Relacionamentos

Para cada produto principal:

1. **Digite o produto principal:**
   - **MAIN_SKU**: Código do produto que existe no seu catálogo

2. **Adicione produtos relacionados:**
   - Use **RELATED_SKU** para códigos de produto OU **RELATED_EAN** para códigos de barras
   - Você pode usar ambos para o mesmo produto (como na Linha 1 acima)
   - Adicione 1-4 produtos relacionados por produto principal
   - Deixe células vazias se você não precisar de todos os 4 produtos relacionados

**Dicas:**
- Pense em looks completos ou itens coordenados
- Considere produtos que os clientes frequentemente compram juntos
- Inclua acessórios que complementam o produto principal
- Combine SKUs e EANs baseado no que você tem

### Passo 4: Valide Seus Dados

Antes de fazer upload, verifique:

- Produtos principais (MAIN_SKU) existem no seu catálogo
- Produtos relacionados (RELATED_SKU/RELATED_EAN) existem no seu catálogo
- Cada linha tem pelo menos um produto relacionado
- Códigos de produtos estão escritos corretamente
- Sem linhas vazias no meio dos seus dados

### Passo 5: Salve Seu Arquivo

1. Clique em **Arquivo** → **Salvar Como**
2. Escolha o formato **CSV (Delimitado por vírgula)**
3. Nomeie seu arquivo (exemplo: "shop-the-look-outfits.csv")
4. Salve em um local que você vai lembrar

### Passo 6: Envie para o FashionAI

1. Selecione **Shop the Look** no seletor de tipo de planilha.
2. Clique em **Escolher Arquivo** ou arraste e solte seu CSV
3. Clique em **Upload**
4. Aguarde o processamento (geralmente 5-10 minutos)

## Entendendo o Status de Processamento

### Processando ⏳
Seu arquivo está sendo validado e processado. Isso pode levar até 5 minutos.

**O que acontece durante o processamento:**
- O sistema verifica se todos os produtos existem no catálogo
- Valida códigos de produtos e EANs
- Cria relacionamentos entre produtos
- Processa em lotes de 100 linhas por vez

### Concluído ✅
Todos os relacionamentos foram criados com sucesso! Suas combinações Shop The Look agora estão ativas.

### Erro ❌
Alguns relacionamentos não puderam ser criados. Verifique os detalhes do erro.

## Erros Comuns e Soluções

### Colunas Obrigatórias Ausentes

**Mensagem de Erro:**
```
Missing required columns in CSV: MAIN_SKU and at least RELATED_SKU_1 or RELATED_EAN_1
```

**Solução:**
- Verifique se seu CSV tem a coluna MAIN_SKU
- Certifique-se de que pelo menos RELATED_SKU_1 ou RELATED_EAN_1 existe
- Verifique se há erros de digitação nos nomes das colunas
- Certifique-se de que os cabeçalhos correspondem ao template exatamente

### Produtos Não Encontrados

**Mensagem de Erro:**
```
The following products were not found in the catalog:
- Line 2: Main product "DRESS-999" not found
- Line 3: Related product "SHOE-888" not found (linked to "DRESS-001")
- Line 5: Related product with EAN "1234567890123" not found
```

**O que isso te diz:**
- O número exato da linha no seu CSV
- Se é um produto principal ou produto relacionado
- O código do produto ou EAN que não foi encontrado
- A qual produto principal o item relacionado estava linkado

**Solução:**
1. Verifique se os produtos estão importados no seu catálogo
2. Verifique se os códigos dos produtos correspondem exatamente (sensível a maiúsculas)
3. Confirme se os números EAN estão corretos
4. Importe os produtos faltantes primeiro
5. Faça upload do CSV novamente após os produtos serem adicionados

**Importante:** Se QUALQUER produto não for encontrado, NENHUM relacionamento será criado. Você deve corrigir todos os erros e fazer novo upload.

### Formato de Arquivo Inválido

**Mensagem de Erro:**
```
Invalid file format or corrupted CSV
```

**Solução:**
- Salve o arquivo como formato CSV (não Excel .xlsx)
- Remova qualquer formatação especial
- Certifique-se da codificação UTF-8
- Tente abrir e salvar novamente o arquivo

### Arquivo Expirado

**Mensagem de Erro:**
```
The file has expired and can no longer be processed
```

**Solução:**
- Arquivos são mantidos por 7 dias após o upload
- Faça upload do seu arquivo CSV novamente
- Processe-o dentro de 7 dias

## Comportamentos Importantes

### Processamento Tudo ou Nada
Se mesmo UM produto estiver faltando no seu catálogo, toda a importação falhará e NENHUM relacionamento será criado.

**Exemplo:**
Se você tentar importar 100 relacionamentos mas 1 produto não existe:
- 0 relacionamentos criados
- Importação falha
- Relatório de erro mostra qual(is) produto(s) está(ão) faltando

**Por quê?** Isso garante que suas combinações Shop The Look sejam sempre completas e válidas.

### Importações Idempotentes
Você pode fazer upload do mesmo CSV múltiplas vezes com segurança:
- Relacionamentos duplicados não serão criados
- Relacionamentos existentes serão preservados
- Apenas novos relacionamentos serão adicionados

**Exemplo:** Se você fizer upload do mesmo arquivo duas vezes, você não terá combinações duplicadas.

### Processamento em Lotes
- Arquivos são processados em grupos de 100 linhas por vez
- Arquivos grandes podem levar alguns minutos
- Você pode sair da página com segurança durante o processamento

## Melhores Práticas

### Criando Ótimas Combinações

**Looks Completos:**
```csv
MAIN_SKU,RELATED_SKU_1,RELATED_SKU_2,RELATED_SKU_3,RELATED_SKU_4
DRESS-101,HEELS-201,CLUTCH-301,EARRING-401,NECKLACE-501
```
Combina um vestido com sapatos, bolsa e joias para um look noturno completo.

**Peças Coordenadas:**
```csv
MAIN_SKU,RELATED_SKU_1,RELATED_SKU_2,RELATED_SKU_3
BLAZ-102,SHIRT-202,PANTS-302,SHOE-402
```
Cria um look profissional com blazer, camisa, calças e sapatos.

**Coleções Sazonais:**
```csv
MAIN_SKU,RELATED_SKU_1,RELATED_SKU_2,RELATED_SKU_3
COAT-103,SCARF-203,GLOVE-303,BOOT-403
```
Agrupa essenciais de inverno juntos.

### Dicas para Sucesso

1. **Comece Pequeno:** Teste com 10-20 combinações primeiro
2. **Seja Estratégico:** Pense no que os clientes realmente compram juntos
3. **Mantenha Atualizado:** Remova combinações quando produtos forem descontinuados
4. **Use Ambos:** Combine SKU e EAN baseado no que você tem disponível
5. **Qualidade Sobre Quantidade:** É melhor ter menos combinações ótimas do que muitas ruins

### O que Torna uma Boa Combinação?

- **Coordenação de Cores:** Itens que funcionam bem juntos visualmente
- **Combinação de Estilos:** Estética similar (casual, formal, esportivo)
- **Apropriado para a Ocasião:** Itens para o mesmo tipo de evento
- **Faixa de Preço:** Itens com preços similares
- **Relevância Sazonal:** Itens para a mesma estação

## Atualizando Relacionamentos

Para atualizar combinações Shop The Look:

1. Modifique seu arquivo CSV com as alterações
2. Faça upload do arquivo atualizado
3. Novos relacionamentos serão adicionados
4. Relacionamentos existentes permanecem (não serão deletados)

Para remover relacionamentos:
- Use o painel para remover combinações manualmente
- Ou entre em contato com o suporte para opções de remoção em massa

## Monitorando Resultados

Após o upload, verifique:

1. **Visualização no Painel:**
   - Vá para a seção Shop The Look
   - Veja todas as combinações ativas
   - Veja quais produtos estão linkados

2. **Visualização do Cliente:**
   - Verifique as páginas de produtos da sua loja
   - Verifique se as sugestões "Shop The Look" aparecem
   - Teste a experiência do cliente

## Precisa de Ajuda?

Se você encontrar problemas:
- Revise as mensagens de erro cuidadosamente para nomes de produtos e números de linha
- Verifique se todos os produtos existem no seu catálogo
- Tente um arquivo de teste menor primeiro
- Mantenha seu CSV como backup

**Entre em Contato com o Suporte:**
- Email: support@generativecrm.com
- Inclua: Seu arquivo CSV e mensagens de erro
- Especifique: Quais números de linha têm problemas

## Próximos Passos

Depois de configurar o Shop The Look:

- [Monitore o engajamento em Analytics](../../behaviors/index.md)
- [Otimize recomendações](../../recomendations/index.md)
- [Melhore com Vision Enrichment](../../vision-enrichment/index.md)
