// Understanding the basics of prototype 

/*
    {
        name
        brand
        owner
        registrationNumber
        ...
        ...
    }
*/

// let car101 = {
//     name: '',
//     brand: 'toyota',
//     owner: '',
//     number: ''

// }

// let car102 = {
//     name: '',
//     brand: 'volkswagen',
//     owner: '',
//     number: ''
// }

// let car103 = {
//     name: '',
//     brand: 'mercedes',
//     owner: '',
//     number: ''
// }

// let cars = [car101, car102, car103];

// console.log(cars[2].brand);

// -------------------------------

// function prototype
function Car(number) {
    this.number = number;

    // method
    this.findCity = function () {
        let cities = {
            "66": "COIMBATORE",
            "37": "CHENNAI",
            "31": "MADURAI"
        }
        return cities[this.number.split(' ')[1]];
    }

    this.toString = function () {
        console.log(`Car with number ${this.number} is from ${this.findCity()}`);
    }
}

let cars = [];

cars.push(new Car('TN 37 AB 0707'));
cars.push(new Car('TN 66 XY 8686'));
cars.push(new Car('TN 31 AB 1234'));
cars.push(new Car('TN 37 AB 0777'));
cars.push(new Car('TN 66 XY 1234'));
cars.push(new Car('TN 31 AB 5678'));
cars.push(new Car('TN 37 AB 0909'));

// Problem: Print all the cars
// for (let index = 0; index < cars.length; index++){
//     cars[index].toString();
// }

// Problem: Find all the cars from COIMBATORE
// for (let index = 0; index < cars.length; index++){
//     if (cars[index].findCity() === 'COIMBATORE') {
//         cars[index].toString();
//     }
// }

