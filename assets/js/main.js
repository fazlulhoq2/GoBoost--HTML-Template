// ;
// (function($) {
//     "use strict";

//     $(document).ready(function() {

//         /*-------------------------------
//             Navbar Fix
//         ------------------------------*/
//         if ($(window).width() < 991) {
//             navbarFix()
//         }
//         /*------------------------------
//             smoth achor effect
//         ------------------------------*/
//         $(document).on('click', '.navbar-nav li a', function(e) {
//             var anchor = $(this).attr('href');
//             var link = anchor.slice(0, 1);
//             if ('#' == link) {
//                 e.preventDefault();
//                 var top = $(anchor).offset().top;
//                 $('html, body').animate({
//                     scrollTop: $(anchor).offset().top
//                 }, 1000);
//                 $(this).parent().addClass('current-menu-item').siblings().removeClass('current-menu-item');
//             }

//         });


//         /*--------------------
//             wow js init
//         ---------------------*/
//         new WOW().init();

//         /*-------------------------
//             magnific popup activation
//         -------------------------*/
//         $('.video-play,.video-popup,.small-vide-play-btn').magnificPopup({
//             type: 'video'
//         });

//         /*------------------
//             back to top
//         ------------------*/
//         $(document).on('click', '.back-to-top', function() {
//             $("html,body").animate({
//                 scrollTop: 0
//             }, 2000);
//         });
//         /*------------------------------
//             counter section activation
//         -------------------------------*/
//         var counternumber = $('.count-num');
//         counternumber.counterUp({
//             delay: 20,
//             time: 1000
//         });
//         // MouseEvent
//         var $mosueOverEffect = $('.outer');
//         if ($mosueOverEffect.length > 0) {
//             VanillaTilt.init(document.querySelectorAll(".outer"), {
//                 max: 80,
//                 speed: 400,
//                 perspective: 200,
//                 scale: 1.2,
//                 reverse: true,
//             });
//         }
//         // Water Effect
//         var $waterEffect = $('.water-effect');
//         if ($waterEffect.length > 0) {
//             $waterEffect.ripples({
//                 resolution: 256,
//                 perturbance: 0.05,
//                 // dropRadius: 50
//             });
//         }
//         /**-----------------------------
//          *  countdown
//          * ---------------------------*/
//         if ($("#mycountdown").length > 0) {
//             $("#mycountdown").countdown("2021/09/20", function(event) {
//                 $('.month').text(
//                     event.strftime('%m')
//                 );
//                 $('.days').text(
//                     event.strftime('%n')
//                 );
//                 $('.hours').text(
//                     event.strftime('%H')
//                 );
//                 $('.mins').text(
//                     event.strftime('%M')
//                 );
//                 $('.secs').text(
//                     event.strftime('%S')
//                 );
//             });

//         }
//         // Clinet - active
//         $('.client-active-area').owlCarousel({
//                 loop: true,
//                 items: 4,
//                 nav: true,
//                 margin: 100,
//                 dots: false,
//                 navText: ['<span data-icon="&#x23;"></span>', '<span data-icon="&#x24;"></span>'],
//                 responsive: {
//                     0: {
//                         items: 2
//                     },
//                     600: {
//                         items: 3
//                     },
//                     992: {
//                         items: 4
//                     },
//                     1200: {
//                         items: 4
//                     }
//                 }
//             })
//             /*---------------------------
//                 testimonial carousel
//             ---------------------------*/
//         var $TestimonialCarousel = $('.testimonial-carousel');
//         if ($TestimonialCarousel.length > 0) {
//             $TestimonialCarousel.owlCarousel({
//                 loop: true,
//                 autoplay: true, //true if you want enable autoplay
//                 autoPlayTimeout: 1000,
//                 margin: 30,
//                 dots: false,
//                 nav: false,
//                 navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
//                 animateOut: 'fadeOut',
//                 animateIn: 'fadeIn',
//                 responsive: {
//                     0: {
//                         items: 1
//                     },
//                     460: {
//                         items: 1
//                     },
//                     599: {
//                         items: 1
//                     },
//                     768: {
//                         items: 2
//                     },
//                     960: {
//                         items: 2
//                     },
//                     1200: {
//                         items: 3
//                     },
//                     1920: {
//                         items: 3
//                     }
//                 }
//             });
//         }
//         /*---------------------------
//             testimonial carousel Two
//         ---------------------------*/
//         var $TestimonialCarousel = $('.testimonial-carousel-two');
//         if ($TestimonialCarousel.length > 0) {
//             $TestimonialCarousel.owlCarousel({
//                 loop: true,
//                 autoplay: true, //true if you want enable autoplay
//                 autoPlayTimeout: 1000,
//                 margin: 30,
//                 dots: false,
//                 nav: false,
//                 navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
//                 animateOut: 'fadeOut',
//                 animateIn: 'fadeIn',
//                 responsive: {
//                     0: {
//                         items: 1
//                     },
//                     460: {
//                         items: 1
//                     },
//                     599: {
//                         items: 1
//                     },
//                     768: {
//                         items: 1
//                     },
//                     960: {
//                         items: 1
//                     },
//                     1200: {
//                         items: 1
//                     },
//                     1920: {
//                         items: 1
//                     }
//                 }
//             });
//         }



