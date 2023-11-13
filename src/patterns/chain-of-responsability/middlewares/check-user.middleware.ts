import Middleware from "./middleware";
import { database } from "../servers/database";

export default class CheckUserMiddleware extends Middleware {
  private validateEmail(email: string): boolean {
    return email.includes("@");
  }

  handler(email: string, password: string): boolean {
    if (!this.validateEmail(email)) {
      console.log("Email inválido");
      return false;
    }

    const user = database.find(
      (user) => user.email === email && user.password === password
    );
    if (!user) {
      console.log("Usuário não encontrado");
      return false;
    }

    return this.checkNext(email, password);
  }
}
