# Soham Patel - Professional Accountant Portfolio

## Overview
A modern, professional portfolio website for Soham Patel, a certified accountant based in Surat, India. The website showcases accounting services, professional background, and provides contact information through phone, email, and WhatsApp.

## Project Architecture

### Frontend (React + TypeScript + Vite)
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with Shadcn UI components
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state

### Backend (Express.js)
- **Server**: Express.js with TypeScript
- **Storage**: In-memory storage (MemStorage)

### File Structure
```
client/
├── src/
│   ├── components/
│   │   ├── ui/              # Shadcn UI components
│   │   ├── navigation.tsx   # Sticky navigation with scroll behavior
│   │   ├── hero-section.tsx # Hero with CTA buttons (Call & WhatsApp)
│   │   ├── services-section.tsx # 6 service cards
│   │   ├── about-section.tsx    # Professional bio
│   │   ├── value-props-section.tsx # Why choose us
│   │   ├── cta-section.tsx  # Call to action (Call & WhatsApp)
│   │   ├── contact-section.tsx # Contact info (Phone, Email, WhatsApp)
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
- **Contact Methods**: Phone, Email, and WhatsApp (no contact form)
- **Professional Sections**: Hero, Services (6), About, Why Us, CTA, Contact, Footer

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
- **WhatsApp**: wa.me/919016980875
- **Address**: 209, Blue Ski Commerce Square, Bamroli Road, Surat - 395002

## Design System
- **Primary Color**: Royal Blue (HSL 220 70% 45%)
- **Accent Color**: Bright Golden (HSL 45 90% 55%)
- **Typography**: Inter font family
- **Spacing**: Consistent padding/gap using Tailwind units
- **Components**: Built with Shadcn UI primitives

## Key Stats Displayed
- 5+ Years Experience
- 24/7 Support Available

## Development
```bash
npm run dev    # Start development server
npm run build  # Build for production
```

## User Preferences
- Royal blue and golden color scheme
- No testimonials section
- No contact form - only direct contact methods (phone, email, WhatsApp)
- No inflated statistics (removed 500+ clients, 99% success rate)
- Clean service cards without arrows
- S.V. Patel logo prominently displayed in navigation
