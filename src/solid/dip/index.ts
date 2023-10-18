// Modulos de baixo nivel nao devem depender de modulos de alto nivel
// Basicamente, somente depender de interfaces, igual ao principio da inversao de dependencia usar abstracoes (interfaces)

console.log('\nDIP PRINCIPLE\n')

import DbFactory from "./factory/db-factory";
import Payment from "./payment";

const paymentWithMySql = new Payment(DbFactory.create());

paymentWithMySql.pay('1');