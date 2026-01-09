let allProducts = [];
let filteredProducts = [];
let cart = [];

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const priceRange = document.getElementById('price-range');
const priceValue = document.getElementById('price-value');
const sortSelect = document.getElementById('sort-select');
const categoryCheckboxes = document.querySelectorAll('input[name="category"]');
const cartCount = document.querySelector('.cart-count');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadProducts();
  loadCart();
  setupEventListeners();
});

// Fetch products from API
async function loadProducts() {
  try {
    const response = await fetch('/api/products');
    if (!response.ok) throw new Error('Failed to fetch products');
    allProducts = await response.json();
    filteredProducts = [...allProducts];
    renderProducts();
  } catch (error) {
    console.error('Error loading products:', error);
    productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem;">Failed to load products. Please try again later.</p>';
  }
}

// Render products to the grid
function renderProducts() {
  productsGrid.innerHTML = '';

  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem;">No products found.</p>';
    return;
  }

  filteredProducts.forEach(product => {
    const productCard = createProductCard(product);
    productsGrid.appendChild(productCard);
  });
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

// Setup event listeners
function setupEventListeners() {
  priceRange.addEventListener('input', (e) => {
    priceValue.textContent = e.target.value;
    applyFilters();
  });

  sortSelect.addEventListener('change', applyFilters);

  categoryCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', applyFilters);
  });
}

// Apply all filters
function applyFilters() {
  const maxPrice = parseInt(priceRange.value);
  const selectedCategories = Array.from(categoryCheckboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  // Filter by price and category
  filteredProducts = allProducts.filter(product => {
    const priceMatch = product.price <= maxPrice;
    const categoryMatch = selectedCategories.includes('all') || 
                         selectedCategories.includes(product.category);
    return priceMatch && categoryMatch;
  });

  // Apply sorting
  const sortValue = sortSelect.value;
  switch(sortValue) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  renderProducts();
}

// Add product to cart
function addToCart(productId) {
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
}

// Add product to wishlist
function addToWishlist(productId) {
  const product = allProducts.find(p => p.id === productId);
  if (product) {
    showNotification(`${product.name} added to wishlist!`);
  }
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

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);

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
