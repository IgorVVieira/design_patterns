import Engine from "../../components/engine";
import Transmission from "../../components/transmission";
import Type from "../../components/type";
import Wheel from "../../components/wheel";

export default interface IBuider {
  reset(): void;
  getProduct(): string;
  setSeats(seats: number): void;
  setEngine(engine: Engine): void;
  setType(type: Type): void;
  setTransmission(transmission: Transmission): void;
  setWheel(wheel: Wheel[]): void;
}
