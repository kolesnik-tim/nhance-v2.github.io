
//small_business
if($(window).width() <= 767) {
  $('.small-business__feature__mobile__block').on('click', function(event) {
    event.preventDefault();
    if($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.small-business__feature__items').removeClass('active');
    } else{
      $(this).addClass('active');
      $('.small-business__feature__items').addClass('active');
    }
  });
  $('.small-business__feature__items li').on('click', function() {
    let strong = $(this).find('strong').text();
    let b = $(this).find('b').text();
    $('.small-business__feature__mobile__block strong').text(strong);
    $('.small-business__feature__mobile__block b').text(b);
    $('.small-business__feature__mobile__block').removeClass('active');
    $('.small-business__feature__items').removeClass('active');
  });
}
$('.small-business__feature__items').on('click', 'li:not(.active)', function() {
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
  $(this).closest('.small-business__feature').find('.img-block').removeClass('active').eq($(this).index()).addClass('active');
});
