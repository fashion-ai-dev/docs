# Integrations

## Meta Integration for Behaviors

Connect your customer behaviors directly to Meta (Facebook & Instagram) advertising platforms to create highly targeted, data-driven campaigns. Our seamless integration allows you to transform behavioral insights into powerful custom audiences for your Meta ads.

## Overview

The Meta integration enables you to:

- **Sync customer behaviors as Custom Audiences** - Export your behavioral segments directly to Meta Ads Manager
- **Create lookalike audiences** - Find new customers similar to your best-performing behaviors
- **Retarget specific segments** - Reach customers based on their shopping patterns and preferences
- **Measure campaign performance** - Track how different behaviors respond to your Meta campaigns
- **Automate audience updates** - Keep your Meta audiences fresh with automatic syncing

## How It Works

### 1. Connect Your Meta Account

Before you can export behaviors to Meta, you need to establish a connection:

1. Navigate to **Settings** > **Integrations**
2. Select **Meta** from the list of available integrations
3. Click **Connect to Meta**
4. Log in with your Meta Business account credentials
5. Grant the necessary permissions for audience management
6. Select the Ad Account(s) you want to sync with

**Required Permissions:**
- Manage ad accounts
- Manage custom audiences
- View ad account insights

### 2. Export Behaviors to Meta

Once connected, you can export any behavior as a Custom Audience:

#### From the Behaviors Dashboard:

1. Go to **Behaviors** in your main navigation
2. Select the behavior you want to export (suggested or custom)
3. Click the **Export** button
4. Choose **Meta Custom Audience** from the export options
5. Configure your audience settings:
   - **Audience Name** - Give your custom audience a descriptive name
   - **Ad Account** - Select which Meta Ad Account to sync with
   - **Update Frequency** - Choose how often to refresh the audience (daily, weekly, or manual)
   - **Description** (optional) - Add notes about this audience for your team

6. Click **Create Audience** to export

#### From Campaign Creation:

When creating a new campaign, you can export behaviors on-the-fly:

1. Create or edit a campaign
2. In the **Audience** section, select a behavior
3. Click **Send to Meta**
4. Follow the same configuration steps above

### 3. Audience Sync Options

**Manual Sync:**
- Export once and manually refresh when needed
- Best for one-time campaigns or testing
- Update by clicking **Refresh Audience** in the integrations panel

**Automatic Sync:**
- Keep audiences up-to-date automatically
- Daily sync: Updates every 24 hours with latest customer data
- Weekly sync: Updates every 7 days
- Best for ongoing campaigns and retargeting

**Important:** Meta requires a minimum audience size of 100 people to create a Custom Audience. If your behavior has fewer than 100 customers, you'll receive a notification and the export will be paused until the threshold is met.

## Use Cases

### 1. Retargeting High-Value Segments

Export behaviors like "Comfort Seekers" or "Quality Enthusiasts" to create tailored ad creative that speaks directly to their preferences.

**Example:**
- Behavior: Comfort Seekers
- Meta Campaign: Highlight convenience features, easy shopping, hassle-free returns
- Result: Higher engagement from customers who value convenience

### 2. Lookalike Audience Creation

Use your best-performing behaviors as seed audiences for Meta's Lookalike Audiences:

1. Export a high-value behavior (e.g., "Loyal Regulars")
2. In Meta Ads Manager, create a Lookalike Audience based on this Custom Audience
3. Reach new potential customers with similar characteristics
4. Scale your acquisition efforts efficiently

### 3. Exclusion Audiences

Prevent ad waste by excluding certain behaviors:

- Export "Recent Purchasers" to exclude from acquisition campaigns
- Export "High-Engagement Customers" to focus budget on re-engagement
- Avoid showing the same message to customers with different behaviors

### 4. Sequential Campaigns

Create funnel-based campaigns using multiple behaviors:

1. **Awareness:** Target lookalike of "Trend Followers"
2. **Consideration:** Retarget engaged users with "Value Hunters" messaging
3. **Conversion:** Push special offers to "Quality Enthusiasts"
4. **Retention:** Re-engage "Loyal Regulars" with exclusive perks

## Best Practices

### Audience Naming Conventions

Use clear, consistent names for your Meta Custom Audiences:

- Include the behavior name: `[Behavior] - Comfort Seekers - 2025-Q1`
- Add date or version: `Custom - Fashion Forward - v2`
- Specify the purpose: `Retargeting - Recent Browsers`

This makes it easier to manage audiences in Meta Ads Manager.

### Audience Size Optimization

- **Too small (<1,000):** Consider combining related behaviors or using lookalikes
- **Ideal (1,000-50,000):** Great size for targeted campaigns with good reach
- **Large (>50,000):** Consider splitting into more specific sub-behaviors for better targeting

