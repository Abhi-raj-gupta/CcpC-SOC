# 🏗️ Architecture & Component Documentation

## Overview

This is a modern React.js website for "Seasons of Code (SoC)" built with Vite, React Router, and Tailwind CSS. The application follows a component-based architecture with clear separation of concerns.

---

## 📊 Component Architecture

### Root Level
```
App.jsx
├── Navbar
├── <Routes>
│   ├── Home
│   ├── Seasons
│   ├── Projects
│   ├── Register
│   └── Contact
└── Footer
```

---

## 📄 File-by-File Breakdown

### `src/main.jsx`
**Entry point** for the React application.
- Renders the React app to the DOM element with id `root`
- Uses React 18's `createRoot` API

```jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

### `src/App.jsx`
**Main application component** with routing setup.

**Features:**
- React Router configuration with 5 routes
- Layout wrapper for Navbar and Footer
- Minimum height flexbox layout ensuring footer stays at bottom

**Routes:**
| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Landing page |
| `/seasons` | Seasons | Seasons details & timeline |
| `/projects` | Projects | Project showcase |
| `/register` | Register | Registration form |
| `/contact` | Contact | Contact & FAQs |

---

### `src/components/Navbar.jsx`
**Navigation bar** with responsive design.

**Props:** None (uses React Router hooks)

**State:**
```jsx
const [isOpen, setIsOpen] = useState(false); // Mobile menu state
```

**Features:**
- Logo with gradient styling
- Desktop menu with 5 navigation links
- Mobile hamburger menu (hidden on md screens)
- "Join Now" CTA button
- Sticky positioning with shadow
- Mobile menu animations

**Key Elements:**
- `<Link>` from React Router for navigation
- `<Menu>` and `<X>` icons from lucide-react
- Responsive grid/flex layouts
- Gradient backgrounds and transitions

---

### `src/components/Footer.jsx`
**Footer component** with contact & social info.

**Props:** None

**Features:**
- Club branding section
- Quick links to main pages
- Social media icon links (5 platforms)
- Copyright text with dynamic year
- Responsive grid layout
- Icon hover animations

**Social Platforms:**
- Facebook
- Twitter
- LinkedIn
- GitHub
- Email

---

### `src/pages/Home.jsx`
**Landing page** with hero section and features.

**Sections:**
1. **Hero Section**
   - Large title with gradient text
   - Tagline with color-coded separators
   - Description text
   - Dual CTA buttons (Join Now, Explore Seasons)
   - Placeholder illustration

2. **About Section**
   - Feature cards (3 items):
     - Learn Together (with icon)
     - Build Projects (with icon)
     - Join Competitions (with icon)

3. **Stats Section**
   - 4 statistics with gradient background
   - Animated number display

4. **CTA Section**
   - Final call-to-action for registration

**Icons Used:**
- `Code2` - Learn Together
- `Zap` - Build Projects
- `Users` - Join Competitions
- `ArrowRight` - CTA button

---

### `src/pages/Seasons.jsx`
**Seasons information page** with timeline.

**Sections:**
1. **Hero Section**
   - Page title and description

2. **Seasons Grid** (2 cards)
   - **Summer Project**
     - Duration: June - July (8 weeks)
     - Team-based (2-4 members)
     - Features: Mentorship, workshops, code reviews
     - Gradient: Orange to Red
   
   - **Autumn Coding Challenge**
     - Duration: October - November (6 weeks)
     - Individual or team participation
     - Features: Contests, leaderboards, prizes
     - Gradient: Purple to Pink

3. **Features Section**
   - 3 feature cards:
     - Community
     - Skill Development
     - Recognition

4. **Timeline Section**
   - Year-round schedule
   - 4 timeline items with alternating layout
   - Vertical line separator (hidden on mobile)

**Data Structure:**
```jsx
const seasons = [
  {
    id: 1,
    title: 'Summer Project',
    duration: 'June - July',
    weeks: 8,
    highlights: [...],
    stats: [...]
  },
  // ...
];
```

---

### `src/pages/Projects.jsx`
**Project showcase page** with filtering.

**Sections:**
1. **Hero Section**
   - Page title and description

2. **Category Filter**
   - 4 filter buttons with project counts
   - First button active by default

3. **Projects Grid** (6 sample projects)
   - **Card Contents:**
     - Image/icon area (emoji placeholder)
     - Project title
     - Description (2-line truncate)
     - Tech stack badges
     - Team members info
     - Season badge
     - View & Code buttons

4. **Stats Section**
   - 4 statistics with gradient background

5. **CTA Section**
   - Encourage joining to build projects

**Sample Project Structure:**
```jsx
{
  id: 1,
  title: 'E-Commerce Platform',
  description: '...',
  tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  team: ['Rahul Kumar', 'Priya Singh', 'Arjun Patel'],
  season: 'Summer Project',
  image: '🛒'
}
```

---

### `src/pages/Register.jsx`
**Registration form page** with validation.

**State:**
```jsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  branch: '',
  skills: [],
  interests: []
});

