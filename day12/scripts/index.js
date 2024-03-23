// const btn4 = document.getElementById('btn4');
const btn4 = document.querySelector('#btn4'); // select by id

btn4.style.backgroundColor = 'red';
btn4.style.color = 'white';

const btn1 = document.querySelector('button'); // select by tag

btn1.style.backgroundColor = 'blue';
btn1.style.color = 'white';

// console.log(btn1);

const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++){
    if(buttons[i].style.backgroundColor !== 'blue' && buttons[i].style.backgroundColor !== 'red'){
        buttons[i].style.backgroundColor = 'green';
        buttons[i].style.color = 'white';
    }
}

// console.log(buttons);

/*
    1. Create a unordered list with the list items content of your favorite foods.

    favoriteFoods = ['Pizza', 'Burger', 'Pasta', 'Fried Chicken', 'Ice Cream', 'Donut', 'Cake', 'Fries', 'Shawarma', 'Tacos']

*/

const container = document.querySelector('#container');

favoriteFoods = ['Pizza', 'Burger', 'Pasta', 'Fried Chicken', 'Ice Cream', 'Donut', 'Cake', 'Fries', 'Shawarma', 'Briyani'];

// create an unordered list
const foodsList = document.createElement('ul');

favoriteFoods.forEach(food => {
    const foodItem = document.createElement('li');
    foodItem.innerText = food;
    foodsList.appendChild(foodItem);
});

container.appendChild(foodsList);

/*
    Exercise: 

    From the above created list of favorite foods, change the text color of the odd list items to red and the even list items to blue.
*/

// const foodItems = document.querySelectorAll('li');

// // console.log(foodItems);

// for (let index = 0; index < foodItems.length; index++){
//     if (index % 2 == 0) {
//         foodItems[index].style.color = 'red';
//     } else {
//         foodItems[index].style.color = 'blue';
//     }
// }