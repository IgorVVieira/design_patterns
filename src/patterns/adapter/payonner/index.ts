import Token from "../utils/token";
import IPayonnerPayment from "./payonner-payment.interface";

export default class Payonner implements IPayonnerPayment {
  private readonly defaultToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3RlIHRzIiwiaWF0IjoxNTE2MjM5MDIyfQ.u3lJvb5mXoIq-MVJjI70JI1vaQ8c-xPHfZr0vgPSw7Y";
  private token: Token;

  authToken(): Token {
    return new Token(this.defaultToken);
  }

  sendPayment(): void {
    this.token = this.authToken();
    console.log(`Token: ${this.token.token}`);
    console.log("Enviando pagamento via Payonner.");
  }

  receivePayment(): void {
    console.log("Recebendo pagamento via Payonner.");
  }
}
