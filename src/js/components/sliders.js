const portfolioSlider = new Swiper('.portfolio-section__items', {
  watchSlidesProgress: true,
  slidesPerView: 3,
  spaceBetween: gap,    
  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev',  
  },
});

const relatedSlider = new Swiper('.related-projects__items', {
  watchSlidesProgress: true,
  slidesPerView: 3,
  spaceBetween: gap,    
  navigation: {
    nextEl: '.related-projects__next',
    prevEl: '.related-projects__prev',  
  },
});

const testimonialsSlider = new Swiper('.testimonials__items', {
  watchSlidesProgress: true,
  slidesPerView: 1,
  spaceBetween: gap, 
  loop: true,   
  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev',  
  },
});