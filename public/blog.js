// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Consumer Tech",
    category: "gadgets",
    author: "Sarah Chen",
    date: "2026-01-08",
    image: "https://via.placeholder.com/600x400?text=AI+Tech",
    excerpt: "Explore how artificial intelligence is revolutionizing consumer technology and what we can expect in the coming years.",
    content: "Artificial intelligence has become a cornerstone of modern consumer technology. From smart assistants to predictive algorithms, AI is transforming how we interact with our devices. In this comprehensive guide, we explore the latest developments and future trends in AI technology."
  },
  {
    id: 2,
    title: "5G Network: What You Need to Know",
    category: "software",
    author: "Michael Rodriguez",
    date: "2026-01-06",
    image: "https://via.placeholder.com/600x400?text=5G+Network",
    excerpt: "A complete guide to 5G technology, how it works, and its implications for mobile devices and connectivity.",
    content: "5G networks promise unprecedented speeds and connectivity. This article breaks down the technology behind 5G, its advantages over 4G, and how it will reshape mobile computing. We also discuss the latest devices supporting 5G technology."
  },
  {
    id: 3,
    title: "Best Laptops of 2026",
    category: "reviews",
    author: "Emma Williams",
    date: "2026-01-05",
    image: "https://via.placeholder.com/600x400?text=Best+Laptops",
    excerpt: "Our comprehensive review of the top laptops available in 2026, covering performance, design, and value.",
    content: "We've tested and reviewed the latest laptops from leading manufacturers. This guide includes detailed comparisons of performance, battery life, design, and price. Whether you're looking for gaming, work, or creative tasks, we have recommendations for every budget."
  },
  {
    id: 4,
    title: "Smartphone Security: Protecting Your Data",
    category: "tips",
    author: "James Patterson",
    date: "2026-01-03",
    image: "https://via.placeholder.com/600x400?text=Phone+Security",
    excerpt: "Essential tips and tricks to keep your smartphone and personal data secure from threats.",
    content: "In an increasingly digital world, smartphone security is paramount. Learn about the latest security features in modern phones, how to enable two-factor authentication, recognize phishing attempts, and protect your personal information."
  },
  {
    id: 5,
    title: "Cloud Storage Solutions Compared",
    category: "software",
    author: "David Park",
    date: "2026-01-02",
    image: "https://via.placeholder.com/600x400?text=Cloud+Storage",
    excerpt: "Comparing the top cloud storage services: features, pricing, and security considerations.",
    content: "Cloud storage has become essential for modern users. We compare the major providers including their storage capacity, pricing plans, security features, and ease of use. Find the right solution for your needs."
  },
  {
    id: 6,
    title: "Wireless Earbuds: Ultimate Guide",
    category: "gadgets",
    author: "Lisa Anderson",
    date: "2025-12-31",
    image: "https://via.placeholder.com/600x400?text=Wireless+Earbuds",
    excerpt: "A detailed guide to choosing the best wireless earbuds for your lifestyle and preferences.",
    content: "Wireless earbuds offer convenience and portability. In this guide, we explore factors like sound quality, battery life, noise cancellation, comfort, and price. We've tested leading brands and compiled recommendations for different use cases."
  },
  {
    id: 7,
    title: "How to Optimize Your PC for Gaming",
    category: "tips",
    author: "Alex Morgan",
    date: "2025-12-28",
    image: "https://via.placeholder.com/600x400?text=Gaming+PC",
    excerpt: "Pro tips to maximize your gaming PC performance and get the best frame rates.",
    content: "Want to improve your gaming experience? This comprehensive guide covers hardware upgrades, driver updates, software optimization, cooling solutions, and gaming settings to help you achieve better performance."
  },
  {
    id: 8,
    title: "Smart Home Technology Trends",
    category: "gadgets",
    author: "Nina Patel",
    date: "2025-12-25",
    image: "https://via.placeholder.com/600x400?text=Smart+Home",
    excerpt: "Discover the latest trends in smart home technology and how to build your connected home.",
    content: "Smart home technology continues to evolve rapidly. From intelligent lighting and thermostats to security systems and voice assistants, learn about the latest innovations and how to create a seamlessly integrated smart home."
  }
];

