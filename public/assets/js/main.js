(function ($) {
  'use strict';
  var menu_name = '';
  //===== Prealoder
  $(window).on('load', function (event) {
    $('.proloader').delay(500).fadeOut(500);
  });

  // sticky
  // var wind = $(window);
  // var sticky = $('.header-bar-area');
  // wind.on('scroll', function () {
  //   var scroll = wind.scrollTop();
  //   if (scroll < 100) {
  //     sticky.removeClass('sticky');
  //   } else {
  //     sticky.addClass('sticky');
  //   }
  // });

  // sticky  box
  // var wind = $(window);
  // var sticky__box = $('.side__box');
  // wind.on('scroll', function () {
  //   var scroll = wind.scrollTop();
  //   if (scroll < 300) {
  //     sticky__box.removeClass('sticky__box');
  //   } else {
  //     sticky__box.addClass('sticky__box');
  //   }
  // });

  $('body').on('click', '.js-menu-toggle', function (e) {
    var $this = $(this);
    e.preventDefault();

    if ($('body').hasClass('offcanvas-menu')) {
      $('body').removeClass('sub-menu-fixed-body');
      $('body').removeClass('offcanvas-menu');
      $this.removeClass('active');
      $('#' + menu_name).removeClass('off_sum_menu_mobile');
    } else {
      $('body').addClass('offcanvas-menu');
      $('body').addClass('sub-menu-fixed-body');
      $this.addClass('active');
    }
  });
  $('body').on('click', '.page_wrapper, .closemenu', function (e) {
    // var $this = $(this);
    // e.preventDefault();
    if ($('body').hasClass('offcanvas-menu')) {
      $('body').removeClass('offcanvas-menu');
      $('body').removeClass('sub-menu-fixed-body');
      // $this.removeClass('active');
    }
  });

  $(document).on('click', '.show-site-sub-menu', function (e) {
    var $this = $(this);
    e.preventDefault();    
    let menu_name_click = $(this).data('name');
    menu_name = menu_name_click ? menu_name_click: menu_name
    
    if ($('#' + menu_name).hasClass('off_sum_menu_mobile')) {
        $('#' + menu_name).removeClass('off_sum_menu_mobile');
      } else {
        $('body').addClass('sub-menu-fixed-body');
        $('#' + menu_name).addClass('off_sum_menu_mobile');
      }
  });  

  // /* -------------------------------------
  //             Responsive menu
  //     -------------------------------------- */
  // var siteMenuClone = function() {

  //     $('.js-clone-nav').each(function() {
  //         var $this = $(this);
  //         $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
  //     });

  //     setTimeout(function() {

  //         var counter = 0;
  //         $('.site-mobile-menu .has-children').each(function() {
  //             var $this = $(this);

  //             $this.prepend('<span class="arrow-collapse collapsed">');

  //             $this.find('.arrow-collapse').attr({
  //                 'data-toggle': 'collapse',
  //                 'data-target': '#collapseItem' + counter,
  //             });

  //             $this.find('> ul').attr({
  //                 'class': 'collapse',
  //                 'id': 'collapseItem' + counter,
  //             });

  //             counter++;

  //         });

  //     }, 1000);

  //     $('body').on('click', '.js-menu-toggle', function(e) {
  //         var $this = $(this);
  //         e.preventDefault();

  //         if ($('body').hasClass('offcanvas-menu')) {
  //             $('body').removeClass('offcanvas-menu');
  //             $this.removeClass('active');
  //         } else {
  //             $('body').addClass('offcanvas-menu');
  //             $this.addClass('active');
  //         }
  //     })

  // };
  // siteMenuClone();

  // /*---------------------------------
  //            Nice select
  // -----------------------------------*/
  // $('select').niceSelect();
  // $('.user_select').niceSelect();
  // $('.user_select').on('click', function (event) {
  //   event.preventDefault();
  //   if ($(this).hasClass('open')) $(this).removeClass('open');
  //   else $(this).addClass('open');
  // });

  // /*=========================
  //   OwlCarousel START
  // ===========================*/

  // $(".slider_wrap").owlCarousel({
  //     items: 4,
  //     nav: true,
  //     dot: false,
  //     autoplay: true,
  //     autoplayTimeout: 5500,
  //     loop: true,
  //     navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
  //     margin: 30,
  //     center: true,
  //     smartSpeed: 2000,
  //     responsiveClass: true,
  //     responsive: {
  //         0: {
  //             items: 1,

  //         },

  //         768: {
  //             items: 3,

  //         },
  //         1000: {
  //             items: 4,

  //         }
  //     }

  // });

  // Show or hide the sticky footer button
  $(window).on('scroll', function (event) {
    if ($(this).scrollTop() > 600) {
      $('.back-to-top').fadeIn(200);
    } else {
      $('.back-to-top').fadeOut(200);
    }
  });

  //Animate the scroll to yop
  $(document).on('click', '.back-to-top', function (event) {
    event.preventDefault();

    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1500,
    );
  });

  $('#arrow-next').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate(
      { scrollTop: $($(this).attr('href')).offset().top - 90 },
      500,
      'linear',
    );
  });

  // Smoot Scroll Effect
  $('.main-menu li a').bind('click', function (event) {
    var $anchor = $(this);
    var headerH = '88';
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr('href')).offset().top - headerH + 'px',
        },
        1200,
        'easeInSine',
      );
    event.preventDefault();
  });

  // Smoot Scroll Effect
  $('.ofcavas-menu ul li a').bind('click', function (event) {
    var $anchor = $(this);
    var headerH = '88';
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr('href')).offset().top - headerH + 'px',
        },
        1200,
        'easeInSine',
      );
    event.preventDefault();
  });

  $('.ofcavas-menu ul li a').on('click', function (e) {
    e.preventDefault();
    $('.ofcavas-menu').removeClass('current');
  });

  $('.ofcavas-menu ul li a').on('click', function (e) {
    e.preventDefault();
    $('.ofcavas-menu').removeClass('current');
  });

  // Hamburger-menu
  $('.hamburger-menu').on('click', function () {
    $('.hamburger-menu .line-top, .ofcavas-menu').toggleClass('current');
    $('.hamburger-menu .line-center').toggleClass('current');
    $('.hamburger-menu .line-bottom').toggleClass('current');
  });

  $('.ofcavas-menu ul li a').on('click', function () {
    $('.hamburger-menu .line-top, .ofcavas-menu').removeClass('current');
    $('.hamburger-menu .line-center').removeClass('current');
    $('.hamburger-menu .line-bottom').removeClass('current');
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top - 88,
          },
          1000,
        );
        return false;
      }
    }
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 90,
  });
})(jQuery);
