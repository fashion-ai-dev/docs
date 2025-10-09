# VTEX Integration

Complete guide to integrate FashionAI with your VTEX store for automated product enrichment and catalog management.

## Overview

The VTEX integration enables FashionAI to:

- **Automatically enrich product catalogs** with AI-generated descriptions and attributes
- **Sync product data** in real-time with your VTEX store
- **Process visual content** using Vision Enrichment capabilities
- **Consume catalog data** via the affiliate system

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

### 2. Configure VTEX Settings

1. Go to the **VTEX Settings** tab in the Settings menu

![Vtex Tab](img/tela1-vtex.png)

2. Insert your VTEX API credentials:

| Field | Description | Example |
|-------|-------------|---------|
| **Account Name** | Your VTEX account identifier | `yourstore` |
| **Environment** | VTEX environment | `vtexcommercestable` |
| **App Key** | VTEX API application key | `vtexappkey-yourstore-XXXXX` |
| **App Token** | VTEX API application token | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` |

3. Click **Test Connection** to verify the credentials
4. Click **Save** to activate the integration

## Required Permissions

Your VTEX API token must have the following permissions:

| Product | Category | Resource |
|---------|----------|----------|
| **Catalog** | Content | Product and SKU Management |
| **Catalog** | Content | Category Management |
| **Catalog** | Content | Category |
| **Catalog** | Content | SKUs |
| **OMS** | OMS Access | List Orders |
| **OMS** | OMS Access | View Order |
| **Checkout** | Checkout Resources | Full Order Access |

For more details on how to configure permissions in VTEX, refer to the [VTEX API Documentation](https://developers.vtex.com).

## Affiliate System Configuration

To enable FashionAI to consume your VTEX catalog, create an affiliate:

### Creating an Affiliate

1. In the VTEX admin, go to **Order Management** > **Settings** > **Affiliates**
2. Click **New Affiliate**
3. Fill in the affiliate fields:

| Field | Value |
|-------|-------|
| **Name** | `FashionAI` |
| **ID** | `FFF` |
| **Trade Policy** | `1` (or your preferred policy) |
| **Follow-up Email** | `vtex@generativecrm.com` |
| **Search Endpoint** | Click "Generate Link" |
| **Search Endpoint Version** | `1.x.x` |
| **Use my payment method** | ❌ Do not check |

4. Click **Save**

### Custom Configuration

If your configuration differs from the standard setup (different Trade Policy, custom email, etc.), please contact support at **vtex@generativecrm.com** with:

- VTEX Account Name
- Affiliate ID (if not FFF)
- Trade Policy Number
- Custom Endpoint URL (if any)

## Vision Enrichment Workflow

1. **Product Image Upload:** When a product image is added to VTEX
2. **Automatic Detection:** FashionAI detects the new image via the affiliate endpoint
3. **AI Analysis:** Computer vision analyzes the image
4. **Attribute Extraction:** AI identifies colors, patterns, styles, materials
5. **Description Generation:** AI creates product descriptions
6. **Catalog Update:** Enriched data is synced back to VTEX

## Monitoring Integration

Track synchronization status in **Settings** > **Integrations** > **VTEX**:

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
- Verify API credentials in VTEX Settings
- Confirm all required permissions are granted

**Products Not Syncing:**
- Check affiliate configuration in VTEX
- Verify Trade Policy includes desired products
- Review sync error logs in the integration dashboard

**Enrichment Not Working:**
- Ensure Vision Enrichment is enabled in General Settings
- Verify product images are high quality and accessible

## Support

For technical support with VTEX integration:

- **Email:** support@generativecrm.com
- **VTEX-Specific Issues:** [Vtex help link](https://help.vtex.com/)

**When contacting support, include:**
- Your VTEX account name
- Affiliate ID
- Error codes or messages
- Example product SKUs affected

## Additional Resources

- **VTEX API Documentation:** [VTEX Developer Portal](https://developers.vtex.com)
- **FashionAI Platform Guide:** [Getting Started](../getting-started.md)
- **Vision Enrichment Details:** [Vision Enrichment Guide](../../user-guide/vision-enrichment/index.md)
