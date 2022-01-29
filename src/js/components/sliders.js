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

const workImages = document.querySelector('.work-images-slider');

if (workImages) {
  const workSlider = new Swiper('.work-images-nav', {
  watchSlidesProgress: true,
  spaceBetween: 20,
  slidesPerView: 10,
  freeMode: true,
  watchSlidesProgress: true,
});

const workSlidesNav = new Swiper(workImages, {
  watchSlidesProgress: true,
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: {
    nextEl: ".work-images__next",
    prevEl: ".work-images__prev",
  },
  thumbs: {
    swiper: workSlider,
  },
});
}

