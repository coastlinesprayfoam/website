# Overview

This is a professional spray foam insulation company website built as a static HTML/CSS/JavaScript website. The application serves Coastline Spray Foam Solutions, a Central Florida-based insulation contractor, providing informational content with phone-based customer acquisition.

## Recent Changes (July 10, 2025)
- ✓ Fixed deployment configuration to remove npm build dependencies
- ✓ Simplified deployment to work with pure static hosting
- ✓ Fixed deployment error by creating Node.js project structure
- ✓ Added package.json with build scripts for Replit deployment
- ✓ Created build scripts that copy static files to dist/public directory
- ✓ Removed duplicate static directory and cleaned up project structure
- ✓ Implemented comprehensive mobile-first navigation system
- ✓ Enhanced SEO with advanced meta tags, structured data, and geo-targeting
- ✓ Added full-screen mobile menu with smooth animations
- ✓ Improved accessibility with skip links and ARIA labels
- ✓ Optimized responsive design for mobile, tablet, and desktop breakpoints
- ✓ Enhanced site performance with mobile-first CSS approach
- ✓ Removed Python server dependency - now purely static HTML/CSS/JS
- ✓ Cleaned up project structure for maximum hosting compatibility
- ✓ Removed low-quality placeholder images from services page
- ✓ Replaced unprofessional icons (smiley face) with professional alternatives
- ✓ Removed blog links from navigation menu and footer
- ✓ Updated CSS to handle layout without placeholder images
- ✓ Removed numbers from Process section steps
- ✓ Removed "Call Now" button from navigation
- ✓ Replaced "Gallery" menu item with "Contact" linking to phone number
- ✓ Changed hero CTA buttons to "Get Free Consultation" and "View Our Services"
- ✓ Improved overall layout with better spacing and centering
- ✓ Enhanced section headers for improved visual hierarchy
- ✓ Added CSS styling for process steps without numbers
- ✓ Improved hero section with min-height and centering
- ✓ Centered buttons on services page with matching visual styling
- ✓ Enhanced button hover effects with consistent animations
- ✓ Removed About page from navigation menu and footer links
- ✓ Simplified navigation to focus on core business functions

# User Preferences

Preferred communication style: Simple, everyday language.
Website design: No contact forms anywhere on the website - all CTAs should be phone call links.

# System Architecture

## Static Website Architecture
- **Technology Stack**: Pure HTML5, CSS3, and JavaScript (ES6+)
- **No Framework Dependencies**: Zero build process or external libraries
- **Responsive Design**: Mobile-first CSS with CSS Grid and Flexbox
- **Performance**: Vector SVG graphics and optimized assets
- **SEO**: Complete meta tags, structured data, and semantic HTML
- **Hosting**: Compatible with any static hosting service or simple web server

# Key Components

## Website Pages
- **Homepage** (`index.html`): Hero section, benefits, services preview, testimonials
- **Services Page** (`services.html`): Detailed service descriptions and features
- **Navigation**: Responsive mobile-first navigation with sticky positioning
- **CTAs**: All call-to-action buttons direct to phone calls (no forms)
- **SEO**: Complete meta tags, Open Graph, Twitter Cards, structured data

## Website Structure
- **Root Directory**: All files ready for static hosting
  - `index.html` - Professional homepage with hero section and services preview
  - `services.html` - Detailed services page with multiple service categories
  - `assets/style.css` - Mobile-first responsive styling with CSS variables
  - `assets/script.js` - Interactive JavaScript for navigation and UX
  - `package.json` - Build configuration for Replit deployment
  - `scripts/` - Build automation scripts
  - No contact forms - all CTAs converted to phone call links

# Content Management

- **Static Content**: Hard-coded HTML content optimized for spray foam insulation keywords
- **Professional Copy**: Service descriptions, benefits, and testimonials
- **SEO Content**: Structured data and meta tags for local business search
- **Call-to-Action**: Phone number (321) 652-7465 prominently featured

# External Dependencies

## Core Technologies
- **HTML5**: Semantic markup for accessibility and SEO
- **CSS3**: Custom properties (variables), Grid, Flexbox for responsive design
- **JavaScript (ES6+)**: Minimal interactive functionality (mobile menu)
- **Google Fonts**: Inter font family for professional typography
- **SVG Graphics**: Vector icons for crisp display at all resolutions

## Development Tools
- **Any Static Server**: Python, Node.js, PHP, or any web server
- **Any Text Editor**: No build process required
- **Browser DevTools**: Standard web development debugging

# Deployment Strategy

## Replit Deployment
- **Build Process**: Node.js scripts copy static files to dist/public directory
- **Build Commands**: npm run build-static, npm run build, npm run generate-static
- **Deploy Target**: Static deployment with dist/public as public directory
- **Development Server**: Any static server (Python, Node.js, PHP, etc.)

## Alternative Static Hosting
- **Universal Compatibility**: Root files work on any web server or static hosting service
- **Simple Deployment**: Upload root directory files to any hosting provider
- **No Build Process**: Files are ready to deploy as-is from root directory

## Hosting Options
- **Netlify/Vercel**: Drag-and-drop deployment
- **GitHub Pages**: Push to repository
- **AWS S3**: Static website hosting
- **Traditional Web Hosting**: Upload to public_html directory
- **Replit Deployments**: One-click deployment

## Performance Features
- **Mobile-First Design**: Optimized for mobile devices
- **Vector Graphics**: SVG icons scale perfectly
- **Minimal Dependencies**: Only Google Fonts external resource
- **Semantic HTML**: Accessible and SEO-friendly markup
- **Optimized CSS**: Clean, maintainable styling with CSS variables

The website is designed for maximum compatibility and ease of deployment, requiring only a basic web server to function perfectly.