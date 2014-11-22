// Generated by CoffeeScript 1.7.1
$(function() {
  var TapEvent, applyEffect, cleanPage, doResize, h, hideMenu, lastWheel, nextPageTimer, nextSlide, pageChangeTime, prevSlide, showMenu, toggleMenu, w, wait, _ref;
  wait = function(time, fn) {
    return setTimeout(fn, time);
  };
  showMenu = function() {
    return $(".menu").animate({
      "left": "0"
    }, 500, "ease");
  };
  hideMenu = function() {
    return $(".menu").animate({
      "left": "-85%"
    }, 500, "ease");
  };
  toggleMenu = function() {
    if (0 === $(".menu").offset().left) {
      return hideMenu();
    } else {
      return showMenu();
    }
  };
  TapEvent = 'ontouchstart' in window ? "touchstart" : "mousedown";
  $(".menu .toggle-menu").on(TapEvent, toggleMenu);
  pageChangeTime = 500;
  nextPageTimer = -1;
  _ref = [-100, -100], w = _ref[0], h = _ref[1];
  doResize = function() {
    var top, _ref1;
    _ref1 = [window.innerWidth, window.innerHeight], w = _ref1[0], h = _ref1[1];
    $(".pages-container").css({
      position: "absolute",
      top: "0",
      width: "" + w + "px",
      height: "" + h + "px",
      overflow: "hidden"
    });
    top = 0;
    return $("section.page").each(function(ind, page) {
      $(page).css({
        width: "" + w + "px",
        height: "" + h + "px",
        top: "" + top + "px",
        position: "absolute"
      });
      return top += h;
    });
  };
  $(window).on("resize", doResize);
  doResize();
  applyEffect = function(elem, effect, time, easing) {
    if (effect == null) {
      effect = "appear-from-top";
    }
    if (time == null) {
      time = pageChangeTime;
    }
    if (easing == null) {
      easing = "ease";
    }
    switch (effect) {
      case "appear-from-top":
        $(elem).css({
          top: "-" + h + "px",
          opacity: 1
        });
        return $(elem).animate({
          top: 0
        }, time, easing);
      case "appear-from-bottom":
        $(elem).css({
          top: "" + h + "px",
          opacity: 1
        });
        return $(elem).animate({
          top: 0
        }, time, easing);
      case "appear-from-transparency":
        $(elem).css({
          top: 0,
          opacity: 0
        });
        return $(elem).animate({
          opacity: 1
        }, time, easing);
      case "appear-from-top-and-transparency":
        $(elem).css({
          top: "-" + h + "px",
          opacity: 0
        });
        return $(elem).animate({
          top: 0,
          opacity: 1
        }, time, easing);
      case "appear-from-bottom-and-transparency":
        $(elem).css({
          top: "" + h + "px",
          opacity: 0
        });
        return $(elem).animate({
          top: 0,
          opacity: 1
        }, time, easing);
      case "disapear-to-top":
        $(elem).css({
          top: 0
        });
        return $(elem).animate({
          top: "" + (-h) + "px"
        }, time, easing);
      case "disapear-to-bottom":
        $(elem).css({
          top: 0
        });
        return $(elem).animate({
          top: "" + h + "px"
        }, time, easing);
      case "disapear-become-transparent":
        $(elem).css({
          top: 0,
          opacity: 1
        });
        return $(elem).animate({
          opacity: 0
        }, time, easing);
    }
  };
  cleanPage = function(page) {
    var steps;
    $(page).addClass("active");
    $(page).find(".animation-element").each(function(_ind, elem) {
      var activeC, inactiveC, _ref1;
      _ref1 = [$(elem).data("inactive-class"), $(elem).data("active-class")], inactiveC = _ref1[0], activeC = _ref1[1];
      return $(elem).addClass(inactiveC).removeClass(activeC);
    });
    steps = parseInt($(page).data("steps-total"));
    if (1 < steps) {
      $(page).data("step-next", "1");
      $(page).data("step-prev", "0");
    }
    clearTimeout(nextPageTimer);
    return nextPageTimer = wait(5000, function() {
      return $(".next-page").addClass("hidden");
    });
  };
  cleanPage($("section.page.active"));
  nextSlide = function() {
    var activeC, elem, inactiveC, ind, next, page, totalSteps, _ref1;
    page = $("section.page.active");
    next = $(page).next();
    ind = parseInt($(page).data("step-next"));
    totalSteps = parseInt($(page).data("steps-total"));
    if (0 < next.length && (1 === totalSteps) || (ind === totalSteps)) {
      applyEffect(page, $(page).data("out-effect"));
      applyEffect(next, $(page).data("in-effect"), pageChangeTime / 2);
      $(page).removeClass("active");
      cleanPage(next);
      return wait(1000, function() {
        return $(".next-page").removeClass("hidden");
      });
    } else {
      elem = $(page).find(".animation-element[data-animation-step='" + ind + "']");
      _ref1 = [$(elem).data("inactive-class"), $(elem).data("active-class")], inactiveC = _ref1[0], activeC = _ref1[1];
      ind++;
      $(elem).removeClass(inactiveC).addClass(activeC);
      $(page).data("step-next", ind);
      return $(page).data("step-prev", ind - 1);
    }
  };
  prevSlide = function() {
    var page, prev;
    page = $("section.page.active");
    prev = $(page).prev();
    if (0 < prev.length) {
      applyEffect(page, $(page).data("out-effect"));
      applyEffect(prev, $(page).data("in-effect"), pageChangeTime / 2);
      $(page).removeClass("active");
      cleanPage(prev);
      return wait(1000, function() {
        return $(".next-page").removeClass("hidden");
      });
    }
  };
  $(".pages-container").on("swipeUp", function(e) {
    e.preventDefault();
    return nextSlide();
  });
  $(".next-page").on("touchstart", function(e) {
    e.preventDefault();
    return nextSlide();
  });
  $(".pages-container").on("swipeDown", function(e) {
    e.preventDefault();
    return prevSlide();
  });
  $(".pages-container").on("swipeLeft", function(e) {
    e.preventDefault();
    return hideMenu();
  });
  $(".pages-container").on("swipeRight", function(e) {
    e.preventDefault();
    return showMenu();
  });
  $(window).on("touchstart", function(e) {
    return e.preventDefault();
  });
  $(".no-swipe").on("touchstart mousewheel", function(e) {
    return e.stopPropagation();
  });
  lastWheel = Date.now();
  $(".pages-container").on("mousewheel", function(e) {
    var delta, now;
    delta = e.deltaY || e.wheelDelta;
    e.preventDefault();
    now = Date.now();
    if (now - lastWheel > 1000) {
      lastWheel = now;
      if (delta < 0) {
        return prevSlide();
      } else {
        return nextSlide();
      }
    }
  });
  return $(".menu li a").on(TapEvent, function(e) {
    var active, name, next;
    name = $(e.currentTarget).data("name");
    active = $("section.page.active");
    next = $("section.page[data-name='" + name + "']");
    if (name === $(active).data("name")) {
      return;
    }
    applyEffect(active, $(active).data("out-effect"));
    $(active).removeClass("active");
    applyEffect(next, $(next).data("in-effect"), pageChangeTime / 2);
    cleanPage(next);
    return toggleMenu();
  });
});
