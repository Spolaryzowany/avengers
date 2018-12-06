$(document).scroll(function(){
    var $scrollTop = $(this).scrollTop();

    if($scrollTop != 0) $('header').css('height','74px');
    else $('header').css('height','0');

    if($scrollTop >= 0 && $scrollTop < 900 - 75){
        $('header ul li:eq(0) div').css('width','100%');
        $('header ul li:eq(1) div').css('width','0');
    }
    else if($scrollTop >= 900 - 75 && $scrollTop < 1900 - 75){
        $('header ul li:eq(0) div').css('width','0');
        $('header ul li:eq(1) div').css('width','100%');
        $('header ul li:eq(2) div').css('width','0');
    }

    else if($scrollTop >= 1900 - 75 && $scrollTop < 2600 - 75){
        $('header ul li:eq(1) div').css('width','0');
        $('header ul li:eq(2) div').css('width','100%');
        $('header ul li:eq(3) div').css('width','0');
    }

    else if($scrollTop >= 2600 - 75 && $scrollTop < 3350 - 75){
        $('header ul li:eq(2) div').css('width','0');
        $('header ul li:eq(3) div').css('width','100%');
        $('header ul li:eq(4) div').css('width','0');
    }

    else{
        $('header ul li:eq(3) div').css('width','0');
        $('header ul li:eq(4) div').css('width','100%');
    }
})

$('header ul li').click(function(){
    var $scrollNumber = $(this).attr('data-scroll');
    if($scrollNumber != 0) $scrollNumber -= 74; 
    $('html').animate({scrollTop: $scrollNumber + 'px'},1000);
})