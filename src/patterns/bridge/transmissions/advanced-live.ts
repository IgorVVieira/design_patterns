import IPlataform from "../plataforms/interfaces/plataform.interface";
import Live from "./live";

export default class AdvancedLive extends Live {
  constructor(protected readonly plataform: IPlataform) {
    super(plataform);
  }

  subtitles(): void {
    console.log("Legendas ativadas na transmissão");
  }

  comments(): void {
    console.log("Comentários liberados na transmissão");
  }
}
