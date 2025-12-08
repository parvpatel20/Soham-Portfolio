# Soham Patel - Professional Accountant Portfolio

## Overview
A modern, professional portfolio website for Soham Patel, a certified accountant based in Surat, India. The website showcases accounting services, professional background, client testimonials, and provides a contact form for consultations.

## Project Architecture

### Frontend (React + TypeScript + Vite)
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with Shadcn UI components
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state
- **Forms**: React Hook Form with Zod validation

### Backend (Express.js)
- **Server**: Express.js with TypeScript
- **Storage**: In-memory storage (MemStorage)
- **Validation**: Zod schemas for request validation

### File Structure
```
client/
├── src/
│   ├── components/
│   │   ├── ui/              # Shadcn UI components
│   │   ├── navigation.tsx   # Sticky navigation with scroll behavior
│   │   ├── hero-section.tsx # Hero with CTA buttons
│   │   ├── services-section.tsx # 6 service cards
│   │   ├── about-section.tsx    # Professional bio
│   │   ├── value-props-section.tsx # Why choose us
│   │   ├── testimonials-section.tsx # Client reviews
│   │   ├── cta-section.tsx  # Call to action
│   │   ├── contact-section.tsx # Contact form
│   │   ├── footer.tsx       # Site footer
│   │   └── theme-toggle.tsx # Dark/light mode toggle
│   ├── pages/
│   │   ├── home.tsx         # Main portfolio page
│   │   └── not-found.tsx    # 404 page
│   ├── App.tsx              # Root component with routing
│   └── index.css            # Global styles with CSS variables
server/
├── routes.ts                # API endpoints
├── storage.ts               # In-memory storage implementation
└── index.ts                 # Server entry point
shared/
└── schema.ts                # Shared TypeScript types and Zod schemas
```

## Features
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **Smooth Scroll Navigation**: Click navigation links to smoothly scroll to sections
- **Contact Form**: Validated form with backend API integration
- **Professional Sections**: Hero, Services (6), About, Why Us, Testimonials, CTA, Contact, Footer

## Services Offered
1. Accounting & Bookkeeping
2. GST Returns
3. Income Tax Filing
4. Business Registration (GST/Udhyam Aadhar)
5. Loan Assistance
6. PAN Card Services

## Contact Information
- **Phone**: 9016980875
- **Email**: psoham1056@gmail.com
- **Address**: 209, Blue Ski Commerce Square, Bamroli Road, Surat - 395002

## API Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact submissions (admin)

## Design System
- **Primary Color**: Green (HSL 158 64% 32%)
- **Typography**: Inter font family
- **Spacing**: Consistent padding/gap using Tailwind units
- **Components**: Built with Shadcn UI primitives

## Development
```bash
npm run dev    # Start development server
npm run build  # Build for production
```

## User Preferences
- Professional, modern design aesthetic
- Green color scheme aligned with S.V. Patel Accounting branding
- Image placeholders for profile photos (to be replaced by user)
