import {FurnitureFactory, CreteVictorianFurniture, CreateModernFurniture } from "./AbstractFactory"

// products are modern chair and victorian chair & modern sofa and victorian sofa
function clientCode(factory: FurnitureFactory){
    const chair = factory.createChair();
    const sofa = factory.createSofa();
    const coffeeTable = factory.createCoffeeTable();

    console.log(chair.productName());
    console.log(sofa.productName());
    console.log(sofa.collaboratorChair(chair));
    console.log(coffeeTable.productName());
}

clientCode(new CreteVictorianFurniture());
clientCode(new CreateModernFurniture());
console.log(" ")
const createModernFurniture = new CreateModernFurniture();
let ModernChair = createModernFurniture.createChair();
console.log(`User's Product ${ModernChair.productName()}`);