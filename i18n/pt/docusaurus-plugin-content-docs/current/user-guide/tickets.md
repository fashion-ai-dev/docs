---
sidebar_position: 5
---

# Tickets

Use a área de tickets para falar com o suporte, acompanhar respostas e organizar chamados por prioridade e status.

![Tela de tickets](/img/tickets.png)

Para abrir essa área, é só clicar no ícone de suporte no canto inferior direito da plataforma.

## Quando usar tickets

Abra um ticket quando precisar de ajuda com alguma operação da plataforma, reportar um erro ou acompanhar uma solicitação com o time de suporte.

Exemplos comuns:

- erro em alguma funcionalidade
- dúvida operacional que precisa de análise
- problema em sincronização ou processamento
- solicitação que precisa de contexto, prints ou histórico

:::tip Resumo rápido
- Use tickets para falar com o suporte e acompanhar o andamento de chamados.
- Você pode filtrar, responder e acompanhar SLA por prioridade.
:::

## Como a tela está organizada

Ao entrar na tela, você verá a página dividida em duas áreas principais:

| Área | Descrição |
| --- | --- |
| lado esquerdo | lista de tickets, filtros e paginação |
| lado direito | conversa do ticket selecionado, detalhes e campo para responder |

No topo da tela, também existe o botão `Atualizar` para recarregar as informações.

No rodapé, há um resumo de SLA por prioridade para consulta rápida.

## Fluxo mais comum

Na prática, o uso costuma seguir este caminho:

1. Entre na tela de tickets.
2. Use os filtros para localizar o ticket que deseja acompanhar.
3. Clique no ticket na lista da esquerda.
4. Leia o histórico no painel da direita.
5. Envie uma resposta ou atualize o ticket, se o seu perfil tiver essa permissão.

## Como abrir um novo ticket

Para criar um ticket:

1. Clique na imagem de suporte no canto inferior direito da plataforma.
2. No card `Abrir novo ticket`, preencha o `Assunto`.
3. Escolha a `Prioridade`.
4. Escreva uma mensagem e/ou adicione imagens.
5. Clique em `Criar ticket`.

### O que é obrigatório

| Campo | Regra |
| --- | --- |
| `Assunto` | é obrigatório |
| `mensagem` ou `imagem` | você precisa enviar pelo menos uma opção |

Isso significa que não é necessário preencher texto e imagem ao mesmo tempo, mas um dos dois precisa existir.

### Prioridades disponíveis

- `Baixa`
- `Alta`
- `Crítica`

### Regras para imagens

| Regra | Valor |
| --- | --- |
| limite por envio | até 3 imagens |
| formatos aceitos | `JPG`, `PNG` e `WEBP` |
| tamanho máximo por arquivo | `2MB` |

## Como responder um ticket

Para continuar uma conversa em um ticket:

1. Selecione o ticket na lista.
2. Vá até a área `Responder ticket`.
3. Digite sua mensagem e/ou anexe imagens.
4. Clique em `Enviar mensagem`.

## Regras importantes ao responder

:::note
- não é permitido enviar resposta vazia
- tickets com status `finalized` não aceitam novas mensagens
:::

## Como acompanhar o status do ticket

Cada ticket pode estar em um destes status:

| Status | Significado |
| --- | --- |
| `open` | ticket aberto |
| `atendimento` | ticket em tratamento pelo suporte |
| `finalized` | ticket encerrado |

No ticket selecionado, você consegue ver as informações principais da solicitação, como assunto, data de criação, prioridade atual e histórico da conversa.

## Como usar os filtros

Se houver muitos tickets na lista, use os filtros para encontrar mais rápido o que precisa.

Filtros disponíveis:

- Todos
- Abertos
- Em atendimento
- Finalizados

## Como funciona a paginação

| Item | Detalhe |
| --- | --- |
| quantidade por página | cada página mostra até 20 tickets |
| navegação | use `Anterior` e `Próxima` para navegar entre as páginas |

## Mensagens e anexos

Cada mensagem pode ter:

- texto
- anexos
- texto e anexos juntos

Os anexos aparecem no histórico da conversa como botões. Ao clicar, o arquivo é aberto em uma nova aba para download.

## Tempo de resposta por prioridade

Os tickets seguem o SLA abaixo:

| Prioridade | SLA |
| --- | --- |
| `Crítica` | até 4 horas úteis |
| `Alta` | até 12 horas úteis |
| `Baixa` | até 24 horas úteis |

## Erros mais comuns

### `Informe o assunto do ticket`

O campo `Assunto` não foi preenchido.

### `Adicione uma mensagem ou pelo menos uma imagem`

O envio foi feito sem texto e sem anexo.

### `Formato inválido`

O arquivo enviado não está em um formato aceito.

### `Tamanho máximo`

A imagem enviada ultrapassa o limite de `2MB`.

## Boas práticas para abrir tickets melhores

Para agilizar o atendimento:

:::tip
- use um assunto direto, como `Erro ao subir csv na plataforma`
- explique o que aconteceu, quando aconteceu e se possível a mensagem de erro que apareceu.
- adicione prints claros e atualizados quando isso ajudar no entendimento
- escolha a prioridade correta para evitar atrasos ou escalonamentos desnecessários
:::
