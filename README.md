# TechShop - E-Commerce Shop Page

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A modern, fully functional e-commerce shop page built with Node.js, Hono, HTML, CSS, and JavaScript.

## Features

- Responsive design that works on desktop, tablet, and mobile devices
- Product filtering by category and price range
- Product sorting options (price, rating, featured)
- Add to cart functionality with persistent storage
- Add to wishlist feature
- Shopping cart counter in navigation
- Featured products section on homepage
- Clean and modern UI with smooth animations
- Product ratings and reviews display

## Project Structure

```
.
├── server.js           # Hono server and API endpoints
├── package.json        # Project dependencies
├── public/
│   ├── index.html      # Home page
│   ├── shop.html       # Shop page with filtering
│   ├── contact.html    # Contact page
│   ├── faqs.html       # FAQs page
│   ├── message.html    # Message/thank you page
│   ├── app.js          # Home page JavaScript
│   ├── shop.js         # Shop page JavaScript with filtering
│   └── styles.css      # Global styles
└── README.md          # This file
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

## Features Overview

### Home Page
- Hero section with call-to-action
- Featured products showcase
- Navigation to shop page

### Shop Page
- Full product catalog
- Left sidebar with filters:
  - Category filter (Electronics, Accessories)
  - Price range slider
  - Sorting options (Featured, Price, Rating)
- Product cards with:
  - Product image
  - Name and category
  - Star ratings
  - Price
  - Add to cart button
  - Add to wishlist button

### Shopping Features
- Add products to cart
- Cart persists across page reloads using localStorage
- Real-time cart counter in navigation
- Toast notifications for user actions

## API Endpoints

- `GET /api/products` - Returns all available products with details

## Product Data

Each product includes:
- ID
- Name
- Price
- Image URL
- Category (electronics/accessories)
- Rating (1-5 stars)

## Technologies Used

- **Backend**: Node.js, Hono.js
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Storage**: localStorage for cart persistence
- **API**: RESTful JSON API

## Browser Compatibility

Works on all modern browsers including:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Future Enhancements

- User authentication
- Order history
- Product reviews
- Checkout process
- Payment integration
- Advanced search
- Product details page

## License

This project is licensed under the ISC License.
