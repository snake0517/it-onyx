async function ShowResults() {
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

   
            
 
        /* URL for AJAX Call */
        var myURL2 = "https://api.polygon.io/v2/aggs/ticker/C:"  + BaseCurrency + ConvertCurrency + "/range/1/day/" + FromDate + "/" + ToDate + "?adjusted=true&sort=asc&limit=32&apiKey=" + apiKey;
        /* Make the AJAX call */
        var msg2Object = await fetch(myURL2);
        /* Check the status */
        if (msg2Object.status >= 200 && msg2Object.status <= 299) {            
            var msg2JSONText = await msg2Object.text();
            // Parse the JSON string into an object
            var msg2 = JSON.parse(msg2JSONText);
            /* Your code to process the result goes here - 
               display the returned message */
                /* Your code to process the result goes here  
                    display the returned message */
                var currencydate = [];
                var currencyvalue = [];
                
                var numdays = msg2.results.length;
                if (numdays > 0) {
                    for (var i = 0; i < numdays; i++) {
                        /* stock close value */
                        currencyvalue[i] = msg2.results[i].c;
                        /* stock volume */
                        
                        /* date is in Unix milleseconds - create a temporary date variable */
                        var tempdate = new Date(msg2.results[i].t);
                        /* extract the date string from the value */
                        currencydate[i] = tempdate.toLocaleDateString();
                    }
                }

                

                var ctx0 = document.getElementById("chartjs-0");
                var myChart = new Chart(ctx0, {
                    "type":"line",
                    "data": {
                        "labels": currencydate,
                        "datasets":[{"label":"Stock Close",
                        "data": currencyvalue,
                        "fill":false,
                        "borderColor":"rgb(75, 192, 192)",
                        "lineTension":0.1}]},
                        "options":{ 
                            responsive: false,
                            maintainAspectRatio: true,
                        }
                    }
                );
                
                
            
        }
        else {
            /* AJAX completed with error - probably invalid stock ticker symbol */
            alert("Stock Not Found - Status: " + msg2Object.status)
            return
        }
    }
}

function ClearForm() {
    document.getElementById("BaseCurrency").value = "";
    document.getElementById("ConvertCurrency").value = "";
    document.getElementById("FromDate").value = "";
    document.getElementById("ToDate").value = "";
    
    document.getElementById("StockValueTable").innerHTML = "";
    
    
    /* Ugly Code to Erase Canvas */
    var canvas0 = document.getElementById("chartjs-0");
    var context0 = canvas0.getContext('2d');    
    context0.clearRect(0, 0, canvas0.width, canvas0.height);
    
}