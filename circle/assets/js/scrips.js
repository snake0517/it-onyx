
        $( "#CircleForm" ).validate({

        });
        
        function displayCircle() {
            // if the form is valid, then make the calculations
            if ($("#CircleForm").valid()) {
                
                 document.getElementById("diameter").innerHTML = "";

                 document.getElementById("circumference").innerHTML = "";
                 document.getElementById("area").innerHTML = "";

                 var radius; // string representation of the radius
                 var radiusfp; // floating point value of radius
                 var circumference; // floating point value of circimfrence
                 var area; // floating point value area
                 var diameter;  // floating point diameter
                 var result; // displayable result

                 // read in the radius as a string
                 radius = document.getElementById("radius").value;
                 

                 // Convert numbers from strings to Floating Point
                 radiusfp = parseFloat( radius ); 
                  

                 // calculate the diameter
                 diameter = calcDiameter(radiusfp);

                 // calculate the circumference
                 circumference = calcCircumference(radiusfp);

                 // calculate the circumference
                 area = calcArea(radiusfp);

                 // display the diameter
                 document.getElementById("diameter").innerHTML = diameter.toString();

                 // display the circumference
                 document.getElementById("circumference").innerHTML = circumference.toString();

                 // display the area
                 document.getElementById("area").innerHTML = area.toString();
            }
        }

          function calcDiameter (r)
          // returns diameter
          // two times the radius
          {
              return 2 * r;
          }
          
          function calcCircumference (r)
          // returns circumference
          // two times pi times radius
          {
              return 2 * Math.PI * r;
          }

          function calcArea (r)
          // returns circumference
          // two times pi times radius
          {
              return  Math.PI * r * r;
          }

          function clearForm()
        {
            document.getElementById("radius").value = "";
            document.getElementById("radiuserror").innerHTML = "";
            document.getElementById("area").innerHTML = "";
            document.getElementById("circumference").innerHTML = "";
            document.getElementById("diameter").innerHTML = "";
        }
 