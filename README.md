# Deepak | Audiologist & Speech-Language Pathologist
### Personal Medical Portfolio Website — Chandigarh, India

![Preview](https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1200&auto=format&fit=crop)

---

## 🌐 Live Website

> **Deployed at:** `https://YOUR-USERNAME.github.io/` *(update after deployment)*

---

## 📁 Project Structure

```
deepak-portfolio/
├── index.html       ← Main HTML file (all sections)
├── style.css        ← Premium styles, dark mode, responsive
├── script.js        ← All interactive features
└── README.md        ← This file
```

---

## ✨ Features

| Feature | Details |
|---|---|
| **Loading Screen** | Animated spinner + progress bar |
| **Sticky Navbar** | Transparent → white on scroll |
| **Dark Mode** | System-preference aware + manual toggle with localStorage |
| **Hamburger Menu** | Smooth slide-in mobile navigation |
| **Scroll Reveal** | Intersection Observer animations |
| **Hero Section** | Full-screen with stats counter |
| **Services Grid** | 12 cards with colored icons |
| **Gallery** | Masonry grid + click-to-lightbox |
| **Why Choose Me** | 6 icon cards |
| **Testimonials** | Auto-advancing carousel with touch/swipe |
| **FAQ Accordion** | Smooth open/close with aria |
| **Contact Form** | Front-end validation + success state |
| **Google Maps** | Embedded iframe for Chandigarh |
| **Floating WhatsApp** | Direct WhatsApp link |
| **Floating Call** | Mobile call button |
| **Back to Top** | Appears after 400px scroll |
| **SEO** | Meta tags, OG tags, Schema.org markup |
| **Responsive** | Mobile / Tablet / Desktop |

---

## 🚀 Deploying to GitHub Pages

### Step 1 — Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click **New Repository**
3. Name it `YOUR-USERNAME.github.io` (for a root domain site)
   - OR name it anything e.g. `deepak-slp` (it'll be at `YOUR-USERNAME.github.io/deepak-slp`)
4. Set visibility to **Public**
5. Click **Create Repository**

### Step 2 — Upload Files

**Option A: Via GitHub Web Interface**
1. Open your repository
2. Click **Add file → Upload files**
3. Drag & drop all 4 files: `index.html`, `style.css`, `script.js`, `README.md`
4. Click **Commit changes**

**Option B: Via Git Command Line**
```bash
git init
git add .
git commit -m "Initial commit – Deepak SLP Portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Go to your repository → **Settings** → **Pages**
2. Under **Source**, select `Deploy from a branch`
3. Select branch: `main`, folder: `/ (root)`
4. Click **Save**
5. Wait 1–2 minutes — your site will be live!

---

## 🎨 Customization Guide

### Changing Contact Details

Open `index.html` and find/replace:

```
+91 9350158754     → Your phone number
drajput.pro@gmail.com → Your email address
Chandigarh, India  → Your city/address
https://wa.me/919350158754 → Your WhatsApp link
```

### Changing Colors

Open `style.css`, find the `:root` block at the top:

```css
:root {
  --clr-primary:    #1B4F72;   /* Deep Navy – change to your brand color */
  --clr-accent:     #17A589;   /* Teal – change to your accent color */
}
```

### Replacing Images

All images are loaded from **Unsplash** free CDN. To use your own:
1. Upload photos to your repository or any image host
2. Replace `src="https://images.unsplash.com/..."` with your own image paths
3. Recommended sizes: Hero `1800×1200px`, About `700×950px`, Gallery `600×400px`

### Updating Google Maps

Find the `<iframe>` in the Contact section and replace the `src` URL with your clinic's embed link:
1. Go to [maps.google.com](https://maps.google.com)
2. Search your clinic address
3. Click **Share → Embed a map → Copy HTML**
4. Replace the iframe `src` attribute

### Setting Up Contact Form

The form currently shows a success message after 1.5s (simulated). To receive actual emails, integrate one of these free services:

**Formspree (easiest):**
```html
<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
```

**EmailJS:**
Replace the `setTimeout` in `script.js` form handler with EmailJS SDK calls.

**Web3Forms:**
```html
<input type="hidden" name="access_key" value="YOUR-ACCESS-KEY">
```

---

## 📱 Browser Support

| Browser | Support |
|---|---|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Mobile Chrome/Safari | ✅ Full |

---

## 🔍 SEO Checklist

- [x] Meta title & description
- [x] Open Graph tags (Facebook/LinkedIn sharing)
- [x] Twitter Card
- [x] Schema.org MedicalBusiness markup
- [x] Semantic HTML (h1, h2, h3 hierarchy)
- [x] Alt attributes on all images
- [x] Canonical URL tag
- [x] Mobile-responsive (passes Google Mobile Usability)
- [ ] Add your Google Analytics ID to `<head>`
- [ ] Register on Google Search Console after deployment
- [ ] Submit sitemap (create a `sitemap.xml` for better indexing)

---

## 📊 Performance Tips

1. **Images**: Compress your own photos using [Squoosh](https://squoosh.app) before uploading
2. **Fonts**: Already using `font-display: swap` via Google Fonts URL params
3. **Lazy Loading**: Gallery and About images use `loading="lazy"`
4. **Minification**: For production, minify CSS & JS using [minify-js.com](https://www.minify-js.com/)

---

## 📞 About the Clinician

**Deepak** | Audiologist & Speech-Language Pathologist  
📍 Chandigarh, India  
📱 +91 9350158754  
✉️ drajput.pro@gmail.com  
💬 [WhatsApp](https://wa.me/919350158754)

---

## 📄 License

This website template was created for personal professional use by Deepak. All rights reserved © 2024.

---

*Built with care. Helping people communicate better.*
