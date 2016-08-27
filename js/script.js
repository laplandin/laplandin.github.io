$(document).ready( function() {
  
  $('.portfolio-popup').addClass( function(index) {
    index++;
    return 'popup' + index;
  });

  $('.portfolio-item').click( function() {
    var index = 'popup' + ($(this).index() + 1);
    $('.overlay').css('display', 'block');
    $('.portfolio-popup' + '.' + index).css('display','block');

    $(window).keydown( function(key) {
      if (key.which == 27) {
        $('.' + index).css('display','none');
        $('.overlay').css('display', 'none');
        console.log(key.which);
      }
    });
  });

  $('.overlay').click( function() {
    $('.overlay').css('display', 'none');
    $('.portfolio-popup').css('display','none');
  });
})
