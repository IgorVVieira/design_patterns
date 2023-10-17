import IPaymentInstrument from './payment-instrument.interface';	

export default class CreditCardPayment implements IPaymentInstrument {
  validatePayment(): boolean {
    console.log('Validating credit card method');
    return true;
  }

  collectPayment(): void {
    console.log('Collecting payment with credit card');
  }
}