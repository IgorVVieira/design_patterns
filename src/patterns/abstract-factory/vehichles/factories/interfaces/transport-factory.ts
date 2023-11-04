import IAircraft from "../../aerial/interfaces/aircraft.interface";
import ILandVehicle from "../../land/interfaces/land.interface";

export enum LandTransportType {
  CAR = "CAR",
  MOTORCYCLE = "MOTORCYCLE",
  SCOOTER = "SCOOTER",
}

export enum AircraftTransportType {
  AIRPLANE = "AIRPLANE",
  HELICOPTER = "HELICOPTER",
  DRONE = "DRONE",
}

export interface ITransportFactory {
  createTransportVehicle(type: LandTransportType): ILandVehicle;
  createTransportAircraft(type: AircraftTransportType): IAircraft;
}
