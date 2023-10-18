import { IDatabase } from "../db/database.interface";
import MySqlDatabase from "../db/mysql-database";

export default class DbFactory {
  private static readonly dbType: string = 'mysql';

  public static create(): IDatabase {
    if (this.dbType === 'mysql') {
      return new MySqlDatabase();
    }
    return new MySqlDatabase();
  }
}