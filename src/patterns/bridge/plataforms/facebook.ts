import IPlataform from "./interfaces/plataform.interface";

export default class Facebook implements IPlataform {
  configureRMTP(): void {
    this.authToken();
    console.log("Facebook: Configuring broadcasting");
  }

  authToken(): void {
    console.log("Authenticating with Facebook");
  }
}
