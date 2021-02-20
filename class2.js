class Vehicle{
    static whatIs(){                                                    //Static keyword is used to access functions of main class without creating an instance of it.
        return `A vehicle is a machine used for transportation`
    }
    constructor(brand, type, power, torque, fuel){
        this.brand = brand;
        this.type = type;
        this.power = power;
        this.torque = torque;
        this.fuel = fuel;
    }
    run(){
        return `${this.brand} runs very fast`                       //Method Overridden
    }
}

class car extends Vehicle{
    constructor(brand, type, power, torque, fuel){
        super(brand, type, power, torque, fuel)
    }
    run(){
        return `${this.brand} runs very slow`                       //Method Overriding
    }
}

var car1 = new car("Ford Mustang", "Sedan/Coupe", "401PS@6550RPM", "515Nm@4250-4300RPM", "Petrol")
var car2 = new car("Audi RS7", "Sedan/Coupe", "560PS@6600RPM", "700Nm@1750-5500rpm", "Petrol")
var car3 = new car("Jaguar XE", "Sedan", "199PS@5500RPM", "320Nm@1750rpm", "Petrol")
var car4 = new Vehicle("BMW M4", "Sedan", "431PS@7300RPM","550Nm@1850-5500rpm", "Petrol")           //Instance of the parent class

console.log(Vehicle.whatIs())                  //Use of static keyword. Static functions can be called without the need of an instance to be created.
try{
    console.log(car2.whatIs())
}
catch(err){
    console.log("whatIs() is not a function of class 'car' but a function of class 'Vehicle'")
}

console.log(car4.run())                        //Illustration of polymorphism. run() method of parent class will be called
console.log(car1.run())                        //run() method of child class will be called 

console.log(`${car1.brand} is a ${car1.type}. It has a power of ${car1.power} and torque of ${car1.torque}. It runs on ${car1.fuel}`)
console.log(`${car2.brand} is a ${car2.type}. It has a power of ${car2.power} and torque of ${car2.torque}. It runs on ${car2.fuel}`)
console.log(`${car3.brand} is a ${car3.type}. It has a power of ${car3.power} and torque of ${car3.torque}. It runs on ${car3.fuel}`)
console.log(`${car4.brand} is a ${car4.type}. It has a power of ${car4.power} and torque of ${car4.torque}. It runs on ${car4.fuel}`)
