let str = "this IS a string";
// console.log(str);
// str.trim()
// console.log(str);

let newStr = str.includes("is a");
console.log(newStr);

newStr = str.indexOf("is");
console.log(newStr);

newStr = str.replace("this","it");
console.log(newStr);

let date = "24-10-2024"
newStr = date.replaceAll("-","/");
console.log(newStr);
// "this is a string"
newStr = str.slice(5,9);
console.log(newStr);

newStr = str.substr(3,5);
console.log(newStr);

newStr = str.toLowerCase();
console.log(newStr);

newStr = str.toUpperCase();
console.log(newStr);

// "this is a string"
let strArr =  str.split(" ");
// strArr =  str.split("i");
console.log(strArr);

// -------------------- Array ------------------------------
let arr = [1,2,3,4,5,6,7,8,9];
let popedEle = arr.pop();
arr.shift();
console.log(arr);
arr.unshift(10);
// arr.unshift(10,20,30);
console.log(arr);
let a = [1,2,3,4,5,6,7,8,9,10]
// delete at particular index
// a.splice(5,3);
// console.log(a);

// add and delete at particular index
// a.splice(5,2,11);
a.splice(4,2,11,12,13,14);
console.log(a);

let b = [1,2,3,4,5,6,7,8,9];
let arrStr = b.join("-");
console.log(arrStr);

// loop
console.log(b);
// for(let ele of b){
//   console.log(ele);
// }

for(let key in b){
  console.log(`element at ${key} is ${b[key]}`);
}

// ---------------- object -------------------------
let obj = {
  name: "John",
  age: 30,
  work:"Developer",
  location:"USA"
}
console.log(obj.name);
console.log(obj["name"]);
let key = "age";
console.log(obj[key]);
console.log(obj.key);
for(let key in obj){
  console.log(`${key} -> ${obj[key]}`);
}

// ------------------- JSON -------------------------
let complexObj = {
  name: {
    firstName:"john",
    lastName:"Doe"
  },
  age:30,
  work:"Developer",
  location:{
    home:"New York",
    work:"Paris"
  },
  hobbies: ["swimming","reading","coding"],
}
console.log(complexObj.name.lastName);
console.log(complexObj.location.work);
console.log(complexObj.hobbies[1]);
// ----------------- funtions -------------------

// function first(){
//   let a  = 10;
//   return `number - ${a}`;
// }
// function first(){
//   let a  = 10;
//   return a;
// }
// function first(){
//   let a  = 10;
//   return true;
// }
// function first(){
//   let a  = 10;
//   return [10,12,14];
// }
// function first(){
//   let a  = 10;
//   return {
//     num:a
//   };
// }
// function first(a,b){
//   let c = a+b;
//   return c;
// }
 
function first(x,y){
  return x+y;
}

let result = first();
console.log(result);

// ----------------- hoisting -------------------

// ----------------- higher order funtions -------------------

// ----------------- clouser -------------------

// ----------------- map, filter, reduce , find -------------------

// ----------------- asyn programing -------------------