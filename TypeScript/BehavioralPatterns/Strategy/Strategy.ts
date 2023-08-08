/**
 * Strategy is a behavioral design pattern that turns a set of behaviors into objects 
 * and makes them interchangeable inside original context object.
 * 
 * The original object, called context, holds a reference to a strategy object. 
 * The context delegates executing the behavior to the linked strategy object. 
 * In order to change the way the context performs its work, other objects 
 * may replace the currently linked strategy object with another one.
 * 
 * Identification: Strategy pattern can be recognized by a method that lets 
 * a nested object do the actual work, as well as a setter that allows 
 * replacing that object with a different one.
 */

class Treansfer {
    constructor(private vehicle: Vehicle){
        this.vehicle = vehicle;
    }

    public chooseVehicle(vehicle: Vehicle): void{
        this.vehicle = vehicle;
    }

    public startTravel(destination: string):void{
        console.log('Treansfer: Treavel has been being started.');
        this.vehicle.go(destination);
    }
}

class Context {
    constructor(private strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public doSomeBusinessLogic(): void {
        console.log('Context: Sorting data using the strategy (not sure how it\'ll do it)');
        const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
        console.log(result.join(','));
    }
}


interface Vehicle {
    go(destination: string): void;
}

class Bus implements Vehicle {
    go(destination: string): void {
        console.log(`Treansfer: Treavel has been being started by (Bus) to ${destination}.`);        
    }
}

class Car implements Vehicle {
    go(destination: string): void {
        console.log(`Treansfer: Treavel has been being started by (Car) to ${destination}.`);        
    }
}

interface Strategy {
    doAlgorithm(data: string[]): string[];
}

class ConcreteStrategyA implements Strategy {
    doAlgorithm(data: string[]): string[] {
        return data.sort()
    }
}

class ConcreteStrategyB implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.reverse();
    }
}

const trnsfer = new Treansfer(new Car())
trnsfer.startTravel('Masal');

trnsfer.chooseVehicle(new Bus());
trnsfer.startTravel('ASP');

console.log('');

const context = new Context(new ConcreteStrategyA());
console.log('Client: Strategy is set to normal sorting.');
context.doSomeBusinessLogic();

console.log('');

console.log('Client: Strategy is set to reverse sorting.');
context.setStrategy(new ConcreteStrategyB());
context.doSomeBusinessLogic();