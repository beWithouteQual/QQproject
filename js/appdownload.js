//此处引用：鼠标滚轮mousewheel插件

!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : "object" == typeof exports
    ? (module.exports = a)
    : a(jQuery);
})(function (a) {
  function b(b) {
    var g = b || window.event,
      h = i.call(arguments, 1),
      j = 0,
      l = 0,
      m = 0,
      n = 0,
      o = 0,
      p = 0;
    if (
      ((b = a.event.fix(g)),
      (b.type = "mousewheel"),
      "detail" in g && (m = -1 * g.detail),
      "wheelDelta" in g && (m = g.wheelDelta),
      "wheelDeltaY" in g && (m = g.wheelDeltaY),
      "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX),
      "axis" in g && g.axis === g.HORIZONTAL_AXIS && ((l = -1 * m), (m = 0)),
      (j = 0 === m ? l : m),
      "deltaY" in g && ((m = -1 * g.deltaY), (j = m)),
      "deltaX" in g && ((l = g.deltaX), 0 === m && (j = -1 * l)),
      0 !== m || 0 !== l)
    ) {
      if (1 === g.deltaMode) {
        var q = a.data(this, "mousewheel-line-height");
        (j *= q), (m *= q), (l *= q);
      } else if (2 === g.deltaMode) {
        var r = a.data(this, "mousewheel-page-height");
        (j *= r), (m *= r), (l *= r);
      }
      if (
        ((n = Math.max(Math.abs(m), Math.abs(l))),
        (!f || f > n) && ((f = n), d(g, n) && (f /= 40)),
        d(g, n) && ((j /= 40), (l /= 40), (m /= 40)),
        (j = Math[j >= 1 ? "floor" : "ceil"](j / f)),
        (l = Math[l >= 1 ? "floor" : "ceil"](l / f)),
        (m = Math[m >= 1 ? "floor" : "ceil"](m / f)),
        k.settings.normalizeOffset && this.getBoundingClientRect)
      ) {
        var s = this.getBoundingClientRect();
        (o = b.clientX - s.left), (p = b.clientY - s.top);
      }
      return (
        (b.deltaX = l),
        (b.deltaY = m),
        (b.deltaFactor = f),
        (b.offsetX = o),
        (b.offsetY = p),
        (b.deltaMode = 0),
        h.unshift(b, j, l, m),
        e && clearTimeout(e),
        (e = setTimeout(c, 200)),
        (a.event.dispatch || a.event.handle).apply(this, h)
      );
    }
  }
  function c() {
    f = null;
  }
  function d(a, b) {
    return (
      k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    );
  }
  var e,
    f,
    g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
    h =
      "onwheel" in document || document.documentMode >= 9
        ? ["wheel"]
        : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
    i = Array.prototype.slice;
  if (a.event.fixHooks)
    for (var j = g.length; j; ) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
  var k = (a.event.special.mousewheel = {
    version: "3.1.12",
    setup: function () {
      if (this.addEventListener)
        for (var c = h.length; c; ) this.addEventListener(h[--c], b, !1);
      else this.onmousewheel = b;
      a.data(this, "mousewheel-line-height", k.getLineHeight(this)),
        a.data(this, "mousewheel-page-height", k.getPageHeight(this));
    },
    teardown: function () {
      if (this.removeEventListener)
        for (var c = h.length; c; ) this.removeEventListener(h[--c], b, !1);
      else this.onmousewheel = null;
      a.removeData(this, "mousewheel-line-height"),
        a.removeData(this, "mousewheel-page-height");
    },
    getLineHeight: function (b) {
      var c = a(b),
        d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
      return (
        d.length || (d = a("body")),
        parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
      );
    },
    getPageHeight: function (b) {
      return a(b).height();
    },
    settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
  });
  a.fn.extend({
    mousewheel: function (a) {
      return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
    },
    unmousewheel: function (a) {
      return this.unbind("mousewheel", a);
    },
  });
});

