// Design patter Bridge: Exemplo = https://refactoring.guru/design-patterns/bridge/typescript/example
// Bridge seria um adapter pensado antes da criação do código, ou seja, antes de ter o código pronto
// Semelhante ao que uso no Bankeiro, sobre core-pix e core-banking...

import Facebook from "./plataforms/facebook";
import IPlataform from "./plataforms/interfaces/plataform.interface";
import Youtube from "./plataforms/youtube";
import AdvancedLive from "./transmissions/advanced-live";
import Live from "./transmissions/live";

console.log("\n----------- Bridge -----------");

function startLive(plataform: IPlataform): void {
  const live = new Live(plataform);
  live.broadcast();
  live.result();
}

function startAdvancedLive(plataform: IPlataform): void {
  const live = new AdvancedLive(plataform);
  live.comments();
  live.subtitles();
  live.broadcast();
  live.result();
}

const facebook = new Facebook();
const youtube = new Youtube();

startLive(facebook);
console.log("\n");
startAdvancedLive(youtube);
