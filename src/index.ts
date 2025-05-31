class Engine {
  model: string;
  constructor(model: string) {
    this.model = model;
  }
}


interface IGLE {
  engine: Engine;
  color: string;
  model: string;
}

class GLE{
  engine: Engine;
  color: string;
  model: string;
  constructor(props:IGLE) {
    this.engine = props.engine;
    this.color = props.color;
    this.model = props.model;
  }

  drive(): string {
    return `Driving ${this.engine.model}`;
  }
  getDetails(): string {
    return `
      Engine Model: ${this.engine.model},\n
      Engine Color: ${this.color},\n
      Engine Model: ${this.model}
    `
  }
}

const carDetails = {
  engine: new Engine('V8'),
  color: 'black',
  model: 'GLE'
}

const gle = new GLE(carDetails);
console.log(gle.drive())
console.log(gle.getDetails())
