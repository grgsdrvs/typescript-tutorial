"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 2));
// let combValues: Function;
var combValues;
combValues = add;
console.log(combValues(1, 2));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
