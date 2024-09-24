var a;
a=10;

let ab;
let b = 5;

const c = true;

// console.log(Math.pow(2,6));
// console.log(Math.floor(1.999999));
// console.log(Math.ceil(1.0001));
// console.log(Math.round(1.5));

// console.log(Math.random()*100);

// random value b/w 5 and 15
// console.log(Math.round(Math.random()*(max-min)))+min;
console.log(Math.round(Math.random()*(15-5))+5);

const str = "this is a string"; console.log(str);

console.log(str.includes("Is a")) // return boolean
console.log(str.substr(4,5));
console.log(str.slice(7,9));
// console.log(str.startsWith("this")); //return boolean

// console.log(str.endsWith("string")); //return boolean
// console.log(str.indexOf("n"));

// console.log(str.substr(0,str.indexOf("i")));
// console.log(str.indexOf(str.substr(str.indexOf("i")+1,str.length),"i"));

// str.match()
// const newStr = str.replace("is","si");
date = "23-09-2024"
const newStr = date.replaceAll("-","/");
console.log(newStr);

console.log(str.split(" "));