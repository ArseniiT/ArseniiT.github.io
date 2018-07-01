var kVideo=document.getElementById("kijiji-video"); 

function Pause()
{ 
  kVideo.pause(); 
}
function Play()
{
if (kVideo.paused)  {
  kVideo.play();     
}
}   

function slowScroll (id) {
  var offset = 0;
  $('html, body').animate({
    scrollTop: $(id).offset().top - offset
  }, 500);
  return false;
}

// Slick slider

$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true
  });
});

