# Masab Umair — Portfolio Website

A premium, ultra-minimal portfolio website built with Next.js, React, Framer Motion, and Tailwind CSS. Features smooth micro-interactions, mouse-tracking animations, and a hyper-clean dark aesthetic.

## 🎨 Features

- **Hyper-Clean Design**: Minimal, premium aesthetic with generous whitespace
- **Smooth Animations**: Framer Motion-powered micro-interactions and scroll reveals
- **Mouse Tracking**: Interactive background that follows cursor movement
- **Responsive Design**: Fully responsive from mobile to desktop
- **Dark Theme**: Premium dark aesthetic with zinc and blue gradients
- **Performance Optimized**: Next.js with optimizations built-in
- **Accessibility**: WCAG compliant with focus states and reduced motion support
- **SEO Ready**: Proper metadata and structured data

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17.0 or later
- npm 9.6.0 or later (or yarn/pnpm)

### Installation

1. **Clone or extract the project**

```bash
cd masab-umair-portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

```bash
cp .env.example .env.local
```

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page will auto-update as you edit files.

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with theme setup
│   ├── page.tsx            # Main page component
│   ├── globals.css         # Global styles and animations
│   └── components/
│       ├── Hero.tsx        # Hero section with mouse tracking
│       ├── Projects.tsx    # Projects grid showcase
│       ├── Skills.tsx      # Skills bento grid
│       ├── Footer.tsx      # Contact section
│       └── MouseFollower.tsx # Cursor tracking animation
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.ts         # Next.js configuration
├── postcss.config.js      # PostCSS configuration
└── README.md              # This file
```

## 🛠 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run TypeScript type checking
npm run type-check

# Format code with Prettier
npm run format
```

## 🎯 Key Components

### Hero Section (`components/Hero.tsx`)
- Interactive mouse-tracking background
- Smooth gradient animations
- Primary and secondary CTAs
- Scroll indicator animation

### Projects (`components/Projects.tsx`)
- Asymmetric 2-column grid
- Scale and lift hover effects
- Tag system for technologies
- Featured project support

### Skills (`components/Skills.tsx`)
- Bento grid layout
- Visual skill categorization
- Interactive hover states
- Responsive design

### Footer (`components/Footer.tsx`)
- High-impact headline
- Direct contact options (email, phone, social)
- Location information
- Accessibility-first design

### Mouse Follower (`components/MouseFollower.tsx`)
- Smooth cursor tracking
- Glassmorphism blur effect
- Interactive element detection
- Performance optimized

## 🎨 Customization

### Update Your Information

Edit the component files to customize:

- **Name & Title**: Update `Hero.tsx` headline
- **Bio**: Modify description text in `Hero.tsx`
- **Projects**: Edit projects array in `Projects.tsx`
- **Skills**: Update `skillsData` array in `Skills.tsx`
- **Contact**: Change email/phone in `Footer.tsx`

### Colors & Theme

Customize colors in `tailwind.config.ts`:

```typescript
colors: {
  blue: {
    400: "#60a5fa",
    500: "#3b82f6",
  },
  // ... other colors
}
```

### Fonts

Fonts are loaded from Google Fonts in `layout.tsx`. Change them here:

```typescript
const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

Vercel will automatically detect Next.js and configure the build settings.

### Other Platforms

#### Netlify
```bash
npm run build
# Deploy the 'out' directory
```

#### Traditional Server
```bash
npm run build
npm start
```

The application will start on port 3000.

## 📊 Performance

- **Lighthouse**: Optimized for 90+ scores across all metrics
- **Core Web Vitals**: Optimized LCP, FID, and CLS
- **Bundle Size**: Optimized with tree-shaking and code splitting
- **Images**: Next.js Image optimization with WebP support

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Focus indicators on all interactive elements
- Reduced motion support for animations
- Semantic HTML structure
- Proper heading hierarchy

## 🔒 Security

- CSP headers configured
- XSS protection enabled
- Frame options set to SAMEORIGIN
- Referrer policy configured
- No powered-by headers exposed

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a personal portfolio. Feel free to fork and customize for your own use!

## 📝 License

MIT License - feel free to use this as a template for your own portfolio.

## 🙋 Support

For questions or issues:
- Email: umairmasab935@gmail.com
- Phone: +92 324-1583954
- LinkedIn: [Connect with me](https://linkedin.com/in/masabumair)
- GitHub: [View my code](https://github.com/masabumair)

---

**Built with ❤️ using Next.js, Framer Motion, and Tailwind CSS**
