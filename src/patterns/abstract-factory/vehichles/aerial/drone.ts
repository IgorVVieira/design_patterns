import IAircraft from "./interfaces/aircraft.interface";

export default class Drone implements IAircraft {
  startRoute(): void {
    this.checkBattery();
    this.getCargo();
    console.log("Iniciando a decolagem.");
  }

  getCargo(): void {
    console.log("encomenda embarcada.");
  }
  checkWind(): void {
    console.log("Ventos a 25km, ventos ok.");
  }

  checkBattery(): void {
    console.log("Bateria em 100%, bateria ok.");
  }
}
