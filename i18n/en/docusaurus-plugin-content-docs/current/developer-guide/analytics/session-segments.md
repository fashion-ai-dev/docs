---
sidebar_position: 5
---

# Session Segments and ARPU Analysis

This guide explains how to create session segments in Google Analytics 4 to compare the impact of Fashion.AI on conversion metrics and ARPU (Average Revenue Per User).

## Overview

Creating session segments allows you to compare the behavior and performance between users who interacted with Fashion.AI recommendations and those who did not, enabling you to measure the real impact of the tool on conversions and cart additions.

## Key Metrics

- **ARPU (Average Revenue Per User)**: Average revenue per user
- **Conversion Rate**: Percentage of sessions that result in a purchase
- **Add to Cart Rate**: Percentage of sessions with a cart addition
- **Click-Through Rate**: Percentage of views that generate clicks

## Segment Structure

We will create 4 segments for comparative analysis:

1. **Purchase WITH Fashion.AI**: Sessions with purchase AND interaction with Fashion.AI
2. **Purchase WITHOUT Fashion.AI**: Sessions with purchase BUT without interaction with Fashion.AI
3. **Add to Cart WITH Fashion.AI**: Sessions with add to cart AND interaction with Fashion.AI
4. **Add to Cart WITHOUT Fashion.AI**: Sessions with add to cart BUT without interaction with Fashion.AI

## Creating the Segments

### Segment 1: Purchase WITH Fashion.AI

This segment identifies users who made a purchase AND interacted with Fashion.AI.

#### Step by Step

1. **Access Google Analytics 4**
   - Go to **Explore > Create a blank exploration**

2. **Create the Segment**
   - In the **Variables** tab, click **+** next to **Segments**
   - Select **Create a custom segment**
   - Choose **Session segment**

3. **Configure the Conditions**
   - Name: `Purchase WITH Fashion.AI`
   - Add a **condition group** with **AND** operator between groups:

   **Group 1: Had Purchase**
   ```
   purchase
   ```

   **Group 2: Interacted with Fashion.AI**
   ```
   fashionai_click
   ```

4. **Save the Segment**
   - Click **Save and apply**

### Segment 2: Purchase WITHOUT Fashion.AI

This segment identifies users who made a purchase BUT did NOT interact with Fashion.AI.

#### Step by Step

1. **Create New Segment**
   - In the **Variables** tab, click **+** next to **Segments**
   - Select **Create a custom segment**
   - Choose **Session segment**

2. **Configure the Conditions**
   - Name: `Purchase WITHOUT Fashion.AI`
   - Add a **condition group** with **AND** operator between groups:

   **Group 1: Had Purchase**
   ```
   purchase
   ```

   **Group 2: DID NOT Interact with Fashion.AI, click on "Add Exclusion Group"**
   ```
   fashionai_click
   ```

3. **Save the Segment**
   - Click **Save and apply**

### Segment 3: Add to Cart WITH Fashion.AI

This segment identifies users who added items to cart AND interacted with Fashion.AI.

#### Step by Step

1. **Create New Segment**
   - In the **Variables** tab, click **+** next to **Segments**
   - Select **Create a custom segment**
   - Choose **Session segment**

2. **Configure the Conditions**
   - Name: `Add to Cart WITH Fashion.AI`
   - Add a **condition group** with **AND** operator between groups:

   **Group 1: Had Add to Cart**
   ```
   add_to_cart
   ```

   **Group 2: Interacted with Fashion.AI (use OR operator between conditions below)**
   ```
   fashionai_addtocart (similar products and showcases)
   OR
   fashionai_addtocart_shopthelook (shop the look button on product page)
   ```

3. **Save the Segment**
   - Click **Save and apply**

### Segment 4: Add to Cart WITHOUT Fashion.AI

This segment identifies users who added items to cart BUT did NOT interact with Fashion.AI.

#### Step by Step

1. **Create New Segment**
   - In the **Variables** tab, click **+** next to **Segments**
   - Select **Create a custom segment**
   - Choose **Session segment**

2. **Configure the Conditions**
   - Name: `Add to Cart WITHOUT Fashion.AI`
   - Add a **condition group** with **AND** operator between groups:

   **Group 1: Had Add to Cart**
   ```
   add_to_cart
   ```

   **Group 2: DID NOT Interact with Fashion.AI, click on "Add Exclusion Group"**
   ```
   Event name | does not exactly match | fashionai_addtocart
   OR
   Event name | does not exactly match | fashionai_addtocart_shopthelook
   ```

3. **Save the Segment**
   - Click **Save and apply**

## Setting Up Comparative Analysis

### Add Metrics

