// window.localStorage.setItem('name', 'John Doe');
// window.localStorage.setItem('age', 30);
// window.localStorage.setItem('isMarried', false);



// console.log(window.localStorage);
// console.log(window.localStorage.getItem('name'));

// window.localStorage.removeItem('name');
// window.localStorage.removeItem('age');
// window.localStorage.clear();

// window.localStorage.setItem('age', 45);

// const recentSearches = [
//     {
//         title: 'laptops',
//         similarSearches: ['laptops', 'laptops for sale', 'laptops under $500']
//     },
//     {
//         title: 'smartphones',
//         similarSearches: ['smartphones', 'smartphones for sale', 'smartphones under $500']
//     },
//     {
//         title: 'tablets',
//         similarSearches: ['tablets', 'tablets for sale', 'tablets under $500']
//     }
// ]

// localStorage.setItem('recentSearches', JSON.stringify(recentSearches));

const searches = JSON.parse(localStorage.getItem('recentSearches'));

console.log(searches[2]);