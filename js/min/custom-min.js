function disableOther(e){"showRight"!==e&&classie.toggle(showRight,"disabled")}!function(e){"use strict";var t=$(".down-button");$.extend({show:function(){$(t,this).animate({marginTop:"20px"},{duration:200,complete:function(){$(this).animate({marginTop:"0px"},{})}})}}),setInterval("$.show();",100),$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html , body").animate({scrollTop:e.offset().top},1e3),!1}})}(window),$(document).scroll(function(){var e=$(this).scrollTop(),t=window.innerWidth,i=$(".brand");st=$(".side-trigger"),e>85||768>=t?st.fadeIn(100):st.fadeOut(100)}),$(".hamburger-trigger").click(function(e){e.preventDefault();var t=$(".hamburger-trigger"),i=$(".topNav ul li > a:not(.hamburger-trigger, .brand)");i.fadeToggle("slow",function(){})}),$("#burger").click(function(){classie.toggle(menuRight,"cbp-spmenu-open"),disableOther("showRight"),$(this).toggleClass("open")});var menuRight=document.getElementById("cbp-spmenu-s2"),showRight=document.getElementById("showRight");jQuery(document).ready(function(){args={animationEasing:"swing",carouselSpeed:500,autoPlay:8e3,rightButtonTag:"#pinwheel_slider_1_next",leftButtonTag:"#pinwheel_slider_1_prev",preload:!0,largeFeatureWidth:450,largeFeatureHeight:300,smallFeatureWidth:250,smallFeatureHeight:200,smallFeatureOffset:30,topPadding:0,sidePadding:0,minimize:!1,sliderMaxWidth:900,sliderMaxHeight:350,prettyphoto:!1,slider_handle:"pinwheel_slider_1"};var e=jQuery("#pinwheel_slider_1").pinwheel(args);jQuery(window).on("debouncedresize",function(){e.reload(args)}),jQuery()}),$(window).scroll(function(){var e=$(window).scrollTop();$(".homepageHeader").css({opacity:(200-e)/250+.3}),$(".inner-header-blocks").css({opacity:(150-e)/100+.3})});