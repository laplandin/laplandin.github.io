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
      }
    });
  });

  $('.overlay').click( function() {
    $('.overlay').css('display', 'none');
    $('.portfolio-popup').css('display','none');
  });

  $('.work-more a').click( function(event) {
    event.preventDefault();

    $('.portfolio-item').fadeOut(400);
    $('.work-more').fadeOut(400);
    $('.portfolio-project').delay(400).fadeIn();
    $('.project-more').delay(400).fadeIn();

    $('.portfolio-project img').each( function(index) {
      $(this).attr({ "src": $('.portfolio-project a').eq(index).attr("href") });
    })
  });

  $('.project-more a').click( function(event) {
    event.preventDefault();
    $('.portfolio-item').fadeIn();
    $('.work-more').fadeIn();
    $('.portfolio-project').fadeOut();
    $('.project-more').fadeOut();
  });

  $('.portfolio-project li').click( function(event) {
    event.preventDefault();
    $('.project-popup').css('display', 'block');
    $('.overlay').css('display', 'block');

    $('.project-popup img').attr({"src": $('img', this).attr('src')});

    $('.overlay').click( function() {
      $('.overlay').css('display', 'none');
      $('.project-popup').css('display','none');
    });
  });

  $(window).keydown( function(key) {
    if (key.which == 27) {
      $('.overlay').css('display', 'none');
    }
    $('.project-popup').css('display','none');
  });
})
