# Statistical Spectrum Website — Deployment Guide

## 🚀 How to Deploy on GitHub Pages (Free)

### Step 1: Create a GitHub Account
1. Go to https://github.com
2. Click **Sign Up** — it's completely free
3. Verify your email

### Step 2: Create a New Repository
1. Click the **+** icon → **New repository**
2. Name it exactly: `statistical-spectrum` (or any name you like)
3. Set it to **Public**
4. Click **Create repository**

### Step 3: Upload Your Website Files
**Option A — Easy (via GitHub website):**
1. Open your repository
2. Click **Add file** → **Upload files**
3. Drag and drop ALL the files from this folder
4. Make sure the folder structure is preserved:
   ```
   index.html
   about.html
   videos.html
   blog.html
   courses.html
   contact.html
   css/style.css
   js/main.js
   js/components.js
   ```
5. Click **Commit changes**

**Option B — Via Git (recommended for future updates):**
```bash
git init
git add .
git commit -m "Initial website launch"
git remote add origin https://github.com/YOUR_USERNAME/statistical-spectrum.git
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repository → **Settings**
2. Click **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Choose **main** branch → **/ (root)**
5. Click **Save**

### Step 5: Your Website is Live! 🎉
GitHub will give you a URL like:
`https://YOUR_USERNAME.github.io/statistical-spectrum`

It takes about 2–5 minutes to go live after saving.

---

## 💰 Setting Up Google AdSense

### Requirements Before Applying:
- ✅ At least 20–30 blog articles published
- ✅ Website live for at least 1–2 months
- ✅ Original content (no copied content)
- ✅ Privacy Policy and About pages present

### Steps:
1. Go to https://adsense.google.com
2. Sign in with your Google account
3. Add your GitHub Pages URL
4. Copy the AdSense code snippet they give you
5. In `index.html`, find this comment and replace it:
   ```html
   <!-- <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script> -->
   ```
   Remove the `<!--` and `-->` and replace `XXXXXXXXXXXXXXXX` with your publisher ID.

---

## 📧 Setting Up the Contact Form (Free)

1. Go to https://formspree.io and sign up free
2. Create a new form — copy your form endpoint URL
3. In `contact.html`, find:
   ```html
   action="https://formspree.io/f/XXXXXXXX"
   ```
   Replace `XXXXXXXX` with your actual Formspree form ID.

---

## 📬 Setting Up Newsletter (Free)

1. Go to https://mailchimp.com — sign up free (up to 500 subscribers)
2. Create an audience and get your signup form embed code
3. Replace the newsletter form in each page with your Mailchimp embed

---

## 🔄 Updating Your Website

After making changes to any file:
- Via GitHub web: Upload the changed file again and commit
- Via Git: `git add . && git commit -m "Update" && git push`

Changes go live within 1–2 minutes.

---

## 📁 File Structure
```
statistical-spectrum/
├── index.html          ← Homepage
├── videos.html         ← Video library with search
├── blog.html           ← Articles & blog
├── courses.html        ← Courses & resources
├── about.html          ← About Dnyaneshwar Darekar
├── contact.html        ← Contact form
├── css/
│   └── style.css       ← All styles (gold/black theme)
└── js/
    ├── main.js         ← Interactivity & search
    └── components.js   ← Navbar & footer (shared)
```

---

Built with ❤️ for Statistical Spectrum by Dnyaneshwar Darekar
