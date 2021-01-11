document.addEventListener("DOMContentLoaded", function () {
  // header的显示和隐藏
  var content = document.querySelector(".box_content");
  var header = document.querySelector(".header");
  var youthWrap = document.querySelector(".youth_wrap");
  // header的显示和隐藏
  window.addEventListener("scroll", function () {
    if (window.pageYOffset >= content.offsetTop) {
      header.className = "header_fixed";
    } else {
      header.className = "header";
    }
  });
  // 底部三个图标动画效果
  window.addEventListener("scroll", function () {
    if (window.pageYOffset >= 3300) {
      youthWrap.style.display = "block";
    } else {
      youthWrap.style.display = "none";
    }
  });

  // header选项背景颜色切换
  var headerNav = document.querySelector(".header_nav");
  for (var i = 0; i < headerNav.children.length; i++) {
    headerNav.children[i].addEventListener("mouseover", function () {
      for (var i = 0; i < headerNav.children.length; i++) {
        headerNav.children[i].className = "";
      }
      this.className = "current";
    });
    headerNav.children[i].addEventListener("mouseout", function () {
      for (var i = 0; i < headerNav.children.length; i++) {
        headerNav.children[i].className = "";
      }
      headerNav.children[0].className = "current";
    });
  }

  // 登录框的显示和隐藏
  var loginBtn = document.querySelector("#loginBtn");
  var close = document.querySelector(".close");
  var login = document.querySelector(".login");
  loginBtn.addEventListener("click", function () {
    login.style.display = "block";
    $(".login_bg").fadeIn();
  });
  close.addEventListener("click", function () {
    login.style.display = "none";
    $(".login_bg").fadeOut();
  });

  // banner切换
  $(".circle li").mouseover(function () {
    $(this).addClass("on").siblings().removeClass("on");
    var index = $(this).index();
    $(".banner_ul li")
      .eq(index)
      .stop()
      .fadeIn(800)
      .siblings()
      .stop()
      .fadeOut(800);
  });
});
