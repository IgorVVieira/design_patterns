import IPlataform from "./interfaces/plataform.interface";

export default class Youtube implements IPlataform {
  configureRMTP(): void {
    this.authToken();
    console.log("Youtube: Configuring broadcasting");
  }

  authToken(): void {
    console.log("Authenticating with Youtube");
  }
}
