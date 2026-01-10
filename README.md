# TechShop - E-Commerce Platform

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-green)
![License](https://img.shields.io/badge/license-ISC-orange)

A modern, fully functional e-commerce platform built with Hono, Node.js, HTML, CSS, and vanilla JavaScript. TechShop provides a seamless shopping experience with product filtering, cart management, and responsive design.

---

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
- Contact form with message submission
- FAQ page for common customer questions

---

## Project Structure

```
techshop/
├── server.js              # Hono server and API endpoints
├── package.json           # Project dependencies and scripts
├── public/
│   ├── index.html         # Home page with hero section
│   ├── shop.html          # Shop page with filtering and sorting
│   ├── contact.html       # Contact form page
│   ├── faqs.html          # Frequently asked questions page
│   ├── message.html       # Message confirmation page
│   ├── app.js             # Home page JavaScript functionality
│   ├── shop.js            # Shop page JavaScript with filtering logic
│   └── styles.css         # Global styles and responsive design
└── README.md              # Project documentation
```

---

## Installation

### Prerequisites

- Node.js >= 14.0.0
- npm (comes with Node.js)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/techshop.git
cd techshop
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

---

## Pages & Features

### Home Page (`/`)
- Hero section with call-to-action
- Featured products showcase
- Smooth navigation to other sections
- Responsive layout with modern design

### Shop Page (`/shop`)
- Full product catalog with 8 products
- **Left sidebar filters:**
  - Category filter (Electronics, Accessories)
  - Price range slider
- **Sorting options:**
  - Featured (default)
  - Price (Low to High, High to Low)
  - Rating (High to Low)
- **Product cards include:**
  - Product image
  - Name and category badge
  - Star ratings
  - Price display
  - Add to cart button
  - Add to wishlist button

### Contact Page (`/contact`)
- Contact information display
- Functional contact form
- Message submission with feedback
- Form validation

### FAQ Page (`/faqs`)
- Accordion-style FAQ sections
- Common customer questions
- Clean, organized layout
- Expandable/collapsible answers

### Message Page (`/message`)
- Confirmation page after form submission
- Thank you message
- Navigation options

---

## Shopping Features

- Add products to cart with one click
- Cart persists across page reloads using localStorage
- Real-time cart counter in navigation bar
- Toast notifications for user feedback
- Wishlist functionality for saving favorites
- Dynamic product filtering and sorting

---

## API Endpoints

### Products
```
GET /api/products
```
Returns all available products with details including:
- ID
- Name
- Price
- Image URL
- Category (electronics/accessories)
- Rating (1-5 stars)

### Static Routes
```
GET /          - Home page
GET /shop      - Shop page
GET /contact   - Contact page
GET /faqs      - FAQ page
GET /message   - Message confirmation page
```

---

## Technologies Used

- **Backend Framework:** Hono.js 4.0.0
- **Runtime:** Node.js
- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Storage:** localStorage for cart and wishlist persistence
- **API:** RESTful JSON API
- **Server:** Built-in Hono server adapter

---

## Product Catalog

The shop features 8 products across 2 categories:

### Electronics
- Wireless Headphones - $79.99
- Portable Charger - $34.99
- Bluetooth Speaker - $49.99
- Wireless Charger - $29.99

### Accessories
- USB-C Cable - $12.99
- Phone Case - $19.99
- Screen Protector - $9.99
- Phone Stand - $14.99

---

## Browser Compatibility

Works on all modern browsers including:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Development Scripts

```bash
npm run dev    # Start the development server
npm install    # Install project dependencies
```

---

## Future Enhancements

- User authentication and profiles
- Order history and tracking
- Product reviews and ratings system
- Full checkout process
- Payment integration (Stripe, PayPal)
- Advanced search functionality
- Individual product detail pages
- Admin dashboard for product management
- Email notifications
- Social media sharing
- Discount codes and promotions

---

## License

This project is licensed under the ISC License.

---

## Author

TechShop Team

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## Support

For support, email support@techshop.com or open an issue in the repository.
