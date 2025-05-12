document.addEventListener('DOMContentLoaded', function() {
  // Color selection functionality
  document.querySelectorAll('.color-select').forEach(select => {
    select.addEventListener('change', function() {
      const productCard = this.closest('.product-card');
      const image = productCard.querySelector('.product-image');
      const selectedColor = this.value;
      const selectedOption = this.options[this.selectedIndex].text;
      
      // Update the product image with fade effect
      if (image) {
        image.style.opacity = '0.5';
        setTimeout(() => {
          // Determine correct image path based on product
          if (productCard.querySelector('#product2-image')) {
            // Product 2 images
            const product2Images = {
              'white': 'https://i.ibb.co/6JyGWmbb/white.jpg',
              'black': 'https://i.ibb.co/BWJcYHN/black.jpg',
              'autumn': 'https://i.ibb.co/pr2q8gBJ/autumn.jpg',
              'army': 'https://i.ibb.co/23ybqKpk/army.jpg'
            };
            image.src = product2Images[selectedColor];
          } else {
            // Product 1 images
            const product1Images = {
              'black': 'https://i.ibb.co/7tMRmzn1/black.jpg',
              'white': 'https://i.ibb.co/6Kg0vP8/white.jpg',
              'lightgreen': 'https://i.ibb.co/mC5PTjgN/lightgreen.jpg'
            };
            image.src = product1Images[selectedColor];
          }
          
          image.alt = `${productCard.querySelector('h3').textContent} - ${selectedOption}`;
          image.style.opacity = '1';
        }, 200);
      }
    });
  });

  // Buy button functionality (unchanged)
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
