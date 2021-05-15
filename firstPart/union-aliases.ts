// Union types

type Combinable = number | string;
type ConvDescriptor = 'as-number' | 'as-text';

function combine(input1:Combinable, input2:Combinable, resultConv: ConvDescriptor) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConv === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStrAges = combine('30', '26', 'as-number');
console.log(combinedStrAges);

const combinedNames = combine('Georgios', 'Saga', 'as-text');
console.log(combinedNames);
