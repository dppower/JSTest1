$(document).ready(function ()
{
    var toggleState = true;

    $("#toggle").click(function ()
    {
        if (toggleState)
        {
            $("#demo").css("color", "red");
            $("#demo").css("font-size", "20px");
            toggleState = false;
        } else {
            $("#demo").css("color", "");
            $("#demo").css("font-size", "");
            toggleState = true;
        }
    })
})