In the **Metrics** section of your exploration, add:

1. **Sessions**: Standard metric
2. **Active Users**: To calculate ARPU
3. **Transactions**: Number of purchases
4. **Revenue**: Total revenue
5. **add_to_cart Events**: Total cart additions
6. **Conversion Rate**: Conversion percentage

### Add Dimensions

In the **Dimensions** section, add:

1. **Segment Name**: To compare segments
2. **Date**: For time-based analysis
3. **Session Source**: For channel analysis

### Create Comparison Table

1. **Configure the Table**
   - Format: Table
   - Rows: Segment Name
   - Values: All added metrics

2. **Add Calculated Column for ARPU**
   - Click **Metrics > Add calculated metric**
   - Name: `ARPU (Average Revenue Per User)`
   - Formula: `Revenue / Active Users`
   - Format: Currency

3. **Add Calculated Column for Add to Cart Rate**
   - Click **Metrics > Add calculated metric**
   - Name: `Add to Cart Rate`
   - Formula: `add_to_cart Events / Sessions`
   - Format: Percentage

4. **Add Calculated Column for Click-Through Rate (CTR)**
   - Click **Metrics > Add calculated metric**
   - Name: `Fashion.AI CTR (%)`
   - Formula: `fashionai_click Events / fashionai_view Events`
   - Format: Percentage
   - **Important**: This metric shows how many users who saw the recommendations actually clicked

5. **Add Calculated Column for View Rate**
   - Click **Metrics > Add calculated metric**
   - Name: `View Rate (%)`
   - Formula: `fashionai_view Events / Sessions`
   - Format: Percentage
   - **Important**: This metric shows what percentage of users scroll down to see the recommendations

## Interpreting the Results

### Analysis 1: Purchase Comparison

Compare the segments **Purchase WITH Fashion.AI** vs **Purchase WITHOUT Fashion.AI**

| Metric | Purchase WITH Fashion.AI | Purchase WITHOUT Fashion.AI | Difference |
|---------|-------------------------|-------------------------|-----------|
| Sessions | 5,000 | 8,000 | - |
| Users | 4,200 | 6,500 | - |
| Transactions | 5,000 | 8,000 | - |
| Revenue | $ 125,000 | $ 120,000 | - |
| **ARPU** | **$ 29.76** | **$ 18.46** | **+61%** |
| **Average Ticket** | **$ 25.00** | **$ 15.00** | **+67%** |

**Expected Insights:**
- Users who purchase after interacting with Fashion.AI tend to have higher ARPU
- Higher average ticket indicates that recommendations influence purchase value, suggesting items the customer will actually buy

### Analysis 2: Add to Cart Comparison

Compare the segments **Add to Cart WITH Fashion.AI** vs **Add to Cart WITHOUT Fashion.AI**

| Metric | Add to Cart WITH Fashion.AI | Add to Cart WITHOUT Fashion.AI | Difference |
|---------|---------------------------|---------------------------|-----------|
| Sessions | 12,000 | 25,000 | - |
| Users | 10,000 | 20,000 | - |
| Add to Cart | 15,000 | 30,000 | - |
| Transactions | 3,600 | 5,000 | - |
| **Conversion Rate** | **30%** | **20%** | **+50%** |
| **Items per Session** | **1.25** | **1.20** | **+4%** |

**Expected Insights:**
- Users who add items to cart with Fashion.AI convert more
- Higher conversion rate indicates better recommendation quality
- Fashion.AI increases purchase intent

### Analysis 4: Recommendation Engagement (View vs Click)

This analysis is **crucial** because recommendations are usually at the bottom of the page.

> **Important**: The `fashionai_view` event is only triggered when recommendations are **visible in the viewport** (scroll tracking), not when they are just loaded on the page. This means this event already measures how many users actually saw the recommendations.

## Dashboards and Reports

### Dashboard 1: Purchase Overview

- ARPU: WITH vs WITHOUT Fashion.AI
- Transaction volume by segment
- Comparative average ticket
- Total revenue by segment

### Dashboard 2: Add to Cart Analysis

- Add to cart rate: WITH vs WITHOUT Fashion.AI
- Cart to purchase conversion rate
- Average items per cart
- Comparative cart abandonment

### Dashboard 3: Conversion Funnel

Complete funnel visualization:
```
Sessions
  ↓
Fashion.AI Views
  ↓
Fashion.AI Clicks
  ↓
Add to Cart
  ↓
Purchase
```

With conversion metrics at each stage for both groups.

**Questions?** Check the [Google Analytics 4](./google-analytics) or [Google Tag Manager](./google-tag-manager) documentation.
