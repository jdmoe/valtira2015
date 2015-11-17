(function(window) {

"use strict";




//////////////// BOUNCE EFFECT




var dwnBouncBtn = $(".down-button");
$.extend({

// the show method extends the bounce function
show:function() {

    // get document ready to animate
    $(dwnBouncBtn, this).animate({

        // moves target up 20px for 200 ms
        marginTop : '20px' } , {

        duration: 200,

        // once moved up to 20px the complete method fires
        complete:function() {

        $(this).animate({

        // move back down to 0px
        marginTop : '0px' } , { });

            }

        });

    }

});

setInterval("$.show();", 100);





//////////////// SCROLL TO HASH





    // for smooth scroll to hash
    $('a[href*=#]:not([href=#])').click(function() {

    // grab all hashes on page but not if a hash does not have a name attatched ie. (#name)
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = $(this.hash);

        // store found has inside target variable
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        // if target equals the length of the has itslef return target or else asign a has value of #
        if (target.length) {

          $( 'html , body' ).animate({

            scrollTop: target.offset().top

          }, 1000);

          return false;

            }

        }

    });

})(window); // end scripts





//////////////// NAV & HAMBURGER





    $(document).scroll(function() {

        var y = $(this).scrollTop(),

        x = window.innerWidth,

        l = $('.brand');

        st = $('.side-trigger');

        if ( y > 85 || x <= 768 ) {

            st.fadeIn( 100 );

        } else {

            st.fadeOut( 100 );
        }

    }); // end side nav functionality

        $(".hamburger-trigger").click(function(e) {
        e.preventDefault();
        var trigger = $(".hamburger-trigger"),
        links = $(".topNav ul li > a:not(.hamburger-trigger, .brand)");
        links.fadeToggle("slow", function() {
        });

    }); // end top nav click functionality

        $('#burger').click(function() {
            classie.toggle( menuRight, 'cbp-spmenu-open' );
            disableOther( 'showRight' );
            $(this).toggleClass('open');
            });

        // slide push menu scripts
        var menuRight = document.getElementById( 'cbp-spmenu-s2' ),
            showRight = document.getElementById( 'showRight' );

        function disableOther( button ) {
            if( button !== 'showRight' ) {
                classie.toggle( showRight, 'disabled' );
            }
        }





//////////////// PINWHEEL SLIDER





    jQuery(document).ready(function() {

        args = {
        animationEasing: "swing",
        carouselSpeed: 500,
        autoPlay: 8000,
        rightButtonTag: "#pinwheel_slider_1_next",
        leftButtonTag: "#pinwheel_slider_1_prev",
        preload: true,
        largeFeatureWidth: 450,
        largeFeatureHeight: 300,
        smallFeatureWidth: 250,
        smallFeatureHeight: 200,
        smallFeatureOffset: 30,
        topPadding: 0,
        sidePadding: 0,
        minimize: false,
        sliderMaxWidth: 900,
        sliderMaxHeight: 350,
        prettyphoto: false,
        slider_handle: "pinwheel_slider_1"
        };

    var pinwheel_slider_1_c = jQuery("#pinwheel_slider_1").pinwheel(args);
    jQuery(window).on("debouncedresize",function() {

        pinwheel_slider_1_c.reload(args);

        });jQuery();
});




//////////////// FADE OUT SCROLL




$(window).scroll(function() {

    var scroll = $(window).scrollTop();

    $('.homepageHeader').css({

        'opacity':(( 200 - scroll ) / 250) + 0.3 });

    $('.inner-header-blocks').css({

        'opacity':(( 150 - scroll ) / 100) + 0.3 });
    });
