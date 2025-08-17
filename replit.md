# ProxiD - Talent Exchange Platform

## Overview

ProxiD is a modern web application that serves as a talent exchange platform connecting startups, interns, freelancers, and HR professionals. The platform features a Tinder-style swipe interface for talent matching, video resumes, and AI-powered recommendations. Built with a full-stack architecture using React/TypeScript frontend, Express.js backend, and PostgreSQL database with Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development
- **Styling**: TailwindCSS with shadcn/ui component library for consistent design
- **Animation**: Framer Motion for smooth animations and page transitions
- **State Management**: TanStack Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives for accessible components

### Backend Architecture
- **Framework**: Express.js with TypeScript in ESM format
- **Storage Layer**: Modular storage interface supporting both in-memory and database implementations
- **Development Server**: Custom Vite integration for hot module replacement
- **API Structure**: RESTful API with `/api` prefix routing
- **Error Handling**: Centralized error middleware with proper status code handling

### Data Layer
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Type-safe schema definitions with Zod validation
- **Migrations**: Drizzle Kit for database migrations and schema evolution
- **Connection**: Neon Database serverless connection for production scalability

### Core Domain Models
- **Users**: Authentication and role-based access (founder, intern, hr, freelancer)
- **Profiles**: Extended user information with skills, bio, hourly rates, and video resumes
- **Swipe Cards**: Gamified talent discovery with position-based ordering

### Authentication & Session Management
- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple
- **Cookie Management**: Secure session cookies with proper expiration
- **Role-Based Access**: Multi-role support for different user types

### UI/UX Design System
- **Design Philosophy**: Bold, startup-driven aesthetic with neural blue and quantum purple branding
- **Typography**: Inter font family for modern, clean typography
- **Color Palette**: CSS custom properties for consistent theming
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: WCAG-compliant components using Radix UI primitives

### Performance Optimizations
- **Code Splitting**: Vite's automatic code splitting for optimized bundle sizes
- **Asset Optimization**: PostCSS with Autoprefixer for cross-browser compatibility
- **Query Caching**: TanStack Query for intelligent data caching and background updates
- **Image Optimization**: External image sources with proper sizing and lazy loading

## External Dependencies

### Core Infrastructure
- **Database**: Neon Database (PostgreSQL) for production data persistence
- **Session Store**: PostgreSQL-backed session management
- **Image Hosting**: Unsplash for placeholder profile images and hero imagery

### Development Tools
- **Build System**: Vite for fast development and optimized production builds
- **Package Manager**: npm with lockfile for deterministic builds
- **Type Safety**: TypeScript with strict configuration across frontend and backend
- **Database Toolkit**: Drizzle Kit for schema management and migrations

### Third-Party Libraries
- **UI Framework**: shadcn/ui component system built on Radix UI
- **Animation Library**: Framer Motion for interactive animations
- **Form Handling**: React Hook Form with Zod resolvers for validation
- **Date Utilities**: date-fns for date manipulation and formatting
- **Styling**: TailwindCSS with class-variance-authority for component variants

### Replit Integration
- **Development Environment**: Replit-specific plugins for runtime error handling
- **Cartographer**: Replit's code navigation tool for development
- **Hot Reloading**: Custom Vite integration for seamless development experience