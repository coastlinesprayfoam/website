# Coastline Spray Foam Solutions - Static Website

A professional, mobile-first static website for Coastline Spray Foam Solutions, a Central Florida spray foam insulation contractor.

## Features

- **Pure Static HTML/CSS/JS** - No frameworks or build processes required
- **Mobile-First Responsive Design** - Optimized for all devices
- **SEO Optimized** - Complete meta tags, structured data, and semantic HTML
- **Fast Loading** - Vector graphics, optimized CSS, and minimal JavaScript
- **Professional Design** - Clean, modern interface focused on conversions
- **Phone-First CTAs** - All actions direct users to call for quotes

## Website Structure

```
├── index.html          # Homepage with hero section and services preview
├── services.html       # Detailed services page
├── assets/
│   ├── style.css      # All styling (mobile-first responsive)
│   └── script.js      # Interactive functionality
├── package.json       # Build configuration for Replit deployment
├── scripts/           # Build automation scripts
└── README.md          # This file
```

## Local Development

Use any static file server to run locally:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000

# Visit http://localhost:8000
```

## Deployment

This website can be deployed on any static hosting service:

- **Netlify** - Drag and drop the files
- **Vercel** - Connect to GitHub repository
- **GitHub Pages** - Push to gh-pages branch
- **AWS S3** - Upload files to S3 bucket with static hosting
- **Firebase Hosting** - Deploy with Firebase CLI
- **Any web server** - Upload files to public_html directory

## Content Areas

### Homepage (index.html)
- Hero section with value proposition
- Benefits of spray foam insulation
- Services preview with 3 main categories
- Customer testimonials
- Clear call-to-action sections

### Services Page (services.html)
- Detailed residential insulation services
- Commercial insulation solutions
- Specialized attic insulation
- Feature lists and benefits for each service type

## SEO Features

- Complete meta tags including Open Graph and Twitter Cards
- Structured data (JSON-LD) for local business
- Semantic HTML with proper heading hierarchy
- Optimized for "spray foam insulation Central Florida" keywords
- Mobile-friendly and fast loading for Core Web Vitals

## Contact Information

All CTAs direct users to call: **(321) 652-7465**

- **Service Area**: Central Florida (Cocoa, Titusville, Melbourne)
- **Email**: info@coastlinesprayfoam.com
- **Services**: Residential & Commercial Spray Foam Insulation

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement ensures basic functionality on older browsers

## Performance

- No external dependencies except Google Fonts
- Vector SVG graphics for crisp icons
- Optimized CSS with CSS variables
- Minimal JavaScript for enhanced UX
- Lazy loading ready (images can be easily optimized)

---

*Built as a conversion-focused static website for professional spray foam insulation services.*