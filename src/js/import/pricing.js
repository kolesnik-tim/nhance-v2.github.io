//// Page Pricing
//currency selection
$('.pricing__select li').on('click', function() {
  //active class
  $('.pricing__select li').removeClass('active');
  $(this).addClass('active');
  
  if($(this).attr('data') === 'usd') {
    $('.usd').css({'display': 'inline'});
    $('.inr').css({'display': 'none'});
  } else{
    $('.usd').css({'display': 'none'});
    $('.inr').css({'display': 'inline'});
  }
  
  
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
