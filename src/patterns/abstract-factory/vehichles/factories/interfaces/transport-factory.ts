import IAircraft from "../../aerial/interfaces/aircraft.interface";
import ILandVehicle from "../../land/interfaces/land.interface";

export enum LandTransportType {
  CAR = "CAR",
  MOTORCYCLE = "MOTORCYCLE",
}

export enum AircraftTransportType {
  AIRPLANE = "AIRPLANE",
  HELICOPTER = "HELICOPTER",
}

export interface ITransportFactory {
  createTransportVehicle(type: LandTransportType): ILandVehicle;
  createTransportAircraft(type: AircraftTransportType): IAircraft;
}
