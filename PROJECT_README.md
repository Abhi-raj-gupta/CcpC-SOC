# Seasons of Code (SoC) - Website

A modern, responsive React.js website for "Seasons of Code (SoC)" - a year-round coding program organized by the Competitive Coding and Programming Club (CcpC).

## Features

✨ **Modern Design**
- Clean and professional UI with gradients and animations
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll animations and transitions
- Beautiful card-based layouts

🎯 **Complete Sections**
1. **Navbar** - Sticky navigation with mobile menu
2. **Landing Page** - Eye-catching hero section with CTA
3. **About Section** - Program overview with feature cards
4. **Seasons Section** - Summer Projects & Autumn Challenge details
5. **Projects Section** - Showcase of completed projects with filters
6. **Registration Form** - Multi-field form with validation
7. **Contact Page** - Contact form, info, and FAQs
8. **Footer** - Social links and copyright

⚙️ **Technologies Used**
- **React 18** - UI Library
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful SVG icons
- **Vite** - Fast build tool

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── Seasons.jsx
│   ├── Projects.jsx
│   ├── Register.jsx
│   └── Contact.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Install Vite (if not already installed)**
   ```bash
   npm install -D vite @vitejs/plugin-react
   ```

### Running the Project

**Development Mode:**
```bash
npm run dev
```
This will start the development server (usually at `http://localhost:3000`)

**Build for Production:**
```bash
npm run build
```

## Available Pages

### 1. Home (`/`)
- Catchy hero section with tagline "Ask | Learn | Collaborate"
- Feature cards highlighting key benefits
- Statistics section
- Call-to-action buttons

### 2. Seasons (`/seasons`)
- Detailed cards for Summer Project and Autumn Challenge
- Timeline showing year-round schedule
- Feature highlights for each season
- Duration and participation details

### 3. Projects (`/projects`)
- Grid display of 6+ sample projects
- Project cards with tech stack, team info, and links
- Category filter buttons
- Statistics section

### 4. Register (`/register`)
- Multi-step form with fields:
  - Full Name
  - Email
  - Branch/Department
  - Skills (checkboxes)
  - Interests (checkboxes)
- Form validation
- Success message on submission
- FAQ section with helpful info

### 5. Contact (`/contact`)
- Contact form with name, email, subject, message
- Contact information cards (Email, Phone, Location)
- FAQ section with 6+ common questions
- Social media links in footer

## Styling Features

### Custom Classes
- `gradient-text` - Text with gradient color
- `gradient-bg` - Background with gradient
- `card-hover` - Hover effect for cards
- `btn-primary` - Primary button style
- `btn-secondary` - Secondary button style

### Animations
- `animate-fadeIn` - Fade in effect
- `animate-slideUp` - Slide up from bottom
- `animate-slideInLeft` - Slide in from left
- `animate-slideInRight` - Slide in from right

## Color Scheme

- **Primary**: Sky Blue (#0284c7, #0369a1)
- **Accent**: Amber/Orange (#f59e0b, #d97706)
- **Neutral**: Gray scale for text and backgrounds

## Responsive Design

All pages are optimized for:
- 📱 Mobile (320px and up)
- 📱 Tablet (768px and up)
- 🖥️ Desktop (1024px and up)

## Additional Features

- ✅ Form validation (client-side)
- ✅ Smooth page transitions
- ✅ Mobile hamburger menu
- ✅ Sticky navbar
- ✅ Smooth scroll behavior
- ✅ Icon integration with Lucide React
- ✅ SEO-friendly structure

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: { ... },
  accent: { ... }
}
```

### Content
All content is hardcoded in components. To update:
1. Edit the relevant component in `src/pages/`
2. Modify text, images, or data
3. Save and the changes will reflect immediately in dev mode

### Animations
Adjust animation delays by modifying the `style` prop:
```jsx
style={{ animationDelay: '0.1s' }}
```

## Performance Optimizations

- Code splitting with React Router
- Lazy loading ready (can be added)
- Optimized image handling
- Efficient CSS with Tailwind
- Smooth transitions avoiding layout thrashing

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Future Enhancements

- [ ] Backend integration for form submissions
- [ ] Blog section
- [ ] Testimonials carousel
- [ ] Email notifications
- [ ] Dashboard for registered users
- [ ] Dark mode
- [ ] Multi-language support
- [ ] Analytics integration

## License

This project is open source and available under the MIT License.

## Contributors

Created with ❤️ by the CcpC Web Development Team

## Contact & Support

For questions or support:
- 📧 Email: contact@ccpc.edu
- 🌐 Website: [Your Website]
- 📱 Social Media: [Your Social Links]

---

**Made with React + Tailwind CSS + Love** ❤️
