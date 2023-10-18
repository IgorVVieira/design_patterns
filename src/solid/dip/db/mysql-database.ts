import { IDatabase } from "./database.interface";

export default class MySqlDatabase implements IDatabase {
  connect(): void {
    console.log('Connecting to MySQL database...')
  }

  disconnect(): void {
    console.log('Disconnecting from MySQL database...')
  }

  getProductById(id: string): void {
    this.connect();
    console.log(`Getting product ${id} from MySQL database...`);
    this.disconnect();
  }
}