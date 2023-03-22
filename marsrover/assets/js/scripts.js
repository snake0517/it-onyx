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
        var myMethod = "GET";

        $(document).ready(function () {

            $.ajax({
                method: myMethod,
                url: myURL
            })

                .done(function (msg) {

                    var numphotos = msg.photos.length;
                    if (numphotos > 0) {
                        for (var i = 0; i < 25; i++) {
                            if (i < numphotos) {
                                document.getElementById("mars1" + i).src = msg.photos[i].img_src;
                                document.getElementById("mars1" + i).title = msg.photos[i].camera.full_name;
                                document.getElementById("rover1" + i).href = msg.photos[i].img_src;
                                document.getElementById("text1").innerHTML = msg.photos.length + " photos found";
                                document.getElementById("text2").innerHTML = "Click a photo to display full size";
                            }

                            else {
                                document.getElementById("rover1" + i).src = "#";
                                document.getElementById("anchor" + i).href = "#";
                                document.getElementById("mars1" + i).style.display = "none";
                            }
                        }
                    }
                })

                .fail(function (msg) {
                    alert("Rover Not Found - Status: " + msg.status);
                });
        });
    }
}

function clearform() {
    for (var i = 0; i < 25; i++) {
        document.getElementById("Curiosity").checked = false;
        document.getElementById("Opportunity").checked = false;
        document.getElementById("Spirit").checked = false;
        document.getElementById("PickDate").value = "";
        document.getElementById("roverError").innerHTML = "";
        document.getElementById("PicDateError").innerHTML = "";
        document.getElementById("rover1" + i).src = "#";
        document.getElementById("anchor" + i).href = "";
        document.getElementById("mars1" + i).title = "";
        document.getElementById("text1").innerHTML = "";
        document.getElementById("text2").innerHTML = "";
    }
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