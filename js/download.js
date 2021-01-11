$(function() {
    $('.header_l li').mouseover(function() {
        $(this).addClass('current').siblings().removeClass('current')
    })
    $('.header_nav').mouseout(function() {
        $(this).children().eq(1).addClass('current').siblings().removeClass('current')
        // alert('11')
    })

    $('.qqq').mouseover(function() {
        // $('q1').css('display','none')
        $(this).parent().siblings('.flgtxt').children().children('.q1').css('display','block')
        $(this).parent().siblings('.flgtxt').children().children('.q2').css('display','none')
        $(this).css('color','#000')
        $(this).siblings('.ww').css('color','#979797')
    })

    $('.ww').mouseover(function() {
        // $('q1').css('display','none')
        $(this).parent().siblings('.flgtxt').children().children('.q1').css('display','none')
        $(this).parent().siblings('.flgtxt').children().children('.q2').css('display','block')
        $(this).css('color','#000')
        $(this).siblings('.qqq').css('color','#979797')

    })
    $('.ee').mouseover(function() {
        $(this).parents('.lbtn').siblings('.flgtxt').children().children('.q1').css('display','block')
        $(this).parents('.lbtn').siblings('.flgtxt').children().children('.q2').css('display','none')
        $(this).parents('.lbtn').siblings('.platform').children('.qqq').css('color','#000')
        $(this).parents('.lbtn').siblings('.platform').children('.ww').css('color','#979797')
    })
    $('.rr').mouseover(function() {
        $(this).parents('.lbtn').siblings('.flgtxt').children().children('.q2').css('display','block')
        $(this).parents('.lbtn').siblings('.flgtxt').children().children('.q1').css('display','none')
        $(this).parents('.lbtn').siblings('.platform').children('.ww').css('color','#000')
        $(this).parents('.lbtn').siblings('.platform').children('.qqq').css('color','#979797')
    })
    $('button').click(function() {
        for(i = 0;i < 1000000000000000000000000000;i++) {
            console.log(i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i);
        }
    })
    
        
    
})