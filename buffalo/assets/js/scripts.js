 async function calculate() {
/* URL for AJAX Call */
var myURL2 = "https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=07055660,%2007055646,%2007055780,%2007055680&period=P7D&parameterCd=00065&siteStatus=all"
/* Make the AJAX call */
var msg2Object = await fetch(myURL2);
/* Check the status */
var msg2JSONText = await msg2Object.text();

var msg2 = JSON.parse(msg2JSONText);
}