$(function () {
  var app = document.querySelector(".app");
  var pic = document.querySelector(".pic");
  app.addEventListener("mouseenter", function () {
    pic.style.display = "block";
  });
  app.addEventListener("mouseleave", function () {
    pic.style.display = "none";
  });

  // $(".li-bg").each(function (i, ele) {
  //   $(this).mouseenter(function () {
  //     $(this).css({
  //       backgroundPositionX: -343,
  //     });
  //     $(this).find("p").css({
  //       color: "#fff",
  //     });
  //     $(this).css({
  //       backgroundColor: "#2f6ef6",
  //     });
  //     $(this)
  //       .find(".one-li")
  //       .css({
  //         backgroundPositionY: (i + 3) * -125,
  //       });
  //   });
  //   $(this).mouseleave(function () {
  //     $(this).css({
  //       backgroundPositionX: 14,
  //     });
  //     $(this).find("p").css({
  //       color: "#000",
  //     });
  //     $(this).css({
  //       backgroundColor: "#fff",
  //     });
  //     $(this)
  //       .find(".one-li")
  //       .css({
  //         backgroundPositionY: -i * 125,
  //       });
  //   });
  // });
  $(".li-bg").mouseenter(function () {
    var i = $(this).index();
    $(this).css({
      backgroundPositionX: -343,
    });
    $(this).find("p").css({
      color: "#fff",
    });
    $(this).css({
      backgroundColor: "#2f6ef6",
    });
    $(this)
      .find(".one-li")
      .css({
        backgroundPositionY: (i + 3) * -125,
      });
  });
  $(".li-bg").mouseleave(function () {
    var i = $(this).index();
    $(this).css({
      backgroundPositionX: 14,
    });
    $(this).find("p").css({
      color: "#000",
    });
    $(this).css({
      backgroundColor: "#fff",
    });
    $(this)
      .find(".one-li")
      .css({
        backgroundPositionY: -i * 125,
      });
  });
  //循环精灵图
  var sprite = document.querySelectorAll(".one-li");
  var li = document.querySelectorAll(".li-bg");
  var downI = document.querySelectorAll(".downI");
  for (var i = 0; i < sprite.length; i++) {
    sprite[i].style.backgroundPositionY = -i * 128 + "px";
    li[i].style.backgroundPositionY = -i * 262 + "px";
    downI[i].style.backgroundPositionY = -(3 - i) * 55 + "px";
  }
  $(".foot-cover").on({
    mouseenter: function () {
      $(this).find(".cover").css("display", "block");
    },
    mouseleave: function () {
      $(this).find(".cover").css("display", "none");
    },
  });

  $(".down-top").on({
    mouseenter: function () {
      $(this).css({
        backgroundColor: "#2f6ef6",
      });
      $(this).find("p").css("color", "#fff");
      $(this).find("i").css({
        backgroundPosition: "-82px -289px",
      });
    },
    mouseleave: function () {
      $(this).css({
        backgroundColor: "#f8f8f8",
      });
      $(this)
        .find(".down-title")
        .css("color", "#333")
        .siblings(".down-details")
        .css("color", "#a5a5a5");
      $(this).find("i").css({
        backgroundPosition: "-16px -290px",
      });
    },
  });

  function getTime() {
    var date = new Date();
    return date.getFullYear();
  }
  $(".nowtime").html(getTime());
});
