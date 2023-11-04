import Airplane from "../aerial/airplane";
import Helicopter from "../aerial/helicopter";
import IAircraft from "../aerial/interfaces/aircraft.interface";
import Car from "../land/car";
import ILandVehicle from "../land/interfaces/land.interface";
import Motorcycle from "../land/motorcycle";
import {
  AircraftTransportType,
  ITransportFactory,
  LandTransportType,
} from "./interfaces/transport-factory";

export default class NineNineTransport implements ITransportFactory {
  createTransportVehicle(type: LandTransportType): ILandVehicle {
    switch (type) {
      case LandTransportType.CAR:
        return new Car();
      case LandTransportType.MOTORCYCLE:
        return new Motorcycle();
      default:
        return new Car();
    }
  }

  createTransportAircraft(type: AircraftTransportType): IAircraft {
    switch (type) {
      case AircraftTransportType.AIRPLANE:
        return new Airplane();
      case AircraftTransportType.HELICOPTER:
        return new Helicopter();
      default:
        return new Airplane();
    }
  }
}
