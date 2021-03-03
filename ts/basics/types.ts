//Number

console.log("\n****Number****\n");
let number: number = 1;
console.log(`Number: ${number}`);

//String

console.log("\n****String****\n");
let string: string = "I'm string";
console.log(`String: ${string}`);

//Array

console.log("\n****Array****\n");
let arr1: number[] = [1, 2, 3];
console.log(`Arr1: ${arr1}`);

let arr2: Array<number> = [1, 2, 3];
console.log(`Arr2: ${arr2}`);

//Tuple

console.log("\n****Tuple****\n");
let tuple: [number, string] = [5, "ss"];
console.log(`Tuple: ${tuple}`);

//Enum

console.log("\n****Enum****\n");
enum Color {
  RED,
  BLUE,
  GREEN,
}

let colorValue: number = Color.RED; //value 0
console.log(`Color Value: ${colorValue}`);
let colorName: string = Color[0]; //name RED
console.log(`Color Name: ${colorName}`);

//Unknown

console.log("\n****Unknown****\n");
let notSure: unknown = 4;
console.log(`NotSure: ${notSure}`);
notSure = "maybe a string instead";
console.log(`NotSure: ${notSure}`);
notSure = false;
console.log(`NotSure: ${notSure}`);

//Any
console.log("\n****Any****\n");
let any: any = "string";
console.log(`Any: ${any}`);

//Type Assertions
console.log("\n****Type Assertions****\n");
let someValue: unknown = "this is a string";
console.log(`SomeValue: ${someValue}`);
let strLength: number = (someValue as string).length;
console.log(`String Length: ${strLength}`);
