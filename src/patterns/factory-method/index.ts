import CarTransport from "./transport/car-transport";
import MotorcycleTransport from "./transport/motorcycle-transport";
import Transport from "./transport/transport";

console.log("\n---------- Factory method ----------")

let transport: Transport;

enum TransportType {
  Car = "car",
  Motorcycle = "motorcycle",
}

const type = TransportType.Car;

if (type === TransportType.Car) {
  transport = new CarTransport();
} else if (type === TransportType.Motorcycle) {
  transport = new MotorcycleTransport();
} else {
  throw new Error("Tipo de transporte não encontrado.");
}

if (transport) {
  transport.startTransport();
}
