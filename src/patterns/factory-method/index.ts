import BicycleTransport from "./transport/bicycle-transport";
import CarTransport from "./transport/car-transport";
import MotorcycleTransport from "./transport/motorcycle-transport";
import Transport from "./transport/transport";

console.log("\n---------- Factory method ----------");

let transport: Transport;

enum TransportType {
  Car = "car",
  Motorcycle = "motorcycle",
  bicycle = "bicycle",
}

const type = TransportType.bicycle;

if (type === TransportType.Car.valueOf()) {
  transport = new CarTransport();
} else if (type === TransportType.Motorcycle.valueOf()) {
  transport = new MotorcycleTransport();
} else if (type === TransportType.bicycle.valueOf()) {
  transport = new BicycleTransport();
} else {
  throw new Error("Tipo de transporte não encontrado.");
}

if (transport) {
  transport.startTransport();
}
