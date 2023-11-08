import IPlataform from "../plataforms/interfaces/plataform.interface";
import ITransmission from "./interfaces/transmission.interface";

export default class Live implements ITransmission {
  constructor(protected readonly plataform: IPlataform) {}

  broadcast(): void {
    console.log("Iniciando a transmissão");
    this.plataform.configureRMTP();
  }

  result(): void {
    console.log("### ON AIR  ###");
  }
}
