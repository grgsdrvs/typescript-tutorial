"use strict";
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
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
var person = {
    name: 'Georgios',
    age: 31,
    hobbies: ['CF', 'Golf'],
    role: Role.ADMIN
};
var favoriteActivites;
favoriteActivites = ['Sports'];
console.log(person.hobbies);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('User is admin');
}
