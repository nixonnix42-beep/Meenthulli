# Meenthulli

Owner: Nixon · +91 90432 32447 · nixon.nix42@gmail.com · Sankarankovil, Tenkasi

Two apps:

- **Meenthulli Fresh** (`site/fresh/`): coconuts, onions, greens and healthy foods, ordered on WhatsApp.
- **Meenthulli Home Services** (`site/services/`): modular kitchen, electrical and painting bookings on WhatsApp.

Every change pushed to `main` publishes the website with GitHub Pages and builds both Android apps.
The Android apps can be downloaded from the website (`apps/` links) or from the **android-apps** release.

## Change things

- Name, phone, email, delivery charge: the **OWNER SETTINGS** block at the top of the script in each `index.html`.
- Fresh food prices: the `P=[...]` list in `site/fresh/index.html`, or a published Google Sheet (`sheetCSV` setting, template in `site/fresh/prices-sheet.csv`).
- Service prices: the `SVC=[...]` list in `site/services/index.html`.
