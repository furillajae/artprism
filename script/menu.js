$(function(){
    $('.program div').hover(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
});
