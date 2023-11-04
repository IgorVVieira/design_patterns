import IAircraft from "./interfaces/aircraft.interface";

export default class Airplane implements IAircraft {
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log("Iniciando a decolagem do aviao.");
  }

  getCargo(): void {
    console.log("Passageiros a bordo.");
  }

  checkWind(): void {
    console.log("Ventos a 25km/h, ventos ok.");
  }
}
