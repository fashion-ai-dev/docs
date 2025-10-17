# Integração Shopify

Conecte sua loja Shopify com o FashionAI para enriquecer automaticamente seu catálogo de produtos com descrições e atributos gerados por IA.

## O Que Você Vai Precisar

Antes de começar, certifique-se de ter:
- Acesso de administrador à sua loja Shopify
- Acesso às configurações da plataforma FashionAI
- 10-15 minutos para concluir a configuração

## Configuração Passo a Passo

### Passo 1: Ativar o Vision Enrichment

Primeiro, ative o recurso Vision Enrichment no FashionAI:

1. Clique em **Settings** no menu à direita
2. Vá para **General Settings**
3. Ative a opção **Vision Enrichment**

**O que isso faz:** Permite que nossa IA analise imagens de produtos e gere automaticamente descrições, tags e atributos.

### Passo 2: Criar um App Personalizado no Shopify

Você precisará criar um app personalizado no Shopify para conectar com o FashionAI:

1. Faça login no seu **Shopify Admin**
2. Vá para **Settings** → **Apps and sales channels**
3. Clique em **Develop apps**
4. Clique em **Create an app**
5. Nomeie como: **FashionAI API Integration**
6. Clique em **Create app**

### Passo 3: Configurar Permissões da API

Agora configure quais dados o FashionAI pode acessar:

1. No seu novo app, vá para a aba **API credentials**
2. Clique em **Configure Admin API scopes**
3. Selecione estas permissões:

| Permissão | Por Que Precisamos |
|---------|-------------|
| **read_products** | Para ler seu catálogo de produtos |
| **write_products** | Para atualizar produtos com conteúdo gerado por IA |
| **read_publications** | Para saber quais produtos estão publicados |
| **read_inventory** | Para verificar disponibilidade dos produtos |
| **read_customers** | Para recomendações personalizadas |
| **read_orders** | Para entender padrões de compra |

4. Clique em **Save**

### Passo 4: Gerar Seu Token de Acesso

1. Ainda na aba **API credentials**, clique em **Install app**
2. Confirme a instalação
3. **Copie o Admin API Access Token** que aparece

**Importante:** Este token é mostrado apenas uma vez! Salve-o em um lugar seguro (como um gerenciador de senhas).

### Passo 5: Conectar Shopify ao FashionAI

1. Vá para **Settings** no FashionAI
2. Clique na aba **Shopify Settings**
3. Insira suas credenciais:
   - **Store URL**: URL da sua loja Shopify (exemplo: `https://your-store.myshopify.com`)
   - **Access Token**: O token que você copiou no Passo 4

4. Clique em **Test Connection** para verificar se tudo funciona
5. Clique em **Save**

## Opcional: Filtros Avançados

Você pode controlar quais produtos serão processados pelo FashionAI:

### Canais de Venda
- Insira IDs de publicação (separados por vírgula) para sincronizar apenas canais específicos
- Exemplo: `123,456`
- Deixe em branco para sincronizar todos os canais

### Marcas Excluídas
- Insira nomes de marcas (separados por vírgula) para excluir do processamento de IA
- Exemplo: `Nike,Adidas,Puma`
- Deixe em branco para processar todas as marcas

### Origens de Pedidos
- Filtre pedidos por origem
- Exemplo: `web,pos,api`
- Deixe em branco para incluir todas as origens de pedidos

## Como Funciona

Uma vez que a integração esteja ativa, aqui está o que acontece automaticamente:

1. **Novos produtos** adicionados ao Shopify são detectados
2. **IA analisa** imagens de produtos usando visão computacional
3. **Descrições são geradas** com base no conteúdo visual
4. **Atributos são extraídos** (cores, estilos, padrões, materiais)
5. **Dados sincronizam de volta** para seu catálogo Shopify

## Dicas para Melhores Resultados

### Imagens de Produtos
Para o melhor conteúdo gerado por IA:
- Use **imagens de alta resolução** (mínimo 1000x1000 pixels)
- Inclua **fundos limpos** (branco ou neutro funciona melhor)
- Adicione **múltiplos ângulos** (frente, costas, fotos de detalhes)
- Garanta **boa iluminação** e cores precisas

### Personalizando a Saída da IA
Você pode personalizar como a IA gera conteúdo na plataforma:
- **Tom de voz**: Escolha casual, profissional ou luxo
- **Tamanho da descrição**: Curta, média ou detalhada
- **Idioma**: Múltiplos idiomas suportados
- **Atributos personalizados**: Adicione atributos específicos da marca

## Verificando o Status da Integração

Para verificar se tudo está funcionando:

1. Vá para **Settings** → **Integrations** no FashionAI
2. Verifique o status da integração Shopify:
   - ✅ **Active**: Tudo está sincronizando com sucesso
   - ⏳ **Syncing**: Atualização em andamento
   - ⚠️ **Warning**: Problemas menores detectados
   - ❌ **Error**: Algo precisa de atenção

## Problemas Comuns

### Produtos Não Estão Sincronizando

**Possíveis causas:**
- Produtos não estão publicados no canal de vendas correto
- Filtro de marcas excluídas está bloqueando produtos
- Permissões da API não estão configuradas corretamente

**Solução:**
- Verifique as configurações de publicação no Shopify
- Revise suas configurações de filtro
- Verifique se todas as permissões do Passo 3 estão habilitadas

### Erros de Conexão

**Possíveis causas:**
- Token de acesso está incorreto ou expirado
- URL da loja está formatada incorretamente

**Solução:**
- Verifique novamente as credenciais nas Shopify Settings
- Certifique-se de que a Store URL inclui `https://` e `.myshopify.com`
- Tente regenerar o token de acesso se necessário

### Enrichment Não Está Funcionando

**Possíveis causas:**
- Vision Enrichment está desabilitado
- Imagens de produtos estão com baixa qualidade ou inacessíveis
- Produtos não atendem aos critérios do filtro

**Solução:**
- Confirme que o Vision Enrichment está ativado nas General Settings
- Verifique se as imagens dos produtos são de alta qualidade e publicamente acessíveis
- Revise suas configurações de filtro avançado

## Precisa de Ajuda?

Se você encontrar algum problema:
- **Email**: support@generativecrm.com
- **Inclua**: URL da sua loja, mensagens de erro e exemplos de produtos afetados

## Próximos Passos

Após sua integração estar completa:

- [Aprenda sobre Vision Enrichment](../vision-enrichment/index.md)
- [Explore Recommendations](../recomendations/index.md)
- [Configure Behaviors](../behaviors/index.md)
