"use strict";
function addFunc(n1, n2, showRes, phrase) {
    var result = n1 + n2;
    if (showRes) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.5;
var printRes = true;
var resPhrase = ' Result is: ';
var res = addFunc(number1, number2, printRes, resPhrase);
