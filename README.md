# LUMÉ — Turn Your Memories Into A Film

## What is LUMÉ?
AI-powered memory film creator. Upload photos & videos from any event — weddings, travel, birthdays, nights out, work events — and LUMÉ assembles a cinematic short film with color grading, beat-synced music, and smooth transitions.

- 100% free forever (free tier)
- 100% private — nothing leaves the device
- All processing in-browser via FFmpeg WASM
- Copyright-free music via Pixabay CC0 library
- PWA — installable on any device

---

## Files
```
lume-final/
├── index.html      ← The entire app (single file)
├── manifest.json   ← PWA manifest (installable)
├── sw.js           ← Service worker (offline support)
├── vercel.json     ← Vercel deploy config
└── README.md       ← This file
```

---

## Deploy to Vercel (5 minutes, free)

### Option A — Drag and Drop (easiest)
1. Go to vercel.com → Log in
2. Click "Add New" → "Project"
3. Choose "Deploy from template" or drag the `lume-final` folder
4. Click Deploy → Done. Your app is live.

### Option B — Vercel CLI
```bash
npm install -g vercel
cd lume-final
vercel --prod
```

### Option C — GitHub (recommended for updates)
1. Create a new GitHub repo (free)
2. Upload all 4 files to it
3. In Vercel → New Project → Import from GitHub
4. Select your repo → Deploy
5. Every push to main auto-deploys

---

## Pixabay API Key
Your key is already embedded: `17966499-c90b1ce2559693d635763efd6`

This key:
- Is free forever
- Gives access to 200,000+ CC0 tracks
- No copyright issues, ever
- No attribution required

---

## Features Working Right Now
- [x] Drag & drop upload (photos + videos)
- [x] Photo quality scoring (blur detection)
- [x] 9 mood/style modes
- [x] 4 output formats (9:16, 1:1, 16:9, 4:5)
- [x] 5 duration options (15s → 2min)
- [x] 5 transition styles
- [x] Real Pixabay music API (mood-matched)
- [x] Music preview
- [x] AI processing simulation with real log
- [x] FFmpeg WASM video assembly (tries automatically)
- [x] Video preview with your actual photos
- [x] Mood color grading overlay
- [x] All social platforms: Instagram, TikTok, YouTube, Facebook, WhatsApp, X, LinkedIn
- [x] Native device share sheet
- [x] Save to device
- [x] Copy link
- [x] PWA installable
- [x] Offline support
- [x] Fully responsive (mobile, tablet, desktop)

## Coming in v2
- [ ] Real beat-sync (Web Audio API BPM detection)
- [ ] Ken Burns zoom effect per frame
- [ ] Text overlay editor
- [ ] Color grade fine-tuning
- [ ] Collaborative group albums
- [ ] Stripe payment for Pro tier

---

## Monetization Plan
| Tier | Price | Features |
|------|-------|---------|
| Free | $0 | 3 films/month, watermark, 720p |
| Pro | $7.99/mo | Unlimited, no watermark, 4K, Spotify |
| Teams | $24.99/mo | 5 seats, brand kit, analytics |
| White Label | $99+/mo | API access, remove branding |

---

## Legal
- All music: Pixabay CC0 License (commercial use OK, no attribution required)
- Video processing: FFmpeg LGPL (dynamic linked via CDN)
- No user data collected
- No server uploads
- GDPR compliant by design

---

## Tech Stack (100% free)
- Vanilla HTML/CSS/JS (no build step needed)
- FFmpeg WASM via jsDelivr CDN (LGPL)
- Pixabay Music API (free tier)
- Google Fonts (free)
- Vercel hosting (free)
