export default class Engine {
  // _power pricisa ter get e set, padrao do ts
  constructor(private _power: number) {}

  get power(): number {
    return this._power;
  }

  set power(power: number) {
    this._power = power;
  }
}
