$(document).ready(function () {
    function resetRedp(){
        this.css(color, "");
    }
    $("#redp")
    .mouseenter(function () {
        $(this).css("color", "red");
    })
    .mouseleave(function(){
        resetRedp();
    })
    );
});