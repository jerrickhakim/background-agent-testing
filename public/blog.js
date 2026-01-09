// Blog data
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Wireless Technology',
    excerpt: 'Discover how 5G and Wi-Fi 6E are revolutionizing connectivity in 2026.',
    content: 'Wireless technology has evolved dramatically over the past decade. From 4G to 5G and now Wi-Fi 6E, we are experiencing unprecedented speeds and reliability. This article explores the latest advancements and what they mean for consumers.',
    author: 'Sarah Johnson',
    date: '2026-01-08',
    category: 'news',
    image: 'https://via.placeholder.com/600x400?text=Wireless+Tech',
    readTime: 5
  },
  {
    id: 2,
    title: 'Top 5 Budget Headphones of 2026',
    excerpt: 'Best affordable audio equipment without breaking the bank.',
    content: 'Finding quality headphones on a budget can be challenging. We have reviewed and tested numerous options to bring you the best budget-friendly headphones available. In this comprehensive review, we compare features, sound quality, and durability.',
    author: 'Mike Chen',
    date: '2026-01-07',
    category: 'review',
    image: 'https://via.placeholder.com/600x400?text=Budget+Headphones',
    readTime: 8
  },
  {
    id: 3,
    title: 'How to Extend Your Phone Battery Life',
    excerpt: 'Practical tips to maximize your device battery performance.',
    content: 'Battery anxiety is real. Learn proven strategies to extend your phone battery life, from adjusting display settings to managing background apps. We cover both Android and iOS devices with step-by-step instructions.',
    author: 'Emily Rodriguez',
    date: '2026-01-06',
    category: 'tips',
    image: 'https://via.placeholder.com/600x400?text=Battery+Life',
    readTime: 6
  },
  {
    id: 4,
    title: 'Getting Started with USB-C: A Complete Guide',
    excerpt: 'Everything you need to know about USB-C technology and devices.',
    content: 'USB-C has become the standard connector for modern devices. This tutorial walks you through the basics of USB-C, compatibility, cable types, and troubleshooting common issues. Perfect for beginners and tech enthusiasts.',
    author: 'David Park',
    date: '2026-01-05',
    category: 'tutorial',
    image: 'https://via.placeholder.com/600x400?text=USB+C+Guide',
    readTime: 10
  },
  {
    id: 5,
    title: 'Latest iPhone 16 Features Unveiled',
    excerpt: 'Breaking news on Apple latest flagship smartphone release.',
    content: 'Apple has announced the iPhone 16 with groundbreaking features including improved camera technology, faster processors, and enhanced AI capabilities. Read about all the new features and upgrades.',
    author: 'Lisa Wang',
    date: '2026-01-04',
    category: 'news',
    image: 'https://via.placeholder.com/600x400?text=iPhone+16',
    readTime: 7
  },
  {
    id: 6,
    title: 'Samsung Galaxy Z Fold 4 Review',
    excerpt: 'In-depth review of the latest foldable smartphone technology.',
    content: 'The Samsung Galaxy Z Fold 4 represents the pinnacle of foldable smartphone technology. We tested it extensively and provide a detailed review of its performance, design, and value proposition.',
    author: 'James Lee',
    date: '2026-01-03',
    category: 'review',
    image: 'https://via.placeholder.com/600x400?text=Galaxy+Z+Fold',
    readTime: 9
  },
  {
    id: 7,
    title: 'Protecting Your Device from Malware',
    excerpt: 'Essential security tips to keep your gadgets safe from threats.',
    content: 'Cybersecurity is more important than ever. Learn essential security practices including using VPNs, recognizing phishing attempts, keeping software updated, and using strong passwords.',
    author: 'Tom Brown',
    date: '2026-01-02',
    category: 'tips',
    image: 'https://via.placeholder.com/600x400?text=Device+Security',
    readTime: 7
  },
  {
    id: 8,
    title: 'Building Your First Smart Home Setup',
    excerpt: 'Step-by-step guide to creating an automated smart home.',
    content: 'Creating a smart home doesn\'t have to be complicated or expensive. This tutorial guides you through selecting compatible devices, setting up automation rules, and integrating different platforms seamlessly.',
    author: 'Nina Patel',
    date: '2026-01-01',
    category: 'tutorial',
    image: 'https://via.placeholder.com/600x400?text=Smart+Home',
    readTime: 12
  }
];