### Refresh Frequency

- **Daily sync:** Use for dynamic behaviors like "Recent Browsers" or "Cart Abandoners"
- **Weekly sync:** Good for stable segments like "Loyal Regulars" or lifestyle-based behaviors
- **Manual sync:** Best for one-time campaigns or when you want full control over updates

### Privacy and Compliance

Our Meta integration is built with privacy in mind:

- All data is hashed before sending to Meta using SHA-256 encryption
- We only share customer identifiers (email, phone) - no transaction or personal data
- Compliant with GDPR, CCPA, and Meta's data policies
- Customers can opt-out of advertising audiences through their privacy settings

**Important:** Always ensure you have proper consent to use customer data for advertising purposes in your region.

## Monitoring and Performance

### Track Audience Status

Monitor your synced audiences in the **Integrations** dashboard:

- **Active:** Audience is syncing successfully
- **Syncing:** Update in progress
- **Error:** Sync failed (click for details)
- **Paused:** Automatic sync is disabled

### View Sync History

Each exported behavior shows a sync history log:

- Last sync date and time
- Number of customers added/removed
- Current audience size in Meta
- Error messages (if any)

### Measure Campaign Performance

Track how your behavioral audiences perform in Meta:

1. Go to **Analytics** > **Campaign Performance**
2. Filter by Meta campaigns
3. Compare metrics across different behaviors:
   - Click-through rate (CTR)
   - Cost per acquisition (CPA)
   - Return on ad spend (ROAS)
   - Conversion rate

Use these insights to refine your behaviors and improve targeting.

## Troubleshooting

### Common Issues

**"Audience too small" error:**
- Your behavior has fewer than 100 customers
- Solution: Wait for more customers to match the behavior, or combine with similar behaviors

**"Failed to sync" error:**
- Meta connection may have expired
- Solution: Reconnect your Meta account in Settings > Integrations

**"Permission denied" error:**
- Your Meta account doesn't have the required permissions
- Solution: Ensure you have admin access to the Ad Account

**Audience not appearing in Meta Ads Manager:**
- Sync may still be in progress (can take 15-30 minutes)
- Check the integration status in the dashboard
- Verify you're looking in the correct Ad Account

### Getting Help

If you encounter issues with the Meta integration:

1. Check the **Status** page for known Meta API issues
2. Review the sync error logs in your integration dashboard
3. Contact support with your behavior name and error message

## Advanced Features

### Custom Audience Mapping

Map specific customer attributes to Meta fields:

- Email addresses � Meta email matching
- Phone numbers � Meta phone matching
- First/Last name � Enhanced matching
- Location data � Geographic targeting

### Multi-Account Management

If you manage multiple Meta Ad Accounts:

- Connect all accounts in Settings > Integrations
- Choose the destination account when exporting each behavior
- View all synced audiences across accounts in one dashboard

### Webhook Notifications

Set up webhooks to get notified about sync events:

- Audience successfully created
- Sync completed
- Sync errors
- Audience size thresholds reached

Configure webhooks in Settings > Integrations > Meta > Webhooks.

## Next Steps

Ready to activate your behaviors on Meta?

1. **Connect your Meta account** in Settings > Integrations
2. **Choose a high-performing behavior** to test with
3. **Export as a Custom Audience** with automatic daily sync
4. **Create a campaign** in Meta Ads Manager using your new audience
5. **Monitor performance** and refine your approach

For more information on creating effective behaviors to export, see our [Behaviors Guide](./index.md) and [How to Use Behaviors](./how-to-use.md).

---

**Note:** This integration requires an active Meta Business account and access to Meta Ads Manager. Meta Custom Audiences are subject to Meta's terms of service and advertising policies.

---

## Google Ads Integration for Behaviors

Leverage your customer behaviors across Google's advertising ecosystem, including Search, Display, YouTube, and Shopping campaigns. Transform your behavioral insights into powerful Customer Match audiences and reach customers across Google's entire network.

## Overview

The Google Ads integration enables you to:

- **Sync behaviors as Customer Match audiences** - Export behavioral segments directly to Google Ads
- **Target across all Google properties** - Reach customers on Search, Gmail, YouTube, and Display Network
- **Create similar audiences** - Find new customers similar to your best-performing behaviors
- **Retarget with precision** - Show relevant ads based on shopping patterns and preferences
- **Automate audience updates** - Keep your Google Ads audiences current with automatic syncing
- **Combine with intent signals** - Layer behavioral data with Google's powerful search intent data

## How It Works

### 1. Connect Your Google Ads Account

Before exporting behaviors to Google Ads, establish a connection:

