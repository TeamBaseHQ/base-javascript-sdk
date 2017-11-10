export default class Main {
  constructor(public message: string) {
    console.log(this.message);
  }
}

const start = new Main('Hello World');