let cart = [];
const cartCount = document.querySelector('.cart-count');
let currentPage = 1;
const postsPerPage = 3;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  displayBlogPosts();
  displayPopularPosts();
  displayCategories();
  setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
  const searchInput = document.getElementById('search-input');
  const categoryFilter = document.getElementById('category-filter');
  const newsletterForm = document.getElementById('newsletter-form');

  searchInput.addEventListener('input', () => {
    currentPage = 1;
    displayBlogPosts();
  });

  categoryFilter.addEventListener('change', () => {
    currentPage = 1;
    displayBlogPosts();
  });

  newsletterForm.addEventListener('submit', handleNewsletterSubmit);
}

// Display blog posts with pagination
function displayBlogPosts() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const selectedCategory = document.getElementById('category-filter').value;

  let filtered = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm) || 
                         post.excerpt.toLowerCase().includes(searchTerm);
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filtered.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const postsToDisplay = filtered.slice(startIndex, endIndex);

  const blogPostsContainer = document.getElementById('blog-posts');
  
  if (postsToDisplay.length === 0) {
    blogPostsContainer.innerHTML = '<div class="no-posts"><p>No articles found. Try adjusting your search or filters.</p></div>';
  } else {
    blogPostsContainer.innerHTML = postsToDisplay.map(post => createBlogPostCard(post)).join('');
  }

  displayPagination(totalPages);
}

// Create a blog post card
function createBlogPostCard(post) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return `
    <article class="blog-post-card">
      <div class="post-image">
        <img src="${post.image}" alt="${post.title}">
        <span class="post-category">${post.category}</span>
      </div>
      <div class="post-content">
        <h2 class="post-title">${post.title}</h2>
        <div class="post-meta">
          <span class="post-author">By ${post.author}</span>
          <span class="post-date">${formattedDate}</span>
          <span class="post-read-time">${post.readTime} min read</span>
        </div>
        <p class="post-excerpt">${post.excerpt}</p>
        <a href="#post-${post.id}" class="btn btn-secondary read-more">Read More</a>
      </div>
    </article>
  `;
}

// Display pagination
function displayPagination(totalPages) {
  const paginationContainer = document.getElementById('pagination');
  
  if (totalPages <= 1) {
    paginationContainer.innerHTML = '';
    return;
  }

  let paginationHTML = '<div class="pagination-controls">';

  if (currentPage > 1) {
    paginationHTML += `<button onclick="goToPage(${currentPage - 1})" class="pagination-btn">Previous</button>`;
  }

  for (let i = 1; i <= totalPages; i++) {
    if (i === currentPage) {
      paginationHTML += `<button class="pagination-btn active">${i}</button>`;
    } else {
      paginationHTML += `<button onclick="goToPage(${i})" class="pagination-btn">${i}</button>`;
    }
  }

  if (currentPage < totalPages) {
    paginationHTML += `<button onclick="goToPage(${currentPage + 1})" class="pagination-btn">Next</button>`;
  }

  paginationHTML += '</div>';
  paginationContainer.innerHTML = paginationHTML;
}

// Go to specific page
function goToPage(pageNum) {
  currentPage = pageNum;
  displayBlogPosts();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Display popular posts
function displayPopularPosts() {
  const popularPosts = blogPosts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  const popularPostsContainer = document.getElementById('popular-posts');
  
  popularPostsContainer.innerHTML = popularPosts.map(post => `
    <div class="popular-post-item">
      <img src="${post.image}" alt="${post.title}" class="popular-post-image">
      <div class="popular-post-info">
        <h4>${post.title}</h4>
        <p>${new Date(post.date).toLocaleDateString()}</p>
      </div>
    </div>
  `).join('');
}

// Display categories
function displayCategories() {
  const categories = ['news', 'review', 'tutorial', 'tips'];
  const categoryLabels = {
    'news': 'News',
    'review': 'Reviews',
    'tutorial': 'Tutorials',
    'tips': 'Tips & Tricks'
  };

  const categoriesContainer = document.getElementById('categories-list');
  
  categoriesContainer.innerHTML = categories.map(cat => `
    <div class="category-item">
      <input type="radio" id="cat-${cat}" name="category" value="${cat}">
      <label for="cat-${cat}">${categoryLabels[cat]}</label>
    </div>
  `).join('');
}

// Handle newsletter subscription
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  
  // Simulate subscription
  alert(`Thank you for subscribing with ${email}!`);
  e.target.reset();
}

// Load cart from localStorage
function loadCart() {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartCount();
  }
}

// Update cart count
function updateCartCount() {
  cartCount.textContent = cart.length;
}
