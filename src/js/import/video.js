
////sorting
//load
setTimeout(function() {
  $('.video__aside__checkbox label').each(function(index, item) {
    $('.video__content h3').append('<span>' + $(item).text() + '</span>');
  });
}, 1000);

//click checbox
$('.video__aside__checkbox label').on('click', function() {
  let text = $(this).text();
  if($(this).hasClass('checked')) {
    if(text === 'All') {
      $('.video__content .col-xl-3').fadeOut();
      $('.video__content h3 span').detach();
      setTimeout(function() {
        $('.video__aside__checkbox input').prop('checked', false);
      }, 300);
      $('.video__aside__checkbox label').removeClass('checked');
      $('.video__aside__checkbox input').reoveAttr('checked');
    } else{
      $('.video__content .col-xl-3').each(function(index, item) {
        let blockItem = $(item);
        $(item).find('li').each(function(index, item) {
          if($(item).text() === text) {
            $(blockItem).fadeOut();
          } else{}
        });      
      });
      $(this).removeClass('checked');
      $('.video__content h3 span').each(function(index, item) {
        if($(item).text() === text) {
          $(item).remove();
        }
      });
    }



  } else{
    $(this).addClass('checked');
    if(text === 'All') {
      $('.video__content h3 span').detach();
      $('.video__aside__checkbox label').addClass('checked');
      $('.video__aside__checkbox label').each(function(index, item) {
        $('.video__content h3').append('<span>' + $(item).text() + '</span>');
      });
      setTimeout(function() {
        $('.video__aside__checkbox input').prop('checked', true);
      }, 300);

  

      $('.video__content .col-xl-3').fadeIn();
    } else{
      $('.video__content h3').append('<span>' + text + '</span>');
      $('.video__content .col-xl-3').each(function(index, item) {
        let blockItem = $(item);
        $(item).find('li').each(function(index, item) {
          if($(item).text() === text) {
            $(blockItem).fadeIn();
          } else{}
        });      
      });
    }
  }
}); 
