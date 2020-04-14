if($('div').hasClass('webinar')) {


  setInterval(function() {
    var date = new Date();
    var dateEnd = new Date(Date.UTC(
      $('.webinar__intro__clock').attr('year'), 
      $('.webinar__intro__clock').attr('month') - 1, 
      $('.webinar__intro__clock').attr('day'), 
      $('.webinar__intro__clock').attr('hour'), 
      $('.webinar__intro__clock').attr('minute'), 
      0
    )); // // 2011 января 1, 00:00:00
    var dataEnd2 = dateEnd - date - 3600000;
    if(dataEnd2 <= 0) {

    } else{
      var one_day = 1000 * 60 * 60 * 24;
      var one_hours = 1000 * 60 * 60;
      var one_minutes = 1000 * 60;

      var day = Math.floor((dataEnd2)/one_day);
      var hoursResidue = (dataEnd2)-(day*one_day);
      var hours = Math.floor(hoursResidue / one_hours);
      var minutes = Math.floor(((hoursResidue-(hours*one_hours)) / one_minutes));
      var seconds = Math.floor((((hoursResidue-(hours*one_hours))-(minutes*one_minutes)) / 1000));




      $('.webinar__intro__clock__block .days').text(day);
      $('.webinar__intro__clock__block .hours').text(hours);
      $('.webinar__intro__clock__block .minutes').text(minutes);
      $('.webinar__intro__clock__block .seconds').text(seconds);
    }
  }, 1000);
}

