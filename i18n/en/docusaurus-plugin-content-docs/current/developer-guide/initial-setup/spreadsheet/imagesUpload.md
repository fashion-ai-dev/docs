# Product Image Upload

The system allows you to upload images for your products in Settings > Image Manager

## Accepted Formats

| Format | Extension |
|--------|-----------|
| JPEG   | .jpg or .jpeg |
| PNG    | .png |
| GIF    | .gif |
| WebP   | .webp |

## Limits

- **Maximum size:** 10 MB per file
- **Quantity:** up to 500 images per upload

## Naming Rules

:::tip Important tip
Name your files with the **product code** followed by `_01`, `_02`, etc. This will be the order images appear on our site and will be described for SEO.

Example: `SKU12345_01.jpg`, `SKU12345_02.jpg`, `SKU12345_03.jpg`
:::

The file name **must end** with `_01` to `_10`:

| Original Name | Final Name |
|---------------|------------|
| blue-shirt_01.jpg | BLUE-SHIRT_01.jpg |
| blue-shirt_1.jpg | BLUE-SHIRT_1.jpg |
| blue-shirt.jpg | BLUE-SHIRT_01.jpg (suffix added automatically) |
| Polo Shirt.png | POLO-SHIRT_01.png (suffix added automatically) |

### Automatic Transformations

The system automatically standardizes file names:

- Name converted to **UPPERCASE**
- Spaces and special characters become `-`
- Accents are removed (café → CAFE)
- Extension always in lowercase

## Checklist Before Upload

- [ ] Files are in accepted format (jpg, png, gif, webp)?
- [ ] Each file is less than 10 MB?
- [ ] File name ends with `_01` to `_10`?

## Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| Invalid file type | Format not accepted | Use jpg, png, gif or webp |
| File too large | File larger than 10 MB | Reduce image size |
| No image sent | Empty field | Check if you attached the files |
| Invalid extension | Name without valid extension | Rename with .jpg, .png, etc. |

## Summary

| Feature | Value |
|---------|-------|
| Formats | jpg, jpeg, png, gif, webp |
| Maximum size | 10 MB per file |
| File limit | 500 images |
| Name pattern | NAME_01.ext to NAME_10.ext |
