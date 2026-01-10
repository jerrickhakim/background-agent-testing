import { Hono } from 'hono';
import { serve } from 'hono/node-server';
import { serveStatic } from 'hono/middleware';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = new Hono();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use('/*', serveStatic({ root: './public' }));

// Routes
app.get('/', (c) => {
  const html = fs.readFileSync(path.join(__dirname, 'public/index.html'), 'utf-8');
  return c.html(html);
});

app.get('/faqs', (c) => {
  const html = fs.readFileSync(path.join(__dirname, 'public/faqs.html'), 'utf-8');
  return c.html(html);
});

app.get('/contact', (c) => {
  const html = fs.readFileSync(path.join(__dirname, 'public/contact.html'), 'utf-8');
  return c.html(html);
});

app.get('/shop', (c) => {
  const html = fs.readFileSync(path.join(__dirname, 'public/shop.html'), 'utf-8');
  return c.html(html);
});

app.get('/message', (c) => {
  const html = fs.readFileSync(path.join(__dirname, 'public/message.html'), 'utf-8');
  return c.html(html);
});

app.get('/skateboarding', (c) => {
  const html = fs.readFileSync(path.join(__dirname, 'public/skateboarding.html'), 'utf-8');
  return c.html(html);
});

// API endpoint for products
app.get('/api/products', (c) => {
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
  return c.json(products);
});

// Start server
serve({
  fetch: app.fetch,
  port: PORT,
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`);
});
