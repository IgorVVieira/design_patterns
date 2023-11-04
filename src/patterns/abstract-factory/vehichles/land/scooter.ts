import ILandVehicle from "./interfaces/land.interface";

export default class Scooter implements ILandVehicle {
  startRoute(): void {
    this.getCargo();
    this.checkBattery();
    console.log("Iniciando a entrega.");
  }

  getCargo(): void {
    console.log("Pegamos a encomenda.");
  }

  checkBattery(): void {
    console.log("Bateria em 100%, bateria ok.");
  }
}
