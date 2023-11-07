import Token from "../utils/token";
import IPaypalPayment from "./paypal-payment.interface";

export default class Paypal implements IPaypalPayment {
  private readonly defaultToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3RlIHRzIiwiaWF0IjoxNTE2MjM5MDIyfQ.u3lJvb5mXoIq-MVJjI70JI1vaQ8c-xPHfZr0vgPSw7Y";
  private token: Token;

  authToken(): Token {
    return new Token(this.defaultToken);
  }

  paypalPayment(): void {
    this.token = this.authToken();
    console.log("Realizando pagamento via Paypal.");
  }

  paypalReceive(): void {
    console.log("Recebendo pagamento via Paypal.");
  }
}
