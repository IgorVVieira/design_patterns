import MercadoPago from "../mercado-pago";
import IPaypalPayment from "../paypal/paypal-payment.interface";
import Token from "../utils/token";

export default class MercadoPagoAdapter implements IPaypalPayment {
  constructor(private readonly mercadoPago: MercadoPago) {}

  authToken(): Token {
    return new Token("");
  }

  paypalPayment(): void {
    this.mercadoPago.autenticarToken();
    console.log("Usando adaptador do Mercado pago para Paypal.");
    this.mercadoPago.efetuarPagamento();
  }

  paypalReceive(): void {
    console.log("Recebendo pagamento via Paypal.");
    this.mercadoPago.receberPagamento();
  }
}
