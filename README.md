# Utah FCCLA Website

Modern, clean website for Utah FCCLA built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed on your computer
- VS Code (recommended)

### Installation & Running

1. **Extract the project folder** to your desired location

2. **Open in VS Code**:
   ```bash
   code utah-fccla
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** to [http://localhost:3000](http://localhost:3000)

That's it! The site should be running.

## 📁 Project Structure

```
utah-fccla/
├── app/                    # Next.js App Router pages
│   ├── about/             # About pages
│   ├── events/            # Events & calendar
│   ├── compete/           # Competitions
│   ├── members/           # For Members section
│   ├── advisers/          # For Advisers section
│   ├── resources/         # Resources section
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Navigation.tsx     # Main navigation
│   └── Footer.tsx         # Footer
├── public/                # Static assets
│   └── data/              # JSON data files
└── README.md
```

## 🎨 Design System

### Colors
- **FCCLA Red**: `#C8102E`
- **FCCLA Navy**: `#1A2332`
- White & Gray shades

### Fonts
- **Headings**: Outfit (Google Fonts)
- **Body**: DM Sans (Google Fonts)

### Icons
- Lucide React (already installed)

## 📄 Current Pages

### ✅ Complete
- **Homepage** (`/`) - Full hero, events, news, quick actions, about preview, officers preview
- **About** (`/about`) - Mission, purposes, stats, officers section, board section, contact
- **Events Calendar** (`/events/calendar`) - Upcoming events list

### 🚧 To Be Built (Placeholders ready)
- About → Officers, Board, Regions, Contact
- Events → Fall Leadership, Region Conferences, State Conference, Nationals
- Compete → STAR Events, State Competitions, Results, Accommodations
- For Members → Getting Started, National Programs, Run for Office, Scholarships, Newsletters
- For Advisers → New Adviser Guide, Affiliation, Chapter Resources, Training, Forms
- Resources → Downloads, Awards, CTE, Partner With Us

## 🔧 For Troy (Admin Panel - Coming Soon)

The admin panel will be built at `/admin` with:
- Password-protected access
- Rich text editor for content
- Event management
- News/updates management
- Officer profile management
- File uploads

## 📦 Deployment to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel will auto-deploy
4. Update DNS to point to Vercel

OR

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project folder
3. Follow prompts

## 🛠️ Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📝 Notes

- All images are placeholders - replace with actual photos
- Navigation is fully functional with dropdowns
- Fully responsive (mobile, tablet, desktop)
- Uses Lucide React for icons (not emojis)
- Ready for content management system integration

## 🎯 Next Steps

1. Fine-tune each page
2. Add real content and images
3. Build admin panel
4. Connect to data sources
5. Deploy to production

---

Built with ❤️ for Utah FCCLA
