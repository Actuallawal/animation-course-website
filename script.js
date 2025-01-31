document.addEventListener('DOMContentLoaded', function () {
  // Smooth Scroll for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });

  // FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      // Close all other FAQ items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle the clicked FAQ item
      item.classList.toggle('active');
    });
  });

  // Testimonial Hover Animation
  const testimonialBoxes = document.querySelectorAll('.testimonial');

  testimonialBoxes.forEach((box) => {
    box.addEventListener('mouseenter', () => {
      box.style.transform = 'scale(1.05)';
      box.style.transition = 'transform 0.3s ease';
    });

    box.addEventListener('mouseleave', () => {
      box.style.transform = 'scale(1)';
    });
  });

  // Pricing Plan Hover Animation
  const pricingPlans = document.querySelectorAll('.plan');

  pricingPlans.forEach((plan) => {
    plan.addEventListener('mouseenter', () => {
      plan.style.transform = 'scale(1.05)';
      plan.style.transition = 'transform 0.3s ease';
    });

    plan.addEventListener('mouseleave', () => {
      plan.style.transform = 'scale(1)';
    });
  });

  // Scroll to Top Button
  const scrollToTopBtn = document.querySelector('.scroll-to-top');

  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });

    // Show/hide the scroll-to-top button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    });
  }

  // Toggle Mobile Navigation
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
    });

    // Close mobile nav when a link is clicked
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
      });
    });
  }
});