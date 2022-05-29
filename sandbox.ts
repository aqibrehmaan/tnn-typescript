// arrays

let names = ['luigi', 'mario', 'yoshi'];

// names = 'hello';

names.push('toad');
// names.push(3);
// names[0] = 3;

let numbers = [10, 20, 30, 40];

numbers.push(25);
// numbers.push('shaun');
// numbers[1] = 'shaun';
// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'luigi';
// isLoggedIn = 25;

isLoggedIn = true;

// arrays
let ninjas: string[] = [];
// ninjas = ['yoshi', 'mario'];
ninjas.push('shaun');

// union types
let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);

let uid: string|number;
uid = '123';
uid = 123;

// objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30};

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
}

ninjaTwo = { name: 'mario', age: 20, beltColour: 'black'}



