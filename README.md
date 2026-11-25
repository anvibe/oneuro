# oneuro landing page

One static page that collects emails for the early list. No build step.

Preview locally:

```bash
python3 -m http.server 4173
```

## Before you share it

1. **Signup form.** Done: the Tally form `https://tally.so/r/yXJK86`, set as
   `FORM_URL` at the top of `script.js`. Answers appear in your Tally account.
   It asks for an email and whether the person builds apps or wants to try them.
   Builders also see two optional questions: what they built, and credits or payment.
   Tally collects the answers; to send emails later, export them to an email tool
   and include an unsubscribe link.
2. **Fill in `privacy.html`.** Replace every highlighted placeholder.
3. **Deploy.** The site is served by GitHub Pages from the `main` branch, at
   `https://anvibe.github.io/oneuro/`. Pushing to `main` updates it. Pages needs a
   public repository unless the account has a paid GitHub plan.
4. **Check the link preview.** Paste the page link into LinkedIn's Post Inspector.
   If you move to another domain, update `og:url` and `og:image` in `index.html`.

## Assets

The hero pieces (`assets/hero-*.webp`), `assets/flag.webp` and `assets/og.png` are cut
from the concept mockup. The hero moves via the inline SVG in `index.html` and the
keyframes at the end of `styles.css`. Replace them with higher-resolution exports if you have them.
Fonts (Source Serif 4, IBM Plex Mono) are under the Open Font License.
