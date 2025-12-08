# Soham Portfolio

A modern, fast static portfolio website built with React, TypeScript, and Vite. Optimized for deployment on Vercel.

## Project Structure

```
src/
├── components/        # React components
│   └── ui/           # UI component library (Radix UI)
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── App.tsx           # Main App component
├── main.tsx          # Entry point
└── index.css         # Global styles (Tailwind CSS)

public/              # Static assets (favicon, etc.)
dist/                # Build output (generated)
attached_assets/     # Additional assets (images, etc.)
```

## Available Scripts

### Development
```bash
npm run dev
```
Starts the development server with hot module replacement. Opens at `http://localhost:5173`

### Build
```bash
npm run build
```
Creates an optimized production build in the `dist` folder.

### Preview
```bash
npm run preview
```
Preview the production build locally before deployment.

### Type Check
```bash
npm run check
```
Run TypeScript compiler to check for type errors.

## Technologies

- **React 18.3** - UI framework
- **TypeScript 5.6** - Type safety
- **Vite 5.4** - Fast build tool and dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **React Router (Wouter)** - Client-side routing
- **Framer Motion** - Animation library
- **React Hook Form** - Form handling
- **Zod** - TypeScript-first schema validation

## Deployment on Vercel

### Prerequisites
- Vercel account (free at [vercel.com](https://vercel.com))
- Git repository (GitHub, GitLab, or Bitbucket)

### Steps

1. **Push to Git** (if not already done)
   ```bash
   git add .
   git commit -m "Convert to static frontend"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Select your repository
   - Vercel will auto-detect it's a Vite project
   - Click "Deploy"

3. **Automatic Deployments**
   - Every push to `main` branch will trigger a new deployment
   - Preview URLs are generated for pull requests

### Configuration

The project includes:
- `vercel.json` - Vercel deployment configuration
- `.vercelignore` - Files to exclude from deployment

No additional setup needed! Vercel automatically:
- Detects the build command: `npm run build`
- Sets output directory: `dist`
- Configures Vite framework settings

## Performance

The build outputs:
- **HTML**: ~0.47 KB (gzipped: 0.30 KB)
- **CSS**: ~11.33 KB (gzipped: 2.38 KB)
- **JavaScript**: ~272.63 KB (gzipped: 86.95 KB)

Fully optimized and ready for production!

## Features

✅ Server-side rendering ready
✅ Static site generation
✅ Fast build times with Vite
✅ Mobile responsive design
✅ Dark mode support
✅ SEO optimized
✅ Accessible components (Radix UI)
✅ Type-safe development (TypeScript)

## Development Tips

- Hot Module Replacement (HMR) works out of the box during development
- Tailwind CSS can be extended in `tailwind.config.ts`
- PostCSS configuration is in `postcss.config.js`
- Component config is in `components.json`

## License

MIT
