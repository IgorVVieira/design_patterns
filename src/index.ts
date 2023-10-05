interface IPerson {
  name: string;
  age: number;
  gender: string;
}

const igor: IPerson = {
  name: 'Igor',
  age: 23,
  gender: 'male',
};

console.log(igor);

console.log(typeof igor.gender)