1. Navigate to **Settings** > **Integrations**
2. Select **Google Ads** from the list of available integrations
3. Click **Connect to Google Ads**
4. Sign in with your Google account that has access to Google Ads
5. Grant the necessary permissions for audience management
6. Select the Google Ads Account(s) you want to sync with

**Required Permissions:**
- Manage ad accounts
- Manage customer match lists
- View campaign performance data

**Requirements:**
- Google Ads account in good standing
- Account history of at least 90 days
- Minimum $50,000 USD lifetime spend (or equivalent in local currency)
- Compliance with Google's advertising policies

### 2. Export Behaviors to Google Ads

Once connected, you can export any behavior as a Customer Match audience:

#### From the Behaviors Dashboard:

1. Go to **Behaviors** in your main navigation
2. Select the behavior you want to export (suggested or custom)
3. Click the **Export** button
4. Choose **Google Ads Customer Match** from the export options
5. Configure your audience settings:
   - **Audience Name** - Give your customer match list a descriptive name
   - **Google Ads Account** - Select which Google Ads Account to sync with
   - **Membership Duration** - Set how long users remain in the audience (30-540 days)
   - **Update Frequency** - Choose how often to refresh the audience (daily, weekly, or manual)
   - **Description** (optional) - Add notes about this audience for your team

6. Click **Create Audience** to export

#### From Campaign Creation:

Export behaviors while creating campaigns:

1. Create or edit a campaign
2. In the **Audience** section, select a behavior
3. Click **Send to Google Ads**
4. Follow the same configuration steps above

### 3. Audience Sync Options

**Manual Sync:**
- Export once and manually refresh when needed
- Best for seasonal campaigns or testing
- Update by clicking **Refresh Audience** in the integrations panel

**Automatic Sync:**
- Keep audiences up-to-date automatically
- Daily sync: Updates every 24 hours with latest customer data
- Weekly sync: Updates every 7 days
- Best for ongoing campaigns and remarketing

**Important:** Google Ads requires a minimum audience size of 1,000 members for most campaigns (5,000 for Display and YouTube). If your behavior has fewer members, you'll receive a notification and may see limited reach until the threshold is met.

### 4. Membership Duration

Set how long customers remain in your audience after matching:

- **Short-term (30-90 days):** For time-sensitive behaviors like "Recent Browsers" or seasonal shoppers
- **Medium-term (180-270 days):** For most behavioral segments like "Value Hunters" or "Comfort Seekers"
- **Long-term (365-540 days):** For loyalty-based behaviors like "Loyal Regulars" or high-LTV customers

You can update the membership duration at any time in the integration settings.

## Use Cases

### 1. Search Campaign Targeting

Target customers based on behavior when they're actively searching:

**Example:**
- Behavior: Quality Enthusiasts
- Google Search Campaign: Bid higher on premium product keywords
- Ad Copy: Emphasize quality, craftsmanship, and premium features
- Result: Higher conversion rates from customers who value quality

### 2. YouTube Remarketing

Re-engage behavioral segments with video content:

**Example:**
- Behavior: Comfort Seekers
- YouTube Campaign: Video showcasing easy shopping experience, customer testimonials about convenience
- Result: Build brand awareness with customers who prioritize ease of use

### 3. Gmail Sponsored Promotions

Reach customers directly in their inbox:

**Example:**
- Behavior: Value Hunters
- Gmail Campaign: Special discount codes, limited-time offers, exclusive deals
- Result: Higher open rates and engagement from price-conscious customers

### 4. Shopping Campaign Optimization

Optimize product ads based on customer behaviors:

**Example:**
- Behavior: Trend Followers
- Google Shopping Campaign: Promote newest arrivals, trending products
- Bid Strategy: Increase bids for fashion and trend-related queries
- Result: Better product visibility to fashion-forward customers

### 5. Similar Audiences for Acquisition

Expand reach with Google's Similar Audiences:

1. Export a high-value behavior (e.g., "Loyal Regulars")
2. In Google Ads, enable Similar Audiences for this Customer Match list
3. Reach new potential customers with similar characteristics
4. Scale your acquisition efforts while maintaining quality

### 6. Cross-Channel Sequential Messaging

Create coordinated campaigns across Google's network:

1. **Day 1-3:** Display ads introducing the brand (Awareness)
2. **Day 4-7:** YouTube video showcasing product benefits (Consideration)
3. **Day 8-14:** Search ads when customers are actively looking (Intent)
4. **Day 15-30:** Gmail promotions with special offers (Conversion)

## Best Practices

### Audience Naming Conventions

Use clear, consistent names for your Google Ads Customer Match lists:

- Include the behavior name: `CustomerMatch - Comfort Seekers - Q1 2025`
- Add the membership duration: `Retargeting - Quality Enthusiasts - 180d`
- Specify the purpose: `Similar - Loyal Regulars - Acquisition`

