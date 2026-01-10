// Pricing page functionality

document.addEventListener('DOMContentLoaded', () => {
  initializePricingPage();
});

function initializePricingPage() {
  const billingToggle = document.getElementById('billing-toggle');
  const planButtons = document.querySelectorAll('.btn-plan');

  // Setup billing toggle
  billingToggle.addEventListener('change', toggleBilling);

  // Setup plan buttons
  planButtons.forEach(button => {
    button.addEventListener('click', handlePlanSelection);
  });
}

function toggleBilling(event) {
  const isAnnual = event.target.checked;
  const priceElements = document.querySelectorAll('.price');
  const periodElements = document.querySelectorAll('.period');

  priceElements.forEach(priceEl => {
    const monthlyPrice = parseFloat(priceEl.dataset.monthly);
    const annualPrice = parseFloat(priceEl.dataset.annual);
    const displayPrice = isAnnual ? annualPrice : monthlyPrice;

    priceEl.textContent = displayPrice;
    
    // Add animation
    priceEl.classList.add('price-update');
    setTimeout(() => {
      priceEl.classList.remove('price-update');
    }, 300);
  });

  // Update period text
  periodElements.forEach(periodEl => {
    periodEl.textContent = isAnnual ? '/year' : '/month';
  });
}

function handlePlanSelection(event) {
  const button = event.target;
  const card = button.closest('.pricing-card');
  const planName = card.querySelector('.plan-name').textContent;

  if (button.textContent === 'Contact Sales') {
    // For enterprise, redirect to contact page
    window.location.href = '/contact';
  } else {
    // Show subscription notification
    showNotification(`Starting ${planName} plan...`);
    
    // Simulate subscription process
    button.disabled = true;
    button.textContent = 'Processing...';

    setTimeout(() => {
      button.disabled = false;
      button.textContent = button.classList.contains('btn-plan-starter') ? 'Get Started' : 
                          button.classList.contains('btn-plan-professional') ? 'Subscribe Now' : 'Contact Sales';
      showNotification(`Welcome to ${planName}! Your subscription is active.`);
    }, 1500);
  }
}

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
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  `;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-in-out';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}
