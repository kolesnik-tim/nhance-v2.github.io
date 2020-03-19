//currency selection
$('.pricing__select li').on('click', function() {
  //active class
  $('.pricing__select li').removeClass('active');
  $(this).addClass('active');
  //currency
  if($(this).index() === 0) {
    $('.pricing__tariff__block__title strong').text('$');
  } else if($(this).index() === 1) {
    $('.pricing__tariff__block__title strong').text('A$');
  } else if($(this).index() === 2) {
    $('.pricing__tariff__block__title strong').text('£');
  } else if($(this).index() === 3) {
    $('.pricing__tariff__block__title strong').text('₹');
  }
  //conversion
  let one = $(this).attr('data-one');
  let two = $(this).attr('data-two');
  let three = $(this).attr('data-three');
  $('.pricing__tariff__block__title span').each(function(i, elem) {
    if(i === 0) {
      $(elem).text(one);
    } else if(i === 1) {
      $(elem).text(two);
    } else if(i === 2) {
      $(elem).text(three);
    }
  });
  
}); 