This makes it easier to manage audiences across campaigns.

### Audience Size Optimization

- **Too small (<1,000):** Limited reach; consider combining related behaviors
- **Small (1,000-5,000):** Works for Search; may be too small for Display/YouTube
- **Ideal (5,000-50,000):** Great size for all campaign types with good reach
- **Large (>100,000):** Consider splitting into more specific sub-behaviors for better targeting

### Match Rate Optimization

Improve your Customer Match rates:

- **Use multiple identifiers:** Include email, phone, and address data when available
- **Keep data fresh:** Regular syncs maintain higher match rates
- **Format correctly:** Ensure data is properly formatted (lowercase emails, standardized phone numbers)
- **Quality over quantity:** Clean, accurate data matches better than large, outdated lists

Typical match rates range from 40-70%, depending on data quality and recency.

### Layering with Google Audiences

Combine your behaviors with Google's built-in audiences:

- **In-Market Audiences:** Layer "Value Hunters" with "In-Market for Budget Travel"
- **Affinity Audiences:** Combine "Trend Followers" with "Fashion & Style Enthusiasts"
- **Demographics:** Refine "Comfort Seekers" by age or household income
- **Intent Signals:** Target "Quality Enthusiasts" actively searching for premium products

### Privacy and Compliance

Our Google Ads integration follows strict privacy standards:

- All data is hashed using SHA-256 encryption before transmission
- We only share customer identifiers (email, phone, address) - no transaction details
- Compliant with GDPR, CCPA, and Google's advertising policies
- Customers can opt-out of advertising audiences through their privacy settings
- Full transparency in how customer data is used

**Important:** Always ensure you have proper consent to use customer data for advertising purposes in your region. Google requires explicit consent for Customer Match in certain jurisdictions.

## Monitoring and Performance

### Track Audience Status

Monitor your synced audiences in the **Integrations** dashboard:

- **Active:** Audience is syncing successfully
- **Syncing:** Update in progress
- **Pending:** Waiting for Google to process the audience (can take 24-48 hours)
- **Error:** Sync failed (click for details)
- **Paused:** Automatic sync is disabled

### View Sync History

Each exported behavior shows a detailed sync history log:

- Last sync date and time
- Number of customers added/removed
- Current list size
- Match rate percentage
- Google Ads audience status
- Error messages (if any)

### Measure Campaign Performance

Track how your behavioral audiences perform in Google Ads:

1. Go to **Analytics** > **Campaign Performance**
2. Filter by Google Ads campaigns
3. Compare metrics across different behaviors:
   - Click-through rate (CTR)
   - Conversion rate
   - Cost per acquisition (CPA)
   - Return on ad spend (ROAS)
   - Search impression share

4. Segment by campaign type:
   - Search vs. Display vs. YouTube
   - Customer Match vs. Similar Audiences
   - Remarketing vs. Prospecting

Use these insights to refine your behaviors and optimize bidding strategies.

### Audience Insights

Access detailed insights about your Customer Match audiences in Google Ads:

- **Demographics:** Age, gender, household income distribution
- **Devices:** Desktop vs. mobile vs. tablet usage
- **Locations:** Geographic distribution of your audience
- **Interests:** Affinity and in-market categories
- **Search behavior:** Top search queries from your audience

These insights help validate your behavioral segmentation and identify optimization opportunities.

## Troubleshooting

### Common Issues

**"Audience too small" error:**
- Your behavior has fewer than 1,000 customers
- Solution: Wait for more customers to match the behavior, combine with similar behaviors, or use for Search campaigns only (which have lower minimums)

**"Low match rate" warning:**
- Less than 30% of your uploaded data matched with Google users
- Solution: Verify data quality, update customer information, add multiple identifier types (email + phone)

**"Failed to sync" error:**
- Google Ads connection may have expired or permissions changed
- Solution: Reconnect your Google Ads account in Settings > Integrations

**"Account not eligible" error:**
- Your Google Ads account doesn't meet the requirements for Customer Match
- Solution: Verify your account has 90+ days history, $50K+ lifetime spend, and is in good standing

**"Pending" status for 48+ hours:**
- Google is still processing the audience, or there's an issue with the upload
- Solution: Check Google Ads directly for error messages, verify account status, or contact support

**Audience showing but not delivering:**
- Audience may be too small or not eligible for the campaign type
- Solution: Check minimum audience sizes for your campaign type, verify targeting settings in Google Ads

### Getting Help

If you encounter issues with the Google Ads integration:

1. Check the **Status** page for known Google Ads API issues
2. Review the sync error logs in your integration dashboard
3. Verify your Google Ads account status and permissions
4. Contact support with your behavior name, Google Ads account ID, and error message

