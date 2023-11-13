import Middleware from "../middlewares/middleware";

export default class Server {
  private Middleware: Middleware;

  constructor(Middleware: Middleware) {
    this.Middleware = Middleware;
  }

  login(email: string, password: string): boolean {
    return this.Middleware.handler(email, password);
  }
}