const [submitted, setSubmitted] = useState(false);
```

**Form Fields:**
1. **Full Name** (text input, required)
2. **Email Address** (email input, required)
3. **Branch/Department** (select dropdown, 6 options)
4. **Your Skills** (8 checkboxes)
   - Web Development, App Development, Data Science
   - AI/ML, Competitive Programming, Cloud Computing
   - DevOps, Database Design
5. **Interests** (6 checkboxes)
   - Summer Project, Autumn Challenge, Mentorship
   - Hackathons, Workshops, Networking
6. **Terms & Conditions** (checkbox, required)

**Features:**
- Form validation (HTML5 + custom)
- Success message animation
- Info cards with helpful details
- Animated form elements (staggered)
- Responsive layout

**Form Handling:**
```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form submitted:', formData);
  // Reset after 3 seconds
};
```

---

### `src/pages/Contact.jsx`
**Contact form and FAQ page**.

**State:**
```jsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const [submitted, setSubmitted] = useState(false);
```

**Sections:**
1. **Contact Form**
   - Name (required)
   - Email (required)
   - Subject (required)
   - Message (textarea, required)

2. **Contact Info Cards** (3 cards)
   - Email with link
   - Phone with tel: link
   - Location/Address

3. **FAQ Section** (6 questions)
   - Expandable details (native HTML `<details>`)
   - Clear, helpful answers
   - Smooth animations

**Frequently Asked Questions:**
- Experience requirement
- Multi-season participation
- Registration fees
- Time commitment
- Certificate eligibility
- Team formation process

---

### `src/index.css`
**Global styles and Tailwind imports**.

**Contents:**
1. **Tailwind Directives**
   - `@tailwind base`
   - `@tailwind components`
   - `@tailwind utilities`

2. **Global CSS Reset**
   - Margin/padding: 0
   - Box-sizing: border-box

3. **HTML Smoothing**
   - `scroll-behavior: smooth`

4. **Custom Classes**
   - `.gradient-text` - Text gradient effect
   - `.gradient-bg` - Background gradient
   - `.card-hover` - Card hover animations
   - `.btn-primary` - Primary button style
   - `.btn-secondary` - Secondary button style

---

## 🎨 Styling System

### Tailwind Configuration
File: `tailwind.config.js`

**Custom Colors:**
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1'
  },
  accent: {
    500: '#f59e0b',
    600: '#d97706'
  }
}
```

**Custom Animations:**
- `fadeIn` - 0.5s fade-in effect
- `slideUp` - 0.6s slide-up effect
- `slideInLeft` - 0.6s slide-in from left
- `slideInRight` - 0.6s slide-in from right

### Responsive Breakpoints
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Common Tailwind Classes Used
- **Spacing**: `px-4`, `py-3`, `mb-6`, `space-x-2`
- **Colors**: `text-primary-600`, `bg-gradient-to-r`
- **Layout**: `flex`, `grid`, `max-w-7xl`, `mx-auto`
- **Effects**: `shadow-lg`, `rounded-lg`, `transition-all`
- **Responsive**: `md:grid-cols-2`, `sm:px-6`, `lg:px-8`

---

## 🔄 Routing Structure

### React Router Setup
```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/seasons" element={<Seasons />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/register" element={<Register />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>
```

### Navigation Methods
1. **Navbar Links** - `<Link>` components
2. **CTA Buttons** - `<Link>` to `/register`
3. **Internal Links** - `<a href="/contact">`

---

## 🎯 Key Features

### 1. Responsive Design
- Mobile-first approach
- Hamburger menu on mobile (< md breakpoint)
- Flexible grid layouts
- Touch-friendly button sizes

### 2. Animations
- Page load animations (staggered)
- Hover effects on cards
- Smooth transitions
- Mobile menu slide animation

### 3. Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigable
- Good color contrast

### 4. Performance
- Code-split with React Router
- Lightweight CSS with Tailwind
- No external image dependencies
- Efficient re-renders with hooks

---

## 🔌 Lucide React Icons Used

| Component | Icons |
|-----------|-------|
| Navbar | Menu, X |
| Home | Code2, Zap, Users, ArrowRight |
| Seasons | Calendar, Users, Trophy, Code, Cpu |
| Projects | Github, ExternalLink, Users |
| Register | AlertCircle, CheckCircle |
| Contact | Mail, Phone, MapPin, Send, CheckCircle |
| Footer | Facebook, Twitter, Linkedin, Github, Mail |

---

## 🛠️ Development Workflow

### Adding a New Page
1. Create component in `src/pages/PageName.jsx`
2. Add route in `App.jsx`
3. Add link in Navbar

### Modifying Styles
1. Update Tailwind classes in components
2. Or add custom CSS in `index.css`
3. Restart dev server if needed

### Adding Animation
1. Use existing animations or define new ones
2. Apply with `animate-fadeIn` class
3. Adjust timing with `animationDelay` style prop

---

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.2.0 | UI library |
| react-dom | ^18.2.0 | DOM rendering |
| react-router-dom | ^6.8.0 | Routing |
| lucide-react | ^0.263.1 | Icons |
| vite | ^4.2.0 | Build tool |
| tailwindcss | ^3.2.4 | Styling |
| postcss | ^8.4.21 | CSS processing |
| autoprefixer | ^10.4.13 | Vendor prefixes |

---

## 🚀 Best Practices Used

✅ **Component Composition** - Small, reusable components
✅ **Hook Usage** - `useState`, `useRouter`, custom animations
✅ **Styling** - Utility-first with Tailwind
✅ **Responsive Design** - Mobile-first approach
✅ **Accessibility** - Semantic HTML, proper labels
✅ **Performance** - Lazy loading ready, code split
✅ **User Experience** - Smooth animations, fast interactions

---

## 📝 Notes

- All form submissions are client-side only (no backend)
- Icons use emoji placeholders for projects
- URLs in Footer are placeholders
- Phone number and email in Contact are sample data
- All content is static (can be moved to a CMS)

---

**Last Updated**: March 2026
**Status**: Ready for deployment ✅
