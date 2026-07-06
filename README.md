# FEE — Modeling Portfolio

A static modeling portfolio site ready for [GitHub Pages](https://pages.github.com/).

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `fee-portfolio`).
2. Push this project:

   ```bash
   cd ~/modeling-portfolio
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/fee-portfolio.git
   git push -u origin main
   ```

3. On GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Choose branch **main** and folder **/ (root)**, then click **Save**.
6. Your site will be live at `https://itsmefee.com` (custom domain via `CNAME`) or `https://YOUR_USERNAME.github.io/fee-portfolio/` within a few minutes.

## Customize

- **Email:** Update the address in `index.html` (Contact section).
- **About text:** Edit the copy in the About section of `index.html`.
- **Password:** Change `password` in `js/config.js` (default: `fee2026`). Set `protectEntireSite: true` to lock the whole site.
- **SEO / live URL:** Domain is set to `itsmefee.com` in `CNAME`, `js/config.js`, `robots.txt`, `sitemap.xml`, and page meta tags. Pages use clean URLs (no `.html`); each route is a folder with an `index.html` inside.

**Note on password protection:** GitHub Pages is static hosting, so passwords are checked in the browser only. This deters casual visitors but is not bank-level security. For stronger protection, use a host with server-side auth.
- **Images:** Add new photos to `images/web/` (resize to ~1800px wide for best performance).

## Local preview

```bash
cd ~/modeling-portfolio
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).
