# 🏗️ Architecture & Technical Documentation

## System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Browser / Client                      │
└────────────────────┬────────────────────────────────────┘
                     │
        ┌────────────┴────────────┐
        │                         │
    ┌───▼─────┐          ┌──────▼──────┐
    │ Framer  │          │  Tailwind   │
    │ Motion  │          │   CSS       │
    └────┬────┘          └──────┬──────┘
         │                      │
    ┌────▼──────────────────────▼────┐
    │     React 19 Components        │
    │  (Next.js App Router)          │
    │                               │
    │  ├── layout.tsx             │
    │  ├── page.tsx               │
    │  └── components/            │
    │      ├── Hero.tsx           │
    │      ├── Projects.tsx       │
    │      ├── Skills.tsx         │
    │      ├── Footer.tsx         │
    │      └── MouseFollower.tsx  │
    └────┬──────────────────────────┘
         │
    ┌────▼──────────────────┐
    │  Next.js 15 Server    │
    │  (Optimized Build)    │
    └──────────────────────┘
```

## Component Tree

```
RootLayout (layout.tsx)
├── MouseFollower (client component)
├── Gradient Overlay (fixed)
└── Page (page.tsx)
    ├── Hero
    │   ├── Mouse Position Hook
    │   ├── Animated Background
    │   ├── Title Section
    │   ├── CTA Buttons
    │   └── Scroll Indicator
    ├── Projects
    │   ├── Section Header
    │   └── ProjectCard[] (Grid)
    │       ├── Title
    │       ├── Description
    │       ├── Tags[]
    │       └── Links
    ├── Skills
    │   ├── Section Header
    │   ├── SkillCard[] (Bento Grid)
    │   │   ├── Icon
    │   │   ├── Title
    │   │   ├── Skills[]
    │   │   └── Bottom Accent
    │   └── Bottom CTA
    └── Footer
        ├── Main Headline
        ├── ContactCard[] (Grid)
        │   ├── Icon
        │   ├── Label
        │   └── Value
        ├── Location Info
        └── Credits
```

## Data Flow

### 1. Mouse Tracking Flow
```
User Mouse Move Event
        ↓
Event Listener in MouseFollower.tsx
        ↓
State Update (setMousePosition)
        ↓
Framer Motion animate() property
        ↓
Smooth CSS transform (GPU accelerated)
        ↓
Visual cursor follower & background gradient
```

### 2. Section Reveal Flow (Scroll)
```
User Scrolls
        ↓
whileInView Observer (Intersection API)
        ↓
Component Variants State Change
        ↓
Framer Motion triggers animation
        ↓
Staggered child animations
        ↓
User sees smooth reveal
```

### 3. Interactive State Flow
```
User Hovers Element
        ↓
CSS hover state / motion.whileHover
        ↓
Component Animation Triggered
        ↓
Visual feedback (scale, color, opacity)
        ↓
Click/Interaction possible
        ↓
Navigation or Action
```

## Performance Optimizations

### 1. Code Splitting
- Each component is a separate .tsx file
- Next.js automatically code-splits by route
- Components lazy-loaded as needed

### 2. Image Optimization
```typescript
// Images use Next.js <Image> for:
// - Automatic WebP conversion
// - Responsive sizing
// - Lazy loading
// - Format selection
```

### 3. CSS Optimization
- Tailwind CSS generates only used classes
- Purging unused styles in production
- CSS is tree-shaken and minified

### 4. Animation Optimization
- Framer Motion uses GPU acceleration
- Transform/opacity animations (GPU-friendly)
- Debounced mouse move listeners
- Spring animations over setTimeout

### 5. Build Optimizations
```typescript
// next.config.ts includes:
- SWC minification (faster than Terser)
- Font optimization with Google Fonts
- Automatic static optimization
- Root path compression
```

## Client vs Server Components

### Server Components (Default)
- `layout.tsx` - Root layout (uses metadata)
- `page.tsx` - Main page (orchestrates sections)

### Client Components ("use client")
- `Hero.tsx` - Mouse tracking state
- `Projects.tsx` - Scroll animations
- `Skills.tsx` - Scroll animations
- `Footer.tsx` - Scroll animations
- `MouseFollower.tsx` - Mouse listeners

**Why?**
- Server components reduce JavaScript sent to browser
- Client components only where interactivity needed
- Metadata & SEO work on server components

## Animation Specifications

### Mouse Follower
```typescript
Spring Animation:
- damping: 30 (smoothness: 10-50)
- stiffness: 200 (responsiveness: 50-300)
- mass: 0.5 (weight, affects momentum)
Result: Smooth, responsive cursor follow
```

### Scroll Reveals
```typescript
Spring Animation:
- damping: 20 (smoother than follower)
- stiffness: 100 (less snappy)
- delay: Staggered by child index
Result: Elegant reveal as section scrolls into view
```

### Hover Effects
```typescript
Scale: 1 → 1.02 (subtle, not jarring)
Duration: 300ms
Y offset: 0 → -8px (lift effect)
Result: Premium, refined interaction feedback
```

## State Management

### No Redux/Zustand Needed
This portfolio uses minimal state:

1. **Mouse Position** (MouseFollower.tsx)
   ```typescript
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
   ```

2. **Client Detection** (Hero.tsx)
   ```typescript
   const [isClient, setIsClient] = useState(false)
   // Prevents hydration mismatch with animations
   ```

**Why minimal state?**
- No complex data flow
- No API calls needed
- All content is static
- Animations don't need shared state

## Responsive Design Strategy

### Breakpoints (Tailwind)
- `sm`: 640px (tablets)
- `md`: 768px (small laptops)
- `lg`: 1024px (laptops)
- `xl`: 1280px (desktops)
- `2xl`: 1536px (large screens)

### Mobile-First Approach
```typescript
// Define mobile styles first
className="text-5xl sm:text-6xl lg:text-7xl"
// Then add larger screen overrides
```

### Touch Interactions
- No hover states on mobile (uses active instead)
- Buttons have adequate touch targets (44px minimum)
- Smooth scrolling works on all devices

## Accessibility Features

### Keyboard Navigation
```typescript
// All interactive elements are keyboard accessible
<button> // Native button
<a>      // Native link
// Links and buttons have focus styles
```

### Focus Management
```css
button:focus-visible,
a:focus-visible {
  outline: 2px solid rgb(59, 130, 246);
  outline-offset: 2px;
}
```

### Reduced Motion Support
```typescript
// In globals.css:
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Semantic HTML
```typescript
<section>      // Sections
<h1>, <h2>    // Hierarchy
<nav>         // Navigation (if added)
<footer>      // Footer
<article>     // Articles (if added)
```

