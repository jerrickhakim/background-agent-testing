// Pricing component functionality

const billingToggle = document.getElementById('billing-toggle');

// Toggle between monthly and annual billing
function toggleBillingPeriod() {
  const isAnnual = billingToggle.checked;
  const priceElements = document.querySelectorAll('.amount');

  priceElements.forEach(element => {
    const monthlyPrice = parseFloat(element.dataset.monthly);
    const annualPrice = parseFloat(element.dataset.annual);
    
    if (isAnnual) {
      element.textContent = annualPrice;
    } else {
      element.textContent = monthlyPrice;
    }
  });

  // Update period text
  const periodElements = document.querySelectorAll('.period');
  periodElements.forEach(element => {
    element.textContent = isAnnual ? '/year' : '/month';
  });
}

// Handle plan selection
function selectPlan(planName) {
  const billingType = billingToggle.checked ? 'annual' : 'monthly';
  
  // Store selected plan in session/local storage
  localStorage.setItem('selectedPlan', JSON.stringify({
    plan: planName,
    billingType: billingType,
    date: new Date().toISOString()
  }));

  // Show confirmation message
  showNotification(`${planName} plan selected! Redirecting to checkout...`);
  
  // Simulate checkout redirect (in a real app, this would go to payment gateway)
  setTimeout(() => {
    window.location.href = '/checkout';
  }, 2000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Pricing page initialization
  const savedPlan = localStorage.getItem('selectedPlan');
  if (savedPlan) {
    console.log('Previously selected plan:', JSON.parse(savedPlan));
  }
});
