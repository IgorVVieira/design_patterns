export default interface IPaymentInstrument {
  validatePayment(): boolean;
  collectPayment(): void;
}