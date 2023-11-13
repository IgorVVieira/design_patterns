import { database } from "../servers/database";
import Middleware from "./middleware";
import PermissionType from "../servers/permission-type";

export default class CheckPermissionMiddleware extends Middleware {
  handler(email: string, password: string): boolean {
    const user = database.find((user) => user.email === email);
    if (!user) {
      console.log("Usuário não encontrado");
      return false;
    }

    if (user.permission === PermissionType.ADMIN) {
      console.log("Bem-vindo, administrador!");
      return true;
    }
    console.log("Bem-vindo, usuário!");

    return this.checkNext(email, password);
  }
}
