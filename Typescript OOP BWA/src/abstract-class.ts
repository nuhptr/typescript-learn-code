abstract class Vehicle {
    abstract wheels: number;

    start(): void{ 
        console.log("brumm");
    }
}

class Car extends Vehicle {
    wheels: number = 4;

}

class MotorCycle extends Vehicle {
    wheels: number = 2;
}

export let car = new Car();
console.log(car.wheels);
car.start();