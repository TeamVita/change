$(function () {
  slideshow.initialize();

  services.initialize();

  contactForm.initialize();


  // retina display
  if(window.devicePixelRatio >= 1.2){
      $("[data-2x]").each(function(){
          if(this.tagName == "IMG"){
              $(this).attr("src",$(this).attr("data-2x"));
          } else {
              $(this).css({"background-image":"url("+$(this).attr("data-2x")+")"});
          }
      });
  }
});

window.utils = {
  isFirefox: function () {
    return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  }
};

