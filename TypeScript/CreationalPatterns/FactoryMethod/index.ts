import { ShipCreator, TransportCreator, TruckCreator } from "./FactoryMethod";

function clientCode(transportCreator: TransportCreator){
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(transportCreator.someDeliver())
}

/**
 * The Application picks a creator's type depending on the configuration or
 * environment.
 */
console.log('App: Launched with the Truck Creator.');
clientCode(new TruckCreator());
console.log('');

console.log('App: Launched with the Ship Creator.');
clientCode(new ShipCreator());

