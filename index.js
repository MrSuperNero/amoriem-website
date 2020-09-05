function landingArrow() {
    $("#arrow").mouseenter(function(){
        $("#arrow-caption").fadeTo("fast", 1);
    });
    $("#arrow").mouseleave(function(){
        $("#arrow-caption").fadeTo("fast", 0);
    });
}

$(document).ready(function(){
    landingArrow();
});