import Engine from "../../components/engine";
import Transmission from "../../components/transmission";
import Type from "../../components/type";
import IBuider from "../interfaces/builder.interface";

export default class Director {
  constructor(private builder: IBuider) {}

  constructSedanCar(): void {
    // nesse caso, a ordem nao importa
    this.builder.setType(Type.SEDAN);
    this.builder.setSeats(5);
    this.builder.setTransmission(Transmission.AUTOMATIC);
    this.builder.setEngine(new Engine(2000));
    this.builder.setWheel(Array(4).fill(new Engine(15)));
  }

  constructTruckCar(): void {
    this.builder.setType(Type.TRUCK);
    this.builder.setSeats(3);
    this.builder.setTransmission(Transmission.AUTOMATIC_SEQUENTIAL);
    this.builder.setEngine(new Engine(13000));
    this.builder.setWheel(Array(6).fill(new Engine(22)));
  }

  constructMotorcycle(): void {
    // nesse caso, a ordem importa
    this.builder.setType(Type.MOTORCYCLE);
    this.builder.setSeats(5); // propositalmente, nao faz sentido, deve ser sempre 1
    this.builder.setTransmission(Transmission.AUTOMATIC);
    this.builder.setEngine(new Engine(125));
    this.builder.setWheel(Array(4).fill(new Engine(15))); // propositalmente, nao faz sentido, deve ser sempre 2
  }
}
