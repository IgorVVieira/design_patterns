import Engine from "../components/engine";
import Transmission from "../components/transmission";
import Type from "../components/type";
import Wheel from "../components/wheel";

export default class Vehicle {
  private _type: Type;
  private _seats: number;
  private _engine: Engine;
  private _trasmission: Transmission;
  private _wheels: Wheel[] = [];

  addWheel(wheel: Wheel[]): void {
    if (this._type === Type.TRUCK && this._wheels.length === 6) {
      return;
    } else if (this._type !== Type.TRUCK && this._wheels.length === 4) {
      return;
    }
    this._wheels.push(...wheel);
  }

  get type(): Type {
    return this._type;
  }

  set type(type: Type) {
    this._type = type;
  }

  get seats(): number {
    return this._seats;
  }

  set seats(seats: number) {
    this._seats = seats;
  }

  get engine(): Engine {
    return this._engine;
  }

  set engine(engine: Engine) {
    this._engine = engine;
  }

  get transmission(): Transmission {
    return this._trasmission;
  }

  set transmission(transmission: Transmission) {
    this._trasmission = transmission;
  }

  get wheels(): Wheel[] {
    return this._wheels;
  }

  set wheels(wheels: Wheel[]) {
    this._wheels = wheels;
  }

  toString(): string {
    return `Vehicle: ${this._type} - ${this._seats} - ${this._engine.power} - ${this._trasmission} - ${this._wheels.length} rodas`;
  }
}
