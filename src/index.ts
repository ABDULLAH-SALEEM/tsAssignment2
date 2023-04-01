abstract class Vehicle {
    private make: string;
    private model: string;
    private year: number;
    private rented: boolean;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.rented = false;
    }
  
    getMake(): string {
      return this.make;
    }
  
    getModel(): string {
      return this.model;
    }
  
    getYear(): number {
      return this.year;
    }
  
    getRented(): boolean {
      return this.rented;
    }
  
    setRented(rented: boolean): void {
      this.rented = rented;
    }
  
    abstract rentalRate(): number;
  
    rent(): void {
      if (this.rented) {
        console.log("Sorry, this vehicle is already rented.");
      } else {
        this.rented = true;
        console.log("Vehicle rented.");
      }
    }
  
    returnVehicle(): void {
      if (!this.rented) {
        console.log("This vehicle has not been rented yet.");
      } else {
        this.rented = false;
        console.log("Vehicle returned.");
      }
    }
  }
  
  class Car extends Vehicle {
    private numDoors: number;
  
    constructor(make: string, model: string, year: number, numDoors: number) {
      super(make, model, year);
      this.numDoors = numDoors;
    }
  
    rentalRate(): number {
      return 50;
    }
  }
  
  class Truck extends Vehicle {
    private payloadCapacity: number;
  
    constructor(make: string, model: string, year: number, payloadCapacity: number) {
      super(make, model, year);
      this.payloadCapacity = payloadCapacity;
    }
  
    rentalRate(): number {
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
  