;
// Начинать писать отсюда!!!!
$(document).ready(function(){
  $('.header-nav').click(function(){
    let menu = $('.header-nav__list');
    $(this).toggleClass('active');
    if(menu.is(':visible')) {
      menu.slideUp();
    } else {
      menu.slideDown();
    }
  });

  // const menu = document.querySelector(".header-nav");
  // const sandwich = document.querySelector("svg");
  // menu.addEventListener("click", morph);

  // function morph() {
  //   sandwich.classList.toggle("open");
  // }

  $('.header-nav').on('click', function(){
    $('.sandwich svg').toggleClass('open');
  });

  // let $grid = $('.portfolio-list').imagesLoaded(function(){
  //   $grid.masonry({
  //     itemSelector: '.portfolio-item',
  //     columnWidth: 10,
  //     gutter: 10
  //   });

    var $grid = $('.portfolio-list').masonry({
      itemSelector: '.portfolio-item',
      gutter: 10,
      percentPosition: true,
      columnWidth: 10,
      singleMode: false,
      isResizable: true,
      isAnimated: true,
      animationOptions: {
        queue: false,
        duration: 500
      }
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress( function() {
      $grid.masonry('layout');
    });

    //SLICK-SLIDER for section pricing
    $('.js-pricing-table').slick({
      dots: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '.slider-prev--pricing',
      nextArrow: '.slider-next--pricing',
      adaptiveHeight: true,
      responsive: [
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]

    });

    //SLICK-SLIDER for section reviews
    $('.reviews-js-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: '.slider-prev--reviews',
      nextArrow: '.slider-next--reviews',
      responsive: [
    {
      breakpoint: 1001,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        adaptiveHeight: true
      }
    }]

    });
    

    //Scroll to sections
    $('.scroll-link').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    //form validation
    $("form").on("submit", function() {
      var formID = '#' + $(this).attr("id");
      var th = $(this);
      $(formID).validate({
          rules: {
              name: 'required',
              phone: 'required'
          },
          messages: {
              name: 'Введите корректные данные',
              phone: 'Введите корректные данные'
          }
      });
      if ($(formID).valid()) {
          // $.ajax({
          //     type: "POST",
          //     url: "mail.php",
          //     data: th.serialize()
          // }).done(function() {
          //     console.log('test');
          //     console.log($(this));
          //     $(formID).hide();
          //     $(formID).parent().find('.form-success').addClass('success-show')
          // });

          $(this).hide();
          $(this).parent().find('.form-success').addClass('success-show');
  
      }
      return false;
    });

    //popup
    $('.popup-link').magnificPopup({
      type: 'inline'
    });

    //close popup
    $('#popup-close').on('click', function() {
      $.magnificPopup.close();
    });
    
  });


