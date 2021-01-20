$(document).ready(function(){
  $("#header_btn").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});

$(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() > 500) {
      $('#btn_to_top').show();
    } else {
      $('#btn_to_top').hide();
    }
  });
  $('#btn_to_top').click(function(){
    $('html, body').animate({scrollTop: 0}, 1500);
    return false;
  });
});

