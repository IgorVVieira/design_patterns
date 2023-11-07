// exemplo: usar mais de um servico de pagamento sem precisar alterar o codigo
/**
 * 1. Criar uma interface comum para os servicos de pagamento
 * Exemplo: Mais facil adicionar um T (Benjamin) do que trocar a tomada ou o cabo
 */

import MercadoPagoAdapter from "./adapters/mercado-pago-adapter";
import PayonnerAdapter from "./adapters/payonner-adapter";
import MercadoPago from "./mercado-pago";
import Payonner from "./payonner";
import IPaypalPayment from "./paypal/paypal-payment.interface";

console.log("\n---------- Adapter ----------");

// const payment: IPaypalPayment = new Paypal();
const payment: IPaypalPayment = new MercadoPagoAdapter(new MercadoPago());

// payment.paypalPayment();
payment.paypalPayment();
