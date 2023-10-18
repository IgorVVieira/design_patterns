export default interface IPayment {
  pay(productId: string): void;
}