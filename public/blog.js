// Blog data
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Wireless Technology',
    category: 'news',
    date: '2026-01-08',
    author: 'John Smith',
    image: 'https://via.placeholder.com/600x400?text=Wireless+Technology',
    excerpt: 'Explore the latest advancements in wireless technology and what they mean for consumers.',
    content: 'Wireless technology continues to evolve at a rapid pace. From 5G networks to Wi-Fi 7, the future of connectivity is more exciting than ever. In this article, we explore the major advancements and their implications for the tech industry and consumers worldwide.\n\nKey topics covered:\n- Evolution of 5G technology\n- Introduction to Wi-Fi 7\n- Bluetooth advancements\n- Impact on IoT devices\n- Future predictions'
  },
  {
    id: 2,
    title: 'How to Choose the Right Headphones',
    category: 'tips',
    date: '2026-01-07',
    author: 'Sarah Johnson',
    image: 'https://via.placeholder.com/600x400?text=Headphones+Guide',
    excerpt: 'A comprehensive guide to selecting headphones that match your needs and lifestyle.',
    content: 'Choosing the right headphones can be overwhelming with so many options available. This guide walks you through the essential factors to consider when making your purchase.\n\nWhat to consider:\n- Sound quality and frequency response\n- Comfort and fit\n- Battery life (for wireless models)\n- Noise cancellation features\n- Price vs. value\n- Brand reputation and warranty\n- Use case considerations (gym, travel, professional)'
  },
  {
    id: 3,
    title: 'Smartphone Camera Tips and Tricks',
    category: 'tutorial',
    date: '2026-01-06',
    author: 'Mike Chen',
    image: 'https://via.placeholder.com/600x400?text=Camera+Tips',
    excerpt: 'Master your smartphone camera with these essential tips and tricks for better photos.',
    content: 'Your smartphone has a powerful camera. Let\'s unlock its full potential with these practical tips.\n\nEssential techniques:\n- Understanding exposure and lighting\n- Composition rules (rule of thirds, leading lines)\n- Using portrait mode effectively\n- Night mode photography\n- Video recording best practices\n- Editing photos on your device\n- Common mistakes to avoid'
  },
  {
    id: 4,
    title: 'Latest USB-C Cable Innovations',
    category: 'news',
    date: '2026-01-05',
    author: 'Emma Wilson',
    image: 'https://via.placeholder.com/600x400?text=USB-C+Innovation',
    excerpt: 'Discover the newest innovations in USB-C technology and high-speed data transfer.',
    content: 'USB-C continues to revolutionize how we connect and charge devices. This article covers the latest innovations and what to expect.\n\nLatest developments:\n- Ultra High-Speed USB (80 Gbps)\n- Power delivery improvements\n- Backward compatibility features\n- Environmental benefits\n- Industry adoption rates\n- Future standards'
  },
  {
    id: 5,
    title: 'Portable Charger Comparison 2026',
    category: 'review',
    date: '2026-01-04',
    author: 'David Lee',
    image: 'https://via.placeholder.com/600x400?text=Portable+Chargers',
    excerpt: 'In-depth comparison of the best portable chargers available in 2026.',
    content: 'We tested and compared the top portable chargers on the market. Here\'s our detailed findings.\n\nChargers reviewed:\n- Battery capacity and power output\n- Charging speed comparison\n- Build quality and durability\n- Portability and weight\n- Value for money\n- Best picks for different needs\n- Pricing analysis'
  },
  {
    id: 6,
    title: 'Setting Up Your Smart Home',
    category: 'tutorial',
    date: '2026-01-03',
    author: 'Lisa Anderson',
    image: 'https://via.placeholder.com/600x400?text=Smart+Home',
    excerpt: 'A beginner\'s guide to setting up a smart home ecosystem efficiently.',
    content: 'Transform your home with smart devices. This guide covers everything from choosing devices to setting up automation.\n\nGuide sections:\n- Selecting a smart hub\n- Choosing compatible devices\n- Network setup requirements\n- Security considerations\n- Common automation routines\n- Troubleshooting tips\n- Cost-benefit analysis'
  },
  {
    id: 7,
    title: 'Best Tech Accessories for 2026',
    category: 'review',
    date: '2026-01-02',
    author: 'Robert Martinez',
    image: 'https://via.placeholder.com/600x400?text=Tech+Accessories',
    excerpt: 'Our curated list of the best tech accessories to enhance your digital lifestyle.',
    content: 'We\'ve tested and reviewed the best tech accessories that offer excellent value and functionality.\n\nFeatured accessories:\n- Phone stands and mounts\n- Cable organizers\n- Protective cases\n- Screen protectors\n- Cable bundles\n- Cleaning kits\n- Storage solutions'
  },
  {
    id: 8,
    title: 'Understanding Tech Warranties',
    category: 'tips',
    date: '2026-01-01',
    author: 'Jennifer Brown',
    image: 'https://via.placeholder.com/600x400?text=Warranties',
    excerpt: 'Everything you need to know about tech warranties and how to make the most of them.',
    content: 'Tech warranties can be confusing. This guide simplifies warranty concepts and helps you understand your coverage.\n\nWarranty basics:\n- Types of warranties (manufacturer, extended, accidental damage)\n- Coverage details\n- Duration and limitations\n- How to file a claim\n- Extended warranty worth evaluation\n- Protection plans\n- Common exclusions'
  }
];

