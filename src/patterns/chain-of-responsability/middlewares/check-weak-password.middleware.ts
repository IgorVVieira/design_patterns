import Middleware from "./middleware";

export default class CheckWeakPasswordMiddleware extends Middleware {
  private isWeakPass(password: string): boolean {
    return password.length <= 6;
  }

  handler(email: string, password: string): boolean {
    console.log("Verificando se a senha é fraca...");
    if (this.isWeakPass(password)) {
      console.log(
        "Senha fraca, sugerimos uma senha mais forte, no mínimo 6 caracteres"
      );
    }

    return this.checkNext(email, password);
  }
}
