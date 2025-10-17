# Shopify Integration

Connect your Shopify store with FashionAI to automatically enrich your product catalog with AI-powered descriptions and attributes.

## What You'll Need

Before starting, make sure you have:
- Administrator access to your Shopify store
- Access to FashionAI platform Settings
- 10-15 minutes to complete the setup

## Step-by-Step Setup

### Step 1: Enable Vision Enrichment

First, activate the Vision Enrichment feature in FashionAI:

1. Click **Settings** in the right menu
2. Go to **General Settings**
3. Turn on the **Vision Enrichment** toggle

**What this does:** Enables our AI to analyze product images and automatically generate descriptions, tags, and attributes.

### Step 2: Create a Custom App in Shopify

You'll need to create a custom app in Shopify to connect with FashionAI:

1. Log in to your **Shopify Admin**
2. Go to **Settings** → **Apps and sales channels**
3. Click **Develop apps**
4. Click **Create an app**
5. Name it: **FashionAI API Integration**
6. Click **Create app**

### Step 3: Set Up API Permissions

Now configure what data FashionAI can access:

1. In your new app, go to **API credentials** tab
2. Click **Configure Admin API scopes**
3. Select these permissions:

| Permission | Why We Need It |
|---------|-------------|
| **read_products** | To read your product catalog |
| **write_products** | To update products with AI-generated content |
| **read_publications** | To know which products are published |
| **read_inventory** | To check product availability |
| **read_customers** | For personalized recommendations |
| **read_orders** | To understand purchase patterns |

4. Click **Save**

### Step 4: Generate Your Access Token

1. Still in the **API credentials** tab, click **Install app**
2. Confirm the installation
3. **Copy the Admin API Access Token** that appears

**Important:** This token is shown only once! Save it somewhere safe (like a password manager).

### Step 5: Connect Shopify to FashionAI

1. Go to FashionAI **Settings**
2. Click the **Shopify Settings** tab
3. Enter your credentials:
   - **Store URL**: Your Shopify store URL (example: `https://your-store.myshopify.com`)
   - **Access Token**: The token you copied in Step 4

4. Click **Test Connection** to verify everything works
5. Click **Save**

## Optional: Advanced Filters

You can control which products get processed by FashionAI:

### Sales Channels
- Enter publication IDs (comma-separated) to sync only specific channels
- Example: `123,456`
- Leave blank to sync all channels

### Excluded Brands
- Enter brand names (comma-separated) to exclude from AI processing
- Example: `Nike,Adidas,Puma`
- Leave blank to process all brands

### Order Sources
- Filter orders by where they came from
- Example: `web,pos,api`
- Leave blank to include all order sources

## How It Works

Once the integration is active, here's what happens automatically:

1. **New products** added to Shopify are detected
2. **AI analyzes** product images using computer vision
3. **Descriptions are generated** based on visual content
4. **Attributes are extracted** (colors, styles, patterns, materials)
5. **Data syncs back** to your Shopify catalog

## Tips for Best Results

### Product Images
For the best AI-generated content:
- Use **high-resolution images** (minimum 1000x1000 pixels)
- Include **clear backgrounds** (white or neutral works best)
- Add **multiple angles** (front, back, detail shots)
- Ensure **good lighting** and accurate colors

### Customizing AI Output
You can customize how AI generates content in the platform:
- **Tone of voice**: Choose casual, professional, or luxury
- **Description length**: Short, medium, or detailed
- **Language**: Multiple languages supported
- **Custom attributes**: Add brand-specific attributes

## Checking Integration Status

To verify everything is working:

1. Go to **Settings** → **Integrations** in FashionAI
2. Check the Shopify integration status:
   - ✅ **Active**: Everything is syncing successfully
   - ⏳ **Syncing**: Update in progress
   - ⚠️ **Warning**: Minor issues detected
   - ❌ **Error**: Something needs attention

## Common Issues

### Products Not Syncing

**Possible causes:**
- Products aren't published to the correct sales channel
- Excluded brands filter is blocking products
- API permissions aren't set correctly

**Solution:**
- Check publication settings in Shopify
- Review your filter settings
- Verify all permissions from Step 3 are enabled

### Connection Errors

**Possible causes:**
- Access token is incorrect or expired
- Store URL is formatted incorrectly

**Solution:**
- Double-check the credentials in Shopify Settings
- Ensure Store URL includes `https://` and `.myshopify.com`
- Try regenerating the access token if needed

### Enrichment Not Working

**Possible causes:**
- Vision Enrichment is disabled
- Product images are low quality or inaccessible
- Products don't meet filter criteria

**Solution:**
- Confirm Vision Enrichment is turned on in General Settings
- Check that product images are high quality and publicly accessible
- Review your advanced filter settings

## Need Help?

If you encounter any issues:
- **Email**: support@generativecrm.com
- **Include**: Your store URL, error messages, and affected product examples

## Next Steps

After your integration is complete:

- [Learn about Vision Enrichment](../vision-enrichment/index.md)
- [Explore Recommendations](../recomendations/index.md)
- [Set up Behaviors](../behaviors/index.md)
