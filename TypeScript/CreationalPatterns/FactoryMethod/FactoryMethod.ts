/**
 * Factory method is a creational design pattern which solves the problem of 
 * creating product objects without specifying their concrete classes.
 */

export abstract class TransportCreator {
    public abstract factoryMethod(): Transport;

    public someDeliver(): string{
        const transport = this.factoryMethod();
        return `TransportCreator: The same creator's code has just worked with ${transport.deliver()}`;
    }
}

interface Transport {
    deliver(): string;
}

export class TruckCreator extends TransportCreator {
    public factoryMethod(): Transport {
        return new Truck();
    }
}

class Truck implements Transport {
    public deliver(): string {
        return '{Result of the Truck}';
    }
}

export class ShipCreator extends TransportCreator {
    public factoryMethod(): Transport {
        return new Ship();
    }
}

class Ship implements Transport {
    deliver(): string {
        return '{Result of the Ship}'; 
    }
}