## Environment & Configuration

### TypeScript Strict Mode
```typescript
// tsconfig.json enforces:
- strict: true
- noImplicitAny: true
- strictNullChecks: true
- strictFunctionTypes: true
- noUnusedLocals: true
- noUnusedParameters: true
```

### ESLint Rules
```json
{
  "extends": ["next/core-web-vitals", "next/typescript"],
  "rules": {
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

### Prettier Formatting
```json
{
  "semi": true,
  "singleQuote": false,
  "printWidth": 80,
  "tabWidth": 2
}
```

## Security Considerations

### Headers (next.config.ts)
```typescript
"X-Content-Type-Options": "nosniff"    // Prevent MIME sniffing
"X-Frame-Options": "SAMEORIGIN"         // Prevent clickjacking
"X-XSS-Protection": "1; mode=block"    // XSS protection
"Referrer-Policy": "strict-origin-when-cross-origin"
```

### No Sensitive Data
- No environment variables exposed
- No API keys in client code
- All external links are safe

### CSP Headers (can be added)
```typescript
// In next.config.ts headers:
"Content-Security-Policy": "..."
```

## Deployment Checklist

- [ ] Run `npm run build` locally (no errors)
- [ ] Run `npm run type-check` (no type errors)
- [ ] Test on mobile devices
- [ ] Test with keyboard navigation
- [ ] Update metadata with your info
- [ ] Test animations on target devices
- [ ] Check Core Web Vitals (Lighthouse)
- [ ] Set up custom domain
- [ ] Enable HTTPS
- [ ] Add analytics if desired
- [ ] Submit sitemap.xml to search engines

## Future Enhancement Ideas

### 1. Add Blog
- Create `app/blog/` directory
- Use markdown with gray-matter
- Add MDX for interactive posts

### 2. Add Contact Form
- Create `app/api/contact/route.ts`
- Use Nodemailer or third-party service
- Add validation with Zod

### 3. Add Dark/Light Mode
- Implement next-themes
- Toggle button in header
- Persist preference to localStorage

### 4. Add Analytics
- Google Analytics 4
- Or alternative like Plausible

### 5. Add CMS Integration
- Connect to Contentful
- Or Sanity.io
- Dynamic project/blog content

### 6. Add Comment System
- Giscus or Utterances
- For blog comments

### 7. Performance Monitoring
- Sentry for error tracking
- Vercel Analytics for metrics

## Common Customizations

### Change Primary Color
1. Update `tailwind.config.ts` colors
2. Replace `blue-400`, `blue-500` in components
3. Update gradient classes

### Add Custom Font
1. Import from Google Fonts in `layout.tsx`
2. Update `tailwind.config.ts` fontFamily
3. Use className with font variable

### Adjust Animation Speed
1. Edit `damping` and `stiffness` values
2. Lower damping = faster
3. Higher stiffness = snappier

### Change Layout Spacing
1. Modify `py-20 sm:py-32` in sections
2. Update `mb-6`, `mb-16`, etc.
3. Change `max-w-6xl` for width

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Web Vitals](https://web.dev/vitals/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Version: 1.0.0**
**Last Updated: 2024**
**Built with Next.js 15, React 19, Framer Motion 11, Tailwind CSS 3**
