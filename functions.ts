function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 2));

// let combValues: Function;
let combValues: (a: number, b: number) => number;

combValues = add;

console.log(combValues(1, 2));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
