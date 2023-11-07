import Token from "../utils/token";
import IMercadoPagoPayment from "./mercado-pago-payment.interface";

export default class MercadoPago implements IMercadoPagoPayment {
  private token: Token;

  autenticarToken(): Token {
    return new Token("");
  }

  efetuarPagamento(): void {
    this.token = this.autenticarToken();
    console.log("Enviando pagamento via Mercado Pago.");
  }

  receberPagamento(): void {
    console.log("Recebendo pagamento via Mercado Pago.");
  }
}
