export default class Token {
  constructor(private _token: string) {}

  get token() {
    return this._token;
  }
}
