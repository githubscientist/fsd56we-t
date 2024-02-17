/*
    var Vs let Vs const

    var
        - function-scoped
        - can be re-declared and updated
        - hoisted
        - undefined when accessed before declaration
        - not preferred over let and const
    
    let 
        - block-scoped
        - can be updated but not re-declared
        - not hoisted
        - ReferenceError when accessed before declaration
        - preferred over var (introduced in ES6)
    
    const
        - block-scoped
        - can't be re-declared or updated
        - not hoisted
        - ReferenceError when accessed before declaration
        - preferred over let and var (introduced in ES6)
*/

// if (true) {
//     var x = 10; // function scoped
//     console.log('inside block: value of x is', x);
// }

// console.log('outside block: value of x is', x);

// --------------------------

// if (true) {
//     let x = 10; // block scoped
//     console.log('inside block: value of x is', x);
// }

// console.log('outside block: value of x is', x); // this won't work

// ---------------------------
// var x = 10; // global scope

// if (true) {    
//     console.log('inside block: value of x is', x);
// }

// console.log('outside block: value of x is', x);

// ---------------------------

// var x = 10; // global scope

// if (true) {
//     x = 20; // re-defining
//     console.log('inside block: value of x is', x);
// }

// console.log('outside block: value of x is', x);

// ---------------------------

// var x = 10; // global scope

// if (true) {
//     var x = 20; // re-declared
//     console.log('inside block: value of x is', x);
// }

// console.log('outside block: value of x is', x);

// ---------------------------

// let x = 10; // global scope

// if (true) {
//     console.log('inside block: value of x is', x);
// }

// console.log('outside block: value of x is', x);

// ---------------------------

// let x = 10; // global scope

// if (true) {
//     let x = 20; // block scoped
//     console.log('inside block: value of x is', x);
// }

// console.log('outside block: value of x is', x);

// ---------------------------

// let x = 10; // global scope

// if (true) {
//     x = 20; // re-defining
//     console.log('inside block: value of x is', x);
// }

// console.log('outside block: value of x is', x);

// ---------------------------

// for (var i = 1; i <= 5; i++); // this means that the loop is empty or does not have a body
// console.log('value of i is', i);

// ---------------------------

// for (var i = 1; i <= 5; i++)
// console.log('value of i is', i);

// for (var i = 1; i <= 5; i++)
// {
//     console.log('value of i is', i);
// }

// for (var i = 1; i <= 5; i++) console.log('value of i is', i);

// ---------------------------

// for (let i = 1; i <= 5; i++); 
// console.log('value of i is', i);

// ---------------------------

// var x = 10; // declare x and initialize it with 10

// var x = 'ten'; // re-declare x and update its value

// console.log('value of x is', x);

// ---------------------------

// var x = 10; // declare x and initialize it with 10

// x = 20; // update its value

// console.log('value of x is', x);

// ---------------------------

// let x = 10; // declare x and initialize it with 10

// let x = 'ten'; // re-declare x and update its value // throws an error

// console.log('value of x is', x);

// ---------------------------

// const x = 10;

// x = 20; // throws an error

// console.log('value of x is', x);

// ---------------------------

// const x;

// x = 20; // throws an error

// console.log('value of x is', x);

// ---------------------------

// const numbers = [1, 2, 3, 4, 5];

// numbers.push(6);

// numbers.pop();
// numbers.pop();
// numbers.pop();
// numbers.pop();
// numbers.pop();
// numbers.pop();

// numbers.push(6);
// numbers.push(7, 8, 9, 10);

// numbers[0] = 5;

// console.log('numbers:', numbers);

// ---------------------------

// const numbers = [1, 2, 3, 4, 5];

// numbers = [6, 7, 8, 9, 10]; // throws an error

// console.log('numbers:', numbers);

// ---------------------------

// console.log('value of x is', x); 
// var x; // hoisted

// ---------------------------

// console.log('value of x is', x); 
// let x; // not hoisted

// ---------------------------

console.log('value of x is', x); 
const x = 10; 