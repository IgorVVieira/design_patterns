import Token from "../utils/token";

export default interface IMercadoPagoPayment {
  autenticarToken(): Token;
  efetuarPagamento(): void;
  receberPagamento(): void;
}