let currentCategory = 'all';
let currentSearchQuery = '';

// DOM Elements
const blogGrid = document.getElementById('blog-grid');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const recentPostsList = document.getElementById('recent-posts');
const noResults = document.getElementById('no-results');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadBlogPosts();
  loadRecentPosts();
  setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
  searchBtn.addEventListener('click', handleSearch);
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  });
}

// Load and display blog posts
function loadBlogPosts() {
  const filteredPosts = filterPosts();
  
  if (filteredPosts.length === 0) {
    blogGrid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }
  
  noResults.style.display = 'none';
  blogGrid.innerHTML = '';
  
  filteredPosts.forEach(post => {
    const postCard = createBlogCard(post);
    blogGrid.appendChild(postCard);
  });
}

// Create blog card element
function createBlogCard(post) {
  const card = document.createElement('article');
  card.className = 'blog-card';
  
  const formattedDate = formatDate(post.date);
  
  card.innerHTML = `
    <div class="blog-card-image">
      <img src="${post.image}" alt="${post.title}">
      <span class="blog-category-badge">${capitalizeCategory(post.category)}</span>
    </div>
    <div class="blog-card-content">
      <p class="blog-meta">By ${post.author} • ${formattedDate}</p>
      <h3 class="blog-title">${post.title}</h3>
      <p class="blog-excerpt">${post.excerpt}</p>
      <a href="#" class="read-more-btn" onclick="readFullArticle(${post.id})">Read More →</a>
    </div>
  `;
  
  return card;
}

// Filter posts based on category and search
function filterPosts() {
  return blogPosts.filter(post => {
    const matchesCategory = currentCategory === 'all' || post.category === currentCategory;
    const matchesSearch = currentSearchQuery === '' || 
      post.title.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(currentSearchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
}

// Filter by category
function filterByCategory(category) {
  currentCategory = category;
  currentSearchQuery = '';
  searchInput.value = '';
  loadBlogPosts();
}

// Handle search
function handleSearch() {
  currentSearchQuery = searchInput.value.trim();
  currentCategory = 'all';
  loadBlogPosts();
}

// Load recent posts in sidebar
function loadRecentPosts() {
  const recent = blogPosts.slice(0, 5);
  
  recentPostsList.innerHTML = '';
  recent.forEach(post => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="#" onclick="readFullArticle(${post.id})">${post.title}</a>`;
    recentPostsList.appendChild(li);
  });
}

// Read full article
function readFullArticle(postId) {
  const post = blogPosts.find(p => p.id === postId);
  if (post) {
    showArticleModal(post);
  }
}

// Show article in modal
function showArticleModal(post) {
  const modal = document.createElement('div');
  modal.className = 'article-modal';
  modal.id = 'article-modal';
  
  const formattedDate = formatDate(post.date);
  
  modal.innerHTML = `
    <div class="article-modal-content">
      <button class="modal-close" onclick="closeArticleModal()">×</button>
      <img src="${post.image}" alt="${post.title}" class="article-modal-image">
      <div class="article-modal-body">
        <p class="article-meta">By ${post.author} • ${formattedDate} • ${capitalizeCategory(post.category)}</p>
        <h1>${post.title}</h1>
        <div class="article-content">
          <p>${post.content}</p>
          <p>This article covers important aspects of the topic. We recommend exploring related articles for a comprehensive understanding. Visit our shop to find products related to this topic.</p>
        </div>
        <div class="article-actions">
          <a href="/shop" class="btn btn-primary">Browse Related Products</a>
          <button class="btn btn-secondary" onclick="closeArticleModal()">Close</button>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  setTimeout(() => {
    modal.classList.add('active');
  }, 10);
}

// Close article modal
function closeArticleModal() {
  const modal = document.getElementById('article-modal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => {
      modal.remove();
    }, 300);
  }
}

// Format date
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

// Capitalize category
function capitalizeCategory(category) {
  return category.charAt(0).toUpperCase() + category.slice(1);
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
  const modal = document.getElementById('article-modal');
  if (modal && e.target === modal) {
    closeArticleModal();
  }
});
