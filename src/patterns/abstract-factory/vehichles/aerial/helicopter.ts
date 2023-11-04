import IAircraft from "./interfaces/aircraft.interface";

export default class Helicopter implements IAircraft {
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log("Iniciando a decolagem do helicoptero.");
  }

  getCargo(): void {
    console.log("Passageiros a bordo. Ligando helices.");
  }

  checkWind(): void {
    console.log("Ventos a 25km/h, ventos ok.");
  }
}
