import Swiper from 'swiper';

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



//home
var swiperBots = new Swiper('.swiper-bots', {
  slidesPerView: 1,
  spaceBetween: 15,
  // loop: true,
  navigation: {
    nextEl: '.swiper-bots-next',
    prevEl: '.swiper-bots-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    767: {
      slidesPerView: 2,
    }
  }
});



var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 'auto',
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  thumbs: {
    swiper: galleryThumbs
  }
});
