
////sorting
//load
setTimeout(function() {
  $('.video__content h3 span').each(function(index, item) {
    let text = $(item).text();
    $('.video__content .col-xl-3').each(function(index, item) {
      let blockItem = $(item);
      console.log('123456');
      $(item).find('li').each(function(index, item) {
        if($(item).text() === text) {
          $(blockItem).fadeIn();
          
        } else{}
      });      
    });
  });
}, 1000);

//click checbox
$('.video__aside__checkbox label').on('click', function() {
  let text = $(this).text();
  if($(this).hasClass('checked')) {
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
  } else{
    $(this).addClass('checked');
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
}); 
