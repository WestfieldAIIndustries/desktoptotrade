# DesktopToTrade

Marketing site for **DesktopToTrade** — Quote / Manage / Get Paid.
All-in-one quoting, job management and invoicing for tradespeople.

Built with plain HTML / CSS / JS — no build step, no dependencies. Hosts free on **GitHub Pages**.

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

## Project structure

```
index.html              # the whole page (hero, features, how it works, pricing, contact)
style.css               # brand styles (navy + blue, matching the logo)
app.js                  # mobile nav + waitlist form
assets/
  logo.jpeg             # original full logo
  logo-wide.jpeg        # cropped header/footer lockup
  icon.jpeg             # cropped app icon
  favicon.png           # 64px favicon
scripts/build_preview.py# optional: builds preview.html with everything inlined
```

## Deploy to GitHub Pages

1. Create a repo on GitHub named `desktoptotrade` (or anything you like).
2. Push this folder:

   ```bash
   git init
   git add .
   git commit -m "Initial DesktopToTrade site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/desktoptotrade.git
   git push -u origin main
   ```

3. Turn on Pages: **repo → Settings → Pages → Source: “Deploy from a branch” → Branch: `main` / `/ (root)` → Save**.
4. Your site goes live at `https://YOUR_USERNAME.github.io/desktoptotrade/` (takes a minute or two).

### Custom domain (optional)

Add a file named `CNAME` containing your domain (e.g. `www.desktoptotrade.com`), point your DNS at GitHub per
<https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site>, then set the custom domain in Settings → Pages.
