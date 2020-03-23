//// Page Pricing
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
  $('.pricing__tariff__block__title span').each(function(i, elem) {
    if(i === 0) {
      $(elem).text(one);
    } else if(i === 1) {
      $(elem).text(two);
    }
  });
  
}); 




//// Page Whatsapp Landing
//currency selection
$('.whatsapp__pricing__select li').on('click', function() {
  //active class
  $('.whatsapp__pricing__select li').removeClass('active');
  $(this).addClass('active');
  //currency
  if($(this).index() === 0) {
    $('.whatsapp__pricing__block span').text('$');
  } else if($(this).index() === 1) {
    $('.whatsapp__pricing__block span').text('A$');
  } else if($(this).index() === 2) {
    $('.whatsapp__pricing__block span').text('£');
  } else if($(this).index() === 3) {
    $('.whatsapp__pricing__block span').text('₹');
  }
  //conversion
  let one = $(this).attr('data-one');
  $('.whatsapp__pricing__block strong').each(function(i, elem) {
    $(elem).text(one);
  });
  
}); 
