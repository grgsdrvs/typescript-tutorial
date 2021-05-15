// const person: {
//     name: string;
//     age: number } = {
//   name: 'Georgios',
//   age: 31,
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// Enums

enum Role {ADMIN,READ_ONLY,AUTHOR};

// Objects, tuples

// const person: {
//     name: string;
//     age:number;
//     hobbies: string[];
//     role: [number,string];
// } = {
//   name: 'Georgios',
//   age: 31,
//   hobbies: ['CF', 'Golf'],
//   role: [2, 'author']
// };

const person = {
  name: 'Georgios',
  age: 31,
  hobbies: ['CF', 'Golf'],
  role: Role.ADMIN
};

let favoriteActivites: string[];
favoriteActivites = ['Sports'];

console.log(person.hobbies);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    
}

if (person.role === Role.ADMIN){
    console.log('User is admin');
    
}