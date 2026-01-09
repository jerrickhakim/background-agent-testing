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

app.get('/shop', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'shop.html'));
});

app.get('/stories', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'stories.html'));
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

// API endpoint for stories
app.get('/api/stories', (req, res) => {
  const stories = [
    { 
      id: 1, 
      author: 'Sarah Johnson', 
      title: 'Changed My Workout Routine', 
      content: 'The wireless headphones from TechShop have completely transformed my workouts. The sound quality is incredible and they stay in my ears perfectly during runs.',
      product: 'Wireless Headphones',
      date: 'Jan 5, 2026',
      avatar: 'https://via.placeholder.com/60x60?text=SJ',
      rating: 5
    },
    {
      id: 2,
      author: 'Mike Chen',
      title: 'Best Value for Money',
      content: 'I was skeptical at first, but the Bluetooth speaker exceeded all my expectations. Perfect for my small apartment and the battery lasts forever!',
      product: 'Bluetooth Speaker',
      date: 'Jan 3, 2026',
      avatar: 'https://via.placeholder.com/60x60?text=MC',
      rating: 4.5
    },
    {
      id: 3,
      author: 'Emily Rodriguez',
      title: 'Productivity Game Changer',
      content: 'The portable charger is now my travel essential. I never worry about my phone dying during long flights or road trips anymore.',
      product: 'Portable Charger',
      date: 'Dec 28, 2025',
      avatar: 'https://via.placeholder.com/60x60?text=ER',
      rating: 5
    },
    {
      id: 4,
      author: 'James Williams',
      title: 'Durable and Reliable',
      content: 'Bought the phone case 6 months ago and it still looks brand new. Great protection without the bulk. Highly recommend!',
      product: 'Phone Case',
      date: 'Dec 20, 2025',
      avatar: 'https://via.placeholder.com/60x60?text=JW',
      rating: 4
    }
  ];
  res.json(stories);
});

// POST endpoint to submit new stories
app.post('/api/stories', (req, res) => {
  const { name, email, text } = req.body;
  
  if (!name || !email || !text) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  const newStory = {
    id: Date.now(),
    author: name,
    title: text.substring(0, 50) + '...',
    content: text,
    product: 'TechShop Product',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
    avatar: 'https://via.placeholder.com/60x60?text=' + encodeURIComponent(name.split(' ').map(n => n[0]).join('')),
    rating: 5
  };
  
  res.status(201).json(newStory);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
