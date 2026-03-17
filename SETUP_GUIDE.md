# 🚀 Seasons of Code (SoC) Website - Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The website will open at `http://localhost:5173`

### 3. Build for Production
```bash
npm run build
```

---

## 📁 Project Structure

```
CcpC-SOC/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with mobile menu
│   │   └── Footer.jsx          # Footer with social links
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── Seasons.jsx         # Seasons details & timeline
│   │   ├── Projects.jsx        # Project showcase
│   │   ├── Register.jsx        # Registration form
│   │   └── Contact.jsx         # Contact & FAQs
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles & Tailwind imports
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Dependencies & scripts
```

---

## 🎨 Features Implemented

### ✨ Navbar
- **Sticky navigation** with logo and branding
- **Desktop menu** with direct links
- **Mobile hamburger menu** (responsive)
- **Join Now CTA button** with gradient
- Smooth animations on mobile menu open/close

### 🏠 Home Page (Landing)
- **Hero section** with catchy title and tagline
- **Features section** with 3 key benefits
- **Statistics section** with impressive numbers
- **Call-to-action section** with dual buttons
- Animated elements on scroll

### 📅 Seasons Page
- **Summer Project Season**
  - 8-week program (June-July)
  - Group projects (2-4 members)
  - Expert mentorship
  - Weekly workshops
  
- **Autumn Coding Challenge**
  - 6-week program (October-November)
  - Competitive contests
  - Leaderboards & prizes
  
- **Year-round timeline** showing all activities
- Feature highlights for each season

### 💻 Projects Page
- **Grid of 6+ sample projects** with:
  - Project title & description
  - Technology stack
  - Team member names
  - Project category/season
  - View & Code buttons
  
- **Category filter buttons**
- **Statistics section** showing community impact
- **Call-to-action** to join and build projects

### 📝 Registration Page
- **Multi-field form** with:
  - Full Name (required)
  - Email (required)
  - Branch/Department dropdown
  - Skills (checkboxes)
  - Interests (checkboxes)
  - Terms & conditions agreement
  
- **Form validation** (client-side)
- **Success message** on submission
- **FAQ cards** with helpful information

### 📞 Contact Page
- **Contact form** with name, email, subject, message
- **Contact information cards**
  - Email
  - Phone
  - Location
  
- **Comprehensive FAQ section** (6+ questions)
  - Expandable details
  - Clear answers
  
- **Call-to-action** to register

### 🦶 Footer
- **Club branding** (CcpC)
- **Quick links** section
- **Social media icons**
  - Facebook, Twitter, LinkedIn, GitHub, Email
  - Hover animations
  
- **Copyright text** with dynamic year

---

## 🎨 Design Features

### Color Scheme
```css
Primary Color: Sky Blue (#0284c7, #0369a1)
Accent Color: Amber/Orange (#f59e0b, #d97706)
Neutral: Gray scale for text and backgrounds
```

### Typography
- Modern, clean sans-serif fonts
- Responsive text sizes (mobile → desktop)
- Good contrast for readability

### Animations
```css
fade-in        /* 0.5s ease-in */
slide-up       /* 0.6s ease-out */
slide-in-left  /* 0.6s ease-out */
slide-in-right /* 0.6s ease-out */
card-hover     /* Transform & shadow on hover */
```

### Responsive Design
- ✅ Mobile-first approach
- ✅ Tablet optimized
- ✅ Desktop enhanced
- ✅ Touch-friendly buttons
- ✅ Flexible grid layouts

---

## 🛠 Technology Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | UI library |
| **React Router v6** | Client-side routing |
| **Vite** | Build tool & dev server |
| **Tailwind CSS** | Utility-first CSS styling |
| **Lucide React** | Beautiful SVG icons |
| **PostCSS** | CSS processing |
| **Autoprefixer** | Vendor prefixes |

---

## 🚀 Development

### Hot Reload
Changes to files are automatically reflected in the browser during development.

### Building
```bash
npm run build
```
Creates optimized production build in `dist/` folder.

### Preview Production Build
```bash
npm run preview
```
Test the production build locally before deployment.

---

## 📝 Content Customization

### Edit Navbar Links
File: `src/components/Navbar.jsx`
```jsx
const navLinks = [
  { label: 'Home', path: '/' },
  // Add more links here
];
```

### Update Page Content
- **Home**: `src/pages/Home.jsx`
- **Seasons**: `src/pages/Seasons.jsx`
- **Projects**: `src/pages/Projects.jsx`
- **Register**: `src/pages/Register.jsx`
- **Contact**: `src/pages/Contact.jsx`

### Change Colors
File: `tailwind.config.js`
```javascript
colors: {
  primary: {
    600: '#YOUR_COLOR',
    // ...
  },
  accent: {
    500: '#YOUR_COLOR',
    // ...
  }
}
```

---

## 📱 Browser Support

| Browser | Support |
|---------|---------|
| Chrome/Chromium | ✅ Full support |
| Firefox | ✅ Full support |
| Safari | ✅ Full support |
| Edge | ✅ Full support |
| Mobile browsers | ✅ Full support |

---

## 🎯 Performance Tips

1. **Images**: Consider using optimized images instead of emoji placeholders
2. **Lazy Loading**: Can be added for images on Projects page
3. **Code Splitting**: Already set up with React Router
4. **CSS**: Tailwind removes unused styles in production

---

## 🔗 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Deploy automatically

### Netlify
```bash
npm run build
# Drag & drop the 'dist' folder to Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload contents of 'dist' folder to web server
```

---

## 📚 Key Files Explained

### `vite.config.js`
Vite configuration with React plugin and dev server settings.

### `tailwind.config.js`
Tailwind CSS configuration with custom colors and animations.

### `postcss.config.js`
PostCSS plugins for CSS processing (Tailwind + Autoprefixer).

### `App.jsx`
Main component with React Router setup and layout structure.

### `index.css`
Global styles including Tailwind imports and custom CSS classes.

---

## 🐛 Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3000
```

### Tailwind styles not working
- Make sure `tailwind.config.js` includes correct `content` paths
- Restart dev server after changes

### Build fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📝 Future Enhancements

- [ ] Backend API integration
- [ ] Email notifications
- [ ] User dashboard
- [ ] Blog section
- [ ] Testimonials carousel
- [ ] Dark mode
- [ ] Multi-language support
- [ ] Analytics tracking
- [ ] PWA support

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🤝 Contributing

To contribute:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 💬 Need Help?

- 📧 Email: contact@ccpc.edu
- 📱 Contact page: [http://localhost:5173/contact](http://localhost:5173/contact)
- 💬 GitHub Issues: Report bugs and suggest features

---

**Made with ❤️ using React + Tailwind CSS**
