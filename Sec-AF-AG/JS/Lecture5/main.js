// higher order functions && call back functions
// function cb(){
//   console.log("Callback function executed");
//   return "return from cb"
// }
// function higher(callback){
//   let result = callback();
//   console.log(result);
//   console.log("Higher order function executed");
//   return "highr order function"
// }
// console.log(higher(cb));

// function higher2(){
//   console.log("higher order executing");
//   // return function(){
//   //   console.log("higher2 callback executed");
//   //   return "callback function"
//   // }
//   return ()=>{
//     console.log("higher2 callback executed");
//     return "callback function"
//   }
// }
// let result = higher2();
// console.log(result());

// function cb(x, y) {
//   console.log("callback function", x, y);
//   return x + y;
// }
// function higher(callback) {
//   console.log("higher order function");
//   let ans = callback(3, 7);
//   console.log("this is below call");
//   return ans;
// }
// console.log(higher(cb));

// function cb(x) {
//   console.log("callback function", x);
//   return function(y) {
//     console.log("inner function", y);
//     return x + y;
//   };
// }
// function higher(callback) {
//   console.log("higher order function");
//   let innerFunc = callback(5);
//   console.log("this is below call");
//   return innerFunc(10);
// }
// console.log(higher(cb));

// function cb(x) {
//   console.log("callback function", x);
//   if (x > 10) {
//     return "Greater than 10";
//   } else {
//     return "Less than or equal to 10";
//   }
// }
// function higher(callback, value) {
//   console.log("higher order function");
//   let ans = callback(value);
//   console.log("this is below call");
//   return ans;
// }
// console.log(higher(cb, 12));
// console.log(higher(cb, 8));

// function cb() {
//   console.log("callback function");
//   return function() {
//     console.log("inner function 1");
//     return function() {
//       console.log("inner function 2");
//       return "Final Return";
//     };
//   };
// }
// function higher(callback) {
//   console.log("higher order function");
//   let innerFunc1 = callback();
//   console.log("this is below call 1");
//   let innerFunc2 = innerFunc1();
//   console.log("this is below call 2");
//   return innerFunc2();
// }
// console.log(higher(cb));

// =----------------------map----------------------

let arr = [1,2,3,4,5,6,7,8,9,10];
function square(x){
  return x*x;
}

let sqArr = arr.map(square);
let squareArr = arr.map(function(ele){
  return ele*ele;
});
let squArr = arr.map((ele)=>{
  return ele*ele;
})

function mapOverview (arr,cb){
  let a = [];
  for(let ele of arr){
    a.push(cb(ele));
  }
  return a;
}
// mapOverview(arr,square);
// console.log(arr);
// console.log(sqArr);

arr = [1,2,3,4,5,6,7,8,9,10];
const odd = arr.filter((ele)=>{
  return ele%2;
})
const even = arr.filter((ele)=>{
  return !(ele%2)
});
console.log(odd,even);

arr = [1,2,3,4,5,6,7,8,9,10];

let total = arr.reduce((accum,ele)=>{
  return accum+ele;
},0);

let foundEle = arr.find((ele)=>{
  return ele%5==0;
});

arr = [12,3,4,11,1,9,2,15,12,10];
let sorted = arr.sort();
// console.log(sorted);
let incSorted = arr.sort((a,b)=>{
  return a-b;
});
console.log(incSorted);
let decSorted = arr.sort((a,b)=>{
  return b-a;
});
console.log(decSorted);

let products = [
  {name: 'product1', price: 10.99, quantity: 5},
  {name: 'product2', price: 9.99, quantity: 10},
  {name: 'product3', price: 7.99, quantity: 15},
  {name: 'product4', price: 17.99, quantity: 12},
]

let filtered = products.filter((product)=>{
  return product.price < 10;
})

let totalSum = products.reduce((accum,product)=>{
  return accum + (product.price*product.quantity);
},0);
console.log(totalSum);