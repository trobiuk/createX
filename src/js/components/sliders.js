const portfolioSlider = new Swiper('.portfolio-section__items', {
  watchSlidesProgress: true,
  slidesPerView: 3,
  spaceBetween: gap,    
  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev',  
  },
});

const testimonialsSlider = new Swiper('.testimonials__items', {
  slidesPerView: 1,
  spaceBetween: gap, 
  loop: true,   
  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev',  
  },
});