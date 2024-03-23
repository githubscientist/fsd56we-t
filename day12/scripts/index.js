const favoriteFoods = document.querySelector('.favoriteFoods');

const foods = ['Pizza', 'Tacos', 'Sushi', 'Burgers', 'Pasta'];

// favoriteFoods.innerHTML = '<li>Chicken Briyani</li>';

let foodList = '';

foods.forEach(food => {
    foodList = foodList + `<li>${food}</li>`;
})

// console.log(foodList);
favoriteFoods.innerHTML = foodList;

const heading = document.querySelector('.heading');

const header = document.createElement('h1');
header.textContent = 'Favorite Foods';
// header.setAttribute('class', 'red');
header.setAttribute('style', 'color: red');

const paragraph = document.createElement('p');
paragraph.textContent = 'These are some of my favorite foods';
paragraph.setAttribute('class', 'blue');

// heading.appendChild(header);
// heading.appendChild(paragraph);
heading.append(header, paragraph);

favoriteFoods.setAttribute('class', 'green');

const foodItems = document.querySelectorAll('li');

foodItems[2].remove();

console.log(foodItems);