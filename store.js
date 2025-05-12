document.addEventListener('DOMContentLoaded', function() {
  // Color selection functionality for all products
  document.querySelectorAll('.color-select').forEach(select => {
    select.addEventListener('change', function() {
      const productCard = this.closest('.product-card');
      const image = productCard.querySelector('.product-image');
      const productName = productCard.querySelector('h3').textContent;
      const selectedColor = this.value;
      const selectedOption = this.options[this.selectedIndex].text;
      
      // Determine which image folder to use based on product
      const imageFolder = productCard.querySelector('.product-image').src.includes('images2/') 
        ? 'images2/' 
        : 'images/';
      
      // Update the product image with fade effect
      if (image) {
        image.style.opacity = '0.5';
        setTimeout(() => {
          image.src = `${imageFolder}${selectedColor}.jpg`;
          image.alt = `${productName} - ${selectedOption}`;
          image.style.opacity = '1';
        }, 200);
      }
    });
  });

  // Buy button functionality
  document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', function() {
      const productCard = this.closest('.product-card');
      const productName = productCard.querySelector('h3').textContent;
      const selectedColor = productCard.querySelector('.color-select').value;
      
      // Show loading state
      const originalText = this.innerHTML;
      this.innerHTML = 'Processing...';
      this.disabled = true;
      
      // Simulate processing
      setTimeout(() => {
        console.log(`Order placed: ${productName} in ${selectedColor}`);
        this.innerHTML = originalText;
        this.disabled = false;
      }, 800);
    });
  });
});