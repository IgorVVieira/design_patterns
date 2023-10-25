import Transport from "./transport";
import Car from "./vehicles/car";
import IVehicle from "./vehicles/interfaces/vehicle.interface";

export default class CarTransport extends Transport {
  protected createTransport(): IVehicle {
    return new Car();
  }
}