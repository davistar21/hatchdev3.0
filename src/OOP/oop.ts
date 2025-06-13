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









//CHATGPT EXAMPLE
// Package.ts
class Package {
  weight: number;
  contents: string;

  constructor(weight: number, contents: string) {
    this.weight = weight;
    this.contents = contents;
  }

  getLabel(): string {
    return `Package: ${this.contents}, ${this.weight}kg`;
  }
}

// Route.ts
class Route {
  origin: string;
  destination: string;
  distance: number;

  constructor(origin: string, destination: string, distance: number) {
    this.origin = origin;
    this.destination = destination;
    this.distance = distance;
  }

  getSummary(): string {
    return `From ${this.origin} to ${this.destination}, ${this.distance}km`;
  }
}

// Driver.ts
class Driver {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getInfo(): string {
    return `Driver: ${this.name}`;
  }
}

// Vehicle.ts
class Vehicle {
  type: string;
  maxLoad: number;

  constructor(type: string, maxLoad: number) {
    this.type = type;
    this.maxLoad = maxLoad;
  }

  canCarry(pkg: Package): boolean {
    return pkg.weight <= this.maxLoad;
  }

  getDetails(): string {
    return `${this.type} (Max Load: ${this.maxLoad}kg)`;
  }
}

// Delivery.ts (Composition Hub)
class Delivery {
  pkg: Package;
  route: Route;
  vehicle: Vehicle;
  driver: Driver;

  constructor(pkg: Package, route: Route, vehicle: Vehicle, driver: Driver) {
    this.pkg = pkg;
    this.route = route;
    this.vehicle = vehicle;
    this.driver = driver;
  }

  getDeliverySummary(): string {
    return `
--- Delivery Summary ---
${this.pkg.getLabel()}
${this.route.getSummary()}
${this.vehicle.getDetails()}
${this.driver.getInfo()}
Status: ${this.vehicle.canCarry(this.pkg) ? "Ready for Delivery" : "Package too heavy!"}
    `;
  }
}
const pkg = new Package(50, "Electronics");
const route = new Route("London", "Manchester", 320);
const vehicle = new Vehicle("Truck", 100); // can carry 100kg
const driver = new Driver("Alice Johnson");

const delivery = new Delivery(pkg, route, vehicle, driver);

console.log(delivery.getDeliverySummary());









class MyArray {
  private static validateArray(arr: any): asserts arr is any[] {
    if (!Array.isArray(arr)) {
      throw new Error("Input is not an array");
    }
  }
  static isArray(arr: any): boolean {
    return Array.isArray(arr);
  }
  static getLength(arr: any[]): number {
    this.validateArray(arr);
    return arr.length;
  }
  static getElement(arr: any[], index: number): any {
    this.validateArray(arr);
    if (index < 0 || index >= arr.length) {
      throw new Error("Index out of bounds");
    }
    return arr[index];
  }
  static addElement(arr: any[], element: any): void {
    this.validateArray(arr);
    arr.push(element);
  }
  static map(arr: any[], callback: (element: any, index: number, array: any[]) => any): any[] {
    this.validateArray(arr);
    return arr.map(callback);
  }
  static filter(arr: any[], callback: (element: any, index: number, array: any[]) => boolean) : any[] {
    this.validateArray(arr); 
    return arr.filter(callback)
  }
  static find (arr: any[], callback: (element: any, index: number, array: any[]) => boolean): any {
    this.validateArray(arr);
    return arr.find(callback);
  }
  static splice(arr: any[], start: number, deleteCount: number, ...items: any[]): any[] {
    this.validateArray(arr);
    return arr.splice(start, deleteCount, ...items);
  }
}

const newArray: string | number [] = [1, 2, 3, 4, 5];
MyArray.addElement(newArray, 6);
MyArray.map(newArray, (element) => element * 2);
MyArray.filter(newArray, (element) => element > 3);
MyArray.find(newArray, (element) => element === 3);
MyArray.splice(newArray, 2, 1, 7);
console.log(newArray);
console.log(`Length of array: ${MyArray.getLength(newArray)}`);
console.log(`Element at index 2: ${MyArray.getElement(newArray, 2)}`);




