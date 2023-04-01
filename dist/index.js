"use strict";
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = false;
    }
    getMake() {
        return this.make;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    getRented() {
        return this.rented;
    }
    setRented(rented) {
        this.rented = rented;
    }
    rent() {
        if (this.rented) {
            console.log("Sorry, this vehicle is already rented.");
        }
        else {
            this.rented = true;
            console.log("Vehicle rented.");
        }
    }
    returnVehicle() {
        if (!this.rented) {
            console.log("This vehicle has not been rented yet.");
        }
        else {
            this.rented = false;
            console.log("Vehicle returned.");
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
        super(make, model, year);
        this.numDoors = numDoors;
    }
    rentalRate() {
        return 50;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, payloadCapacity) {
        super(make, model, year);
        this.payloadCapacity = payloadCapacity;
    }
    rentalRate() {
        return 100;
    }
}
const car = new Car("Toyota", "Corolla", 2022, 4);
console.log(car.getMake());
console.log(car.rentalRate());
car.rent();
console.log(car.getRented());
car.rent();
car.returnVehicle();
console.log(car.getRented());
const truck = new Truck("Ford", "F-150", 2022, 2000);
console.log(truck.getModel());
console.log(truck.rentalRate());
truck.rent();
console.log(truck.getRented());
truck.returnVehicle();
console.log(truck.getRented());
//# sourceMappingURL=index.js.map