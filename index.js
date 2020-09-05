var arrow = $("#arrow");

function landingArrow() {

    var caption= $("#arrow-caption");

    $(arrow).mouseenter(function(){
        $(caption).fadeTo("fast", 1);
    });
    $(arrow).mouseleave(function(){
        $(caption).fadeTo("fast", 0);
    });

    // On click, slides down
    arrow.on('click',function() {
        $('html,body').animate({
            scrollTop: $(".main").offset().top},
            'slow');
      
    });

}
//function that lets arrow bounce infinitely
function doAnimation(){
    arrow.effect( "bounce", {times:2}, 2500, doAnimation);
}


$(document).ready(function(){
    landingArrow();
    doAnimation();
    navMenu();
});