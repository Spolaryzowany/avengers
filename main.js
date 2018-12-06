$(document).scroll(function(){
    if($(this).scrollTop() != 0) $('header').css('height','74px');
    else $('header').css('height','0');
})

$('header ul li').click(function(){
    var $scrollNumber = $(this).attr('data-scroll');
    if($scrollNumber != 0) $scrollNumber -= 74; 
    $('html').animate({scrollTop: $scrollNumber + 'px'},1000);
})