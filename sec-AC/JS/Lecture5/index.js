// function first(){
//   console.log("hii");
// }

// first();
// first.call();


// // default parameters
// function fun(x,y,z=10){
//   console.log(x+y+z);
// }
// fun(5,6,8);

// // function fun2(x,y){
// //   return x+y;
// // }

// // function fun2(x,y){
// //   return x-y;
// // }

// function fun2(x,y){
//   return (x-y<0);
// }
// const result = fun2(6,"8");
// console.log(result);

// // const arrow = (a,b)=>{
// //   return a<b;
// // }
// let a = 10;

// console.log(arrow(6,8));

// const arrow = (a,b)=> a<b;

// console.log(fun3(5,5));

// function fun3(a,b){
//   let e = 10;
//   console.log(e);
//   return a+b;
// }

// console.log(e);

// hoisting Questions

// let ans = fun(a,8);
// console.log(ans); // -> error,
// console.log(a); // -> error, undefine
// var a = 10;
// function fun(x,y){
//   return x+y;
// }
// let ans2 = fun(a,5);
// console.log(ans2); //->15
// ---------
let arrow = (x,y)=>{
  if(!a) return y;
  return x+y;
}
let b = 10;
let ans3 = arrow(a,b);
console.log(ans3); // 10,
console.log(a); // undefine
var a = 20;
let ans4 = arrow(a,b);
console.log(ans4); // 30

