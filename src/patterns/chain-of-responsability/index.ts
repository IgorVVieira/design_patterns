// Dividir a responsabilidade entre vários objetos para que cada um possa fazer uma parte do trabalho
// distribuído entre eles. Quando um objeto não pode fazer o trabalho, ele delega a outro objeto.
// Delegando a responsabilidade para outro objeto, que pode fazer o trabalho. (Single Responsibility Principle)
// Handlers: Cada objeto que pode fazer o trabalho é um handler. (Chain of Responsibility), podendo passar para o próximo handler
// Exemplo: Middleware do Express... next()

import readline from "readline";
import CheckUserMiddleware from "./middlewares/check-user.middleware";
import Server from "./servers/server";
import CheckPermissionMiddleware from "./middlewares/check-permission.middleware";

console.log("\n\n---------- Chain of Responsability ----------");

const middleware = new CheckUserMiddleware();
middleware.linkWith(new CheckPermissionMiddleware());
const server = new Server(middleware);

function setPrompt() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Digite seu email: ", (email) => {
    rl.question("Digite sua senha: ", (password) => {
      server.login(email, password);
      rl.close();
    });
  });

  rl.on("close", () => {
    console.log("Bye bye!");
  });
}

setPrompt();
