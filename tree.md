# MALABRO Frontend - File Tree Structure

## Overview
This document provides a comprehensive overview of the MALABRO frontend repository structure, built with Next.js 14, TypeScript, and Shadcn/UI components.

## Directory Tree
```
.
├── .codacy/                          # Codacy configuration and tools
│   ├── cli-config.yaml
│   ├── cli.sh
│   ├── codacy.yaml
│   ├── .gitignore
│   ├── logs/
│   │   └── codacy-cli.log
│   └── tools-configs/                # Various linting tool configurations
│       ├── analysis_options.yaml
│       ├── eslint.config.mjs
│       ├── languages-config.yaml
│       ├── lizard.yaml
│       ├── pylint.rc
│       ├── revive.toml
│       ├── ruleset.xml
│       ├── semgrep.yaml
│       └── trivy.yaml
├── components.json                   # Shadcn/UI configuration
├── .env.local                        # Environment variables
├── eslint.config.mjs                 # ESLint configuration
├── .gitignore                        # Git ignore rules
├── next.config.js                    # Next.js configuration
├── next-env.d.ts                     # Next.js TypeScript declarations
├── .nvmrc                            # Node version specification
├── package.json                      # Dependencies and scripts
├── postcss.config.mjs                # PostCSS configuration
├── public/                           # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── placeholder.svg               # Added to fix 404 errors
│   ├── vercel.svg
│   └── window.svg
├── README.md                         # Project documentation
├── ShadCN-context.md                 # Shadcn component tracking
├── src/                              # Source code
│   ├── app/                          # Next.js App Router pages
│   │   ├── about/
│   │   │   └── page.tsx              # About page
│   │   ├── account/                  # User account section
│   │   │   ├── addresses/
│   │   │   │   └── page.tsx          # Address management (static)
│   │   │   ├── layout.tsx            # Account layout with sidebar
│   │   │   ├── orders/
│   │   │   │   ├── [id]/
│   │   │   │   │   └── page.tsx      # Individual order details
│   │   │   │   └── page.tsx          # Order history (static)
│   │   │   ├── page.tsx              # Account dashboard
│   │   │   └── profile/
│   │   │       └── page.tsx          # Profile management
│   │   ├── (auth)/                   # Authentication route group
│   │   │   ├── login/
│   │   │   │   └── page.tsx          # Login page
│   │   │   └── register/
│   │   │       └── page.tsx          # Registration page
│   │   ├── checkout/                 # Checkout flow
│   │   │   ├── payment/
│   │   │   │   └── page.tsx          # Payment step (static)
│   │   │   └── shipping/
│   │   │       └── page.tsx          # Shipping step (static)
│   │   ├── contact/
│   │   │   └── page.tsx              # Contact page
│   │   ├── favicon.ico               # Site favicon
│   │   ├── globals.css               # Global styles
│   │   ├── layout.tsx                # Root layout
│   │   ├── order/
│   │   │   └── confirmed/
│   │   │       └── [id]/
│   │   │           └── page.tsx      # Order confirmation (static)
│   │   ├── page.tsx                  # Homepage
│   │   ├── privacy/
│   │   │   └── page.tsx              # Privacy policy
│   │   ├── products/                 # Product catalog
│   │   │   ├── [handle]/
│   │   │   │   ├── loading.tsx       # Product detail loading state
│   │   │   │   └── page.tsx          # Product detail page
│   │   │   └── page.tsx              # Product listing page
│   │   └── terms/
│   │       └── page.tsx              # Terms of service
│   ├── components/                   # Reusable components
│   │   ├── account/
│   │   │   └── account-sidebar-nav.tsx  # Account navigation
│   │   ├── auth/
│   │   │   ├── login-form.tsx        # Login form component
│   │   │   └── registration-form.tsx # Registration form component
│   │   ├── cart/
│   │   │   ├── cart-item.tsx         # Individual cart item
│   │   │   └── cart-sidebar.tsx      # Shopping cart sidebar
│   │   ├── layout/
│   │   │   ├── footer.tsx            # Site footer
│   │   │   ├── header.tsx            # Site header
│   │   │   ├── hero-banner.tsx       # Homepage hero (fixed)
│   │   │   └── hero-section.tsx      # Alternative hero component
│   │   ├── products/
│   │   │   ├── add-to-cart-button.tsx    # Add to cart functionality
│   │   │   ├── product-card-skeleton.tsx # Loading skeleton
│   │   │   ├── product-card.tsx          # Product card (fixed sizes prop)
│   │   │   ├── product-filters.tsx       # Product filtering
│   │   │   ├── product-grid.tsx          # Product grid layout
│   │   │   ├── product-image-gallery.tsx # Product image gallery
│   │   │   └── product-info.tsx          # Product information display
│   │   ├── providers/
│   │   │   └── query-provider.tsx    # React Query provider
│   │   └── ui/                       # Shadcn/UI components
│   │       ├── accordion.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── checkbox.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── radio-group.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── skeleton.tsx
│   │       ├── table.tsx
│   │       └── textarea.tsx
│   ├── lib/                          # Utility libraries
│   │   ├── medusa-client.ts          # Medusa.js client configuration
│   │   ├── store/
│   │   │   └── cart-store.ts         # Cart state management
│   │   └── utils.ts                  # Utility functions
│   └── types/
│       └── medusa.ts                 # TypeScript type definitions
└── tsconfig.json                     # TypeScript configuration
```

## Architecture Summary

### Framework & Technologies
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Shadcn/UI** for component library
- **React Query** for data fetching
- **Medusa.js** for e-commerce backend integration

### Key Features
1. **Static-First Development**: Many pages converted to static UI skeletons with placeholder data
2. **Responsive Design**: Mobile-first approach with Tailwind CSS
3. **Component-Based Architecture**: Reusable components organized by feature
4. **Type Safety**: Full TypeScript implementation with Medusa type definitions
5. **Modern Routing**: Next.js App Router with nested layouts

### Recent Fixes Applied
- ✅ Fixed `React.Children.only` error in `hero-banner.tsx`
- ✅ Added missing `placeholder.svg` to resolve 404 image errors
- ✅ Added `sizes` prop to product images for Next.js performance optimization

### Development Status
- **Static Pages**: Homepage, checkout flow, account pages converted to static UI
- **Dynamic Pages**: Product catalog, authentication still dynamic
- **Component Library**: Comprehensive Shadcn/UI integration
- **State Management**: Cart store and React Query setup complete

### File Statistics
- **Total Files**: 87
- **Directories**: 38
- **Pages**: 15 route pages
- **Components**: 25+ reusable components
- **UI Components**: 13 Shadcn/UI components installed

### Next Steps
- Backend integration for dynamic data
- Complete authentication flow
- Product search and filtering
- Payment processing integration
- Performance optimization
