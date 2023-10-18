import { IDatabase } from "./db/database.interface";
import IPayment from "./payment.interface";

export default class Payment implements IPayment {
  constructor (private readonly database: IDatabase) {}

  pay(productId: string): void {
    this.database.getProductById(productId);
    console.log(`Paying product ${productId}...`);
  }
}