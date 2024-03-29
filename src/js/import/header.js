if($('div').hasClass('baner-info')) {
  $('.out').css({'padding-top': $('.baner-info').innerHeight()});
  $(window).resize(function() {
    $('.out').css({'padding-top': $('.baner-info').innerHeight()});
  });
} 
if($('div').hasClass('pulsating-background-container')) {
  $('.out').addClass('dx-card-header');
}

//sledeDown
$('.menu__content .menu__item').on('click', function() {
  if($(this).hasClass('active')) {
    $(this).siblings('.menu__dropdown').slideUp();
    $(this).removeClass('active');
  } else{
    $('.menu__content .menu__item').removeClass('active');
    $('.menu__content .menu__item').siblings('.menu__dropdown').slideUp();
    $(this).siblings('.menu__dropdown').slideDown();
    $(this).addClass('active');
  }
});

if($('div').hasClass('fullpage-wrapper')) {
  
}else{
  //header;
  var mywindow = $(window);
  var mypos = mywindow.scrollTop();
  var up = false;
  var newscroll;
  // var banerInfo = $('.baner-info').innerHeight();
  if($('div').hasClass('landing')) {
    mywindow.scroll(function() {
      if(mywindow.scrollTop() > 50) {
        $('.header').addClass('active');
        newscroll = mywindow.scrollTop();
        if (newscroll > mypos && !up) {
          $('.header').stop().removeClass('scroll');
          $('.slider__header').css({'top': 0});
          up = !up;
        } else if(newscroll < mypos && up) {
          $('.header').stop().addClass('scroll');
          $('.slider__header').css({'top': $('.header').innerHeight()});
          up = !up;
        }
        mypos = newscroll;
      } else {
        $('.header').removeClass('active');
      }
    });
  } else{
    $('.header').css({'top': 0});
    mywindow.scroll(function() {
      if(mywindow.scrollTop() > 50) {
        $('.header').addClass('active');
        newscroll = mywindow.scrollTop();
        if (newscroll > mypos && !up) {
          $('.header').stop().css({'top': '-200px'});
          $('.slider__header').css({'top': 0});
          up = !up;
        } else if(newscroll < mypos && up) {
          $('.header').stop().css({'top': 0});
          $('.slider__header').css({'top': $('.header').innerHeight()});
          up = !up;
        }
        mypos = newscroll;
      } else {
        $('.header').removeClass('active');
      }
    });
  }
}
//dropdown
$('.header__nav li').hover(function() {
  $(this).toggleClass('active');
});

$('.header__nav li').hover(function() {
  clearTimeout($.data(this,'timer'));
  $('ul',this).stop(true,true).fadeIn();
}, function() {
  $.data(this,'timer', setTimeout($.proxy(function() {
    $('ul',this).stop(true,true).fadeOut();
  }, this), 100));
});


//open mobile menu
$('.menu-open').on('click', function() {
  $('.menu').addClass('active');
  $('.menu-bg').fadeIn();
});
//close mobile menu
$('.menu-bg').on('click', function() {
  $('.menu').removeClass('active');
  $(this).fadeOut();
});
