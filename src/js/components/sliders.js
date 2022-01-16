const portfolioSlider = new Swiper('.portfolio-section__items', {
  slidesPerView: 3,
  spaceBetween: gap,    
  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev',  
  },
});