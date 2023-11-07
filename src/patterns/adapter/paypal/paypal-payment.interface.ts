import Token from "../utils/token";

export default interface IPaypalPayment {
  authToken(): Token;
  paypalPayment(): void;
  paypalReceive(): void;
}