//AGGREGRATION EXAMPLE
//Aggregation refers to a special form of association where one class contains a reference to another class, but the contained class can exist independently of the container class. This is often used to model a "has-a" relationship.

type Address = {
  street: string;
}



interface IOrdinal {
  number: number,
  ordinal: string,
  words: string
}
const ordinals:IOrdinal[] = [
  {
    number: 1,
    ordinal: 'first',
    words: 'one'
  }, {
    number: 2,
    ordinal: 'second',
    words: 'two'
  }, {
    number: 3,
    ordinal: 'third',
    words: 'three'
  }, {
    number: 4,
    ordinal: 'fourth',
    words: 'four'
  }, {
    number: 5,
    ordinal: 'fifth',
    words: 'five'
  }, {
    number: 6,
    ordinal: 'sixth',
    words: 'six'
  }, {
    number: 7,
    ordinal: 'seventh',
    words: 'seven'
  }, {
    number: 8,
    ordinal: 'eighth',
    words: 'eight'
  }, {
    number: 9,
    ordinal: 'ninth',
    words: 'nine'
  }, {
    number: 10,
    ordinal: 'tenth',
    words: 'ten'
  }, {
    number: 11,
    ordinal: 'eleventh',
    words: 'eleven'
  }, {
    number: 12,
    ordinal: 'twelfth',
    words: 'twelve'
  }, {
    number: 13,
    ordinal: 'thirteenth',
    words: 'thirteen'
  }, {
    number: 14,
    ordinal: 'fourteenth',
    words: 'fourteen'
  }, {
    number: 15,
    ordinal: 'fifteenth',
    words: 'fifteen'
  }, {
    number: 16,
    ordinal: 'sixteenth',
    words: 'sixteen'
  }, {
    number: 17,
    ordinal: 'seventeenth',
    words: 'seventeen'
  }, {
    number: 18,
    ordinal: 'eighteenth',
    words: 'eighteen '
  }, {
    number: 19,
    ordinal: 'nineteenth ',
    words: 'nineteen '
  }, {
    number: 20,
    ordinal: 'twentieth ',
    words: 'twenty '
  }, {
    number: 30,
    ordinal: 'thirtieth',
    words: 'thirty '
  }, {
    number: 40,
    ordinal: 'thirtieth',
    words: 'forty '
  }, {
    number: 50,
    ordinal: 'thirtieth',
    words: 'fifty '
  }, {
    number: 60,
    ordinal: 'thirtieth',
    words: 'sixty '
  }, {
    number: 70,
    ordinal: 'thirtieth',
    words: 'seventy '
  }, {
    number: 80,
    ordinal: 'thirtieth',
    words: 'eighty '
  }, {
    number: 90,
    ordinal: 'thirtieth',
    words: 'ninety '
  }, {
    number: 100,
    ordinal: 'thirtieth',
    words: 'hundred '
  }, {
    number: 30,
    ordinal: 'thirtieth',
    words: 'thirty '
  }, {
    number: 30,
    ordinal: 'thirtieth',
    words: 'thirty '
  }, {
    number: 30,
    ordinal: 'thirtieth',
    words: 'thirty '
  }
  
]
class Numberify {
  static findWord (number: number) :string {
    return (ordinals.find(e => e.number == number))?.words || ''
  }
  static wordify(number: number) : string {
    let finalWord:string = this.findWord(number)
    let tenCount: number = 0;
    let remainder: number = 0;
    if (number > 20) {
      tenCount = Math.floor(number / 10);
      finalWord = this.findWord(tenCount * 10);
      remainder = number - tenCount * 10;
      finalWord += this.findWord(remainder)
    } 

    if (number > 100) {
      let hundredCount = Math.floor(number /100);
      finalWord = `${this.findWord(hundredCount)} ${this.findWord(hundredCount * 100)}`
      remainder = number - hundredCount * 100;
      if (tenCount > 20) {
        tenCount = Math.floor( remainder / 10);
        finalWord += this.findWord(tenCount * 10)
        finalWord += this.findWord(tenCount - tenCount * 10 )
      } 
    }


    return finalWord || 'Number not yet found.';
  }
}

const g = new Numberify()

console.log(Numberify.wordify(102))