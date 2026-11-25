# oneuro landing page

One static page that collects emails for the early list. No build step.

Preview locally:

```bash
python3 -m http.server 4173
```

## Before you share it

1. **Connect the signup form.** Create a free form at tally.so with:
   - Email (required)
   - “What brings you here?”: “I build apps” / “I want to try them” (required)
   - “What have you built, or want to build?” (long text, optional)
   - “Would you share your app for credits, or would you rather be paid?”:
     “Credits are fine” / “I’d rather be paid” / “Not sure” (optional)
   - A line of text: “We only email you about oneuro. Unsubscribe any time.”,
     with a link to your privacy page.

   Publish it, copy the share link and paste it into `FORM_URL` at the top of
   `script.js`. Send one test answer and check it shows up in Tally.
   Tally collects the answers; to send emails later, export them to an email tool
   and include an unsubscribe link. A Typeform link works too, but its free plan
   allows only 10 responses a month (then update `privacy.html`).
2. **Fill in `privacy.html`.** Replace every highlighted placeholder.
3. **Deploy** the folder to any static host (Vercel, Netlify, GitHub Pages).
4. **Fix the link preview.** In `index.html`, make `og:image` a full `https://` address.
   Then paste the page link into LinkedIn's Post Inspector to check the preview.

## Assets

The hero pieces (`assets/hero-*.webp`), `assets/flag.webp` and `assets/og.png` are cut
from the concept mockup. The hero moves via the inline SVG in `index.html` and the
keyframes at the end of `styles.css`. Replace them with higher-resolution exports if you have them.
Fonts (Source Serif 4, IBM Plex Mono) are under the Open Font License.
