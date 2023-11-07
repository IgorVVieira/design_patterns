export default class Wheel {
  // _rim pricisa ter get e set, padrao do ts
  constructor(private _rim: number) {}

  get rim(): number {
    return this._rim;
  }

  set rim(rim: number) {
    this._rim = rim;
  }
}
