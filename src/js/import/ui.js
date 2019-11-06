import '../lib/sticky.js';
import modal from 'jquery-modal';

//pop-up
$('[rel="modal:open"]').on('click', function(event) {
  $(this).modal({
    fadeDuration: 200
  });
  return false;
});

//sledeDown (pricing)
$('.pricing__questions__block strong').on('click', function() {
  if($(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).next('.pricing__questions__block__text').slideUp();
  } else {
    $(this).addClass('active');
    $(this).next('.pricing__questions__block__text').slideDown();
  }
});
//sledeDown (pricing) mobile
$('.pricing__tariff__block__mobile-btn').on('click', function(event) {
  event.preventDefault();
  if($(this).hasClass('active')) {
    $(this).removeClass('active').find('span').text('View details');
    $(this).siblings('.pricing__tariff__block__mobile').slideUp();
  } else{
    $(this).addClass('active').find('span').text('Hide details');
    $(this).siblings('.pricing__tariff__block__mobile').slideDown();
  }
});



//customer-stories sticky
if($(window).width() >= 767) {
  $('.customer-stories__aside').stick_in_parent({
    offset_top: 60,
    offset_bottom: 60,
  });
}



//cases
$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
  $(this).addClass('active').siblings().removeClass('active')
    .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});
var tab = window.location.hash;
tab = tab.replace('#', '');
$('.cases .tabs__caption').find('li').removeClass();
$('.cases .tabs__block .tabs__content').removeClass('active');
$('.cases .tabs__caption li').eq(tab).addClass('active');
$('.cases .tabs__block .tabs__content').eq(tab).addClass('active');
$('body').on('click', '.header__nav__dropdown a, .footer__nav__block a', function(event) {
  setTimeout(function() {
    var tab = window.location.hash;
    tab = tab.replace('#', '');
    $('.cases .tabs__caption').find('li').removeClass();
    $('.cases .tabs__block .tabs__content').removeClass('active');
    $('.cases .tabs__caption li').eq(tab).addClass('active');
    $('.cases .tabs__block .tabs__content').eq(tab).addClass('active');
  }, 300);
  var top = $('.cases__specific .tabs').offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});








//footer
if($(window).width() < 768) {
  $('.footer__nav__block h3').on('click', function() {
    if($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next('ul').slideUp();
    } else{
      $('.footer__nav__block h3').removeClass('active').next('ul').slideUp();
      $(this).addClass('active');
      $(this).next('ul').slideDown();
    }
  });
}





