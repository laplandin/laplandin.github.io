$(document).ready( function() {
  $('.portfolio-action').click( function() {
                                $('.overlay').css('display', 'block');
                                $('.portfolio-popup').css('display','block');
                              });

  $('.overlay').click( function() {
                      $('.overlay').css('display', 'none');
                      $('.portfolio-popup').css('display','none');
                    });
})
