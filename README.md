# M.K Mobile Repairing Center Website

Responsive Hindi-first shop website built with HTML, CSS, and vanilla JavaScript.

## Run locally
1. Extract this ZIP.
2. Open `index.html` in Chrome/Edge, or use VS Code + Live Server.
3. Keep the `assets` folder next to `index.html`; the page uses local images from it.

## Working interactions
- Responsive navigation menu and section links
- Click-to-call links for both shop phone numbers
- WhatsApp contact buttons
- Service and brand buttons prepare a WhatsApp enquiry
- Enquiry form validates name, 10-digit phone number, and problem; then prepares a WhatsApp message
- Gallery opens a lightbox modal and closes with the close button, outside click, or Escape
- Google Maps search link for the shop address
- Automatic current year in footer

## Notes
- WhatsApp opens with a prefilled message; the customer must press Send in WhatsApp.
- This static website does not store form submissions in a database and does not have an admin login.
- Google Fonts need an internet connection; layout and local images work without it.
- Confirm phone numbers, owner name, shop address, service availability and prices before publishing.
- The gallery currently uses the supplied shop banner and owner photo. Add actual repair photos to the `assets` folder and update `index.html` to expand the gallery.
