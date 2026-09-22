# Crown & Co. Hair Studio — Website

A simple, no-backend website for a local hair salon: services menu, a shop for
human hair bundles/closures/wigs, appointment booking, and a contact page.

Everything here is plain HTML, CSS, and JavaScript. There's no database and
no server to set up — you can literally just open `index.html` in a browser,
and it's ready to host for free on GitHub Pages.

## File structure

```
salon-site/
├── index.html        Homepage
├── services.html      Service menu & pricing
├── shop.html           Hair products for sale
├── booking.html      Booking calendar + request form
├── contact.html       Hours, map, contact form
├── css/style.css      All styling
├── js/main.js          Menu toggle + form behavior
└── README.md            This file
```

## 1. Customize the content (do this first)

Everything is placeholder text you should replace:

- **Business name**: search each HTML file for "Crown & Co." and replace it.
- **Services & prices**: edit the list in `services.html`.
- **Hair products**: edit the cards in `shop.html` — name, length, shade, price.
- **Hours, address, phone, email, Instagram**: edit `contact.html`.
- **Email address for forms**: open `js/main.js` and change this line near the top:
  ```js
  var SALON_EMAIL = "hello@yoursalon.com";
  ```
  Change it to your friend's real email. The booking and contact forms don't
  send anything themselves — they just open the visitor's email app with the
  message pre-filled, so there's nothing to configure on a server.

## 2. Set up real booking (Calendly — free)

The booking page is ready for [Calendly](https://calendly.com), a free
scheduling tool. It handles all the "who's free when" logic for you — no
database needed.

1. Create a free account at calendly.com.
2. Add each service as its own "Event Type" (e.g. "Haircut — 45 min").
3. Copy your scheduling link — it looks like `https://calendly.com/your-name`.
4. Open `booking.html`, find this line, and paste your link in:
   ```html
   <div class="calendly-inline-widget" data-url="https://calendly.com/YOUR-CALENDLY-LINK" ...>
   ```
5. Delete the `<div class="calendly-placeholder">` block right below it — that's
   just a note telling you it isn't connected yet.

Even without Calendly, the "Or request a time" form on that page already works
— it just relies on email instead of a live calendar.

## 3. Add real photos

Right now the site uses simple line-drawn graphics instead of photos, since
none were provided. To add real ones:

1. Put image files in the `images/` folder (e.g. `images/salon-front.jpg`).
2. Reference them in HTML like: `<img src="images/salon-front.jpg" alt="...">`.

Good things to photograph: the salon space, finished hairstyles, and each hair
product you sell (bundles, closures, wigs) for the shop page.

## 4. Put it online with GitHub Pages (free)

1. Create a new repository on GitHub and push this folder's contents to it
   (this README can stay at the root, alongside `index.html`).
2. On GitHub, go to your repo's **Settings → Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch",
   choose the `main` branch and the `/ (root)` folder, then save.
4. GitHub will give you a live link, usually
   `https://your-username.github.io/your-repo-name/`, within a minute or two.

If you're not comfortable with `git` commands yet, you can also do this
entirely in the browser: create the repo on GitHub, then use the "Add file →
Upload files" button to drag in everything from this folder.

## 5. Later: taking real payments for the hair shop

Right now `shop.html` asks customers to message the salon to buy. When you're
ready for real online checkout with no backend, look at **Stripe Payment
Links** (stripe.com/payments/payment-links) — you create a link per product
in Stripe's dashboard and turn each "Buy" moment into a normal link, no code
required. That's a good next step once the salon has an online payment
account set up.

## Notes on the design

- Colors, fonts, and layout are defined once in `css/style.css` — change the
  values at the top of that file (under `:root`) to re-theme the whole site.
- The site is responsive (phone, tablet, desktop) and keyboard-accessible.
- No tracking, ads, or analytics are included by default.
