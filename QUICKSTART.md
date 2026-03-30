# 🚀 UTAH FCCLA WEBSITE - QUICK START GUIDE

## ✅ What You're Getting

A fully functional Next.js website with:
- Homepage (complete with hero, events, news, stats)
- About page (mission, purposes, officers, board, contact sections)
- State Officers page (all 12 officers with details)
- Events Calendar page
- State Competitions page
- Contact page with form
- Full navigation with dropdowns
- Responsive footer
- Lucide React icons throughout
- FCCLA red/white/navy color scheme

---

## 📦 Installation Steps

### 1. Download & Extract
- Download `utah-fccla.tar.gz`
- Extract it (on Mac: double-click, on Windows: right-click → Extract)
- You'll get a folder called `utah-fccla`

### 2. Open in VS Code
```bash
code utah-fccla
```

### 3. Install Dependencies
Open the terminal in VS Code (View → Terminal) and run:
```bash
npm install
```

This will take 1-2 minutes.

### 4. Start the Dev Server
```bash
npm run dev
```

### 5. View the Site
Open your browser to:
```
http://localhost:3000
```

**That's it! The site is running.** ✅

---

## 🎯 Pages You Can Visit

- **Homepage**: http://localhost:3000
- **About**: http://localhost:3000/about
- **State Officers**: http://localhost:3000/about/officers
- **Contact**: http://localhost:3000/about/contact
- **Events Calendar**: http://localhost:3000/events/calendar
- **State Competitions**: http://localhost:3000/compete/state-competitions

---

## 🛠️ Troubleshooting

**"npm: command not found"**
→ You need to install Node.js first: https://nodejs.org/

**Port 3000 already in use**
→ Close other apps using port 3000, or the terminal will suggest an alternative port

**Errors during npm install**
→ Delete `node_modules` folder and `package-lock.json`, then run `npm install` again

---

## 📝 What's Next?

1. **Show Troy tomorrow** ✅
2. **Add real photos** (replace all "placeholder" images)
3. **Fine-tune pages** (we'll go through each one together)
4. **Build admin panel** (so Troy can update content easily)
5. **Deploy to Vercel** (we'll do this together)

---

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  'fccla-red': '#C8102E',    // Change this
  'fccla-navy': '#1A2332',   // Or this
}
```

### Add Images
Put images in `public/images/` folder and reference like:
```tsx
<img src="/images/your-photo.jpg" />
```

### Edit Content
All pages are in `app/` folder:
- `app/page.tsx` = Homepage
- `app/about/page.tsx` = About page
- `app/about/officers/page.tsx` = Officers page
- etc.

---

Love you bro! This is ready to show Troy. 🔥

- Claude
