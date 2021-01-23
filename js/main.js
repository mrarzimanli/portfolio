$(window).on("load", function () {
  $("body").css("overflow", "visible");
}),
  $(function () {
    $.iMissYou({ title: "I miss you. 😔", favicon: { enabled: !1 } });
  }),
  $(window).on("load", function () {
    new Typed("#home-profile-info", { strings: ["I'm John Doe...", "Web Developer... ", "UI and UX Designer! "], loop: !0, typeSpeed: 50, backSpeed: 30 });
  }),
  $(function () {
    $(".menu-toggle").click(function () {
      $(this).toggleClass("active"), $(".menu-sidebar").toggleClass("active");
    }),
      $(".menu-items a").click(function () {
        ($x = $(".menu-items a.active")), $(".menu-sidebar").removeClass("active"), $(".menu-toggle").removeClass("active"), $(this).addClass("active"), $x.removeClass("active");
      });
  }),
  $(function () {
    var t = $(".menu-items ul li a"),
      e = $("section"),
      o = $(document);
    o.on("scroll", function () {
      var i = o.scrollTop();
      e.each(function () {
        var e = $(this);
        if (e.offset().top < i + 1 && i < e.offset().top + e.outerHeight()) {
          var o = "." + e.attr("id");
          t.removeClass("active"), $(o).addClass("active");
        }
      });
    });
  }),
  $(function () {
    $(".menu-items ul li a").mouseover(function () {
      ($x = $(".menu-items ul li a.active")), $(".menu-items ul li a.active").removeClass("active");
    }),
      $(".menu-items ul li a").mouseleave(function () {
        $x.addClass("active");
      });
  }),
  $(function () {
    $("#progress-elements").waypoint(
      function () {
        $(".progress-bar").each(function () {
          $(this).animate({ width: $(this).attr("aria-valuenow") + "%" }, 1e3);
        }),
          this.destroy();
      },
      { offset: "80%" }
    );
  }),
  $(function () {
    $("#services-tabs").responsiveTabs({ animation: "slide", duration: 500 });
  }),
  $(window).on("load", function () {
    $("#isotope-container").isotope({}),
      $("#isotope-filters").on("click", "button", function () {
        var t = $(this).attr("data-filter");
        $("#isotope-container").isotope({ filter: t }), $("#isotope-filters").find(".active").removeClass("active"), $(this).addClass("active");
      });
  }),
  $(function () {
    $("a.smooth-scroll").click(function (t) {
      t.preventDefault();
      var e = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(e).offset().top }, 1250);
    }),
      $(".scroll-indicator").click(function () {
        $("html, body").animate({ scrollTop: $("#about").offset().top }, 1e3);
      });
  }),
  $(window).scroll(function () {
    var t = $(window).innerHeight(),
      e = $(this).scrollTop();
    e <= t &&
      ($("#home-profile").css("transform", "translate(0px,-" + e / 5 + "%)"), $("#profile-heading").css("transform", "translate(0px," + e / 6 + "%)"), $("#home .overlay-1").css("transform", "translate(0px,-" + e / 8 + "%)"), $("#home .overlay-2").css("transform", "translate(0px,-" + e / 30 + "%)"));
  }),
  $(window).on("load", function () {
    $(function () {
      $(".counter").counterUp({ time: 2e3 });
    });
  }),
  $(function () {
    $("#testimonial-slider").owlCarousel({ items: 1, autoplay: !1, smartSpeed: 700, loop: !0, autoplayHoverPause: !0, nav: !1, dots: !0 });
  });
