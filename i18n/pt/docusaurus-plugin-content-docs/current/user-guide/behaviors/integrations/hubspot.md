# HubSpot

Sincronize perfeitamente seus comportamentos de clientes com o HubSpot para potencializar seu CRM, email marketing e fluxos de trabalho de automação. Transforme insights de comportamento em propriedades de contato, listas e fluxos de trabalho acionáveis que impulsionam experiências personalizadas do cliente.

## Visão Geral

A integração com HubSpot permite que você:

- **Sincronize comportamentos como Listas do HubSpot** - Exporte segmentos de comportamento como listas estáticas ou ativas
- **Enriqueça propriedades de contato** - Adicione atributos de comportamento aos registros de contato
- **Ative fluxos de trabalho automatizados** - Lance campanhas de nutrição personalizadas baseadas em comportamentos
- **Pontue leads dinamicamente** - Ajuste pontuações de leads baseadas em segmentos de comportamento
- **Personalize campanhas de email** - Envie mensagens direcionadas a grupos de comportamento específicos
- **Rastreie engajamento** - Monitore como diferentes comportamentos interagem com seu conteúdo
- **Sincronização bidirecional** - Mantenha dados atualizados em ambas as plataformas automaticamente

## Como Funciona

### 1. Configure Seu App Privado do HubSpot

Antes de conectar-se à nossa plataforma, você precisa criar um App Privado no HubSpot e obter um Token de Acesso. Isso fornece acesso seguro baseado em API para sincronizar seus dados de comportamento.

#### Passo 1: Criar um App Privado do HubSpot

1. **Faça login no HubSpot** com credenciais de administrador
2. Clique no ícone de **Configurações** (ícone de engrenagem) na barra de navegação superior
3. Na barra lateral esquerda, navegue até **Integrações** > **Apps Privados**
4. Clique em **Criar um app privado** no canto superior direito

#### Passo 2: Configure Seu App

1. **Nome do App:** Dê ao seu app um nome descritivo (por exemplo, "Integração de Segmentação de Comportamento" ou "Sincronização de Comportamentos de Cliente")
2. **Descrição (opcional):** Adicione notas sobre o que este app faz (por exemplo, "Sincroniza segmentos de comportamento de cliente para marketing direcionado")
3. **Logo (opcional):** Faça upload de um logo se desejar

#### Passo 3: Defina Escopos e Permissões Necessários

#### Passo 4: Gere Seu Token de Acesso

1. Clique em **Criar app** na parte inferior da página
2. O HubSpot exibirá seu **Token de Acesso** - isso é crítico e será mostrado apenas uma vez
3. **Copie o Token de Acesso imediatamente** e guarde-o com segurança
4. Clique em **Continuar criando** ou **Mostrar token** se precisar vê-lo novamente (disponível apenas imediatamente após a criação)

**Notas Importantes de Segurança:**
- Trate seu Token de Acesso como uma senha - nunca o compartilhe publicamente
- Guarde-o em um gerenciador de senhas seguro ou cofre de segredos
- Se comprometido, você pode regenerar o token nas configurações do HubSpot
- O token fornece acesso à API da sua conta HubSpot baseado nos escopos que você selecionou

#### Passo 5: Revisar e Ativar

1. Revise os detalhes do app e permissões
2. Seu App Privado agora está ativo e pronto para usar
3. Mantenha o Token de Acesso à mão para o próximo passo

### 2. Conectar Sua Conta HubSpot à Nossa Plataforma

Agora que você tem seu App Privado do HubSpot e Token de Acesso, conecte-o à nossa plataforma:

1. Navegue até **Configurações** > **Integrações** em nossa plataforma
2. Selecione **HubSpot** da lista de integrações disponíveis
3. Clique em **Conectar ao HubSpot**
4. Escolha **App Privado** como método de conexão
5. **Cole seu Token de Acesso** no campo fornecido
6. **Insira seu ID do Portal HubSpot** (encontrado em Configurações do HubSpot > Configuração da Conta > Padrões da Conta)
7. Clique em **Verificar Conexão** para testar a integração
8. Uma vez verificado, clique em **Salvar** para completar a configuração

## Melhores Práticas

### Convenções de Nomenclatura de Listas

Use nomes claros e consistentes para suas listas do HubSpot:

- Inclua o nome do comportamento: `[Comportamento] Buscadores de Conforto - Ativo`
- Adicione o tipo de sincronização: `Clientes Regulares Fiéis - Sincronização Diária`
- Especifique o propósito: `Caçadores de Ofertas - Campanha de Email Q1 2025`
- Use prefixos: `COMP - Entusiastas de Qualidade` (agrupa todas as listas de comportamento juntas)

Isso facilita encontrar e gerenciar listas no HubSpot.


Para mais informações sobre como criar comportamentos eficazes para exportar, consulte nosso [Guia de Comportamentos](./index) e [Como Usar Comportamentos](./how-to-use).