## Advanced Features

### Customer Match Upload Keys

Choose which customer identifiers to use for matching:

- **Email only:** Fastest processing, good match rates for B2C
- **Email + Phone:** Higher match rates, better for mobile-first customers
- **Email + Phone + Address:** Highest match rates, best for comprehensive matching
- **Email + First/Last Name + ZIP:** Enhanced matching for better coverage

Configure upload keys in Settings > Integrations > Google Ads > Upload Settings.

### Multi-Account Management

If you manage multiple Google Ads accounts:

- Connect all accounts in Settings > Integrations
- Choose the destination account when exporting each behavior
- View all synced audiences across accounts in one dashboard
- Set default accounts for different behaviors or campaign types

### Automated Bidding Integration

Optimize bids based on behavioral segments:

- Export high-value behaviors like "Loyal Regulars" with bid adjustments
- Set higher bids for "Quality Enthusiasts" on premium product campaigns
- Lower bids for "Value Hunters" unless running a promotional campaign
- Use Smart Bidding strategies (Target ROAS, Target CPA) with behavioral audiences

### Exclusion Lists

Prevent ad waste by excluding certain behaviors:

- Export "Recent Purchasers" to exclude from acquisition campaigns
- Create exclusion lists for customers who've already converted
- Exclude high-engagement customers from awareness campaigns to save budget
- Remove unsubscribed or churned customers from active campaigns

### Webhook Notifications

Set up webhooks to receive real-time updates:

- Audience successfully created in Google Ads
- Sync completed with match rate details
- Match rate below threshold alert
- Sync errors or failures
- Audience size thresholds reached

Configure webhooks in Settings > Integrations > Google Ads > Webhooks.

### API-Level Control

For advanced users and developers:

- Access raw sync logs and API responses
- Configure custom retry logic for failed syncs
- Set up custom data transformations before upload
- Monitor API quota usage and rate limits

## Campaign Type Support

### Google Search Campaigns
- **Minimum audience size:** 1,000
- **Best for:** Intent-based targeting, keyword bid adjustments
- **Recommended behaviors:** All types, especially purchase-intent behaviors

### Google Display Network
- **Minimum audience size:** 5,000 (for optimal reach)
- **Best for:** Awareness, remarketing, visual storytelling
- **Recommended behaviors:** Lifestyle-based segments (Comfort Seekers, Quality Enthusiasts)

### YouTube Campaigns
- **Minimum audience size:** 5,000 (for optimal reach)
- **Best for:** Video engagement, brand building, storytelling
- **Recommended behaviors:** Trend Followers, aspirational segments

### Gmail Sponsored Promotions
- **Minimum audience size:** 5,000
- **Best for:** Direct response, promotional offers, personalized messaging
- **Recommended behaviors:** Value Hunters, deal-seekers, promotional responders

### Shopping Campaigns
- **Minimum audience size:** 1,000
- **Best for:** Product-focused targeting, ROAS optimization
- **Recommended behaviors:** Product category-specific behaviors, purchase history segments

## Next Steps

Ready to activate your behaviors on Google Ads?

1. **Verify eligibility** - Ensure your Google Ads account meets Customer Match requirements
2. **Connect your account** in Settings > Integrations
3. **Choose a high-performing behavior** to test with (aim for 5,000+ customers)
4. **Export as a Customer Match audience** with appropriate membership duration
5. **Create a campaign** in Google Ads using your new audience
6. **Monitor match rates** and sync status in the integrations dashboard
7. **Measure performance** and refine your approach

For more information on creating effective behaviors to export, see our [Behaviors Guide](./index.md) and [How to Use Behaviors](./how-to-use.md).

---

**Note:** This integration requires a Google Ads account meeting Customer Match eligibility requirements (90+ days history, $50K+ lifetime spend, good standing). Customer Match audiences are subject to Google's terms of service and advertising policies.

---

## HubSpot Integration for Behaviors

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

### 1. Connect Your HubSpot Account

Before syncing behaviors with HubSpot, establish a connection:

1. Navigate to **Settings** > **Integrations**
2. Select **HubSpot** from the list of available integrations
3. Click **Connect to HubSpot**
4. Sign in with your HubSpot account credentials
5. Grant the necessary permissions (contacts, lists, workflows, properties)
6. Select the HubSpot portal(s) you want to sync with

**Required Permissions:**
- Read and write contacts
- Create and manage lists
- Create and update custom properties
- Trigger workflows
- View analytics

**HubSpot Tier Requirements:**
- **Free/Starter:** Basic list syncing and contact properties
- **Professional:** Full automation, workflows, and advanced segmentation
- **Enterprise:** Advanced features including custom objects and predictive scoring

