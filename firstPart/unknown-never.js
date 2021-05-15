"use strict";
// 'unknown' may need type-check to be assigned
// While 'any' doesn't
var userInput;
var userName;
userInput = 5;
userInput = 'Jojje';
if (typeof userInput === 'string') {
    userName = userInput;
}
console.log(userInput);
// let userInput: any;
// let userName: string;
// userInput = 5;
// userInput = 'Jojje';
//   userName = userInput;
// This function will 'never' return anything. Script is cancelled
function generateError(message, code) {
    throw { message: message, errorCode: code };
    //while (true ) {}
}
generateError('Oops, error happened', 400);
// let result = generateError('Oops, error happened', 400);
// console.log(result);
