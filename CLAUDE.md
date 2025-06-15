# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ankr DeFi Aggregator is a Next.js application that allows users to invest USDC in various DeFi protocols with different lock periods and interest rates. The application provides a modern, responsive interface for selecting investment amounts, lock periods, and viewing expected returns.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (with Turbopack)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Run type checking
npx tsc --noEmit
```

## Architecture

### Project Structure
- `/src/app/` - Next.js App Router pages
- `/src/components/` - React components
  - `/ui/` - Reusable UI components (Button, Card, etc.)
  - `defi-aggregator.tsx` - Main DeFi interface component
- `/src/lib/` - Utility functions and helpers
- `/src/types/` - TypeScript type definitions
- `/src/hooks/` - Custom React hooks (when needed)

### Key Components
- **DefiAggregator**: Main component handling investment logic, protocol display, and user interactions
- **UI Components**: Built with Tailwind CSS and Radix UI primitives for consistent styling
- **Type System**: Comprehensive TypeScript types for protocols, investments, and lock periods

### Styling
- Uses Tailwind CSS for styling with a dark theme
- Glassmorphism effects with backdrop blur
- Responsive design with mobile-first approach
- Custom gradient backgrounds and hover states

### State Management
- React hooks for local state management
- Real-time calculation of returns based on input changes
- Loading states for transaction simulation

## Key Features
- USDC investment amount input
- Lock period selection (30, 90, 180, 365 days) with corresponding APY rates
- Real-time return calculations
- Protocol overview with APY, TVL, and risk levels
- Security indicators and trust-building elements
- Responsive design for desktop and mobile