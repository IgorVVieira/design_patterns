import Notify, { Client } from "./single-responsability";

const client = new Client('igor.gutoo63@gmail.com', '999999999');
const notify = new Notify(client);

notify.sendEmail();