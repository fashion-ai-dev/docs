---
sidebar_position: 5
---


# Coleções – Coleções de Produtos e Subconjuntos (Slices)

**Coleções** permite criar e organizar coleções de produtos usando **IA, planilhas ou seleção manual**.
Cada coleção pode conter subconjuntos chamados **slices**, que organizam produtos de acordo com critérios definidos.

## 1. Criação de uma Coleção

1. Clique em **Nova Coleção**.
2. Digite:
   - **Nome da coleção** (ex., `Coleção Inverno 2025`).
   - **Descrição da coleção** (ex., `Produtos de inverno`).
3. Salve a coleção.

A coleção será listada na tela principal, mostrando:
- Nome
- Descrição
- Data de criação
- Número de slices existentes

## 2. Criação de um Subconjunto (Slice)

1. Dentro da coleção, clique em **Novo Slice**.
2. Preencha:
   - **Nome do slice** (ex., `Casacos de Lã`).
   - **Tipo** (`MANUAL`, ou outros tipos se disponíveis).
   - **Data de início** (quando se torna **ativo**).
   - **Data de término** (quando **expira**).

> Para um slice sem expiração, use uma **data de término distante**.

### Status do slice (baseado em datas)
- 🟩 **Verde – Ativo** (entre data de início e término).
- 🟨 **Amarelo – Agendado** (ainda não começou).
- 🟥 **Vermelho – Expirado** (data de término passou).

## 3. Gerenciamento de Produtos no Slice

Dentro de cada slice você pode:
- ➕ **Adicionar produtos**
- ➖ **Remover produtos**
- 🔀 **Reposicionar produtos** (definir a ordem/`position`)

**Limite:** cada slice pode conter **até 500 produtos**.

O campo `active` retornado por produto na API respeita os **filtros aplicados** ao slice.

## 4. Consulta de Produtos da Coleção via API

Na página da coleção, há um endpoint para consultar os produtos do **slice ativo**.

### Endpoint
```http
GET https://catalog.api.fashionaiale.com/api/v1/merchandising-collections/protected/{id}
```

### Cabeçalhos
```http
X-FashionAI-APP-Token: <app-token>
```

### Regras da API
- A API retorna **apenas 1 slice ativo**.
- Se houver **múltiplos** ativos, retorna aquele com a **data de início mais recente**.
- Se **não houver** slice ativo, retorna **HTTP 404**.

## 5. Exemplo de Resposta (payload)

```json
{
  "collectionId": 1,
  "collectionName": "Coleção Inverno 2025",
  "collectionDescription": "Produtos de inverno",
  "sliceId": 10,
  "sliceName": "Casacos de Lã",
  "startsAt": "2025-09-23T00:00:00.000Z",
  "endsAt": "2025-12-31T23:59:59.000Z",
  "products": [
    {
      "productId": "12345",
      "position": 1,
      "active": true
    },
    {
      "productId": "12346",
      "position": 2,
      "active": false
    }
  ]
}
```

### Campos Importantes
- `position`: ordem do produto no slice.
- `active`: indica se o produto está ativo de acordo com os **filtros** do slice.

## 6. Restrições

- ✅ Máximo de **500 produtos por slice**.
- ✅ Um slice pode ser criado **sem expiração** (definindo uma data de término distante).
- ❌ Sem slice ativo → **a API não retorna produtos** (HTTP 404).

## 7. Notas de Melhores Práticas

- Nomeie coleções e slices claramente para facilitar a manutenção.
- Evite manter mais de um slice ativo ao mesmo tempo, para reduzir ambiguidades.  

