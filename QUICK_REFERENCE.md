# 🎯 Quick Reference Guide

## Essential Commands

### Setup & Installation
```bash
# Navigate to project
cd "c:\Users\Saloni Gupta\Desktop\CcpC-SOC"

# Install all dependencies
npm install

# Verify installation
npm list
```

### Development
```bash
# Start development server (opens browser at localhost:5173)
npm run dev

# Stop server
Ctrl + C

# Restart server after changes
Ctrl + C, then npm run dev
```

### Production
```bash
# Build optimized version
npm run build

# Preview production build
npm run preview

# Clean build
rmdir dist && npm run build  # Windows
# OR
rm -rf dist && npm run build  # Mac/Linux
```

### Maintenance
```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Security audit
npm audit

# Fix security issues
npm audit fix

# Clear cache
npm cache clean --force
```

---

## File Quick Reference

### Components
| File | Purpose | Edit For |
|------|---------|----------|
| `Navbar.jsx` | Navigation bar | Menu links, logo, CTA button |
| `Footer.jsx` | Footer section | Social links, club name, copyright |

### Pages
| File | Purpose | Edit For |
|------|---------|----------|
| `Home.jsx` | Landing page | Hero, features, stats |
| `Seasons.jsx` | Season details | Program info, timeline |
| `Projects.jsx` | Project showcase | Project data, cards |
| `Register.jsx` | Registration form | Form fields, validation |
| `Contact.jsx` | Contact & FAQ | Contact info, questions |

### Configuration
| File | Purpose | Edit For |
|------|---------|----------|
| `App.jsx` | Routing setup | Add/remove routes |
| `tailwind.config.js` | Styling config | Colors, fonts, animations |
| `vite.config.js` | Build config | Port, plugins, build settings |
| `package.json` | Dependencies | Add packages, scripts |

---

## Common Customizations

### Change Heading Text (Home Page)
File: `src/pages/Home.jsx`
```jsx
<h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
  <span className="block text-gray-900">YOUR TEXT HERE</span>
</h1>
```

### Change Primary Color
File: `tailwind.config.js`
```javascript
primary: {
  600: '#YOUR_COLOR_CODE', // Change this
}
```

### Add Navigation Link
File: `src/components/Navbar.jsx`
```jsx
const navLinks = [
  // ... existing links
  { label: 'Your Link', path: '/your-path' }
];
```

### Change Social Media Link
File: `src/components/Footer.jsx`
```jsx
<a href="YOUR_LINK_HERE">
  <Facebook className="w-6 h-6" />
</a>
```

---

## Keyboard Shortcuts (VS Code)

| Shortcut | Action |
|----------|--------|
| `Ctrl + K + O` | Open project in folder |
| `Ctrl + Shift + P` | Command palette |
| `Ctrl + F` | Find in file |
| `Ctrl + H` | Find & replace |
| `Alt + Up/Down` | Move line up/down |
| `Ctrl + /` | Toggle comment |
| `Ctrl + D` | Select word (multi-select) |
| `Shift + Alt + F` | Format document |

---

## Browser DevTools

### Open DevTools
| Browser | Shortcut |
|---------|----------|
| Chrome | `F12` or `Ctrl + Shift + I` |
| Firefox | `F12` or `Ctrl + Shift + I` |
| Safari | `Cmd + Option + I` |
| Edge | `F12` or `Ctrl + Shift + I` |

### Responsive Design Mode
| Browser | Shortcut |
|---------|----------|
| Chrome | `Ctrl + Shift + M` |
| Firefox | `Ctrl + Shift + M` |

---

## Git Commands

```bash
# Check status
git status

# Add files to staging
git add .
git add filename.jsx

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# Create new branch
git checkout -b feature/new-feature

# Switch branch
git checkout main

# Delete branch
git branch -d branch-name
```

---

## Deployment Quick Links

### Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Select your GitHub repo
4. Click "Deploy"

