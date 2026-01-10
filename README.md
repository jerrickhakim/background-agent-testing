# TechShop - Modern E-Commerce Platform

A sleek, feature-rich e-commerce platform for tech enthusiasts, built with a modern tech stack combining Hono backend with vanilla JavaScript frontend.

## What is TechShop?

TechShop is a full-featured online marketplace where customers can browse, filter, and purchase tech products with an intuitive interface and smooth user experience. Perfect for selling electronics and accessories.

## Quick Start

Get TechShop running in seconds:

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Key Features

Product Discovery & Shopping
- Browse a curated collection of tech products
- Advanced filtering by category (Electronics, Accessories)
- Price range filtering with interactive slider
- Multiple sorting options (Featured, Price, Rating)
- Real-time product ratings and reviews

Smart Shopping Experience
- Add items to cart with one click
- Persistent cart using browser storage
- Wishlist functionality for saving favorites
- Live shopping cart counter in navigation
- Toast notifications for user actions

Responsive Design
- Seamless experience across desktop, tablet, and mobile
- Touch-friendly interface
- Optimized performance
- Modern animations and transitions

## Core Pages

Home (/)
Display a welcoming hero section, featured product showcase, and navigation to the shop.

Shop (/shop)
Full product catalog with advanced filtering sidebar, product grid with sorting options.

FAQs (/faqs)
Comprehensive FAQ section covering payments, shipping, returns, warranties, and support.

Contact (/contact)
Customer contact form and business information.

Message (/message)
Message confirmation page.

## Technical Architecture

Backend Stack
- **Runtime**: Node.js
- **Framework**: Hono - A lightweight, ultrafast web framework
- **API**: RESTful JSON endpoints
- **Static Files**: Express-style middleware for public assets

Frontend Stack
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations
- **JavaScript**: Vanilla ES6+ for interactivity
- **Storage**: Browser localStorage for cart persistence

## API Reference

Get All Products
```
GET /api/products
```

Returns a JSON array of all available products with the following structure:
```json
{
  "id": 1,
  "name": "Product Name",
  "price": 99.99,
  "image": "https://...",
  "category": "electronics|accessories",
  "rating": 4.5
}
```

## Project Layout

```
techshop/
├── server.js              # Hono server & API setup
├── package.json           # Dependencies & scripts
├── public/
│   ├── index.html         # Home page
│   ├── shop.html          # Shop page with filtering
│   ├── faqs.html          # FAQ section
│   ├── contact.html       # Contact page
│   ├── message.html       # Message confirmation
│   ├── app.js             # Home page logic
│   ├── shop.js            # Shop filtering & cart
│   └── styles.css         # Global styling
└── README.md              # This file
```

## Product Catalog

The store comes pre-loaded with 8 sample products:
- Wireless Headphones
- USB-C Cables
- Phone Cases
- Portable Chargers
- Screen Protectors
- Bluetooth Speakers
- Phone Stands
- Wireless Chargers

Each product includes pricing, ratings, category tags, and product images.

## Features in Detail

Smart Filtering
- Filter by category (Electronics or Accessories)
- Adjust price range dynamically
- Instant result updates

Advanced Sorting
- Featured products first
- Sort by price (low to high)
- Sort by customer rating

Cart Management
- Add/remove items easily
- Cart persists across sessions
- Real-time quantity tracking
- Item total calculations

Wishlist Feature
- Save favorite products
- Quick access to saved items
- Add to cart directly from wishlist

## Browser Support

TechShop works on all modern browsers:
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari & Chrome

## System Requirements

- Node.js 14.0.0 or higher
- Modern web browser
- 10MB free disk space

## What's Next?

TechShop is ready for expansion. Potential additions include:
- User accounts & authentication
- Order history and tracking
- Product review system
- Detailed product pages
- Checkout & payment processing
- Advanced search capabilities
- Email notifications
- Admin dashboard

## Development

To develop TechShop locally:
1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Edit files in `/public` for frontend changes
5. Edit `server.js` for backend changes

Server hot-reloads on file changes.

## License

ISC

## Support & Questions

For issues, questions, or contributions, please contact the development team.
