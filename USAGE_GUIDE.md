# 🚀 Complete Usage & Deployment Guide

## 📋 Table of Contents

1. [Installation & Setup](#installation--setup)
2. [Running the Project](#running-the-project)
3. [Project Overview](#project-overview)
4. [Customization Guide](#customization-guide)
5. [Deployment](#deployment)
6. [Troubleshooting](#troubleshooting)

---

## Installation & Setup

### Prerequisites

Before you begin, ensure you have:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- A code editor (VS Code recommended)
- Git (for version control)

### Verify Installation

```bash
node --version    # Should be v14+
npm --version     # Or yarn --version
git --version
```

### Clone & Setup

```bash
# Navigate to the project directory
cd "c:\Users\Saloni Gupta\Desktop\CcpC-SOC"

# Install all dependencies
npm install

# Verify installation
npm list react react-dom react-router-dom vite tailwindcss
```

---

## Running the Project

### Development Mode

```bash
npm run dev
```

**What happens:**
- Vite starts a development server (usually http://localhost:5173)
- Hot Module Replacement (HMR) enabled - changes appear instantly
- Browser automatically opens the site

**Navigate to:**
- Home: http://localhost:5173/
- Seasons: http://localhost:5173/seasons
- Projects: http://localhost:5173/projects
- Register: http://localhost:5173/register
- Contact: http://localhost:5173/contact

### Production Build

```bash
npm run build
```

**Creates:**
- Optimized `dist/` folder with all assets
- Minified CSS and JavaScript
- Compressed images and icons
- Ready for deployment

### Preview Production Build

```bash
npm run preview
```

**What it does:**
- Serves the production build locally
- Useful for testing before deployment
- Accessible at http://localhost:4173 (default)

---

## Project Overview

### 🏢 Website Structure

#### Navigation Bar (All Pages)
- **Logo**: SoC branding with gradient
- **Menu Links**: Home, Seasons, Projects, Register, Contact
- **CTA Button**: "Join Now" linking to registration
- **Mobile Menu**: Hamburger icon on small screens

#### Page Breakdown

| Page | URL | Purpose |
|------|-----|---------|
| **Home** | `/` | Landing page with hero & features |
| **Seasons** | `/seasons` | Detailed season information & timeline |
| **Projects** | `/projects` | Showcase of completed projects |
| **Register** | `/register` | Registration form for participants |
| **Contact** | `/contact` | Contact form and FAQ section |

### 🎨 Design Highlights

```
Color Palette:
├── Primary Blue: #0284c7
├── Accent Orange: #f59e0b
└── Neutral Grays: #111827 to #f3f4f6

Typography:
├── Headings: Bold, up to 48px
├── Body: Regular, 16px
└── Captions: Small, 12px

Spacing:
├── Containers: max-width 1280px
├── Padding: 4px → 32px (Tailwind scale)
└── Gaps: 8px → 48px
```

### 📱 Responsive Behavior

```
Mobile (< 640px):
├── Single column layouts
├── Hamburger menu
├── Larger touch targets
└── Simplified cards

Tablet (640px - 1024px):
├── Two column layouts
├── Full navbar menu
├── Medium-sized cards
└── Optimized spacing

Desktop (> 1024px):
├── Three column layouts
├── Full features
├── Hover effects
└── Maximum content width
```

---

## Customization Guide

### 1. Change Website Colors

**File**: `tailwind.config.js`

```javascript
// Find the theme.extend.colors section
colors: {
  primary: {
    50: '#f0f9ff',      // Lightest
    100: '#e0f2fe',
    500: '#0ea5e9',     // Main color
    600: '#0284c7',     // Dark version
    700: '#0369a1'      // Darkest
  },
  accent: {
    500: '#f59e0b',     // Main accent
    600: '#d97706'      // Dark accent
  }
}
```

**After changes**: Restart dev server (`npm run dev`)

### 2. Update Navbar Links

**File**: `src/components/Navbar.jsx`

```jsx
const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Seasons', path: '/seasons' },
  { label: 'Projects', path: '/projects' },
  { label: 'Register', path: '/register' },
  { label: 'Contact', path: '/contact' },
  // Add new link:
  // { label: 'Blog', path: '/blog' }
];
```

### 3. Update Page Content

#### Home Page (Hero Section)
**File**: `src/pages/Home.jsx`

```jsx
<h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
  <span className="block text-gray-900">YOUR TITLE HERE</span>
  <span className="block mt-2 gradient-text">YOUR SUBTITLE</span>
</h1>

<p className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-8">
  YOUR TAGLINE HERE
</p>
```

#### Home Page (Features Section)
```jsx
const features = [
  {
    icon: <CODE_ICON className="w-12 h-12 text-primary-600" />,
    title: 'Your Feature Title',
    description: 'Your feature description here'
  },
  // Add more features...
];
```

### 4. Update Footer

**File**: `src/components/Footer.jsx`

```jsx
// Change club name
<h3 className="text-lg font-bold mb-4">YOUR CLUB NAME</h3>

// Update social links
<a href="YOUR_FACEBOOK_URL">
  <Facebook className="w-6 h-6" />
</a>

// Change copyright year (automatically updates)
© {currentYear} YOUR CLUB NAME. All rights reserved.
```

### 5. Add New Pages

**Step 1**: Create new file `src/pages/NewPage.jsx`

```jsx
import React from 'react';

const NewPage = () => {
  return (
    <div className="w-full">
      {/* Your content here */}
    </div>
  );
};

export default NewPage;
```

**Step 2**: Import in `App.jsx`

```jsx
import NewPage from './pages/NewPage';
```

**Step 3**: Add route in `App.jsx`

```jsx
<Routes>
  {/* ... existing routes ... */}
  <Route path="/new-page" element={<NewPage />} />
</Routes>
```

**Step 4**: Add navigation link in `Navbar.jsx`

```jsx
{ label: 'New Page', path: '/new-page' }
```

### 6. Modify Form Fields (Registration)

**File**: `src/pages/Register.jsx`

```jsx
// Add new branch
const branches = [
  'Computer Science',
  'Information Technology',
  // ... add more
];

// Add new skill
const skillOptions = [
  'Web Development',
  // ... add more
];

// Add new interest
const interestOptions = [
  'Summer Project',
  // ... add more
];
```

### 7. Change Typography

**File**: `tailwind.config.js`

```javascript
theme: {
  fontFamily: {
    sans: ['Your Font Family', 'sans-serif'],
  }
}
```

Or use Tailwind's default fonts with:
```jsx
<h1 className="font-serif"> // Serif font
<p className="font-mono">    // Monospace
```

### 8. Adjust Animations

**File**: `tailwind.config.js`

```javascript
animation: {
  fadeIn: 'fadeIn 0.5s ease-in',      // Change duration
  slideUp: 'slideUp 0.6s ease-out',
  // Add new animation:
  // slideDown: 'slideDown 0.6s ease-out'
}
```

Or apply delays in components:
```jsx
<div className="animate-slideUp" style={{ animationDelay: '0.1s' }}>
```

---

## Deployment

### 1. Deploy to Vercel (Recommended)

**Advantages**: Free, automatic deploys, fast CDN

**Steps:**

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Create Vercel Account**
   - Visit [vercel.com](https://vercel.com)
   - Sign up with GitHub

3. **Import Project**
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects it's a Vite project

4. **Configure & Deploy**
   - Framework: "Vite"
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click "Deploy"

5. **Custom Domain** (Optional)
   - Go to project settings
   - Add your custom domain
   - Update DNS records

### 2. Deploy to Netlify

**Steps:**

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Sign up on Netlify**
   - Visit [netlify.com](https://netlify.com)

3. **Deploy**
   - Drag & drop the `dist` folder to Netlify
   - **OR** connect GitHub for auto-deploys

4. **Configure**
   - Set build command: `npm run build`
   - Set publish directory: `dist`

### 3. Deploy to Traditional Hosting (cPanel, etc.)

**Steps:**

1. **Build project**
   ```bash
   npm run build
   ```

2. **Upload via FTP**
   - Upload entire `dist` folder to your hosting
   - Or upload contents of `dist` to `public_html`

3. **Configure**
   - Most hosters: put `dist` contents in root
   - Add `.htaccess` for SPA routing:
   ```
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

### 4. Deploy to GitHub Pages

**Free but limited routing**

1. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/repo-name/', // Your repo name
     // ... rest of config
   })
   ```

2. **Build & Push**
   ```bash
   npm run build
   git add .
   git commit -m "Deploy"
   git push origin main
   ```

3. **Enable Pages**
   - Go to GitHub repo settings
   - Pages section → Source: "Deploy from a branch"
   - Branch: `main`, folder: `/(root)` or `/dist`

---

## Environment Variables

**Create `.env.local`** for sensitive data (optional):

```env
VITE_API_URL=https://api.example.com
VITE_SITE_NAME=Seasons of Code
```

**Use in code:**
```jsx
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## Troubleshooting

### Issue: Port 5173 already in use

**Solution:**
```bash
npm run dev -- --port 3000  # Use port 3000 instead
```

### Issue: Tailwind styles not showing

**Solutions:**
1. Check `content` paths in `tailwind.config.js`
2. Restart dev server: `Ctrl+C`, then `npm run dev`
3. Clear cache: `rm -rf node_modules package-lock.json && npm install`

### Issue: Build fails with errors

**Solutions:**
```bash
# Clear cache
rm -rf dist node_modules

# Reinstall dependencies
npm install

# Try building again
npm run build
```

### Issue: Routes not working after deployment

**Solutions:**
- Ensure server redirects all routes to `index.html`
- Add `.htaccess` file (see deployment section)
- Use a host that supports SPA routing (Vercel, Netlify)

### Issue: Images/Icons not showing

**Solutions:**
1. Check lucide-react is installed: `npm list lucide-react`
2. Import icons correctly: `import { Code2 } from 'lucide-react'`
3. Verify emoji display in your terminal

### Issue: CSS not minifying in production

**This is normal** - Tailwind handles this automatically in build.

### Issue: Git push fails

**Solutions:**
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
git push origin main
```

---

## Performance Optimization Tips

### 1. Image Optimization
Replace emoji placeholders with actual optimized images:
```jsx
<img 
  src="/images/feature.webp" 
  alt="Feature description"
  className="w-full h-auto"
/>
```

### 2. Code Splitting
Already set up with React Router - pages load on demand.

### 3. Lazy Loading
Add for future enhancement:
```jsx
const Home = lazy(() => import('./pages/Home'));
```

### 4. Lighthouse Score
- Remove unused CSS (done via Tailwind)
- Compress images
- Enable GZIP compression on server
- Use CDN for static assets

---

## Maintenance Checklist

- [ ] Update dependencies monthly: `npm update`
- [ ] Run security audit: `npm audit`
- [ ] Test on different browsers
- [ ] Check mobile responsiveness
- [ ] Monitor performance with Lighthouse
- [ ] Update content regularly
- [ ] Backup code to GitHub regularly

---

## Support & Resources

### Documentation
- [React Docs](https://react.dev)
- [React Router Docs](https://reactrouter.com)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Docs](https://vitejs.dev)
- [Lucide Icons](https://lucide.dev)

### Community
- Stack Overflow (tag: reactjs)
- GitHub Discussions
- Reddit r/reactjs

### Tools
- [Vite DevTools](https://vite-plugin-inspect.netlify.app/)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

---

## FAQ

**Q: Can I use this with a backend?**
A: Yes! Replace form submission with API calls. See Contact.jsx handleSubmit for reference.

**Q: How do I add authentication?**
A: Integrate with Firebase, Auth0, or your own backend. Create ProtectedRoute wrapper.

**Q: Can I deploy this as a mobile app?**
A: Yes, use React Native or Capacitor to wrap the web app.

**Q: Is the website SEO optimized?**
A: Partially. Add react-helmet for better SEO optimization.

**Q: How do I add dark mode?**
A: Use next-themes with Tailwind's dark mode utilities.

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Mar 2026 | Initial release |

---

**Last Updated**: March 17, 2026
**Status**: Ready for Production ✅

Made with ❤️ using **React + Vite + Tailwind CSS**