let currentCategory = 'all';
let currentSearchTerm = '';

// Initialize blog page
document.addEventListener('DOMContentLoaded', function() {
  loadBlogPosts();
  loadRecentPosts();
  setupEventListeners();
  updateCartCount();
});

function loadBlogPosts() {
  const blogGrid = document.getElementById('blog-grid');
  blogGrid.innerHTML = '';

  let filteredPosts = blogPosts.filter(post => {
    const categoryMatch = currentCategory === 'all' || post.category === currentCategory;
    const searchMatch = post.title.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
                       post.excerpt.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
                       post.author.toLowerCase().includes(currentSearchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  if (filteredPosts.length === 0) {
    blogGrid.innerHTML = '<p class="no-posts">No posts found matching your criteria.</p>';
    return;
  }

  filteredPosts.forEach(post => {
    const article = document.createElement('article');
    article.className = 'blog-card';
    article.innerHTML = `
      <div class="blog-image">
        <img src="${post.image}" alt="${post.title}">
        <span class="blog-category-badge">${post.category}</span>
      </div>
      <div class="blog-content">
        <h3 class="blog-title">${post.title}</h3>
        <div class="blog-meta">
          <span class="blog-author">By ${post.author}</span>
          <span class="blog-date">${formatDate(post.date)}</span>
        </div>
        <p class="blog-excerpt">${post.excerpt}</p>
        <button class="btn btn-secondary read-more" data-id="${post.id}">Read More</button>
      </div>
    `;
    blogGrid.appendChild(article);
  });

  // Add event listeners to read more buttons
  document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function() {
      openBlogPost(parseInt(this.getAttribute('data-id')));
    });
  });
}

function loadRecentPosts() {
  const recentPostsContainer = document.getElementById('recent-posts');
  recentPostsContainer.innerHTML = '';

  // Get the 5 most recent posts
  const recent = blogPosts.slice(0, 5);

  recent.forEach(post => {
    const link = document.createElement('a');
    link.href = '#';
    link.className = 'recent-post-link';
    link.innerHTML = `
      <div class="recent-post-title">${post.title}</div>
      <div class="recent-post-date">${formatDate(post.date)}</div>
    `;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openBlogPost(post.id);
    });
    recentPostsContainer.appendChild(link);
  });
}

function setupEventListeners() {
  // Category filter buttons
  document.querySelectorAll('.category-filter').forEach(button => {
    button.addEventListener('click', function() {
      document.querySelectorAll('.category-filter').forEach(btn => {
        btn.classList.remove('active');
      });
      this.classList.add('active');
      currentCategory = this.getAttribute('data-category');
      loadBlogPosts();
    });
  });

  // Search functionality
  const searchInput = document.getElementById('search-input');
  let searchTimeout;
  searchInput.addEventListener('input', function() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      currentSearchTerm = this.value;
      loadBlogPosts();
    }, 300);
  });

  // Modal close button
  const modalCloseBtn = document.querySelector('.blog-modal-close');
  const modal = document.getElementById('blog-modal');
  
  modalCloseBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}

function openBlogPost(postId) {
  const post = blogPosts.find(p => p.id === postId);
  if (!post) return;

  const modal = document.getElementById('blog-modal');
  const postDetail = document.getElementById('blog-post-detail');

  postDetail.innerHTML = `
    <img src="${post.image}" alt="${post.title}" class="blog-detail-image">
    <div class="blog-detail-header">
      <h1>${post.title}</h1>
      <div class="blog-detail-meta">
        <span class="blog-detail-author">By ${post.author}</span>
        <span class="blog-detail-date">${formatDate(post.date)}</span>
        <span class="blog-category-badge">${post.category}</span>
      </div>
    </div>
    <div class="blog-detail-body">
      ${post.content.split('\n').map(paragraph => {
        if (paragraph.trim()) {
          return `<p>${paragraph}</p>`;
        }
        return '';
      }).join('')}
    </div>
    <div class="blog-detail-footer">
      <p><strong>Share this article:</strong></p>
      <div class="share-buttons">
        <button class="share-btn" onclick="sharePost('${post.title}')">Share</button>
      </div>
    </div>
  `;

  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

function sharePost(title) {
  if (navigator.share) {
    navigator.share({
      title: title,
      text: 'Check out this article on TechShop Blog',
      url: window.location.href
    });
  } else {
    alert('Share functionality is not supported in your browser.');
  }
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
  document.querySelector('.cart-count').textContent = cartCount;
}
