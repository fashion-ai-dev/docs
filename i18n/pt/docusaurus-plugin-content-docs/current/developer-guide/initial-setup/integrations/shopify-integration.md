# Shopify Integration

Complete guide to integrate FashionAI with your Shopify store for automated product enrichment and catalog management.

## Overview

The Shopify integration enables FashionAI to:

- **Automatically enrich product catalogs** with AI-generated descriptions and attributes
- **Sync product data** in real-time with your Shopify store
- **Process visual content** using Vision Enrichment capabilities
- **Manage orders and customer data** for behavioral segmentation

## Initial Setup

### 1. Enable Vision Enrichment

1. In the platform's right menu, click on **Settings**
2. Navigate to **General Settings**
3. Enable the **Vision Enrichment** toggle

![Activate Catalog](/img/activate-catalog.png)

**What Vision Enrichment does:**
- Analyzes product images using computer vision AI
- Generates product descriptions based on visual content
- Extracts attributes like color, style, pattern, and material
- Enriches your catalog with accurate, consistent metadata

### 2. Create Shopify Custom App

To connect FashionAI with your Shopify store, create a custom app:

1. Log in to **Shopify Admin** as administrator
2. Go to **Settings** > **Apps and sales channels**
3. Click **Develop apps** > **Create an app**
4. Name the app: **FashionAI API Integration**
5. Click **Create app**

### 3. Configure API Permissions

In the created application, configure the necessary permissions:

1. Go to the **API credentials** tab
2. Click **Configure Admin API scopes**
3. Select the following permissions:

| Permission | Description |
|---------|-------------|
| **read_products** | Read products |
| **write_products** | Edit products (including images) |
| **read_publications** | Read publications |
| **read_inventory** | Read inventory |
| **read_customers** | Read customers |
| **read_orders** | Read orders |
| **read_marketplace_orders** | Read marketplace orders |
| **read_buyer_membership_orders** | Read buyer membership orders |

4. Click **Save**

For more details on Shopify API permissions, refer to the [Shopify API Documentation](https://shopify.dev/docs/api/admin-rest).

### 4. Generate Access Token

1. In the **API credentials** tab, click **Install app**
2. Confirm the installation
3. **Copy the Admin API Access Token immediately** (shown only once!)
4. Store the token securely

**Important:** The Admin API Access Token is shown only once. Save it in a secure password manager.

### 5. Configure Shopify Settings in FashionAI

1. Go to the **Shopify Settings** tab in the Settings menu
2. Insert your Shopify credentials:

| Field | Description | Example |
|-------|-------------|---------|
| **Store URL** | Your Shopify store URL | `https://your-store.myshopify.com` |
| **Access Token** | Admin API Access Token | `shpat_xxxxxxxxxxxxxxxxxxxxx` |

3. Click **Test Connection** to verify the credentials
4. Click **Save** to activate the integration

## Advanced Configuration

### Optional Filtering Rules

Configure additional rules to control which products are processed:

**Sales Channels (Publication IDs)**
- Enter publication IDs separated by commas
- Example: `123,456`
- Defines which sales channels to sync products from

**Excluded Vendors**
- Enter vendor names separated by commas
- Example: `Nike,Adidas,Puma`
- Brands excluded from AI processing

**Order Source (Sales Platform)**
- Enter order source names separated by commas
- Example: `web,pos,api`
- Filter orders by origin (`web` for online store, `pos` for Point of Sale, `api` for API orders)

Leave fields blank to ignore these rules.

## Vision Enrichment Workflow

1. **Product Image Upload:** When a product image is added to Shopify
2. **Automatic Detection:** FashionAI detects the new image via webhook
3. **AI Analysis:** Computer vision analyzes the image
4. **Attribute Extraction:** AI identifies colors, patterns, styles, materials
5. **Description Generation:** AI creates product descriptions
6. **Catalog Update:** Enriched data is synced back to Shopify

## Monitoring Integration

Track synchronization status in **Settings** > **Integrations** > **Shopify**:

- ✅ **Active:** Syncing successfully
- ⏳ **Syncing:** Update in progress
- ⚠️ **Warning:** Partial sync or minor issues
- ❌ **Error:** Sync failed - check error logs

## Best Practices

### Product Image Quality

For optimal enrichment results:

- Use high-resolution images (minimum 1000x1000 pixels)
- Ensure clear backgrounds (white or neutral)
- Include multiple angles (front, back, details)
- Verify proper lighting and accurate colors

### Enrichment Settings

Customize enrichment in the platform:

- **Tone of Voice:** Casual, professional, luxury
- **Description Length:** Short, medium, or detailed
- **Language:** Multiple languages supported
- **Custom Attributes:** Brand-specific attributes

## Troubleshooting

### Common Issues

**Authentication Errors:**
- Verify API credentials in Shopify Settings
- Confirm all required permissions are granted in the custom app

**Products Not Syncing:**
- Check publication settings in Shopify
- Verify excluded vendors filter isn't blocking products
- Review sync error logs in the integration dashboard

**Enrichment Not Working:**
- Ensure Vision Enrichment is enabled in General Settings
- Verify product images are high quality and accessible
- Check that products are published to the correct sales channels

## Suporte

For technical support with Shopify integration:

- **Email:** support@generativecrm.com
- **Shopify-Specific Issues:** [Shopify Help Center](https://help.shopify.com/)

**When contacting support, include:**
- Your Shopify store URL
- Error codes or messages
- Example product handles affected
- Screenshots of the issue (if applicable)

## Additional Resources

- **Shopify API Documentation:** [Shopify Developers](https://shopify.dev/docs)
- **FashionAI Platform Guide:** [Getting Started](../getting-started)
- **Vision Enrichment Details:** [Vision Enrichment Guide](../../user-guide/vision-enrichment/index)
