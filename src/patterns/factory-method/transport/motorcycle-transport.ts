import Transport from "./transport";
import IVehicle from "./vehicles/interfaces/vehicle.interface";
import Motorcycle from "./vehicles/motorcycle";

export default class MotorcycleTransport extends Transport {
  protected createTransport(): IVehicle {
    return new Motorcycle();
  }
}