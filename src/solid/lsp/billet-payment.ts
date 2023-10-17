import IPaymentInstrument from "./payment-instrument.interface";

export default class BilletPayment implements IPaymentInstrument {
  validatePayment(): boolean {
    console.log('Validating billet method');
    return true;
  }

  collectPayment(): void {
    console.log('Collecting payment with billet');
  }
}