### Netlify
1. Go to [netlify.com](https://netlify.com)
2. Drag & drop `dist` folder
3. Wait for deployment

### GitHub Pages
```bash
# In vite.config.js, set:
# base: '/your-repo-name/'

npm run build
git add .
git commit -m "Deploy"
git push
```

---

## Troubleshooting Quick Fixes

### Issue: Page not updating
**Fix**: Save file and check browser. Vite has hot reload.

### Issue: Styles not showing
**Fix**: 
```bash
npm run dev  # Restart dev server
```

### Issue: npm install fails
**Fix**:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Issue: Build error
**Fix**:
```bash
npm run build  # Check error message
# Fix the issue, then rebuild
npm run build
```

### Issue: Port already in use
**Fix**:
```bash
npm run dev -- --port 3000
```

---

## Folder Structure Reminders

```
src/
├── components/     ← Navigation & Footer here
├── pages/         ← 5 Page files here
├── App.jsx        ← Routes & layout
├── main.jsx       ← Entry point
└── index.css      ← Global styles
```

---

## Icon Library Reference

### Finding Icons
Visit: [lucide.dev](https://lucide.dev)

### Using Icons
```jsx
import { IconName } from 'lucide-react';

<IconName className="w-6 h-6 text-primary-600" />
```

### Common Icons in Project
```jsx
// Navigation
import { Menu, X } from 'lucide-react'

// Home
import { Code2, Zap, Users, ArrowRight } from 'lucide-react'

// Seasons
import { Calendar, Trophy, Code, Cpu } from 'lucide-react'

// Projects
import { Github, ExternalLink } from 'lucide-react'

// Forms
import { CheckCircle } from 'lucide-react'

// Contact
import { Mail, Phone, MapPin, Send } from 'lucide-react'

// Social
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react'
```

---

## Tailwind Class Cheat Sheet

### Common Classes Used

#### Spacing
```jsx
px-4     /* Horizontal padding */
py-3     /* Vertical padding */
mb-6     /* Bottom margin */
mt-2     /* Top margin */
space-y-4 /* Gap between children */
```

#### Colors
```jsx
text-primary-600      /* Text color */
bg-gray-50           /* Background color */
border-gray-200      /* Border color */
from-primary-600 to-accent-500  /* Gradient */
```

#### Layout
```jsx
flex               /* Flexbox */
grid               /* CSS Grid */
grid-cols-2        /* 2 columns */
grid-cols-3        /* 3 columns */
max-w-7xl          /* Max width container */
mx-auto            /* Center horizontally */
```

#### Typography
```jsx
text-5xl           /* Size */
font-bold          /* Weight */
text-center        /* Alignment */
leading-relaxed    /* Line height */
```

#### Effects
```jsx
shadow-lg          /* Drop shadow */
rounded-lg         /* Border radius */
hover:shadow-xl    /* Hover effect */
transition-all     /* Animation */
```

---

## NPM Scripts

### Current Scripts
```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

### Run Scripts
```bash
npm run dev      # Start development
npm run build    # Build production
npm run preview  # Preview build
```

### Add New Script
Edit `package.json`:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint src",  // New script
  "type-check": "tsc --noEmit"  // New script
}
```

Then run with:
```bash
npm run lint
npm run type-check
```

---

## Quick Start Checklist

- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Visit http://localhost:5173
- [ ] Click through all pages
- [ ] Test mobile menu (< 768px)
- [ ] Test form submission
- [ ] Check for console errors (F12)
- [ ] Review documentation files

---

## Performance Tips

```bash
# Check bundle size
npm run build  # Check output in terminal

# Analyze performance
# Use Lighthouse in Chrome DevTools (F12)

# Monitor while developing
npm run dev  # Check console for warnings
```

---

## Regular Maintenance

### Weekly
- [ ] Check for broken links
- [ ] Test all forms

### Monthly
- [ ] Update dependencies: `npm update`
- [ ] Security audit: `npm audit`
- [ ] Run production build: `npm run build`

### Quarterly
- [ ] Update major dependencies
- [ ] Audit performance
- [ ] Review analytics

---

## Useful VS Code Extensions

```
Extensions to install:
├── Tailwind CSS IntelliSense
├── ES7+ React/Redux/React-Native snippets
├── Thunder Client (API testing)
├── Git Graph
└── Better Comments
```

---

## Common Port Numbers

| Port | Service |
|------|---------|
| 5173 | Vite dev server (default) |
| 3000 | Alternative dev port |
| 4173 | Vite preview port |
| 8080 | Common fallback |

---

## API Integration Example

When backend is ready, replace form handling:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const response = await fetch('https://api.example.com/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  if (response.ok) {
    setSubmitted(true);
  }
};
```

---

## Environment Variables Setup

Create `.env.local`:
```env
VITE_API_URL=http://localhost:3001
VITE_SITE_NAME=Seasons of Code
```

Use in code:
```jsx
const apiUrl = import.meta.env.VITE_API_URL;
const siteName = import.meta.env.VITE_SITE_NAME;
```

---

## Documentation Map

```
Need help with...?
├── Getting started? → SETUP_GUIDE.md
├── Understanding structure? → ARCHITECTURE.md
├── Customizing? → USAGE_GUIDE.md
├── Quick fixes? → This file
├── Feature overview? → PROJECT_README.md
└── Project summary? → PROJECT_SUMMARY.md
```

---

## Contact & Support

### Documentation
- SETUP_GUIDE.md - Quick start
- ARCHITECTURE.md - Code structure
- USAGE_GUIDE.md - Customization & deployment
- PROJECT_README.md - Features overview

### External Resources
- React Docs: https://react.dev
- Tailwind Docs: https://tailwindcss.com
- Vite Docs: https://vitejs.dev
- Lucide Icons: https://lucide.dev

---

## Tips & Tricks

1. **VS Code Format**: `Shift + Alt + F`
2. **Quick Find**: `Ctrl + F` (in current file)
3. **Find & Replace**: `Ctrl + H`
4. **Save All**: `Ctrl + K, S`
5. **Quick Open**: `Ctrl + P`, type filename
6. **Terminal**: `Ctrl + ~` (toggle)
7. **Zoom**: `Ctrl + +` or `Ctrl + -`
8. **Sidebar**: `Ctrl + B` (toggle)

---

**Always save your work and test in browser before deploying!** ✅

---

**Last Updated**: March 17, 2026
**Quick Reference Version**: 1.0
