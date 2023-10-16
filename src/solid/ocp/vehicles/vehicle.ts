export interface IVehicle {
  name: string;
  color: string, 
  year: number, 
  engine: number, 
  seats: number

}

export class Car implements IVehicle {
  constructor(
    public name: string,
    public color: string,
    public year: number,
    public engine: number,
    public seats: number
  ) {}

  toString(): string {
    return `${this.name}: ${this.color} - ${this.year} - ${this.engine} - ${this.seats}`;
  }
}

export class Motorcycle implements IVehicle {
  constructor(
    public name: string,
    public color: string,
    public year: number,
    public engine: number,
    public seats: number,
    private doors: number = 0
  ) {
  }
  
  toString(): string {
    return `${this.name}: ${this.color} - ${this.year} - ${this.engine} - ${this.seats}, - ${this.doors}`;
  }
}