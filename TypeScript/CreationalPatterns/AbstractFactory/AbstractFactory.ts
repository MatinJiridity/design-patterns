/**
 * Abstract Factory is a creational design pattern, which solves
 * the problem of creating entire product families without
 * specifying their concrete classes.   
 * It focuses on answering these questions:
 * What classes does it consist of?
 * What roles do these classes play?
 * In what way the elements of the pattern are related?
 */

/**
 * Imagine that you’re creating a furniture shop simulator.
 * Your code consists of classes that represent:
 * 1.A family of related products, say: Chair + Sofa + CoffeeTable.
 * 2.Several variants of this family. For example, products Chair + Sofa + CoffeeTable are
 * available in these variants: Modern, Victorian.
 */

// AbstractFactory
export interface FurnitureFactory{
    createChair():Chair;

    createCoffeeTable():CoffeeTable;

    createSofa(): Sofa;
}

interface Chair{
    productName():string
}


interface Sofa {
    productName(): string
    collaboratorChair(collaborator: Chair): string

}


interface CoffeeTable{
    productName(): string
}

class ModernChair implements Chair{
    productName(): string {
        return 'Modern Chair .';  
    }
}

class VictorianChair implements Chair{
    productName(): string {
        return 'Victorian Chair .';  
    }
}

class ModernSofa implements Sofa{
    productName(): string {
        return 'Modern Sofa.'; 
    }

    collaboratorChair(collaborator: Chair): string {
        const result = collaborator.productName();
        return `Modern Sofa with the (${result})` 
    }
}

class VictorianSofa implements Sofa{
    productName(): string {
        return 'Victorian Sofa .';  
    }
    collaboratorChair(collaborator: Chair): string {
        const result = collaborator.productName();
        return `Victorian Sofa with the (${result})`
    }
}

class ModernCoffeeTable implements CoffeeTable{
    productName(): string {
        return 'Modern CoffeeTable';
    }
}

class VictorianCoffeeTable implements CoffeeTable{
    productName(): string {
        return 'Victorian CoffeeTable .';  
    }
}

export class CreateModernFurniture implements FurnitureFactory{
    createChair(): Chair {
        return new ModernChair();
    }

    createSofa(): Sofa {
        return new ModernSofa();
    }

    createCoffeeTable(): CoffeeTable {
        return new ModernCoffeeTable();
    }

}

export class CreteVictorianFurniture implements FurnitureFactory{
    createChair(): Chair {
        return new VictorianChair();
    } 

    createSofa(): Sofa {
        return new VictorianSofa();
    }

    createCoffeeTable(): CoffeeTable {
        return new VictorianCoffeeTable();
    }
}


