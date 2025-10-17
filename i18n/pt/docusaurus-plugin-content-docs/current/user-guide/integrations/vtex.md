# Integração VTEX

Conecte sua loja VTEX com o FashionAI para enriquecer automaticamente seu catálogo de produtos com descrições e atributos gerados por IA.

## O Que Você Vai Precisar

Antes de começar, certifique-se de ter:
- Acesso de administrador à sua loja VTEX
- Acesso às configurações (Settings) da plataforma FashionAI

## Configuração Passo a Passo

### Passo 1: Ativar o Vision Enrichment

Primeiro, ative o recurso Vision Enrichment no FashionAI:

1. Clique em **Settings** no menu direito
2. Vá para **General Settings**
3. Ative o botão **Vision Enrichment**

Isso permite que nossa IA analise as imagens dos seus produtos e gere automaticamente descrições e atributos.

### Passo 2: Obter Seu Token de API da VTEX

Você vai precisar de um token de API da VTEX com permissões específicas. Entre em contato com o administrador da sua VTEX para criar um token com estas permissões:

| Product | Category | Resource |
|---------|----------|----------|
| Catalog | Content | Product and SKU Management |
| Catalog | Content | Category Management |
| Catalog | Content | Category |
| Catalog | Content | SKUs |
| OMS | OMS Access | List Orders |
| OMS | OMS Access | View Order |
| Checkout | Checkout Resources | Full Order Access |

### Passo 3: Configurar a VTEX no FashionAI

1. No FashionAI, vá para **Settings**
2. Clique na aba **VTEX Settings**
3. Insira suas credenciais de API da VTEX:
   - **Store Name**: O nome da sua loja VTEX
   - **API Key**: O token do Passo 2
   - **API Token**: Seu token de aplicativo VTEX

4. Clique em **Save**

### Passo 4: Criar um Afiliado

Isso permite que o FashionAI receba atualizações do seu catálogo VTEX automaticamente.

1. No admin da sua VTEX, vá para **Order Management**
2. Clique em **Settings** → aba **Affiliates**
3. Clique em **New Affiliate**
4. Preencha as seguintes informações:

| Campo | O Que Inserir |
|-------|---------------|
| **Name** | FashionAI |
| **ID** | FFF |
| **Trade Policy** | 1 |
| **Follow-up Email** | vtex@generativecrm.com |
| **Search Endpoint** | Clique em "Generate Link" |
| **Search Endpoint Version** | 1.x.x |
| **Use my payment method** | Deixe desmarcado |

5. Clique em **Save**

## Como Funciona

Uma vez que a integração estiver ativa:

1. Novos produtos adicionados à VTEX são detectados automaticamente
2. O FashionAI analisa as imagens dos produtos usando visão computacional
3. A IA gera descrições, tags e atributos
4. Os dados enriquecidos são sincronizados de volta para o seu catálogo VTEX
5. Seus produtos terão melhores descrições e facilidade de descoberta

## Verificando o Status da Integração

Para verificar se tudo está funcionando:

1. Vá para **Settings** → **Integrations** no FashionAI
2. Verifique o status da integração VTEX:
   - ✅ **Active**: Tudo está funcionando corretamente
   - ⏳ **Syncing**: Atualização em andamento
   - ❌ **Error**: Algo precisa de atenção

## Problemas Comuns

### Produtos Não Estão Sincronizando

**Solução:**
- Verifique se seu token de API tem todas as permissões necessárias
- Confirme se o afiliado está configurado corretamente
- Certifique-se de que a Trade Policy inclui os produtos que você deseja sincronizar

### Erros de Conexão

**Solução:**
- Verifique novamente suas credenciais VTEX em Settings
- Confirme se o token de API ainda é válido
- Teste a conexão usando o botão "Test Connection"

### Produtos Sem Enriquecimento

**Solução:**
- Certifique-se de que o Vision Enrichment está ativado
- Verifique se as imagens dos produtos têm alta qualidade e estão acessíveis
- Confirme se os produtos estão publicados na Trade Policy correta

## Precisa de Ajuda?

Se você encontrar algum problema:
- Email: vtex@generativecrm.com
- Inclua: O nome da sua loja e uma descrição do problema

## Próximos Passos

Depois que sua integração estiver completa:

- [Aprenda sobre Vision Enrichment](../vision-enrichment/index.md)
- [Explore Recomendações](../recomendations/index.md)
- [Configure Behaviors](../behaviors/index.md)
