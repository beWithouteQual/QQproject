$(function() {
    $(".youxi").mouseover(function() {
        $(".navbar-subnav").show().find(".left").show().siblings().hide();
    });
    $(".youxi").mouseout(function() {
        $(".navbar-subnav").hide();
    });
    $(".chengzhang").mouseover(function() {
        $(".navbar-subnav").show().find(".right").show().siblings().hide();
    });
    $(".chengzhang").mouseout(function() {
        $(".navbar-subnav").hide();
    });
    $(".navbar-subnav").mouseover(function() {
        $(this).show();
    });
    $(".navbar-subnav").mouseout(function() {
        $(this).hide();
    });
    $(".status-login,.inner-text,.kaitong").click(function() {
        $(".fangqi").css({
            display: "block",
        });
    });
    $(".guanbi").click(function() {
        $(".fangqi").css({
            display: "none",
        });
    });
    // swiper开始
    var swiper = new Swiper(".swiper-container", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
        simulateTouch: false,
    });

    var comtainer = document.querySelector(".swiper-container");
    comtainer.onmouseenter = function() {
        swiper.autoplay.stop();
    };
    // 鼠标离开 继续轮播
    comtainer.onmouseleave = function() {
        swiper.autoplay.start();
    };
    // swiper结束
    $(".active-list li").mouseover(function() {
        $(this).find("img").css({
            transform: "translateY(-6px)",
        });
    });
    $(".active-list li").mouseout(function() {
        $(this).find("img").css({
            transform: "translateY(0)",
        });
    });

    var navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function() {
        if (window.pageYOffset > navbar.offsetHeight) {
            $(".footer-bar").stop().slideDown();
        } else {
            $(".footer-bar").stop().hide();
        }
    });
    $(".footer-icon").each(function(i, ele) {
        $(ele).css({
            backgroundPositionY: -i * 100,
        });
    });
    $(".ui-footer li").mouseenter(function() {
        $(this).find(".footer-icon").css({
            backgroundPositionX: -100,
        });
    });
    $(".ui-footer li").mouseleave(function() {
        $(this).find(".footer-icon").css({
            backgroundPositionX: 0,
        });
    });
    $(".erweima").mouseenter(function() {
        $(this).find(".qrcode").stop().show();
    });
    $(".erweima").mouseleave(function() {
        $(this).find(".qrcode").stop().hide();
    });
});