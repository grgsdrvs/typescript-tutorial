
function addFunc(n1: number, n2: number, showRes: boolean, phrase:string) {
  const result = n1 + n2
    if (showRes) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 2.5;
const printRes = true;
const resPhrase = ' Result is: '

var res = addFunc(number1, number2, printRes, resPhrase);
