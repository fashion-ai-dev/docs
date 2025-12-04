---
sidebar_position: 5
---


# Product Collections and Subsets (Slices)

**Collections** allows you to create and organize product collections using **AI, spreadsheets, or manual selection**.
Each collection can contain subsets called **slices**, which organize products according to defined criteria.

## 1. Creating a Collection

1. Click on **New Collection**.
2. Enter:
   - **Collection name** (e.g., `Winter Collection 2025`).
   - **Collection description** (e.g., `Winter products`).
3. Save the collection.

The collection will be listed on the main screen, showing:
- Name
- Description
- Creation date
- Number of existing slices

## 2. Creating a Subset (Slice)

1. Within the collection, click on **New Slice**.
2. Fill in:
   - **Slice name** (e.g., `Wool Coats`).
   - **Type** (`MANUAL`, or other types if available).
   - **Start date** (when it becomes **active**).
   - **End date** (when it **expires**).

> For a slice without expiration, use a **distant end date**.

### Slice status (based on dates)
- 🟩 **Green – Active** (between start and end date).
- 🟨 **Yellow – Scheduled** (hasn't started yet).
- 🟥 **Red – Expired** (end date has passed).

## 3. Product Management in Slice

Within each slice you can:
- ➕ **Add products**
- ➖ **Remove products**
- 🔀 **Reposition products** (define the order/`position`)

**Limit:** each slice can contain **up to 500 products**.

The `active` field returned per product in the API respects the **filters applied** to the slice.

## 4. Querying Collection Products via API

On the collection page, there's an endpoint to query the products of the **active slice**.

### Endpoint
```http
GET https://catalog.api.fashionai.dev/api/v1/merchandising-collections/protected/{id}
```

### Headers
```http
X-FashionAI-APP-Token: <app-token>
```

### API Rules
- The API returns **only 1 active slice**.
- If there are **multiple** active ones, it returns the one with the **latest start date**.
- If there's **no active** slice, it returns **HTTP 404**.

## 5. Response Example (payload)

```json
{
  "collectionId": 1,
  "collectionName": "Winter Collection 2025",
  "collectionDescription": "Winter products",
  "sliceId": 10,
  "sliceName": "Wool Coats",
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

### Important Fields
- `position`: product order in the slice.
- `active`: indicates if the product is active according to the slice **filters**.

## 6. Restrictions

- ✅ Maximum of **500 products per slice**.
- ✅ A slice can be created **without expiration** (by setting a distant end date).
- ❌ No active slice → **the API doesn't return products** (HTTP 404).

## 7. Best Practice Notes

- Name collections and slices clearly to facilitate maintenance.
- Avoid keeping more than one slice active at the same time, to reduce ambiguities.  

