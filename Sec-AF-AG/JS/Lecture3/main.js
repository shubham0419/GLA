// let a =10;
// console.log(a);
// let result = fun();
// console.log(result);
// function fun(){
//   console.log("hiii");
//   return 5+10;
// }
// // const normal = function(){
// // }
// let ans = arrow(5,10);
// console.log(ans);
// const arrow = (a,b)=>{
//   console.log("arrow function");
//   return a+b;
// }

// hoisting Questions
// let result2 = fun1(b,8);
// console.log(result2); 
// console.log(b); 
// var b = 10;
// function fun1(x,y){
//   return x+y;
// }
// let ans2 = fun1(b,5);
// console.log(ans2); 
// let a;
// console.log(a+10); // NaN
// console.log("29"+10+50); //concat
// question
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
// question
let b ;
let a =10;
let ans = fun(a,b);
b= 20;
console.log(ans);
ans = fun(a,b);
console.log(ans);
const fun = (a,b)=>{
  let sum  = a+b;
  return sum; 
}