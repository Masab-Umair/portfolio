# 🚀 Complete Setup & Customization Guide

## Step 1: Initial Setup

### 1.1 Create Project Directory
```bash
mkdir masab-umair-portfolio
cd masab-umair-portfolio
```

### 1.2 Copy All Files
Copy all the generated files into your project directory:
- `layout.tsx` → `app/layout.tsx`
- `page.tsx` → `app/page.tsx`
- `globals.css` → `app/globals.css`
- All components in `components/` folder
- Config files in root
- `package.json`, etc.

### 1.3 Install Dependencies
```bash
npm install
```

### 1.4 Start Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) and you should see the portfolio!

## Step 2: Customize Your Portfolio

### 2.1 Update Hero Section
Edit `app/components/Hero.tsx`:

```typescript
// Line 84: Update your name and title
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
  <span className="text-zinc-50">YOUR NAME HERE</span>
  <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
    Your Title
  </span>
  <br />
  <span className="text-zinc-400">&amp; Your Subtitle</span>
</h1>

// Line 98: Update your bio
<motion.p
  variants={itemVariants}
  className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-12"
>
  Your bio text here...
</motion.p>

// Line 119: Update email
<motion.a
  href="mailto:your-email@example.com"
  ...
>
```

### 2.2 Update Projects
Edit `app/components/Projects.tsx`:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description...",
    tags: ["Technology1", "Technology2"],
    link: "https://your-project.com",
    featured: true,
  },
  // ... add more projects
];
```

### 2.3 Update Skills
Edit `app/components/Skills.tsx`:

```typescript
const skillsData: SkillItem[] = [
  {
    id: "frontend",
    title: "Your Category",
    icon: Code2, // Pick icon from lucide-react
    skills: ["Skill1", "Skill2", "Skill3"],
    span: "col-span-1 row-span-2",
  },
  // ... add more skills
];
```

### 2.4 Update Contact Information
Edit `app/components/Footer.tsx`:

```typescript
const contactOptions: ContactOption[] = [
  {
    icon: Mail,
    label: "Email",
    value: "your-email@example.com",
    href: "mailto:your-email@example.com",
    type: "email",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    type: "phone",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://linkedin.com/in/your-profile",
    type: "link",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View my code",
    href: "https://github.com/your-username",
    type: "link",
  },
];
```

Also update the location info:
```typescript
// Line 180: Update location
<span className="text-sm">Based in Your City, Your Country</span>
```

## Step 3: Styling Customization

### 3.1 Change Color Scheme
Edit `tailwind.config.ts` to change the primary color:

Current: Blue (#3b82f6) and Cyan (#06b6d4)

**Option 1: Purple & Pink**
```typescript
// In theme > extend > colors, add:
"purple": {
  "500": "#a855f7",
  "600": "#9333ea",
},
"pink": {
  "400": "#f472b6",
  "500": "#ec4899",
}

// Then update gradient classes in components:
// from-purple-500 to-pink-500
```

**Option 2: Orange & Yellow**
```typescript
"orange": {
  "500": "#f97316",
},
"yellow": {
  "400": "#facc15",
}
// Use: from-orange-500 to-yellow-400
```

### 3.2 Change Dark Theme
Edit `app/layout.tsx`:

```typescript
// Current: bg-zinc-950 (very dark)
// Options:
// - bg-slate-950 (more bluish)
// - bg-gray-950 (more neutral)
// - bg-neutral-950 (balanced)

body className={`${geist.variable} ${geistMono.variable} bg-zinc-950 text-zinc-50 antialiased`}
```

### 3.3 Customize Typography
Edit the font imports in `app/layout.tsx`:

```typescript
// Change from Geist to another Google Font:
import { Inter, Poppins, Playfair_Display } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

// Update body className
body className={`${inter.variable} ${playfair.variable} ...`}

// Update tailwind.config.ts fontFamily
fontFamily: {
  sans: ["var(--font-inter)", "system-ui"],
  display: ["var(--font-playfair)", "serif"],
}

