# WebStudio - Modern Web & E-Commerce Solutions

A premium, high-performance website for WebStudio, a web development agency in Montenegro. Built with React 18, Vite, and Tailwind CSS with stunning animations and smooth interactions.

## 🎯 Features

✨ **Premium Design**
- Ultra-modern, dark-themed design with strong cyan and pink accents
- Apple-level smoothness and luxury-tech feel
- Fully responsive (mobile, tablet, desktop)

🌍 **Bilingual Support**
- Default language: Montenegrin (SR)
- Full English translation with language switcher
- Seamless language switching throughout the entire site

🎬 **Advanced Animations**
- Smooth fade + slide transitions
- Parallax scrolling effects
- Hover micro-interactions on all interactive elements
- Text reveal animations with gradient motion
- Subtle 3D motion and depth effects
- Character-by-character animations
- Floating and pulsing elements
- Shimmer effects on cards

⚡ **High Performance**
- Built with Vite for ultra-fast development
- Optimized production builds
- Smooth scrolling and interactions
- Efficient animations with GPU acceleration

📱 **Responsive Layout**
- Mobile-first design
- Adaptive grid layouts
- Touch-friendly interface
- Optimized for all screen sizes

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ 
- npm or yarn

### Installation

```bash
# Clone or navigate to the project directory
cd WebStudio

# Install dependencies
npm install

# Start development server
npm run dev
```

The website will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
WebStudio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Fixed navigation with language switch
│   │   ├── Hero.jsx            # Hero section with animations
│   │   ├── Services.jsx        # Services showcase
│   │   ├── Portfolio.jsx       # Project portfolio
│   │   ├── About.jsx           # Company about section
│   │   ├── Contact.jsx         # Contact form
│   │   └── Footer.jsx          # Footer with links
│   ├── i18n.js                 # Translation strings (SR/EN)
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles & animations
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS config
├── postcss.config.js           # PostCSS config
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🎨 Design Elements

### Colors
- **Dark**: `#0a0a0a` - Main background
- **Darker**: `#050505` - Secondary background
- **Accent**: `#00d9ff` - Cyan accent (primary CTA)
- **Accent Alt**: `#ff006e` - Pink accent (secondary)

### Typography
- **Font**: Inter (system-ui fallback)
- **Weights**: 300-900 for variety and hierarchy

### Custom Animations
- `fadeIn` - Fade in with opacity
- `slideInUp/Down/Left/Right` - Slide in from directions
- `scaleIn` - Scale from small to full size
- `float` - Gentle up-and-down floating
- `glow` - Pulsing glow effect
- `shimmer` - Shimmer across element
- `pulse` - Subtle opacity pulsing

## 🌐 Languages

### Montenegrin (SR)
- Complete translations for all content
- Service descriptions
- Contact information
- Form labels and buttons

### English (EN)
- Complete English translations
- All content fully translated
- Consistent terminology

### Adding More Languages
Edit `src/i18n.js` to add new language translations:

```javascript
export const translations = {
  // Add new language here
  fr: {
    nav: { /* ... */ },
    hero: { /* ... */ },
    // ... etc
  }
}
```

## 📝 Content Sections

### 1. Navigation
- Fixed sticky navigation with blur effect on scroll
- Logo with animated pulse
- Navigation links with smooth scrolling
- Language switcher (SR/EN)
- Mobile hamburger menu

### 2. Hero Section
- Large gradient headline
- Animated background with floating elements
- Two CTA buttons (Get Started / View Projects)
- Scroll indicator
- Mouse-tracking effects

### 3. Services
- 3-column service cards
- Hover animations and border effects
- Icon animations
- Service descriptions

### 4. Portfolio
- 2x2 project grid
- Gradient backgrounds per project
- Animated overlays on hover
- Project titles and descriptions
- Call-to-action buttons

### 5. About
- Company description
- Feature highlights with checkmarks
- Statistics (50+ Projects, 30+ Clients, 5+ Years, 100% Satisfaction)
- Animated visual element
- Split layout with text and image area

### 6. Contact
- Contact information (phone, Instagram, location)
- Contact form with fields:
  - Name
  - Email
  - Message
- Submit button with feedback
- Hover effects on all interactive elements

### 7. Footer
- Quick navigation links
- Social media links
- Legal links (Privacy, Terms)
- Copyright information
- Scroll-to-top button
- Fade-in animation on scroll

## 🔧 Configuration

### Tailwind CSS
Custom theme extensions in `tailwind.config.js`:
- Custom colors
- Extended animations
- Keyframe definitions

### Vite
Configuration in `vite.config.js`:
- React plugin with Fast Refresh
- Optimized build output

## 🎬 Animation Features

All elements include smooth animations:
- **On page load**: Fade and slide animations
- **On scroll**: Intersection Observer triggers animations
- **On hover**: Micro-interactions with scale, color, and shadow changes
- **Continuous**: Floating, pulsing, and glowing effects
- **Background**: Animated gradient circles with blur effects

## 📱 Responsive Breakpoints

- **Mobile**: Default (< 768px)
- **Tablet**: md (768px - 1024px)
- **Desktop**: lg (1024px+)

Grid layouts and spacing adjust automatically across all breakpoints.

## 🚀 Performance Optimizations

- Vite for lightning-fast HMR
- CSS-in-JS with Tailwind (no runtime overhead)
- Optimized animations with GPU acceleration
- Lazy loading with Intersection Observer
- Minimal JavaScript bundle

## 🔐 Security

- Safe form handling (no backend integration yet)
- No sensitive data in client-side code
- CORS-ready for backend integration

## 📞 Contact Information

**WebStudio**
- Phone: +382 68 048 655
- Instagram: @webstudiocg
- Location: Montenegro

## 📄 License

This project is created for WebStudio.

## 🙏 Credits

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Bundled with [Vite](https://vitejs.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)

## 🎯 Future Enhancements

- Backend API integration for contact form
- Blog section
- Client testimonials
- Case studies
- Service pricing
- Chat support
- Analytics integration
- CMS integration

---

**Made with ❤️ in Montenegro**