//     });


//     //define variable for store last scrolltop
//     var lastScrollTop = '';

//     $(window).on('scroll', function() {

//         //back to top show/hide
//         var ScrollTop = $('.back-to-top');
//         if ($(window).scrollTop() > 1000) {
//             ScrollTop.fadeIn(1000);
//         } else {
//             ScrollTop.fadeOut(1000);
//         }

//         // Sticky-Memu
//         if ($(window).width() > 991) {
//             StickyMenu();
//         }



//     });


//     $(window).on('resize', function() {
//         /*-------------------------------
//             Navbar Fix
//         ------------------------------*/
//         if ($(window).width() < 991) {
//             navbarFix()
//         }
//     });


//     $(window).on('load', function() {

//         /*-----------------
//             preloader
//         ------------------*/
//         var preLoder = $("#preloader");
//         preLoder.fadeOut(1000);

//         /*-----------------
//             back to top
//         ------------------*/
//         var backtoTop = $('.back-to-top')
//         backtoTop.fadeOut();

//     });

//     function navbarFix() {
//         $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a, .navbar-area .navbar-nav li.appside-megamenu>a', function(e) {
//             e.preventDefault();
//         })
//     }

//     function StickyMenu() {
//         /*--------------------------
//         sticky menu activation
//         ---------------------------*/
//         var st = $(this).scrollTop();
//         var mainMenuTop = $('.navbar-area');
//         if ($(window).scrollTop() > 1000) {
//             mainMenuTop.addClass('nav-fixed');
//         } else {
//             mainMenuTop.removeClass('nav-fixed ');
//         }
//         lastScrollTop = st;
//     }


// })(jQuery);



let sideNavlist = document.querySelectorAll(".navigation li")

let topNavList = document.querySelectorAll('.middle .nav ul li a')

function makeActive(elem=[], listener='', classname=''){
    function activeLink() {
        elem.forEach((item) => {
            item.classList.remove(classname);
            this.classList.add(classname)
        })
    }
    
        elem.forEach(item =>
            item.addEventListener(listener, activeLink
            ))
}

makeActive(sideNavlist, "click", "active")
makeActive(topNavList , "click", "active")

// chartone js 

// left 
const ctx2 = document.getElementById('myChart2').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
            label: 'Traffic of social ',
            data: [21.25, 14.40, 13.5, 8.15, 18.10, 9.30, 15.75],
            backgroundColor: [
                "#5A7AF9",
                "#5A7AF9",
                "#5A7AF9",
                "#5A7AF9",
                "#5A7AF9",
                "#5A7AF9"

            ],
            borderWidth: 0,
            display:false
        }]
    },
    options: {
        responsive: true,
        display:false,
        gridLines:{
            display:false
        }
    }
});

// right


const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Leads by phone call', 'Leads', 'Site visitors', 'Leads by form'],
        datasets: [{
            label: 'Traffic of social medias',
            data: [20, 40, 25, 30],
            backgroundColor: [
              "#FF7557",
              "#5A7AF9",
              "#2ED0C1",
              "#2FA8FF"
            ],
            // borderColor: [
            //     'rgba(255, 99, 132, 1)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(153, 102, 255, 1)',
            //     'rgba(255, 159, 64, 1)'
            // ],
            // borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});

const ctx3 = document.getElementById('myChart3').getContext('2d');
const myChart3 = new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ['Existing opportunity', 'New opportunity', 'Unsure'],
        datasets: [{
            label: 'Leads by breakdown',
            data: [60, 20, 15],
            backgroundColor: [
              "#FF7557",
              "#5A7AF9",
              "#2FA8FF"
            ],
            // borderColor: [
            //     'rgba(255, 99, 132, 1)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(153, 102, 255, 1)',
            //     'rgba(255, 159, 64, 1)'
            // ],
            // borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});



