/**
 * Antipattern. Don't do this crap!
 */
function dat_functionality() {
    var saved_val;
    if ($("#somelement").val()==="some text") {
        $("#somelement").show()
        saved_val = $("#somelement").val();
        $("#somelement").animate();
        $("#somelement").hide();
    }

    if ($("#anotherelement").val()==="some text") {
        $("#anotherelement").hide()
        saved_val = $("#anotherelement").val();
        $("#anotherelement").toggle();
        $("#anotherelement").hide();
    }
}

/**
 What you should be doing.
 Make the variable names descriptive about what they contain! Use chaining!
*/

function dat_functionality() {
    var saved_val;
    var someelement = $("#someelement");
    var anotherelement = $("#anotherelement");

    if (someelement.val()==="some text") {
        saved_val = someelement.animate().show().val();
    }

    if (anotherelement.val()==="some other text") {
        saved_val = anotherelement
                        .toggle()
                        .hide()
                        .val();
    }
}