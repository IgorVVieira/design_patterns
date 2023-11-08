import IPlataform from "./interfaces/plataform.interface";

export default class Twitch implements IPlataform {
  configureRMTP(): void {
    this.authToken();
    console.log("Twitch: Configuring broadcasting");
  }

  authToken(): void {
    console.log("Authenticating with Twitch");
  }
}
