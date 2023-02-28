function calculate() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $( "#myform" );
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        // Operand 1
        var fromvalue = document.getElementById("FromValue").value;

        // Operator
        // Get the value associated with the operator that was checked
        var fromoperator;
        if (document.getElementById("FromCenOperator").checked) {
            fromoperator = document.getElementById("FromCenOperator").value;
        }
        if (document.getElementById("FromMetOperator").checked) {
            fromoperator = document.getElementById("FromMetOperator").value;
        }
        if (document.getElementById("FromKiloOperator").checked) {
            fromoperator = document.getElementById("FromKiloOperator").value;
        }
        if (document.getElementById("FromIncOperator").checked) {
            fromoperator = document.getElementById("FromIncOperator").value;
        }
        if (document.getElementById("FromFeetOperator").checked) {
            fromoperator = document.getElementById("FromFeetOperator").value;
        }
        if (document.getElementById("FromYardsOperator").checked) {
            fromoperator = document.getElementById("FromYardsOperator").value;
        }
        if (document.getElementById("FromMilesOperator").checked) {
            fromoperator = document.getElementById("FromMilesOperator").value;
        }
        
        var tooperator;
        if (document.getElementById("ToCenOperator").checked) {
            tooperator = document.getElementById("ToCenOperator").value;
        }
        if (document.getElementById("ToMetOperator").checked) {
            tooperator = document.getElementById("ToMetOperator").value;
        }
        if (document.getElementById("ToKiloOperator").checked) {
            tooperator = document.getElementById("ToKiloOperator").value;
        }
        if (document.getElementById("ToIncOperator").checked) {
            tooperator = document.getElementById("ToIncOperator").value;
        }
        if (document.getElementById("ToFeetOperator").checked) {
            tooperator = document.getElementById("ToFeetOperator").value;
        }
        if (document.getElementById("ToYardsOperator").checked) {
            tooperator = document.getElementById("ToYardsOperator").value;
        }
        if (document.getElementById("ToMilesOperator").checked) {
            tooperator = document.getElementById("ToMilesOperator").value;
        }
        
        CalculateResult(fromvalue, fromoperator, tooperator);
    }
}

async function CalculateResult(fromvalue, fromoperator, tooperator) {
        
        // URL and method used with AJAX Call
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";

        /* AJAX calculator requires Operand1, Operator, and Operand2 */
        myURL = myURL + "?FromValue=" + encodeURIComponent(fromvalue) + "&FromUnit=" + encodeURIComponent(fromoperator) + "&ToUnit=" + encodeURIComponent(tooperator);

        /* fetch the results */
        let myCalcObject = await fetch(myURL);
        let myResult = await myCalcObject.text();
        
        document.getElementById("Result").innerHTML = myResult;
}

function clearform() {
    "use strict";
    
    /* Set all of the form values to blank or false */
    document.getElementById("FromValue").value = "";
    document.getElementById("FromValueMsg").innerHTML = "";
    document.getElementById("FromOperatorMsg").innerHTML = "";
    document.getElementById("ToOperatorMsg").innerHTML = "";
    document.getElementById("FromCenOperator").checked = false;
    document.getElementById("FromMetOperator").checked = false;
    document.getElementById("FromKiloOperator").checked = false;
    document.getElementById("FromIncOperator").checked = false;
    document.getElementById("FromFeetOperator").checked = false;
    document.getElementById("FromYardsOperator").checked = false;
    document.getElementById("FromMilesOperator").checked = false;
    document.getElementById("ToCenOperator").checked = false;
    document.getElementById("ToMetOperator").checked = false;
    document.getElementById("ToKiloOperator").checked = false;
    document.getElementById("ToIncOperator").checked = false;
    document.getElementById("ToFeetOperator").checked = false;
    document.getElementById("ToYardsOperator").checked = false;
    document.getElementById("ToMilesOperator").checked = false;
    document.getElementById("Result").innerHTML = "";
}

$( "#myform" ).validate({

});