# VTEX Integration

Connect your VTEX store with FashionAI to automatically enrich your product catalog with AI-powered descriptions and attributes.

## What You'll Need

Before starting, make sure you have:
- Administrator access to your VTEX store
- Access to FashionAI platform Settings

## Step-by-Step Setup

### Step 1: Enable Vision Enrichment

First, activate the Vision Enrichment feature in FashionAI:

1. Click **Settings** in the right menu
2. Go to **General Settings**
3. Turn on the **Vision Enrichment** toggle

This allows our AI to analyze your product images and automatically generate descriptions and attributes.

### Step 2: Get Your VTEX API Token

You'll need a VTEX API token with specific permissions. Contact your VTEX administrator to create a token with these permissions:

| Product | Category | Resource |
|---------|----------|----------|
| Catalog | Content | Product and SKU Management |
| Catalog | Content | Category Management |
| Catalog | Content | Category |
| Catalog | Content | SKUs |
| OMS | OMS Access | List Orders |
| OMS | OMS Access | View Order |
| Checkout | Checkout Resources | Full Order Access |

### Step 3: Configure VTEX in FashionAI

1. In FashionAI, go to **Settings**
2. Click on the **VTEX Settings** tab
3. Enter your VTEX API credentials:
   - **Store Name**: Your VTEX store name
   - **API Key**: The token from Step 2
   - **API Token**: Your VTEX app token

4. Click **Save**

### Step 4: Create an Affiliate

This allows FashionAI to receive updates from your VTEX catalog automatically.

1. In your VTEX admin, go to **Order Management**
2. Click **Settings** → **Affiliates** tab
3. Click **New Affiliate**
4. Fill in the following information:

| Field | What to Enter |
|-------|---------------|
| **Name** | FashionAI |
| **ID** | FFF |
| **Trade Policy** | 1 |
| **Follow-up Email** | vtex@generativecrm.com |
| **Search Endpoint** | Click "Generate Link" |
| **Search Endpoint Version** | 1.x.x |
| **Use my payment method** | Leave unchecked |

5. Click **Save**

## How It Works

Once the integration is active:

1. New products added to VTEX are automatically detected
2. FashionAI analyzes product images using computer vision
3. AI generates descriptions, tags, and attributes
4. Enriched data syncs back to your VTEX catalog
5. Your products have better descriptions and discoverability

## Checking Integration Status

To verify everything is working:

1. Go to **Settings** → **Integrations** in FashionAI
2. Check the VTEX integration status:
   - ✅ **Active**: Everything is working properly
   - ⏳ **Syncing**: Update in progress
   - ❌ **Error**: Something needs attention

## Common Issues

### Products Not Syncing

**Solution:**
- Verify your API token has all required permissions
- Check that the affiliate is configured correctly
- Make sure Trade Policy includes the products you want to sync

### Connection Errors

**Solution:**
- Double-check your VTEX credentials in Settings
- Confirm the API token is still valid
- Test the connection using the "Test Connection" button

### Products Missing Enrichment

**Solution:**
- Ensure Vision Enrichment is enabled
- Verify product images are high quality and accessible
- Check that products are published to the correct Trade Policy

## Need Help?

If you encounter any issues:
- Email: vtex@generativecrm.com
- Include: Your store name and a description of the issue

## Next Steps

After your integration is complete:

- [Learn about Vision Enrichment](../vision-enrichment/index.md)
- [Explore Recommendations](../recomendations/index.md)
- [Set up Behaviors](../behaviors/index.md)
