let a = "this's a string";
let b = 'This "is" single Quote string';
let c = `this's "backticks"(string template literals)`;
console.log(a);
console.log(c);

let d = 27;
c = `d is equal to ${d}`;

let newStr = c.substr(5,2);
let slicedStr = c.slice(7,5);
let isStarts = c.startsWith("d is equal") // return boolean

let ci = c.includes("27") // return boolean

let date = "18/09/2024"
// let cr = date.replace("/","-");
let cr = date.replaceAll("/","-");
// let newVal = null;
const str = "this is a string"

let arrOfStr = str.split(" ")
