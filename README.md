# TechShop

![License](https://img.shields.io/badge/license-ISC-blue.svg)
![Node Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)

A modern, fully functional e-commerce shop page built with Node.js, Hono, HTML, CSS, and JavaScript. Features product browsing, filtering, shopping cart functionality, and a responsive design.

---

## Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Product Catalog** - Browse through a variety of electronics and accessories
- **Advanced Filtering** - Filter products by category and price range
- **Sorting Options** - Sort by price, rating, or featured status
- **Shopping Cart** - Add to cart with persistent storage across sessions
- **Wishlist** - Save favorite products for later
- **Real-time Updates** - Cart counter updates instantly
- **Toast Notifications** - User feedback for all actions
- **Multiple Pages** - Home, shop, FAQs, and contact pages
- **Modern UI** - Clean design with smooth animations

---

## Quick Start

### Prerequisites

- Node.js 14.0.0 or higher
- npm (comes with Node.js)

### Installation

1. Clone the repository and navigate to the project directory

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

## Project Structure

```
.
├── server.js           # Hono server with API endpoints
├── package.json        # Project dependencies and scripts
├── .gitignore          # Git ignore configuration
├── README.md           # Project documentation
├── deletion.md         # Documentation notes
└── public/
    ├── index.html      # Home page
    ├── shop.html       # Shop page with product catalog
    ├── contact.html    # Contact page
    ├── faqs.html       # Frequently asked questions
    ├── message.html    # Message confirmation page
    ├── app.js          # Home page JavaScript
    ├── shop.js         # Shop page JavaScript with filtering logic
    └── styles.css      # Global styles and responsive design
```

---

## Pages & Features

### Home Page (`/`)
- Hero section with compelling call-to-action
- Featured products showcase
- Quick navigation to shop page
- Modern, inviting layout

### Shop Page (`/shop`)
- Complete product catalog with grid layout
- Left sidebar with filtering options:
  - **Category Filter**: Electronics, Accessories
  - **Price Range**: Adjustable slider
  - **Sorting**: Featured, Price (Low-High, High-Low), Rating
- Product cards featuring:
  - High-quality product images
  - Product name and category
  - Star ratings (1-5 stars)
  - Price display
  - Add to cart button
  - Add to wishlist button

### Contact Page (`/contact`)
- Contact form for customer inquiries
- Location and contact information
- Business hours display

### FAQs Page (`/faqs`)
- Accordion-style frequently asked questions
- Comprehensive answers to common queries
- Easy navigation

### Message Page (`/message`)
- Confirmation page for form submissions
- User-friendly feedback

---

## Shopping Features

### Cart Functionality
- Add products to cart with one click
- Cart persists across page reloads using `localStorage`
- Real-time cart counter in navigation bar
- Visual feedback when items are added

### Wishlist
- Save products to wishlist for later
- Easy access to saved items
- Persistent storage

### User Experience
- Toast notifications for all actions
- Smooth animations and transitions
- Intuitive interface design
- Mobile-friendly navigation

---

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/products` | GET | Returns all available products with details |

### Product Response Format
Each product includes:
- `id` - Unique identifier
- `name` - Product name
- `price` - Product price (USD)
- `image` - Product image URL
- `category` - Product category (electronics/accessories)
- `rating` - Customer rating (1-5 stars)

---

## Technologies Used

### Backend
- **Node.js** - JavaScript runtime
- **Hono** - Fast, lightweight web framework

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **Vanilla JavaScript** - No framework dependencies

### Storage
- **localStorage** - Client-side persistence for cart and wishlist

---

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Future Enhancements

Planned features for future releases:
- User authentication and accounts
- Order history tracking
- Product reviews and ratings system
- Complete checkout process
- Payment gateway integration (Stripe, PayPal)
- Advanced search functionality
- Individual product detail pages
- Order confirmation emails
- Admin dashboard for product management
- Discount codes and promotions

---

## License

This project is licensed under the ISC License.

---

## Author

**TechShop**

For questions or support, please visit our contact page at `/contact`.

---

## Acknowledgments

- Product images courtesy of placeholder services
- Built with modern web technologies and best practices
- Inspired by leading e-commerce platforms
