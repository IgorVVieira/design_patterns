// Uma classe derivada deve ser substituível por sua classe base = herança ou interface.

import BilletPayment from "./billet-payment";
import CreditCardPayment from "./credit-card-payment";
import IPaymentInstrument from "./payment-instrument.interface";

const paymentTypeEnum = {
  creditCard: 'creditCard',
  billet: 'billet'
};

const paymentInstrumentBillet = new BilletPayment();
const paymentInstrumentCreditCard = new CreditCardPayment();

function doPayment(paymentInstrument: IPaymentInstrument): void {
  if (paymentInstrument.validatePayment()) {
    paymentInstrument.collectPayment();
  }
}

doPayment(paymentInstrumentBillet);
doPayment(paymentInstrumentCreditCard);
