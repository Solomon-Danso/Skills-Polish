# Typescript Notes 

### Typescript are javascript with types allowing developers to assing a specific data type to a variable.
### Typescript support static typing 
### Install typescript with the following command [npm install typescript --save-dev]
### Create a tsconfig.json file with the following command [npx tsc --init]

When creating a variable, there are two main ways TypeScript assigns a type:
Explicit
Implicit

Explicit Type
let firstName: string = "Dylan";

Implicit Type
Implicit - TypeScript will "guess" the type, based on the assigned value:
let firstName = "Dylan";

Note: Having TypeScript "guess" the type of a value is called infer.
Implicit assignment forces TypeScript to infer the value.

Implicit type assignment are shorter, faster to type, and often used when developing and testing.

### Type: any
any is a type that disables type checking and effectively allows all types to be used.

let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type

### Arrays
const names: string[] = [];

names.push("Dylan"); // no error

//names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

console.log(names);

let ourTuple: [number, string, string, boolean]

ourTuple = [50, "Kofi", "Danso", true]

console.log(ourTuple);

for(let i=0; i<ourTuple.length; i++){
console.log(ourTuple[i])

}


ourTuple.forEach((item) => {
    console.log(item);
});

### Object
const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};

console.log(car);

Infer
const car = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};

const text = `I have a ${car.type} car, it is ${car.model} model and the year is ${car.year}`;


console.log(text)

Index Signatures
Index signatures can be used for objects without a defined list of properties.

const nameAgeMap: { [index: string]: number } = {};

nameAgeMap.Jack = 25; // no error

nameAgeMap.Mark = 30; // Error: Type 'string' is not assignable to type 'number'.
nameAgeMap.Micheal = 40
console.log(nameAgeMap);

### TypeScript Enums
An enum is a special "class" that represents a group of constants (unchangeable variables).

Enums come in two flavors string and numeric. Lets start with numeric.

Numbers Enum
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
};

// logs 404
console.log(StatusCodes.NotFound);

// logs 200
console.log(StatusCodes.Success);


String Enum
enum CardinalDirections {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};

// logs "North"
console.log(CardinalDirections.North);

// logs "West"
console.log(CardinalDirections.West);

### TypeScript Interface and Aliases 
Instead of using string throughout the code, we can define our own custom interface and the aliases

// Try creating a new interface and extending it like below
interface Rectangle {
  height: number,
  width: number
}

interface ColoredRectangle extends Rectangle {
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};

console.log(coloredRectangle);


### TypeScript Union Types
Union | (OR)
Using the | we are saying our parameter is a string or number:
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');


### TypeScript Function

function add(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

console.log(add(10,10,10,10,10,10,2));

### TypeScript Casting

[*] Casting with as

let x: unknown = 'hello';
console.log((x as string).length);

[*] Casting with <>

let x: unknown = 'hello';
console.log((<string>x).length);

### TypeScript Classes

[*] Members: Types
class Person {
  name: string;
}
      
const person = new Person();
person.name = "Jane";

console.log(person);

[*] Members: Visibility
class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}
      
const person = new Person("Jane");

console.log(person.getName()); // person.name isn't accessible from outside the class since it's private

###  TypeScript Utility Types














