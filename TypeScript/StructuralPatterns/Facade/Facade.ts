/**
 * Facade is a structural design pattern that provides a simplified (but limited) 
 * interface to a complex system of classes, library or framework.
 * While Facade decreases the overall complexity of the application, 
 * it also helps to move unwanted dependencies to one place.
 * 
 * Identification: Facade can be recognized in a class that has a simple interface, 
 * but delegates most of the work to other classes. 
 * Usually, facades manage the full life cycle of objects they use.
 */

class Facade {
    constructor(protected subsystem1: Subsystem1, protected subsystem2: Subsystem2) {
        this.subsystem1 = subsystem1 || new Subsystem1;
        this.subsystem2 = subsystem2 || new Subsystem2;
    }

    public operation(): string {
        let result = 'Facade initializes subsystems:\n';
        result += this.subsystem1.operation1();
        result += this.subsystem2.operation1();
        result += 'Facade orders subsystems to perform the action:\n';
        result += this.subsystem1.operationN();
        result += this.subsystem2.operationZ();

        return result;
    }
}

class Subsystem1 {
    public operation1(): string {
        return 'Subsystem1: Ready!\n';
    }

    public operationN(): string {
        return 'Subsystem1: Go!\n';
    }
}

class Subsystem2 {
    public operation1(): string {
        return 'Subsystem2: Get ready!\n';
    }

    public operationZ(): string {
        return 'Subsystem2: Fire!';
    }
}

function clienCode(facade: Facade){
    console.log(facade.operation())
}

const subsystem1 = new Subsystem1();
const subsystem2 = new Subsystem2();
const facade = new Facade(subsystem1, subsystem2);

clienCode(facade);