// 'unknown' may need type-check to be assigned
// While 'any' doesn't

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Jojje';

if (typeof userInput === 'string') {
  userName = userInput;
}

// let userInput: any;
// let userName: string;

// userInput = 5;
// userInput = 'Jojje';
//   userName = userInput;

// This function will 'never' return anything. Script is cancelled
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };

  //while (true ) {}
}

generateError('Oops, error happened', 400);

// let result = generateError('Oops, error happened', 400);
// console.log(result);
