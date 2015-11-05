(function() {

"use strict";

// for bouncing down button animation
var dwnBouncBtn = $(".bounce");
$.extend({
  show:function(){
   $(".jquery_bounce").ready(function(){
        $(dwnBouncBtn, this).animate({ marginTop : '20px' } , {
                duration: 200,
                complete:function() {
                    $(this).animate({ marginTop : '0px' } , {
                specialEasing: {
                    left: 'swing',
                    top: 'easeOutBounce'
            }
          });
        }
      });
    });
  }
}); setInterval("$.show();", 100);

// for smooth scroll to hash
    $('a[href*=#]:not([href=#])').click(function() {
    // grab all hashes on page but not if a hash does not have a name attatched ie. (#name)
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = $(this.hash);
        // store found has inside target variable
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        // if target equals the length of the has itslef return target or else asign a has value of #
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });

// animated hamburger
  var toggles = document.querySelectorAll(".c-hamburger");
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  }
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})(window); // end scripts