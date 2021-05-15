"use strict";
console.log('Sending...');
// Decalaration for variables and parameters are a bit different.
// For variables TS can track the type. That's not the case when the function 
// is created first. Therefore assign data:string
let logged;
function sendAnalytics(data) {
    console.log(data);
    logged = true;
    console.log(logged);
}
sendAnalytics('Hey!!');
