# Integração Shopify

Guia completo para integrar o FashionAI com sua loja Shopify para enriquecimento automatizado de produtos e gerenciamento de catálogo.

## Configuração Inicial

Para integrar sua loja Shopify com nossa plataforma, você precisará criar um aplicativo personalizado no admin do Shopify e gerar credenciais da API. Essas credenciais permitirão que nosso sistema se conecte de forma segura com sua loja e acesse os dados necessários.

### Passo 1: Acessar o Admin do Shopify

1. Faça login no Shopify como administrador
2. No menu lateral, clique em **Configurações**
3. Vá para **Aplicativos e canais de vendas**

### Passo 2: Criar um Aplicativo Personalizado

1. Clique em **Desenvolver aplicativos**
2. Clique em **Criar um aplicativo**
3. Dê um nome ao aplicativo, ex.: **Integração FashionAI API**
4. Clique em **Criar aplicativo**

### Passo 3: Configurar Permissões da API

Na aplicação criada, vá para a aba **Credenciais da API**.

1. Clique em **Configurar escopos da Admin API**
2. Selecione as seguintes permissões:

| Permissão | Descrição |
|-----------|-----------|
| **read_products** | Para ler produtos |
| **write_products** | Para editar produtos (incluindo imagens) |
| **read_publications** | Para ler publicações |
| **read_inventory** | Para ler inventário |
| **read_customers** | Para ler clientes |
| **read_orders** | Para ler pedidos |
| **read_marketplace_orders** | Para ler pedidos feitos através de marketplaces |
| **read_buyer_membership_orders** | Para ler pedidos relacionados a membros compradores |

3. Clique em **Salvar**

### Passo 4: Gerar a Chave da API e Token de Acesso

Ainda na aba **Credenciais da API**:

1. Clique em **Instalar aplicativo**
2. Confirme a instalação
3. O Shopify gerará as seguintes credenciais:
   - **Token de Acesso da Admin API** (Este token é mostrado apenas uma vez! Salve-o imediatamente)

## Credenciais Necessárias

Após completar a configuração, você terá:

- **Store URL**: `https://sua-loja.myshopify.com`
- **Admin API Access Token**: Token gerado no passo 4

## Configuração na Plataforma FashionAI

### 1. Habilitar Vision Enrichment

1. No menu direito da plataforma, clique em **Configurações**
2. Em **Configurações Gerais**, habilite o botão **Vision Enrichment**

### 2. Configurar Credenciais Shopify

1. Vá para a aba **Configurações Shopify**
2. Insira suas credenciais da API Shopify para sincronização de dados:
   - **Store URL**: Sua URL da loja Shopify
   - **Access Token**: O token gerado anteriormente

## Próximos Passos

Após completar a configuração:

1. **Testar a conexão** - Verificar se o FashionAI pode acessar seu catálogo
2. **Configurar regras de enriquecimento** - Definir quais produtos devem ser processados
3. **Monitorar sincronização** - Verificar o status da integração na plataforma

## Solução de Problemas

### Problemas Comuns

- **Erros de autenticação**: Verifique as credenciais da API e permissões
- **Falhas de sincronização**: Verifique a configuração das credenciais e endpoints
- **Produtos ausentes**: Certifique-se de que todos os produtos desejados estão publicados

### Suporte

Para suporte técnico com a integração Shopify, entre em contato com nossa equipe em shopify@generativecrm.com

## Observações Importantes

- O **Token de Acesso da Admin API** é mostrado apenas uma vez durante a criação. Certifique-se de salvá-lo em local seguro
- Mantenha suas credenciais seguras e não as compartilhe publicamente
- Revisite periodicamente as permissões para garantir que estão atualizadas conforme suas necessidades