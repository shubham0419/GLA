// let a;
// let ans = fun();
// console.log(a);
// a = 10;
// console.log(ans);
// function fun(){
//   let b = 20;
//   console.log(b);
//   return "hoisting";
// }
// console.log(b);

// let b ;
// let a =10;
// let ans = fun(a,b);
// b= 20;
// console.log(ans);
// ans = fun(a,b);
// console.log(ans);
// const fun = (a,b)=>{
//   let sum  = a+b;
//   return sum; 
// }


// higher order functions

// function cb(){
//   console.log("callback function");
//   return "return of CB function"
// }
// function higher(callback){
//   console.log("higher order function");
//   let ans = callback();
//   console.log("this is below call");
//   return ans;
// }
// console.log(higher(cb));

// function outer() {
//   let arr = [];
//   let i;
//   for (i = 0; i < 4; i++) {
//     arr[i] = function(){ return i; }
//   }
//   return arr;
// }
// let get_arr = outer();
// // console.log(get_arr);
// console.log(get_arr[0]());
// console.log(get_arr[1]());
// console.log(get_arr[2]());
// console.log(get_arr[3]());

// function cb() {
//   console.log("callback function");
// }

// function higher(callback) {
//   console.log("higher order function");
//   let ans = callback();
//   console.log("this is below call");
//   return ans;
// }

// console.log(higher(cb));

function cb() {
  console.log("callback function");
  return function() {
    console.log("inner function");
    return "Inner Return";
  };
}
function higher(callback) {
  console.log("higher order function");
  let ans = callback();
  console.log("this is below call");
  return ans();
}
console.log(higher(cb));

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

