$(function () {
    //图片轮换
    (function () {
        index = 0;
        var arr = new Array();
        arr.push("images/01-1.jpg");
        arr.push("images/01-2.jpg");
        arr.push("images/01-3.jpg");
        var changeImg = function () {
            $(".bg_img").css("background-image", "url(" + arr[index] + ")")
            index = (index + 1) % arr.length;
        };
        setInterval(changeImg, 2500);
    })(this)
    //判断input val是否满足正则表达式
    function judgeRg(rg, val, i) {
        if (rg.test(val)) {
            $('.psw_all div').eq(i).children('.iconfont').addClass('right')
            $('.psw_all div').eq(i).addClass('right')
        } else {
            $('.psw_all div').eq(i).children('.iconfont').removeClass('right')
            $('.psw_all div').eq(i).removeClass('right')
        }
    }
    $('.logo_liang ,.lang_hide').on({
        mouseenter: function () {
            $('.lang_hide').show()
        },
        mouseleave: function () {
            $('.lang_hide').hide()
        }
    })
    $('.lang_btn').on({
        mouseenter: function () {
            $(this).css('background-color', 'skyblue')
        },
        mouseleave: function () {
            $(this).css('background-color', '#fff')
        }
    })
    $('.lang ,.lang_ul').on({
        mouseenter: function () {
            $('.lang span').css('transform', 'rotate(180deg)')
            $('.lang_ul').show()
        },
        mouseleave: function () {
            $('.lang_ul').hide()
            $('.lang span').css('transform', 'rotate(0deg)')

        }
    })

    //昵称
    $('.input .username input').on({
        focus: function () {
            $('.input .username_span').stop().slideUp('fast')
            $('.input .username').css('border', "1px solid skyblue")
            $('.img_right').hide()
        },
        blur: function () {

            if (checkUser() == false) {
                $('.input .username_span').stop().slideDown('fast').addClass('wrong').removeClass('right');
                $('.input .username').css('border', "1px solid red")
            } else {
                $('.input .username_span').stop().slideDown('fast').addClass('right').removeClass('wrong');
                $(".username .img_right").show()
            }
        }
    })
    //密码 
    var w = true;
    //密码眼睛显示隐藏
    $('.input .psw_eye').on({
        mousedown: function () {
            w = false;
            $('.input .psw input').prop('type', "text")
            $(this).css('background-image', 'url(images/eye@2x.png)')
            console.log(w);
        },
        mouseup: function () {
            $('.input .psw input').prop('type', "password")
            $(this).css('background-image', 'url(images/eye-close@2x.png)')
            $('.input .psw input').focus()
            w = true;
            console.log(w);
        }
    })
    $('.input .psw_eye').hide()
    $('.psw_all div').eq(0).addClass('right')
    $('.psw_all div').eq(0).children('.iconfont').addClass('right')

    $('.input .psw input').on({
        focus: function () {
            if (w) {
                $('.input .psw_all').stop().slideDown('fast');
                $('.input .psw_span').hide()
                $('.input .psw').css('border', "1px solid skyblue")
            }
        },
        blur: function () {
            console.log(1);
            if (w) {
                console.log(0);
                if (checkPwd() == false) {
                    $('.input .psw_all').hide()
                    $('.input .psw_span').stop().slideDown('fast').addClass('wrong').removeClass('right');
                    $('.input .psw').css('border', "1px solid red")
                } else {
                    $('.input .psw_span').stop().slideDown('fast').addClass('right').removeClass('wrong');
                    $('.input .psw_all').hide()
                }
            }
        },
        input: function () {
            $('.input .psw_eye').show()
            $(this).val() == '' ? $('.psw .cv').show().parent().siblings('.psw_eye').hide() : $(this).siblings('.cv').hide().parent().siblings('.psw_eye').show()
            var rg1 = /^[\S]+$/
            var rg2 = /^\S{8,16}$/
            var rg3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{3,}$/
            if (rg1.test($(this).val())) {
                $('.psw_all div').eq(0).children('.iconfont').addClass('right')
                $('.psw_all div').eq(0).addClass('right')
            } else {
                $('.psw_all div').eq(0).removeClass('right')
                $('.psw_all div').eq(0).children('.iconfont').removeClass('right')
            }


            judgeRg(rg1, $('.input .psw input').val(), 0)
            judgeRg(rg2, $('.input .psw input').val(), 1)
            judgeRg(rg3, $('.input .psw input').val(), 2)
        }
    })


    //手机号码

    $('.yzma').hide()
    $('.phone_num input').focus(function () {
        $('.yzma').stop().slideDown()
        $('.input .phone_num').css('border', "1px solid skyblue")
    })
    $('.phone_num input').blur(function () {
        if ($('.phone_num input').val().trim() == '') {
            $('.yzma').hide()
            // $('.phone_num .cv').show()
            $('.ts_wd').html('可通过该手机号找回密码').removeClass('wrong')
            $('.yzma_btn button').css('background-color', "rgb(27, 141, 223)")
            $('.phone_num').css('border', "1px solid #ccc");

        }
        else if (checkMobile() == false) {
            $('.ts_wd').stop().slideDown().addClass('wrong').removeClass('right')
            $('.phone_num').css('border', "1px solid red");
            $('.yzma_num input').blur()
            $('.yzma_btn button').css('background-color', "#ccc")
        } else if (checkMobile()) {
            $('.ts_wd').addClass('right').removeClass('wrong')
            $('.yzma_btn button').css('background-color', "rgb(27, 141, 223)")
            $('.phone_num').css('border', "1px solid #ccc");
        }

    })
    //手机验证码
    // $('.yzma_num input').focus(function () {
    // })
    //昵称，密码，手机号码，短信验证码提示信息
    $('.input .username input,.phone_num input').on({
        input: function () {
            $(this).val() == '' ? $(this).siblings('.cv').show() : $(this).siblings('.cv').hide()
        }
    })
    //其他样式
    $('.btn_lg').hover(
        function () { $(this).css('background-color', "rgb(41, 92, 209)") },
        function () { $(this).css('background-color', "rgb(27, 141, 223)") })

    $('.link_free').hover(
        function () { $(this).children().css('color', "rgb(41, 92, 209)") },
        function () { $(this).children().css('color', "rgb(27, 141, 223)") })

    var flag = true;
    $('.checked .tg').click(function () {
        if (flag) {
            $('.contract').css("visibility", "visible")

            $('.contract').stop().fadeIn()
            $(this).css('transform', 'rotate(180deg)')
            flag = false;
        } else {
            $('.contract').css("visibility", "hidden")
            $(this).css('transform', 'rotate(0deg)')
            flag = true
        }
    })
})




