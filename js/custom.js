/***************************************************************************************************************
||||||||||||||||||||||||||||         CUSTOM SCRIPT FOR AIMSRC            ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
****************************************************************************************************************
1 revolutionSliderActiver
2 galleryMasonaryLayout
3 accrodion
4 teamCarosule
5 testiCarosule
6 CounterNumberChanger
7 stickyHeader
8 contactFormValidation
9 selectInput
10 datePicker
11 gMap
12 mobileMenu
****************************************************************************************************************
||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************/

"use strict";

// 1 revolutionSliderActiver
function revolutionSliderActiver() {
  if ($(".rev_slider_wrapper.hospital-rev-slider #slider1").length) {
    $("#slider1").revolution({
      sliderType: "standard",
      sliderLayout: "auto",
      delay: 3000,
      navigation: {
        arrows: { enable: true },
      },
      gridwidth: 1170,
      gridheight: 770,
    });
  }
  if ($(".rev_slider_wrapper.hospital-rev-slider #slider2").length) {
    $("#slider2").revolution({
      sliderType: "standard",
      sliderLayout: "auto",
      delay: 3000,
      navigation: {
        arrows: { enable: true },
      },
      gridwidth: 600,
      gridheight: 700,
    });
  }
}
function revolutionSliderActiver() {
  if ($(".rev_slider_wrapper #slider1").length) {
    $("#slider1").revolution({
      sliderType: "standard",
      sliderLayout: "auto",
      delay: 5000,
      navigation: {
        arrows: { enable: true },
        bullets: { enable: true, style: 'custom', size: 12, hide_onmobile: false, hide_onleave: false, direction: 'horizontal', v_align: 'bottom', h_offset: 0, v_offset: 20, space: 10, tmp: '' }
      },
      gridwidth: 1170,
      gridheight: 770,
    });
  }
  if ($(".rev_slider_wrapper #slider2").length) {
    $("#slider2").revolution({
      sliderType: "standard",
      sliderLayout: "auto",
      delay: 5000,
      navigation: {
        arrows: { enable: true },
        bullets: { enable: true, style: 'custom', size: 12, hide_onmobile: false, hide_onleave: false, direction: 'horizontal', h_align: 'center', v_align: 'bottom', h_offset: 0, v_offset: 20, space: 10, tmp: '' }
      },
      gridwidth: 600,
      gridheight: 700,
    });
  }
}

// 2 galleryMasonaryLayout
function galleryMasonaryLayout() {
  if ($(".img-masonary").length) {
    $(".img-masonary").isotope({
      layoutMode: "masonry",
    });
  }
}
// 3 accrodion
function accrodion() {
  if ($(".accrodion-grp").length) {
    $(".accrodion-grp").each(function () {
      var accrodionName = $(this).data("grp-name");
      var Self = $(this);
      Self.addClass(accrodionName);
      Self.find(".accrodion .accrodion-content").hide();
      Self.find(".accrodion.active").find(".accrodion-content").show();
      Self.find(".accrodion").each(function () {
        $(this)
          .find(".accrodion-title")
          .on("mouseover", function () {
            if ($(this).parent().hasClass("active") === false) {
              $(".accrodion-grp." + accrodionName)
                .find(".accrodion")
                .removeClass("active");
              $(".accrodion-grp." + accrodionName)
                .find(".accrodion")
                .find(".accrodion-content")
                .slideUp();
              $(this).parent().addClass("active");
              $(this).parent().find(".accrodion-content").slideDown();
            }
          });
      });
    });
  }
}