### 2. Export Behaviors to HubSpot

Once connected, you can export behaviors in multiple ways:

#### Option A: Sync as HubSpot Lists

Create HubSpot lists from your behaviors:

1. Go to **Behaviors** in your main navigation
2. Select the behavior you want to export (suggested or custom)
3. Click the **Export** button
4. Choose **HubSpot List** from the export options
5. Configure your list settings:
   - **List Name** - Give your HubSpot list a descriptive name
   - **List Type** - Choose Static (one-time) or Active (auto-updating)
   - **HubSpot Portal** - Select which portal to sync with
   - **Update Frequency** - For active lists: daily, weekly, or real-time
   - **Description** (optional) - Add notes visible in HubSpot

6. Click **Create List** to export

#### Option B: Sync as Contact Properties

Add behavioral data as custom contact properties:

1. Go to **Settings** > **Integrations** > **HubSpot**
2. Click **Configure Property Mapping**
3. Choose which behaviors to sync as properties:
   - Create a multi-checkbox property with all behaviors
   - Create individual yes/no properties for each behavior
   - Create a single-select property for primary behavior

4. Configure sync settings:
   - **Property Name** - How it appears in HubSpot (e.g., "Customer Behavior Type")
   - **Property Type** - Single checkbox, multiple checkboxes, dropdown
   - **Sync Frequency** - Real-time, hourly, daily
   - **Overwrite Existing** - Choose whether to override manual updates

5. Click **Save Mapping** to activate

#### Option C: Trigger Workflows

Use behaviors to trigger HubSpot workflows automatically:

1. Export behavior as an active list (Option A)
2. In HubSpot, create a new workflow
3. Set enrollment trigger: "Contact is added to list [Behavior Name]"
4. Build your automation sequence
5. Activate the workflow

Contacts will automatically enroll when they match the behavior criteria.

### 3. Sync Options

**Static Lists:**
- One-time export of current customers
- List doesn't update automatically
- Best for: One-off campaigns, historical analysis

**Active Lists:**
- Automatically updates as customers enter/exit behaviors
- Syncs on your chosen frequency (real-time, daily, weekly)
- Best for: Ongoing campaigns, automation, dynamic segmentation

**Real-time Sync:**
- Updates contact properties instantly when behavior changes
- Requires Professional or Enterprise HubSpot plan
- Best for: Time-sensitive workflows, lead scoring, sales alerts

**Scheduled Sync:**
- Updates on a set schedule (hourly, daily, weekly)
- Lower API usage, suitable for all plans
- Best for: Regular campaigns, batch processing

## Use Cases

### 1. Behavioral Email Campaigns

Send targeted emails based on shopping patterns:

**Example:**
- Behavior: Value Hunters
- HubSpot Workflow: Send weekly discount roundup email
- Personalization: Include coupon codes and sale notifications
- Result: Higher open rates and conversions from deal-seekers

### 2. Lead Scoring and Prioritization

Adjust lead scores based on behavioral segments:

**Example:**
- Behavior: Quality Enthusiasts → Add 20 points to lead score
- Behavior: Loyal Regulars → Add 50 points to lead score
- Behavior: One-time Browsers → Add 5 points to lead score
- Result: Sales team focuses on high-value behavioral segments first

### 3. Abandoned Cart Recovery

Create targeted workflows for customers who left items in cart:

**Example:**
- Behavior: Cart Abandoners (custom behavior)
- HubSpot Workflow:
  - Day 1: Reminder email with cart contents
  - Day 3: 10% discount offer for Comfort Seekers / 15% for Value Hunters
  - Day 7: Final reminder with urgency messaging
- Result: Higher cart recovery rates with personalized incentives

### 4. Customer Retention Programs

Re-engage at-risk customers based on behavior changes:

**Example:**
- Behavior: Formerly Loyal (custom behavior - dropped from Loyal Regulars)
- HubSpot Workflow: Win-back campaign with VIP perks
- Result: Recover churning customers before they leave

### 5. Sales Enablement

Alert sales reps when high-value behaviors engage:

**Example:**
- Behavior: Quality Enthusiasts viewing premium products
- HubSpot Workflow:
  - Update contact owner
  - Create task for sales rep
  - Send Slack notification
  - Add to "Hot Leads" sequence
- Result: Sales team reaches out at the perfect moment

### 6. Post-Purchase Nurture

Tailor onboarding based on customer behavior type:

**Example:**
- Behavior: Comfort Seekers → Emphasize easy returns, customer service
- Behavior: Quality Enthusiasts → Share care instructions, product stories
- Behavior: Trend Followers → Highlight new arrivals, style guides
- Result: Higher customer satisfaction and repeat purchases

