(function(window) {

"use strict";

$('.lazyView').lazyView();



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

    });

        // animates the slide out functionality for the sidebar nav
        $('#burger').click(function() {
            classie.toggle( menuRight, 'cbp-spmenu-open' );
            disableOther( 'showRight' );
            $(this).toggleClass('open');
            });

        // stores classes into variables for later use
        var menuRight = document.getElementById( 'cbp-spmenu-s2' ),
            showRight = document.getElementById( 'showRight' );

        // disables the slide over functionality if button's current class is not 'showRight'
        function disableOther( button ) {
            if( button !== 'showRight' ) {
                classie.toggle( showRight, 'disabled' );
            }
        }





//////////////// PINWHEEL SLIDER





    jQuery(document).ready(function() {
        // change thse object elements to manipulate the objects properties and customize

        if ($(window).width() < 630) {
            args = {
            animationEasing: "swing",
            carouselSpeed: 500,
            autoPlay: 3000,
            rightButtonTag: "#pinwheel_slider_1_next",
            leftButtonTag: "#pinwheel_slider_1_prev",
            preload: true,
            largeFeatureWidth: 450,
            largeFeatureHeight: 300,
            smallFeatureWidth: 250,
            smallFeatureHeight: 200,
            smallFeatureOffset: 30,
            topPadding: 0,
            bottomPadding: 0,
            sidePadding: 0,
            minimize: false,
            sliderMaxWidth: 440,
            sliderMaxHeight: 350,
            prettyphoto: false,
            slider_handle: "pinwheel_slider_1"
            };
        }
        else {
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
        }

    var pinwheel_slider_1_c = jQuery("#pinwheel_slider_1").pinwheel(args);
    jQuery(window).on("debouncedresize",function() {

        pinwheel_slider_1_c.reload(args);

        });jQuery();

});






//////////////// FADE OUT SCROLL




$(window).scroll(function() {

    var scroll = $(window).scrollTop();

    $('.homepageHeader').css({

        // animates the opacity of the header's text when scrolled out of viewport
        'opacity':(( 200 - scroll ) / 250) + 0.3 });

    $('.inner-header-blocks').css({

        // animates the opacity of the header's text when scrolled out of viewport
        'opacity':(( 150 - scroll ) / 100) + 0.3 });
    });



//////////////// AJAX FROM GOODNESS




jQuery(document).ready(function($) {

    if( $('.floating-labels').length > 0 )  {

    floatLabels();

    }

    function floatLabels() {

        var inputFields = $('.floating-labels .cd-label').next();

        // loops through each input label checks to see if user is writing in the input
        inputFields.each(function(){

            var singleInput = $(this);

            checkVal(singleInput);

            singleInput.on('change keyup', function(){

                checkVal(singleInput);
            });
        });
    }

    // moves input label to the top left if focused on writing within an input
    function checkVal(inputField) {

    ( inputField.val() === '' ) ? inputField.prev('.cd-label').removeClass('float') : inputField.prev('.cd-label').addClass('float');
    }

    // validates real email address exists and returns an error div if false
    $('#submit').click(function() {

        $('.error-message').hide();

        var textEntered = $('.email').text();

        var textResult = [];

        $.each(textEntered.split(';'), function( index, item ) {

            if (item.match(/^\S+@\S+\.\S+$/)) {

                textResult.push(item);
            }
            else {
                $('.error-message').show().removeClass('hide');
            }
        });
        $('.email').html(textResult.join(';'));
    });

});


//////////////// SCROLL TO TOP



jQuery(document).ready(function($){
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0 ,
            }, scroll_top_duration
        );
    });

});



//////////////// FORM SCRIPTS




    $(document).ready(function () {

    var theForm = document.getElementById( 'theForm' );

    new stepsForm( theForm, {
        onSubmit : function( form ) {
            // hide form
            classie.addClass( theForm.querySelector( '.simform-inner' ), 'hide' );

            /*
            form.submit()
            or
            AJAX request (maybe show loading indicator while we don't have an answer..)
            */

            // let's just simulate something...
            var messageEl = theForm.querySelector( '.final-message' );
            messageEl.innerHTML = 'Thank you! We\'ll be in touch.';
            classie.addClass( messageEl, 'show' );
            }
        });
    $(".pop-up-contact-div").hide();
    $(function() {
            $(".contact-btn-trigger").click(function() {
                $(".contact-div-trigger").hide();
                $(".pop-up-contact-div").show();
            });
        });

    });// end scripts