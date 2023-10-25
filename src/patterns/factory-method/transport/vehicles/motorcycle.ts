import IVehicle from "./interfaces/vehicle.interface";

export default class Motorcycle implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando o trajeto.");
  }

  getCargo(): void {
    console.log("Pegamos a encomenda, estamos prontos.");
  }
}