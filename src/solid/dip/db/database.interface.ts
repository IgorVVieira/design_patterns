export interface IDatabase {
  connect(): void;
  disconnect(): void;
  getProductById(id: string): void;
}