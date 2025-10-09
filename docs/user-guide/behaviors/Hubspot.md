# HubSpot Integration for Behaviors

Seamlessly sync your customer behaviors with HubSpot to power your CRM, email marketing, and automation workflows. Transform behavioral insights into actionable contact properties, lists, and workflows that drive personalized customer experiences.

## Overview

The HubSpot integration enables you to:

- **Sync behaviors as HubSpot Lists** - Export behavioral segments as static or active lists
- **Enrich contact properties** - Add behavioral attributes to contact records
- **Trigger automated workflows** - Launch personalized nurture campaigns based on behaviors
- **Score leads dynamically** - Adjust lead scores based on behavioral segments
- **Personalize email campaigns** - Send targeted messages to specific behavioral groups
- **Track engagement** - Monitor how different behaviors interact with your content
- **Bi-directional sync** - Keep data fresh across both platforms automatically

## How It Works

### 1. Set Up Your HubSpot Private App

Before connecting to our platform, you need to create a Private App in HubSpot and obtain an Access Token. This provides secure, API-based access for syncing your behavioral data.

#### Step 1: Create a HubSpot Private App

1. **Log into HubSpot** with admin credentials
2. Click the **Settings** icon (gear icon) in the top navigation bar
3. In the left sidebar, navigate to **Integrations** > **Private Apps**
4. Click **Create a private app** in the top right corner

#### Step 2: Configure Your App

1. **App Name:** Give your app a descriptive name (e.g., "Behavioral Segmentation Integration" or "Customer Behaviors Sync")
2. **Description (optional):** Add notes about what this app does (e.g., "Syncs customer behavioral segments for targeted marketing")
3. **Logo (optional):** Upload a logo if desired

#### Step 3: Set Required Scopes and Permissions

#### Step 4: Generate Your Access Token

1. Click **Create app** at the bottom of the page
2. HubSpot will display your **Access Token** - this is critical and will only be shown once
3. **Copy the Access Token immediately** and store it securely
4. Click **Continue creating** or **Show token** if you need to see it again (only available immediately after creation)

**Important Security Notes:**
- Treat your Access Token like a password - never share it publicly
- Store it in a secure password manager or secrets vault
- If compromised, you can regenerate the token in HubSpot settings
- The token provides API access to your HubSpot account based on the scopes you selected

#### Step 5: Review and Activate

1. Review the app details and permissions
2. Your Private App is now active and ready to use
3. Keep the Access Token handy for the next step

### 2. Connect Your HubSpot Account to Our Platform

Now that you have your HubSpot Private App and Access Token, connect it to our platform:

1. Navigate to **Settings** > **Integrations** in our platform
2. Select **HubSpot** from the list of available integrations
3. Click **Connect to HubSpot**
4. Choose **Private App** as the connection method
5. **Paste your Access Token** in the provided field
6. **Enter your HubSpot Portal ID** (found in HubSpot Settings > Account Setup > Account Defaults)
7. Click **Verify Connection** to test the integration
8. Once verified, click **Save** to complete the setup

## Best Practices

### List Naming Conventions

Use clear, consistent names for your HubSpot lists:

- Include the behavior name: `[Behavior] Comfort Seekers - Active`
- Add the sync type: `Loyal Regulars - Daily Sync`
- Specify the purpose: `Value Hunters - Email Campaign Q1 2025`
- Use prefixes: `BEH - Quality Enthusiasts` (groups all behavior lists together)

This makes it easier to find and manage lists in HubSpot.


For more information on creating effective behaviors to export, see our [Behaviors Guide](./index.md) and [How to Use Behaviors](./how-to-use.md).
