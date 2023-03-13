async function GoSearch() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $("#myform");
    
    // Validate all of the for elements
    form.validate();
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        var BaseCurrency = document.getElementById("BaseCurrency").value;
        var ConvertCurrency = document.getElementById("ConvertCurrency").value;
        var apiKey = "5ePDCCpwAMU6RMIcigYMSSLOA5Yga2HG"
        var FromDate = document.getElementById("FromDate").value;
        var ToDate = document.getElementById("ToDate").value;

   
            
 
    }
}

function ClearForm() {
    document.getElementById("rover").value = "";
    
    document.getElementById("PicDate").value = "";
    
    document.getElementById("PicDateError").innerHTML = "";
    
    
   
    
}