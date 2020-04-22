// import Swiper from 'swiper';

var swiper2 = new Swiper('.swiper-reviews', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-reviews-next',
    prevEl: '.swiper-reviews-prev',
  },
  pagination: {
    el: '.swiper-pagination-reviews',
    clickable: true,
  },
  breakpoints: {
    767: {
      autoHeight: true,
    }
  }
});


//home
var swiper3 = new Swiper('.swiper-home', {
  slidesPerView: 1,
  // loop: true,
  navigation: {
    nextEl: '.swiper-home-next',
    prevEl: '.swiper-home-prev',
  },
  // pagination: {
  //   el: '.swiper-pagination-reviews',
  //   clickable: true,
  // },
  // breakpoints: {
  //   767: {
  //     autoHeight: true,
  //   }
  // }
});
