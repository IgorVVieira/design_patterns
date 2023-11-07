// Produzir o produto final em etapas - evitando muitos parametros no construtor

import Director from "./builders/director";
import VehicleBuilder from "./builders/vehicle-builder";
import Vehicle from "./products/vehicle";

console.log("\n--------- Builder Pattern ----------");

const vehicle = new Vehicle();
const vehicleBuilder = new VehicleBuilder(vehicle);
const director = new Director(vehicleBuilder);

director.construcSedanCar();
console.log(vehicleBuilder.getProduct());

vehicleBuilder.reset();

director.construcTruckCar();
console.log(vehicleBuilder.getProduct());
