# Shopify Integration

Complete guide to integrate FashionAI with your Shopify store for automated product enrichment and catalog management.

## Initial Setup

To integrate your Shopify store with our platform, you'll need to create a custom app in your Shopify admin and generate API credentials. These credentials will allow our system to securely connect with your store and access the necessary data.

### Step 1: Access Shopify Admin

1. Log in to Shopify as an administrator
2. In the side menu, click on **Settings**
3. Go to **Apps and sales channels**

### Step 2: Create a Custom App

1. Click on **Develop apps**
2. Click on **Create an app**
3. Give the app a name, e.g., **FashionAI API Integration**
4. Click **Create app**

### Step 3: Configure API Permissions

In the created app, go to the **API credentials** tab.

1. Click on **Configure Admin API scopes**
2. Select the following permissions:

| Permission | Description |
|------------|-------------|
| **read_products** | To read products |
| **write_products** | To edit products (including images) |
| **read_publications** | To read publications |
| **read_inventory** | To read inventory |
| **read_customers** | To read customers |
| **read_orders** | To read orders |
| **read_marketplace_orders** | To read orders placed through marketplaces |
| **read_buyer_membership_orders** | To read orders related to buyer memberships |

3. Click **Save**

### Step 4: Generate the API Key and Access Token

Still in the **API credentials** tab:

1. Click on **Install app**
2. Confirm the installation
3. Shopify will generate the following credentials:
   - **Admin API Access Token** (This token is shown only once! Save it immediately)

## Required Credentials

After completing the configuration, you will have:

- **Store URL**: `https://your-store.myshopify.com`
- **Admin API Access Token**: Token generated in step 4

## Configuration in FashionAI Platform

### 1. Enable Vision Enrichment

1. In the platform's right menu, click on **Settings**
2. In **General Settings**, enable the **Vision Enrichment** button

### 2. Configure Shopify Credentials

1. Go to the **Shopify Settings** tab
2. Insert your Shopify API credentials for data synchronization:
   - **Store URL**: Your Shopify store URL
   - **Access Token**: The token generated previously

## Next Steps

After completing the configuration:

1. **Test the connection** - Verify that FashionAI can access your catalog
2. **Configure enrichment rules** - Set up which products should be processed
3. **Monitor synchronization** - Check the integration status in the platform

## Troubleshooting

### Common Issues

- **Authentication errors**: Verify API credentials and permissions
- **Sync failures**: Check credential configuration and endpoints
- **Missing products**: Ensure all desired products are published

### Support

For technical support with Shopify integration, contact our team at shopify@generativecrm.com

## Important Notes

- The **Admin API Access Token** is shown only once during creation. Make sure to save it in a secure location
- Keep your credentials secure and do not share them publicly
- Periodically review permissions to ensure they are updated according to your needs