## Best Practices

### List Naming Conventions

Use clear, consistent names for your HubSpot lists:

- Include the behavior name: `[Behavior] Comfort Seekers - Active`
- Add the sync type: `Loyal Regulars - Daily Sync`
- Specify the purpose: `Value Hunters - Email Campaign Q1 2025`
- Use prefixes: `BEH - Quality Enthusiasts` (groups all behavior lists together)

This makes it easier to find and manage lists in HubSpot.

### Property Structure

Organize behavioral data efficiently:

**Multi-Checkbox Property (Recommended):**
- Property Name: "Customer Behaviors"
- Values: Comfort Seekers, Quality Enthusiasts, Value Hunters, etc.
- Allows contacts to have multiple behaviors
- Best for comprehensive segmentation

**Single Select Property:**
- Property Name: "Primary Behavior"
- Values: One behavior per contact
- Simpler but less flexible
- Best for clear, mutually exclusive segments

**Individual Properties:**
- Separate yes/no for each behavior
- More granular control
- Can impact HubSpot property limits
- Best for small numbers of key behaviors

### Workflow Design

Create effective behavioral workflows:

1. **Set clear goals:** What action do you want to trigger?
2. **Use re-enrollment:** Allow contacts to re-enter if behavior changes
3. **Add delays:** Don't overwhelm customers with immediate emails
4. **Segment by behavior:** Customize messaging for each segment
5. **Test and measure:** A/B test different approaches per behavior

### Lead Scoring Strategy

Align scores with behavior value:

- **High value (40-50 points):** Loyal Regulars, Quality Enthusiasts (high LTV)
- **Medium value (20-30 points):** Comfort Seekers, Trend Followers
- **Lower value (10-15 points):** Value Hunters, Occasional Shoppers
- **Negative scores:** Churned, Inactive, or Unengaged behaviors

Combine with engagement scoring (email opens, page views) for comprehensive lead quality.

### Sync Frequency Optimization

Choose the right sync frequency for each use case:

- **Real-time:** High-priority workflows, sales alerts, VIP customers
- **Daily:** Most email campaigns, lead scoring, general automation
- **Weekly:** Newsletter sends, batch campaigns, reporting
- **Manual:** One-time campaigns, testing, data cleanup

Balance API usage with business needs.

## HubSpot Features Integration

### Smart Content

Personalize website and email content based on behaviors:

1. Export behavior as contact property
2. In HubSpot, create Smart Content module
3. Set rules based on behavioral properties
4. Show different content to each behavior segment

**Example:** Homepage hero shows different messaging for Comfort Seekers (ease of use) vs. Quality Enthusiasts (craftsmanship).

### Predictive Lead Scoring

Combine behaviors with HubSpot's predictive scoring:

- Behaviors provide explicit segmentation
- HubSpot's AI identifies patterns within each segment
- More accurate predictions by behavior type
- Requires HubSpot Enterprise

### Custom Reports and Dashboards

Track behavioral segment performance:

1. Create custom reports filtering by behavior lists or properties
2. Build dashboards showing:
   - Email performance by behavior
   - Conversion rates per segment
   - Behavior distribution over time
   - Revenue attribution by behavior

3. Share with stakeholders to demonstrate ROI

### Sales Inbox Integration

Equip sales reps with behavioral context:

- View contact's behaviors in sidebar
- See behavior change history
- Access behavior-specific talking points
- Recommended actions based on segment

## Monitoring and Performance

### Track Sync Status

Monitor your HubSpot syncs in the **Integrations** dashboard:

- **Active:** Syncing successfully
- **Syncing:** Update in progress
- **Paused:** Automatic sync disabled
- **Error:** Sync failed (click for details)
- **Rate Limited:** Temporarily paused due to API limits

### View Sync History

Each exported behavior shows detailed sync logs:

- Last sync date and time
- Number of contacts added/removed to lists
- Property update count
- Workflow triggers fired
- Error messages (if any)
- API usage metrics

### Measure Campaign Performance

Track how behavioral segments perform in HubSpot:

1. Go to **Analytics** > **Campaign Performance**
2. Filter by HubSpot campaigns
3. Compare metrics across different behaviors:
   - Email open rate
   - Click-through rate
   - Conversion rate
   - Unsubscribe rate
   - Revenue generated

4. Segment by:
   - Behavior type
   - Campaign type (nurture vs. promotional)
   - List type (static vs. active)

Use insights to refine targeting and messaging.

### Contact Health Monitoring

Track the health of your behavioral segments:

- **List growth rate:** How fast is each behavior segment growing?
- **Engagement trends:** Are behaviors becoming more or less engaged over time?
- **Overlap analysis:** Which behaviors frequently occur together?
- **Churn indicators:** Which behaviors are declining in size?