// 4 teamCarosule
function teamCarosule() {
  if ($(".team-carousel").length) {
    $(".team-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      autoplay: true,
      autoplayTimeout: 1500,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  }
}
// 5 testiCarosule
function testiCarosule() {
  if ($(".testimonaials-carousel").length) {
    $(".testimonaials-carousel").owlCarousel({
      loop: true,
      margin: 50,
      nav: false,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        768: {
          items: 1,
          nav: true,
          dots: false,
        },
        1000: {
          items: 2,
        },
        1200: {
          items: 2,
        },
      },
      animateOut: 'fadeOut', // Set the animation effect for item removal
      animateIn: 'fadeIn',
    });
    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
      smartSpeed: 5000,
      autoplay: true,
      autoplayTimeout: 5000,
      center: true,
      dots: false,
      loop: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        990: {
          items: 3,
        },
      },
      animateOut: 'fadeOut', // Set the animation effect for item removal
      animateIn: 'fadeIn',
    });
  }
}
// 6 CounterNumberChanger
function CounterNumberChanger() {
  var timer = $(".timer");
  if (timer.length) {
    timer.appear(function () {
      timer.countTo();
    });
  }
}
// 7 stickyHeader
function stickyHeader() {
  if ($(".stricky").length) {
    var strickyScrollPos = $(".stricky").next().offset().top;
    if ($(window).scrollTop() > strickyScrollPos) {
      $(".stricky").removeClass("fadeIn animated");
      $(".stricky").addClass("stricky-fixed fadeInDown animated");
    } else if ($(this).scrollTop() <= strickyScrollPos) {
      $(".stricky").removeClass("stricky-fixed fadeInDown animated");
      $(".stricky").addClass("slideIn animated");
    }
  }
}
// 8 contactFormValidation
function contactFormValidation() {
  if ($(".contact-form").length) {
    $(".contact-form").each(function () {
      var cfName = $(this).attr("id");

      $("#" + cfName).validate({
        // initialize the plugin
        rules: {
          name: {
            required: true,
          },
          email: {
            required: true,
            email: true,
          },
          message: {
            required: true,
          },
          date: {
            required: true,
          },
          category: {
            required: true,
          },
          phone: {
            required: true,
          },
          gender: {
            required: true,
          },
          dateOfBirth: {
            required: true,
          },
          subject: {
            required: true,
          },
        },
        submitHandler: function (form) {
          // sending value with ajax request
          $.post(
            $(form).attr("action"),
            $(form).serialize(),
            function (response) {
              // console.log('response is'+response)
              $(form).parent("div").append(response);
              $(form).find('input[type="text"]').val("");
              $(form).find('input[type="email"]').val("");
              $(form).find("textarea").val("");
            }
          );
          return false;
        },
      });
    });
  }
}

// 9 selectInput
function selectInput() {
  if ($(".select-input").length) {
    $(".select-input").selectmenu();
  }
}
// 10 datePicker
function datePicker() {
  if ($(".date-picker").length) {
    $(".date-picker").datepicker();
  }
}
// 11 gMap
function gMap() {
  if ($(".google-map").length) {
    $(".google-map").each(function () {
      // getting options from html
      var mapName = $(this).attr("id");
      var mapLat = $(this).data("map-lat");
      var mapLng = $(this).data("map-lng");
      var iconPath = $(this).data("icon-path");
      var mapZoom = $(this).data("map-zoom");
      var mapTitle = $(this).data("map-title");

      // if zoom not defined the zoom value will be 15;
      if (!mapZoom) {
        var mapZoom = 15;
      }
      // init map
      var map;
      map = new GMaps({
        div: "#" + mapName,
        scrollwheel: false,
        lat: mapLat,
        lng: mapLng,
        zoom: mapZoom,
      });
      // if icon path setted then show marker
      if (iconPath) {
        map.addMarker({
          icon: iconPath,
          lat: mapLat,
          lng: mapLng,
          title: mapTitle,
        });
      }
    });
  }
}
// 12 mobileMenu
function mobileMenu() {
  if ($(".navigation .nav-footer button").length) {
    $(".navigation .nav-footer button").on("click", function () {
      $(".navigation .nav-header").slideToggle();
      $(".navigation .nav-header")
        .find(".dropdown")
        .children("a")
        .append(function () {
          return '<button><i class="fa fa-bars"></i></button>';
        });
      $(".navigation .nav-header .dropdown a button").on("click", function () {
        $(this).parent().parent().children("ul.submenu").slideToggle();
        return false;
      });
    });
  }
}

// Dom Ready Function
jQuery(document).on("ready", function () {
  (function ($) {
    // add your functions
    revolutionSliderActiver();
    accrodion();
    galleryMasonaryLayout();
    teamCarosule();
    CounterNumberChanger();
    testiCarosule();
    contactFormValidation();
    selectInput();
    datePicker();
    gMap();
    mobileMenu();
  })(jQuery);
});
// window on load functino
jQuery(window).on("load", function () {
  (function ($) {
    // add your functions
  })(jQuery);
});
// window on scroll functino
jQuery(window).on("scroll", function () {
  (function ($) {
    // add your functions
    stickyHeader();
  })(jQuery);
});
