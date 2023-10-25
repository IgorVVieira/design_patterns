import IVehicle from "./interfaces/vehicle.interface";

export default class Bicycle implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando a entrega de bicicleta");
  }
  getCargo(): void {
    console.log("Já pegamos a encomenda");
  }
}
