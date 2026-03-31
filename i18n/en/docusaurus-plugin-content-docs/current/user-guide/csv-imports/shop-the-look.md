# Shop The Look Import

Create product relationships and outfit combinations using the Shop The Look CSV template.

## Before you start

Your products must already exist in the catalog before you import Shop The Look relationships.

If you still need to upload products first, use the [product catalog import guide](./products.md).

## When to use this import

Use Shop The Look import when you want to:

- connect products that belong together
- create complete outfits
- improve cross-sell opportunities
- upload many relationships at once

The template and accepted fields may vary by client, so always use the CSV file downloaded from your dashboard.

## Step by step

### 1. Download the Shop The Look template

1. Log in to FashionAI
2. Go to **Settings** -> **Products Manager**
3. Download the Shop The Look CSV template

### 2. Fill in the relationships

Add the product relationships you want to create by following the structure of the downloaded template.

Best practices:

- make sure all referenced products already exist in the catalog
- keep identifiers exactly the same as the catalog records
- review the file carefully before upload
- start with a small batch if this is your first Shop The Look import

### 3. Save the file as CSV

Save or export the file as a **CSV** file.

### 4. Upload the file

1. Return to **Settings** -> **Products Manager**
2. Select the Shop The Look import type
3. Upload the CSV file
4. Wait for processing to finish

### 5. Review the import result

Check the import summary after processing:

- **Success** means all relationships were created correctly
- **Partial success** means some relationships were created and some need review
- **Error** means the file needs correction before the relationships can be imported

If a product reference is invalid or missing from the catalog, fix the CSV file and upload it again.

## What usually causes issues

- importing relationships before the products exist in the catalog
- mismatched product identifiers
- using the wrong template
- changing the CSV structure manually
- file saved in a format other than CSV
- encoding problems after exporting the file

## Encoding tip

If accented characters or special symbols look wrong in your file, upload the data to Google Sheets and download the CSV from there before importing. This often resolves encoding issues.

## Tips for better results

- create combinations that make sense together for the customer
- keep seasonal or style-based groups consistent
- review imported relationships in the dashboard after upload

## After the import

After your relationships are active, you can:

- review them in your catalog experience
- monitor engagement in [Behaviors](../behaviors/index.md)
- improve the experience with [Recommendations](../recomendations/index.md)
