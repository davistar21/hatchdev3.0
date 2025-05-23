interface ICar {
  color: string;
  model: string;
  year?: number;
}

const car:ICar  = {
  color: "red",
  model: "Toyota",
}

const hello = (name: string): string => {
  return `Hello ${name}`;
}

class Car {
  color: string;
  model: string;
  year?: number;
  #modelNumber?: string;
  #engineNumber?: string;

  constructor(color: string, model: string, year?: number, modelNumber?: string, engineNumber?: string) {
    this.#modelNumber = modelNumber;
    this.#engineNumber = engineNumber;
    this.color = color;
    this.model = model;
    this.year = year;
  }

  getDetails(): string {
    return `Car Model: ${this.model}, \nColor: ${this.color}, \nYear: ${this.year},\nModel Number: ${this.#modelNumber}, \nEngine Number: ${this.#engineNumber}`;
  }
  drive(): string {
    return `Driving ${this.model}`;
  }
  reverse(): string {
    return `Reversing ${this.model}`;
  }
}

const myCar = new Car("blue", "Honda", 2020, '2E433ER', 'E4E3E4E3');
console.log(myCar.getDetails());
console.log(myCar.drive());
console.log(myCar.reverse());
console.log(myCar instanceof Car)


class Student {
  name: string;
  age: number;
  #major?: string;

  constructor(props: IStudentInfo) {
    this.name = props.name;
    this.age = props.age;
    this.#major = props.major;
  }

  introduce(): string {
    return `Hi my name is ${this.name}. I am ${this.age} years old. I am majoring in ${this.#major}.`;
  }
 
}
interface IStudentInfo  {
  name: string;
  age: number;
  major: string;
  duty: string;
}
const studentInfo:IStudentInfo = {
  name: 'James',
  age: 22,
  major: 'Physics',
  duty: 'Head'
}
const studentInfo2:IStudentInfo = {
  name: 'James',
  age: 22,
  major: 'Physics',
  duty: 'Head'
}

const student = new Student(studentInfo);
console.log(student.introduce());

const student2 = new Student(studentInfo2)
console.log(student2.introduce());

class Prefect extends Student {
  duty: string;
  
  constructor(props: IStudentInfo) {
    super(props);
    this.duty = props.duty;
  }

  introduce(): string {
    return `${super.introduce()} I am the ${this.duty} prefect.`;
  }
  
}
const prefect = new Prefect(studentInfo);
console.log(prefect.introduce());


class User {
  name: string;
  email: string;
  password: string;
  #isLoggedIn: boolean;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.#isLoggedIn = false;
  }

  login(): string {
    this.#isLoggedIn = true;
    return `${this.name} is logged in.`;
  }

  logout(): string {
    this.#isLoggedIn = false;
    return `${this.name} is logged out.`;
  }
  static validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

const user1 = new User("John Doe", "johndoe@email.com", "password123");
console.log(user1.login());
console.log(user1.logout());

class Calculator {
  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }

  static multiply(a: number, b: number): number {
    return a * b;
  }

  static divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
}

console.log(Calculator.divide(2, 1))









