export type VehicleConfigDTO = {
  color: string;
  year: number;
  engine: number;
  seats: number;
}

export interface IVehicle {
  start(): void;
  configure(configDto: VehicleConfigDTO): void;
}

export interface ICar extends IVehicle {
  openDoor(): void;
}

export interface IMotorcycle extends IVehicle {
  darGrau(): void;
}