$(function () {
  var i = 0;

  var $btn = $(".section-btn li"),
    $wrap = $(".section-wrap"),
    $arrow = $(".arrow");

  /*当前页面赋值*/

  function up() {
    i++;
    if (i == $btn.length) {
      i = 0;
    }
  }

  function down() {
    i--;
    if (i < 0) {
      i = $btn.length - 1;
    }
  }

  /*页面滑动*/

  function run() {
    $btn.eq(i).addClass("on").siblings().removeClass("on");

    $wrap
      .attr("class", "section-wrap")
      .addClass(function () {
        return "put-section-" + i;
      })
      .find(".section")
      .eq(i)
      .find(".title")
      .addClass("active");
  }

  /*右侧按钮点击*/

  $btn.each(function (index) {
    $(this).click(function () {
      i = index;

      run();
    });
  });

  /*响应鼠标*/

  $wrap.one("mousewheel", mouse_);

  function mouse_(event) {
    if (event.deltaY < 0) {
      up();
    } else {
      down();
    }

    run();

    setTimeout(function () {
      $wrap.one("mousewheel", mouse_);
    }, 1000);
  }

  /*响应键盘上下键*/

  $(document).one("keydown", k);

  function k(event) {
    var e = event || window.event;

    var key = e.keyCode || e.which || e.charCode;

    switch (key) {
      case 38:
        down();
        run();

        break;

      case 40:
        up();
        run();

        break;
    }

    setTimeout(function () {
      $(document).one("keydown", k);
    }, 1000);
  }
  function up() {
    if (i < $btn.length - 1) {
      i++;
    }
  }
  function down() {
    if (i > 0) {
      i--;
    }
  }
  // 鼠标滚轮判断
  $(document).on("mousewheel DOMMouseScroll", function (e) {
    if (e.originalEvent.wheelDelta) {
      //判断浏览器IE,谷歌滚轮事件
      getS();
    } else if (e.originalEvent.detail) {
      //Firefox滚轮事件
      getS();
    }
  });
  // 右侧按钮判断
  $(".section-btn li").click(function () {
    getS();
  });
  // 键盘按下判断
  $(window).on("keydown", function (e) {
    if (e.keyCode == 38 || e.keyCode == 40) {
      getS();
    }
  });
  function getS() {
    getS0();
    getS1();
    getS2();
    getS3();
    getS4();
    function getS0() {
      if ($("section").hasClass("put-section-0")) {
        $(".verbar").show();
        $(".downbtn").show();
      } else {
        $(".verbar").fadeOut();
        $(".downbtn").fadeOut();
      }
    }
    function getS1() {
      if ($("section").hasClass("put-section-1")) {
        $(".section-2 .wenzi").show();
      } else {
        $(".section-2 .wenzi").fadeOut();
      }
    }
    function getS2() {
      if ($("section").hasClass("put-section-2")) {
        $(".section-3 .wenzi").show();
      } else {
        $(".section-3 .wenzi").fadeOut();
      }
    }
    function getS3() {
      if ($("section").hasClass("put-section-3")) {
        $(".section-4 .wenzi").show();
      } else {
        $(".section-4 .wenzi").fadeOut();
      }
    }
    function getS4() {
      if ($("section").hasClass("put-section-4")) {
        $(".section-5 .wenzi").show();
      } else {
        $(".section-5 .wenzi").fadeOut();
      }
    }
  }
  // 下载弹出框的显示和隐藏
  $(".downbtn").click(function () {
    $(".masbox").fadeIn();
  });
  $(".msgclose").click(function () {
    $(".masbox").fadeOut();
  });
});
// 登录框的显示和隐藏
$("#app_login").click(function () {
  $(".login").show();
  $(".login_bg").fadeIn();
});
$(".close").click(function () {
  $(".login").hide();
  $(".login_bg").fadeOut();
});
// 更多下拉菜单
$(".more").mouseenter(function () {
  $(".morePenel").slideDown();
});
$(".more").mouseleave(function () {
  $(".morePenel").hide();
});
