---
sidebar_position: 3
---

# API Authentication - App Token

Learn how to authenticate your requests to all Fashion.AI APIs using secure app tokens.

## Overview

All FashionAI APIs (Search, Recommendations) use the same authentication method with app tokens. This unified approach simplifies integration and allows you to use a single token across both services.

## Authentication Method

All APIs use **X-FashionAI-APP-Token** via custom headers.

### Required Headers

| Header | Required | Description |
|--------|----------|-------------|
| `Content-Type` | Yes | Must be `application/json` |
| `X-FashionAI-APP-Token` | Yes | Your application token |

## Obtaining Your Token

### Step 1: Access Dashboard

1. Log into your [FashionAI Dashboard](https://app.generativecrm.com)
2. Navigate to **API Settings** in the sidebar
3. Click on **API Tokens** section

### Step 2: Generate Token

1. Click **"Generate New Token"**
2. Enter a descriptive name (e.g., "Production API Token")
4. Click **"Create Token"**

![App Token Generation](/img/app-token.png)

### Step 3: Copy Token

```bash
# Your token will look like this:
X-FashionAI-APP-Token: ab1234567890abcdef...
```

⚠️ **Important**: Copy and store your token immediately. It won't be shown again for security reasons.

### Common Issues

1. **Wrong Header Name**
   ```javascript
   // ❌ Wrong
   headers: { 'Authorization': 'Bearer ' + token }

   // ✅ Correct
   headers: { 'X-FashionAI-APP-Token': token }
   ```

## Next Steps

Now that you understand authentication, explore specific APIs:

- [Search API](./recommendations-search/search/overview) - Product search functionality
- [API Endpoints](./recommendations-search/api-endpoints) - Complete endpoint reference
- [UI Integration](./recommendations-search/ui-integration) - Frontend integration guides