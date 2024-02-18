class Car {
    constructor(number) {
        this.number = number;
    }

    findCity() {
        let cities = {
            "66": "COIMBATORE",
            "37": "CHENNAI",
            "31": "MADURAI"
        }
        return cities[this.number.split(' ')[1]];
    }

    toString() {
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
for (let index = 0; index < cars.length; index++){
    cars[index].toString();
}