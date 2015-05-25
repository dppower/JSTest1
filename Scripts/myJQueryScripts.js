$(document).ready(function ()
{
    function resetRedp()
    {
        $("#redp").css("color", "");
    }

    $("#redp")
        .mouseenter(function () 
        {
            $(this).css("color", "red");
        }
        )
        .mouseleave(function ()
        {
            resetRedp();
        }
        )
}
)