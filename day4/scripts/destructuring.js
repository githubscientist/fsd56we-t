/*
    Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
*/

// without destructuring

// let book = ['The Hobbit', 'J.R.R. Tolkien', 293, 'Fantasy'];

// let title = book[0];
// let author = book[1];
// let pages = book[2];
// let genre = book[3];

// console.log(title);
// console.log(author);
// console.log(pages);
// console.log(genre);

// ------------------------------------------------

// with destructuring

// let book = ['The Hobbit', 'J.R.R. Tolkien', 293, 'Fantasy'];

// // let [title, author, pages, genre] = [book[0], book[1], book[2], book[3]];
// let [title, author, pages, genre] = book;

// console.log(title);
// console.log(author);
// console.log(pages);
// console.log(genre);

// ------------------------------------------------

// let book = ['The Hobbit', 'J.R.R. Tolkien', 293, 'Fantasy'];

// let [title, author] = book;

// console.log(title);
// console.log(author);

// ------------------------------------------------

// let book = ['The Hobbit', 'J.R.R. Tolkien', 293, 'Fantasy'];

// let [, , pages, genre] = book;

// console.log(pages);
// console.log(genre);

// ------------------------------------------------

// let book = ['The Hobbit', 'J.R.R. Tolkien', 293, 'Fantasy'];

// let [title, ...details] = book;

// console.log(title);
// console.log(details);

// ------------------------------------------------

// let book = {
//     title: 'The Hobbit',
//     author: 'J.R.R. Tolkien',
//     pages: 293,
//     genre: 'Fantasy'
// }

// // let title = book.title;
// // let author = book.author;

// let { title, author, pages, genre } = book;

// console.log(title);
// console.log(author);
// console.log(pages);
// console.log(genre);

// ------------------------------------------------

// let book = {
//     title: 'The Hobbit',
//     author: 'J.R.R. Tolkien',
//     pages: 293,
//     genre: 'Fantasy'
// }

// console.log({...book});

// console.log(heading);
// console.log(writer);
// console.log(pages);
// console.log(genre);

// console.log({
//     heading,
//     writer,
//     pages,
//     genre
// })

let book = {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    pages: 293,
    genre: 'Fantasy'
}

let { title, author, pages, genre } = book;

// let newBook = {
//     title: title,
//     author: author,
//     pages: pages,
//     genre: genre
// }

// object property shorthand
let newBook = {
    title,
    author,
    pages,
    genre
}

console.log(newBook);