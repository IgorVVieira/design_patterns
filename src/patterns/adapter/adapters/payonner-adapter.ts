import Payonner from "../payonner";
import IPaypalPayment from "../paypal/paypal-payment.interface";
import Token from "../utils/token";

export default class PayonnerAdapter implements IPaypalPayment {
  private token: Token;

  constructor(private payonner: Payonner) {}

  authToken(): Token {
    return new Token("");
  }

  paypalPayment(): void {
    this.token = this.authToken();
    this.payonner.sendPayment();
  }

  paypalReceive(): void {
    console.log("Recebendo pagamento via Paypal.");
    this.payonner.receivePayment();
  }
}
