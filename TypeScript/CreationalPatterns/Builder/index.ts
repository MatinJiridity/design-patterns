import { ConcreteBuilder1, Director } from "./Builder";


function clientCode(director: Director){
    const builder = new ConcreteBuilder1();
    director.setBuilder(builder);

    console.log('Standard basic product:');
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();

    console.log('Standard full featured product:');
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();

    console.log('Custom product:');
    builder.producePartC();
    builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);

/**
import { Director1, HouseBuilder1 } from "./Builder";

function clientCode(director: Director1){
    const builder = new HouseBuilder1();
    director.setBuilder(builder);

    console.log('Standard basic house:');
    director.buildMinimalHouse();
    builder.getHouse().listParts();

    console.log('Standard full featured house:');
    director.buildFullFeaturedHouse();
    builder.getHouse().listParts();

    console.log('Custom product:');
    builder.buildWalls();
    builder.getHouse().listParts();
}

const director = new Director1();
clientCode(director); 
 */