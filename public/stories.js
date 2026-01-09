let stories = [];

// DOM Elements
const cartCount = document.querySelector('.cart-count');
const storiesGrid = document.getElementById('stories-grid');
const storyForm = document.getElementById('story-form');
const formMessage = document.getElementById('form-message');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  loadStories();
  setupStoryForm();
});

// Fetch and display stories
async function loadStories() {
  try {
    const response = await fetch('/api/stories');
    if (!response.ok) throw new Error('Failed to fetch stories');
    stories = await response.json();
    
    stories.forEach(story => {
      const storyCard = createStoryCard(story);
      storiesGrid.appendChild(storyCard);
    });
  } catch (error) {
    console.error('Error loading stories:', error);
    storiesGrid.innerHTML = '<p>Failed to load stories. Please try again later.</p>';
  }
}

// Create a story card element
function createStoryCard(story) {
  const card = document.createElement('div');
  card.className = 'story-card';
  
  const ratingStars = '★'.repeat(Math.floor(story.rating)) + 
                      (story.rating % 1 >= 0.5 ? '☆' : '');

  card.innerHTML = `
    <div class="story-header">
      <img src="${story.avatar}" alt="${story.author}" class="story-avatar">
      <div class="story-author-info">
        <h3 class="story-author">${story.author}</h3>
        <p class="story-date">${story.date}</p>
      </div>
    </div>
    <div class="story-rating">${ratingStars} ${story.rating}</div>
    <h4 class="story-title">${story.title}</h4>
    <p class="story-content">${story.content}</p>
    <p class="story-product"><strong>Product:</strong> ${story.product}</p>
  `;

  return card;
}

// Setup story form submission
function setupStoryForm() {
  storyForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const text = document.getElementById('story-text').value;
    
    try {
      const response = await fetch('/api/stories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, text })
      });
      
      if (!response.ok) throw new Error('Failed to submit story');
      
      formMessage.style.color = '#10b981';
      formMessage.textContent = 'Thank you for sharing your story!';
      storyForm.reset();
      
      setTimeout(() => {
        formMessage.textContent = '';
      }, 3000);
    } catch (error) {
      console.error('Error submitting story:', error);
      formMessage.style.color = '#ef4444';
      formMessage.textContent = 'Failed to submit story. Please try again.';
    }
  });
}

// Cart management
function loadCart() {
  const saved = localStorage.getItem('cart');
  if (saved) {
    const cart = JSON.parse(saved);
    updateCartCount(cart);
  }
}

function updateCartCount(cart) {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = count;
}
