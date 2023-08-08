/**
 * Builder is a creational design pattern, which allows constructing 
 * complex objects step by step.
 * 
 * Usage examples: The Builder pattern is a well-known pattern in TypeScript world. \
 * It’s especially useful when you need to create an object with lots of 
 * possible configuration options.
 * 
 */


export interface Builder {
    producePartA(): void;
    producePartB(): void;
    producePartC(): void;
}

export interface HouseBuilder{
    buildWalls():void
    buildDoor():void
    buildWindow():void
}

export class ConcreteBuilder1 implements Builder {
    private product: Product1;

    constructor() {
        this.reset();
    }

    reset(): void {
        this.product = new Product1();
    }

    producePartA(): void {
        this.product.parts.push('PartA1')
    }

    producePartB(): void {
        this.product.parts.push('PartB1');
    }

    public producePartC(): void {
        this.product.parts.push('PartC1');
    }

    public getProduct(): Product1 {
        const result = this.product;
        this.reset();
        return result;
    }
}

class Product1 {
    parts: string[] = [];

    listParts(): void {
        console.log(`Product parts: ${this.parts.join(', ')}\n`);
    }
}

export class Director {
    private builder: Builder

    setBuilder(builder: Builder): void {
        this.builder = builder
    }

    buildMinimalViableProduct(): void {
        this.builder.producePartA();

    }

    public buildFullFeaturedProduct(): void {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }
}

/**
 * Builder is a creational design pattern, which allows constructing 
 * complex objects step by step.
 * 
 * Usage examples: The Builder pattern is a well-known pattern in TypeScript world. \
 * It’s especially useful when you need to create an object with lots of 
 * possible configuration options.
 * 
 */

    
export interface HouseBuilder {
    buildWalls(): void
    buildDoor(): void
    buildWindow(): void
}

export class HouseBuilder1 implements HouseBuilder {
    constructor(private house: House){}
    
    buildDoor(): void {
        this.house.parts.push('Door')
    }

    buildWalls(): void {
        this.house.parts.push('Walls')
    }

    buildWindow(): void {
        this.house.parts.push('Window')
    }

    getHouse(): House{
        return this.house
    }
}


class House {
    parts: string[] = [];

    listParts(): void {
        console.log(`Product parts: ${this.parts.join(', ')}\n`);       
    }
}


export class Director1 {
    constructor(private builder: HouseBuilder){}

    setBuilder(builder: HouseBuilder): void {
        this.builder = builder
    }

    buildMinimalHouse(): void {
        this.builder.buildWalls();

    }

    public buildFullFeaturedHouse(): void {
        this.builder.buildDoor();
        this.builder.buildWalls();
        this.builder.buildWindow();
    }    
}



