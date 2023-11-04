import Client from "./vehichles/client/client";
import company from "./vehichles/consts/company";
import {
  AircraftTransportType,
  ITransportFactory,
  LandTransportType,
} from "./vehichles/factories/interfaces/transport-factory";
import NineNineTransport from "./vehichles/factories/nine-nine-transport";
import UberTransport from "./vehichles/factories/uber.transport";

console.log("\n---------- Abstract Factory ----------");

const currentCompany = company.UBER;
let factory: ITransportFactory;

switch (currentCompany) {
  case company.UBER:
    console.log("Cliente usando o Uber.");
    factory = new UberTransport();
    break;
  case company.NINENE:
    console.log("Cliente usando o Ninene.");
    factory = new NineNineTransport();
    break;
  default:
    throw new Error("Empresa não encontrada.");
}

const client = new Client(
  factory,
  LandTransportType.CAR,
  AircraftTransportType.HELICOPTER
);

client.startRoute();