// Use in components:
<h1 className="font-display">...</h1>
```

## Step 4: Animation Customization

### 4.1 Adjust Mouse Follower Speed
Edit `app/components/MouseFollower.tsx`:

```typescript
// Line 30: damping = 30 (lower = faster, 10-50 range)
// Line 31: stiffness = 200 (higher = snappier, 50-300 range)
transition={{
  type: "spring",
  damping: 30,     // <- Change this
  stiffness: 200,  // <- Or this
  mass: 0.5,
}}
```

### 4.2 Disable Animations (for reduced motion)
Already built-in! Users with `prefers-reduced-motion` will see no animations.

### 4.3 Customize Scroll Animations
Edit individual components' motion variants:

```typescript
const itemVariants = {
  hidden: { opacity: 0, y: 20 },  // y: 20 = scroll from 20px down
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,     // <- Adjust here
      stiffness: 100,  // <- Or here
    },
  },
};
```

## Step 5: SEO Optimization

### 5.1 Update Metadata
Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name — Your Title",
  description: "Your description here...",
  authors: [{ name: "Your Name" }],
  keywords: ["keyword1", "keyword2", "keyword3"],
  openGraph: {
    title: "Your Name — Your Title",
    description: "Your description...",
    type: "website",
    url: "https://your-domain.com",
    siteName: "Your Name Portfolio",
  },
};
```

### 5.2 Add Google Analytics (Optional)
Install analytics:
```bash
npm install @next/third-parties
```

Update `app/layout.tsx`:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

// In RootLayout:
<GoogleAnalytics gaId="YOUR_GA_ID" />
```

### 5.3 Update og:image
Add in metadata:
```typescript
openGraph: {
  ...
  images: [
    {
      url: "https://your-domain.com/og-image.jpg",
      width: 1200,
      height: 630,
    },
  ],
}
```

## Step 6: Deployment

### 6.1 Deploy to Vercel (Easiest)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git push -u origin main
```

2. **Go to Vercel**
- Visit [vercel.com](https://vercel.com)
- Click "New Project"
- Select your GitHub repository
- Click "Deploy"

Your site will be live at `your-project.vercel.app`!

### 6.2 Add Custom Domain
1. In Vercel dashboard → Project settings
2. Go to "Domains"
3. Add your custom domain
4. Update your domain registrar DNS records
5. Follow Vercel's DNS setup instructions

### 6.3 Deploy to Other Platforms

**Netlify:**
```bash
npm run build
# Drag & drop 'out' folder to Netlify
```

**GitHub Pages:**
```bash
# Update next.config.ts:
basePath: "/your-repo-name"
assetPrefix: "/your-repo-name/"
```

## Step 7: Advanced Customization

### 7.1 Add a Blog Section
Create `app/components/Blog.tsx`:

```typescript
export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Post Title",
      excerpt: "...",
      date: new Date(),
      slug: "post-slug",
    },
  ];

  return (
    <section className="py-20">
      {/* Similar structure to Projects */}
    </section>
  );
}
```

### 7.2 Add Dark/Light Mode Toggle
Install next-themes:
```bash
npm install next-themes
```

Create `app/components/ThemeToggle.tsx` and implement toggle.

### 7.3 Add Contact Form
Install form library:
```bash
npm install react-hook-form zod
```

Create backend API route in `app/api/contact/route.ts`.

### 7.4 Add Image Optimization
Create `public/images/` folder and use Next.js Image:

```typescript
import Image from "next/image";

<Image
  src="/images/project.jpg"
  alt="Project"
  width={600}
  height={400}
  quality={75}
/>
```

## Step 8: Testing

```bash
# Type checking
npm run type-check

# Build for production
npm run build

# Start production server
npm start

# Format code
npm run format
```

## Troubleshooting

### Issue: "Module not found"
**Solution:** Run `npm install` again

### Issue: Animations not smooth
**Solution:** Check browser hardware acceleration is enabled

### Issue: Deployment fails
**Solution:** Run `npm run build` locally to see build errors

### Issue: Styles not applying
**Solution:** Clear Next.js cache: `rm -rf .next`

---

**You're all set! 🎉**

For more help, visit:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
