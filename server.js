const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/faqs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'faqs.html'));
});

});

// API endpoint for products
app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Wireless Headphones', price: 79.99, image: 'https://via.placeholder.com/300x300?text=Headphones', category: 'electronics', rating: 4.5 },
    { id: 2, name: 'USB-C Cable', price: 12.99, image: 'https://via.placeholder.com/300x300?text=USB+Cable', category: 'accessories', rating: 4.8 },
    { id: 3, name: 'Phone Case', price: 19.99, image: 'https://via.placeholder.com/300x300?text=Phone+Case', category: 'accessories', rating: 4.3 },
    { id: 4, name: 'Portable Charger', price: 34.99, image: 'https://via.placeholder.com/300x300?text=Charger', category: 'electronics', rating: 4.6 },
    { id: 5, name: 'Screen Protector', price: 9.99, image: 'https://via.placeholder.com/300x300?text=Screen+Protector', category: 'accessories', rating: 4.4 },
    { id: 6, name: 'Bluetooth Speaker', price: 49.99, image: 'https://via.placeholder.com/300x300?text=Speaker', category: 'electronics', rating: 4.7 },
    { id: 7, name: 'Phone Stand', price: 14.99, image: 'https://via.placeholder.com/300x300?text=Phone+Stand', category: 'accessories', rating: 4.2 },
    { id: 8, name: 'Wireless Charger', price: 29.99, image: 'https://via.placeholder.com/300x300?text=Wireless+Charger', category: 'electronics', rating: 4.9 }
  ];
  res.json(products);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
