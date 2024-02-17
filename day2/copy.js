/* 

    Copy by Value: 

        - Copy by value is when we copy the value of a variable to another variable.
        - Changes made to the copied variable will not affect the original variable.

*/

// let x = 5;

// let y = x;

// y = 10;

// console.log('x =', x);
// console.log('y =', y);

/*
    Copy by Reference:

        - Copy by reference is when we copy the reference of a variable to another variable.
        - Changes made to the copied variable will affect the original variable.
*/

// let a = [1, 2, 3];

// let b = a; // shallow copy

// b[0] = 10;

// a[1] = 12;

// console.log('a =', a);
// console.log('b =', b);

// deep copy or (copy by value in an object)

// let a = [1, 2, 3];

// let b = a.slice(); // deep copy

// b[0] = 10;

// a[1] = 12;

// console.log('a =', a);
// console.log('b =', b);

// copy by reference

let book1 = {
    name: "dsa",
    author: "sathish"
}

let book2 = book1; // shallow copy
// let book2 = { ...book1 }; // deep copy

book2.name = "cs"
book2.author = "krish";

console.log(book1);
console.log();
console.log(book2);