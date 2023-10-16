//  Uma classe/metodo deve ter apenas uma responsabilidade.
//  Uma classe/metodo deve ter apenas um único motivo para mudar.
//  Exemplo: use cases

// Mau exemplo, pois a classe tem mais de uma responsabilidade
class ClientBad {
  create(): void {}

  read(): void {}

  update(): void {}

  delete(): void {}

  sendEmail(): void {}
}

// Bom exemplo, pois a classe tem apenas uma responsabilidade
export class Client {
  constructor(private email: string, private phone: string) {}

  get getEmail(): string {
    return this.email;
  }

  get getPhone(): string {
    return this.phone;
  }

  create(): void {}

  read(): void {}

  update(): void {}

  delete(): void {}
}

export default class NotifySrp {
  constructor(private client: Client) {}

  sendEmail(): void {
    console.log('Email enviado para: ', this.client.getEmail)
  }

  sendSms(): void {
    console.log('SMS enviado para: ', this.client.getPhone)
  }

  sendWhatsapp(): void {
    console.log('Whatsapp enviado para: ', this.client.getPhone)
  }
}