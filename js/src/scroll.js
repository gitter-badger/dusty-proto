
(function($) {
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('.main').animate({
            scrollTop: $('.main').scrollTop() + target.offset().top - $('.top-msg').outerHeight()
          }, 1000);
          return false;
        }
      }
    });
  });
})(jQuery);
