import Engine from "../components/engine";
import Transmission from "../components/transmission";
import Type from "../components/type";
import Wheel from "../components/wheel";
import Vehicle from "../products/vehicle";
import IBuider from "./interfaces/builder.interface";

export default class VehicleBuilder implements IBuider {
  constructor(private vehicle: Vehicle) {
    this.vehicle = new Vehicle();
  }

  reset(): void {
    this.vehicle = new Vehicle();
  }

  getProduct(): string {
    return this.vehicle.toString();
  }

  setSeats(seats: number): void {
    this.vehicle.seats = seats;
  }

  setEngine(engine: Engine): void {
    this.vehicle.engine = engine;
  }

  setTransmission(transmission: Transmission): void {
    this.vehicle.transmission = transmission;
  }

  setWheel(wheel: Wheel[]): void {
    this.vehicle.addWheel(wheel);
  }

  setType(type: Type): void {
    this.vehicle.type = type;
  }
}
