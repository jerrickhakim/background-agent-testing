let cart = [];

// DOM Elements
const cartCount = document.querySelector('.cart-count');
const featuredProducts = document.getElementById('featured-products');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  loadFeaturedProducts();
});

// Fetch and display featured products
async function loadFeaturedProducts() {
  try {
    const response = await fetch('/api/products');
    if (!response.ok) throw new Error('Failed to fetch products');
    const allProducts = await response.json();
    
    // Display first 4 products as featured
    const featured = allProducts.slice(0, 4);
    
    featured.forEach(product => {
      const productCard = createProductCard(product);
      featuredProducts.appendChild(productCard);
    });
  } catch (error) {
    console.error('Error loading featured products:', error);
    featuredProducts.innerHTML = '<p>Failed to load featured products. Please try again later.</p>';
  }
}

// Create a product card element
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  
  const ratingStars = '★'.repeat(Math.floor(product.rating)) + 
                      (product.rating % 1 >= 0.5 ? '☆' : '');

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="product-image">
    <div class="product-info">
      <p class="product-category">${product.category}</p>
      <h3 class="product-name">${product.name}</h3>
      <div class="product-rating">${ratingStars} ${product.rating}</div>
      <div class="product-price">$${product.price.toFixed(2)}</div>
      <div class="product-actions">
        <button class="btn-add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        <button class="btn-wishlist" onclick="addToWishlist(${product.id})">♥</button>
      </div>
    </div>
  `;
  
  return card;
}

// Add product to cart
async function addToCart(productId) {
  try {
    const response = await fetch('/api/products');
    const allProducts = await response.json();
    const product = allProducts.find(p => p.id === productId);
    
    if (product) {
      const existingItem = cart.find(item => item.id === productId);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      saveCart();
      updateCartCount();
      showNotification(`${product.name} added to cart!`);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
    showNotification('Failed to add product to cart');
  }
}

// Add to wishlist
function addToWishlist(productId) {
  showNotification('Added to wishlist!');
}

// Show notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #10b981;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 5px;
    z-index: 1000;
    animation: slideIn 0.3s ease-in-out;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Cart management
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
  const saved = localStorage.getItem('cart');
  if (saved) {
    cart = JSON.parse(saved);
  }
  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = count;
}
