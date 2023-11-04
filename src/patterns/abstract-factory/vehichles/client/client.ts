import IAircraft from "../aerial/interfaces/aircraft.interface";
import {
  AircraftTransportType,
  ITransportFactory,
  LandTransportType,
} from "../factories/interfaces/transport-factory";
import ILandVehicle from "../land/interfaces/land.interface";

export default class Client {
  private vehicle: ILandVehicle;
  private aircraft: IAircraft;

  constructor(
    private readonly factory: ITransportFactory,
    private readonly landTransportType: LandTransportType,
    private readonly aircraftTransportType: AircraftTransportType
  ) {
    this.vehicle = this.factory.createTransportVehicle(landTransportType);
    this.aircraft = this.factory.createTransportAircraft(aircraftTransportType);
  }

  startRoute(): void {
    this.vehicle.startRoute();
    this.aircraft.startRoute();
  }
}
