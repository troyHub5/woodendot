const swiper1 = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  dynamicBullets: true,
  slidesPerView: 3,
  spaceBetween: 3,

  // If we need pagination
  pagination: {
    el: '.pagination1',
  },

    
});

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  dynamicBullets: true,

  // If we need pagination
  pagination: {
    el: '.pagination2',
  },

    
});

