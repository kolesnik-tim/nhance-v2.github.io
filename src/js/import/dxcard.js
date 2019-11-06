import fullpage from 'fullpage.js';
import fullpage1 from 'fullpage.js/vendors/scrolloverflow.min.js';



if($(window).width() > 767 && $('div').hasClass('phone')) {
  var myFullpage = new fullpage('#fullpage', {
  //Navigation
    menu: '#menu',
    scrollOverflow: true,
    // licenseKey: 'YOUR KEY HERE',
    // lockAnchors: false,
    // anchors:['firstPage', 'secondPage', 'secondPage-1', 'secondPage-2'],
    navigation: true,
    navigationPosition: 'right',
    // navigationTooltips: ['firstSlide', 'secondSlide'],
  
    //Scrolling
    css3: true,
    scrollingSpeed: 900,
    // autoScrolling: true,
    // fitToSection: true,
    // fitToSectionDelay: 100,
    // scrollBar: true,
    easing: 'easeInOutCubic',
    easingcss3: 'cubic-bezier(.43,.06,0,1.05)',

    //Design
    // normalScrollElements: '#section11',
    responsiveWidth: 767,
    responsiveHeight: 600,

    //events
    onLeave: function(origin, nextIndex, direction) {
      $('.phone__block').each(function(i,elem) {
        if(i < nextIndex.index) {
          $(elem).removeClass('active').addClass('down');
        } else if(i === nextIndex.index) {
          $(elem).removeClass('down').addClass('active');
        } else{
          $(elem).removeClass('active').removeClass('down');
        }
      });
      if(nextIndex.index === 0) {
        $('.phone').removeClass('active');
        $('#fp-nav').fadeOut();
        $('.phone').removeClass('stop');
        $('.phone').css({'top': '52vh', 'transition': 'all 0.8s cubic-bezier(.43,.06,0,1.05)'});
        $('.header').removeClass('dx-card');
      }else if(nextIndex.index >= 1 && nextIndex.index <= 4) {
        $('.phone').addClass('active');
        $('#fp-nav').fadeIn();
        $('.phone').removeClass('stop');
        $('.phone').css({'top': '52vh'});
        $('.header').addClass('dx-card');
      }else if(nextIndex.index >= 4) {
        $('#fp-nav').fadeOut();
        // let top = $('#section9').offset().top + ($(window).height() - $('.phone').outerHeight()) / 1.3;
        $('.phone').removeClass('active').addClass('stop').css({'top': '-100%'});
      }
    }
  });

}
