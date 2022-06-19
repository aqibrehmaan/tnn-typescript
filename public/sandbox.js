"use strict";
// let greet = () => {
//     console.log('hello, world');
// }
//greet = 'hello';
let greet;
greet = () => {
    console.log('hello, again');
};
// c is optional parameter
// const add = (a: number, b: number, c?: number | string) => {
//     console.log(a + b);
//     console.log(c); // undefined
// }
// Default 
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