## Troubleshooting

### Common Issues

**"Failed to create list" error:**
- You may have reached HubSpot's list limit
- Solution: Archive unused lists in HubSpot, or upgrade your plan

**"Property already exists" error:**
- A property with that name already exists in HubSpot
- Solution: Choose a different property name or update the existing property mapping

**"API rate limit exceeded" error:**
- Too many sync requests in a short period
- Solution: Reduce sync frequency, or wait for the rate limit to reset (typically hourly)

**"Contacts not syncing" issue:**
- Email addresses may not match between systems
- Solution: Verify email formatting, check for duplicate contacts, review matching criteria

**"Workflow not triggering" issue:**
- List membership may not have updated yet
- Solution: Check sync status, verify workflow enrollment settings, ensure workflow is active

**"Property not updating" issue:**
- Overwrite settings may be preventing updates
- Solution: Review property mapping settings, check if contacts have manual overrides

### Getting Help

If you encounter issues with the HubSpot integration:

1. Check the **Status** page for known HubSpot API issues
2. Review the sync error logs in your integration dashboard
3. Verify your HubSpot account permissions and tier
4. Check HubSpot's contact, list, and property limits
5. Contact support with your behavior name, HubSpot portal ID, and error message

## Advanced Features

### Custom Object Mapping

Map behaviors to HubSpot custom objects (Enterprise only):

- Create behavior objects linked to contacts
- Track behavior history over time
- Build complex relationship models
- Enable multi-dimensional analysis

Configure in Settings > Integrations > HubSpot > Custom Objects.

### Bi-Directional Sync

Sync data from HubSpot back to your platform:

- Import HubSpot list membership as behaviors
- Sync lifecycle stage to refine behavioral segmentation
- Update behavior criteria based on HubSpot engagement
- Create feedback loops for continuous improvement

### Behavioral Lifecycle Stages

Map behaviors to HubSpot lifecycle stages:

- **Subscriber:** Recent Browsers, Newsletter Subscribers
- **Lead:** Value Hunters, Comfort Seekers
- **MQL:** Quality Enthusiasts, High-Intent Shoppers
- **SQL:** Loyal Regulars, VIP Customers
- **Customer:** All active purchasers with behaviors
- **Evangelist:** Brand Advocates, Referrers

Automate stage progression based on behavior changes.

### Multi-Portal Management

If you manage multiple HubSpot portals:

- Connect all portals in Settings > Integrations
- Choose destination portal when exporting each behavior
- View all synced lists across portals in one dashboard
- Set default portals for different behavior types

### Webhook and Event Triggers

Set up real-time notifications:

- Contact enters/exits a behavior → Trigger HubSpot workflow
- Behavior criteria updated → Refresh all associated lists
- New custom behavior created → Auto-create HubSpot list
- Sync errors → Alert admin via HubSpot notification

Configure webhooks in Settings > Integrations > HubSpot > Webhooks.

### API Access

For advanced users and developers:

- Access raw API responses and sync logs
- Build custom integrations using our API + HubSpot API
- Create custom data transformations
- Monitor API quota usage across integrations

## HubSpot Plan Recommendations

### Free/Starter
- **Supported:** Static lists, basic contact properties, manual workflows
- **Best for:** Small businesses, simple segmentation, basic email campaigns
- **Limitations:** Limited automation, no real-time sync, basic reporting

### Professional
- **Supported:** Active lists, custom properties, automated workflows, real-time sync
- **Best for:** Growing businesses, marketing automation, lead nurturing
- **Recommended for:** Most behavioral use cases

### Enterprise
- **Supported:** All features plus custom objects, predictive scoring, advanced automation
- **Best for:** Large organizations, complex segmentation, advanced personalization
- **Ideal for:** Sophisticated behavioral marketing strategies

## Next Steps

Ready to activate your behaviors in HubSpot?

1. **Connect your HubSpot account** in Settings > Integrations
2. **Choose your sync strategy:**
   - Start with 2-3 key behaviors as active lists
   - Add behavioral contact property for comprehensive tracking
   - Create workflows for high-priority segments

3. **Export your first behavior** as an active HubSpot list
4. **Create a test workflow** to validate the integration
5. **Build your first behavioral campaign** using the list
6. **Monitor performance** and expand to additional behaviors
7. **Iterate and optimize** based on engagement data

For more information on creating effective behaviors to export, see our [Behaviors Guide](./index.md) and [How to Use Behaviors](./how-to-use.md).

---

**Note:** This integration requires an active HubSpot account with appropriate permissions. Syncing capabilities vary by HubSpot plan tier (Free, Starter, Professional, Enterprise). HubSpot contact and list limits apply.
