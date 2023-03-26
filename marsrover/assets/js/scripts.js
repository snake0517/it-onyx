async function GoSearch() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $("#myform");
    
    // Validate all of the for elements
    form.validate();
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        var photoDate = document.getElementById("PicDate").value;
        var apiKey = "5YsKTo6bD3QOoi8sA3g4Hxzl6D2IXfzdiof3vMNk";

        var roverChoice;
        if (document.getElementById("Curiosity").checked) {
            roverChoice = document.getElementById("Curiosity").value;
        }
        if (document.getElementById("Opportunity").checked) {
            roverChoice = document.getElementById("Opportunity").value;
        }
        if (document.getElementById("Spirit").checked) {
            roverChoice = document.getElementById("Spirit").value;
        }

        var myURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + roverChoice + "/photos?earth_date=" + photoDate + "&page=1&api_key=" + apiKey;
 
    }
}
function clearform() {
    
}

function getCuriosity() {
    document.getElementById("PicDate").value = "2012-08-06";
}

function getOpportunity() {
    document.getElementById("PicDate").value = "2004-01-26";
}

function getSpirit() {
    document.getElementById("PicDate").value = "2004-01-05";
}