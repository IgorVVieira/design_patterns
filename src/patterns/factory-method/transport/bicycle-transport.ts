import Transport from "./transport";
import Bicycle from "./vehicles/bicycle";
import IVehicle from "./vehicles/interfaces/vehicle.interface";

export default class BicycleTransport extends Transport {
  createTransport(): IVehicle {
    return new Bicycle();
  }
}
