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
    if (seats > 1 && this.vehicle.type === Type.MOTORCYCLE) {
      this.vehicle.seats = 1;
      return;
    }
    this.vehicle.seats = seats;
  }

  setEngine(engine: Engine): void {
    this.vehicle.engine = engine;
  }

  setTransmission(transmission: Transmission): void {
    this.vehicle.transmission = transmission;
  }

  setWheel(wheel: Wheel[]): void {
    if (this.vehicle.type === Type.MOTORCYCLE && wheel.length > 2) {
      this.vehicle.addWheel(wheel.slice(0, 2));
      return;
    }
    this.vehicle.addWheel(wheel);
  }

  setType(type: Type): void {
    this.vehicle.type = type;
  }
}
