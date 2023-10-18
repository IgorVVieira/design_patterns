import { ICar, IMotorcycle, VehicleConfigDTO } from "./vehicle.interface"

export class Car implements ICar {
  openDoor(): void {
    console.log('Opening car door...')
  }

  start(): void {
    console.log('Starting car...')
  }

  configure(configDto: VehicleConfigDTO): void {
    console.log('Configuring car...', configDto)
  }
}

export class Motorcycle implements IMotorcycle {
  darGrau(): void {
    console.log('Dando grau...')
  }

  start(): void {
    console.log('Starting motorcycle...')
  }

  configure(configDto: VehicleConfigDTO): void {
    console.log('Configuring motorcycle...', configDto)
  }
}