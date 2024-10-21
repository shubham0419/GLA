function higher(fun){
  console.log("higher");
  let a = 10;
  // let ans = fun(a);
  // return ans;
  return fun(a);
}
function another(x){
  return `this is ${x}`;
}

// let ans = higher(another);
// console.log(ans);

// function high(){
//   console.log("high");
//   function sum(){
//     return 5+5;
//   }
//   return sum;
// }

// function high(){
//   console.log("high");
//   return function(){
//     return 5+5;
//   };
// }

function high(){
  console.log("high");
  return (a,b)=>{
    return a+b;
  };
}

// const ans2 = high();
// console.log(ans2(10,20));

function fun(){
  let a = 10;
  return ()=>{
    return a++;
  }
}
const test = fun();

// console.log(test());
// console.log(test());
// console.log(test());
// console.log(test());



// Q 
// function test(){
//   let a = 10;
//   let b = 10;
//   return ()=>{
//     return (++a )+ b;
//   }
// }
// result = test();
// console.log(result());
// console.log(result());
// console.log(result());
// console.log(result());

// ---------------------------- call back function

function fun2(a,b,fun){
  let ans  = a+b;
  return fun(ans);
}
function cb(sum){
  return ("the sum is",sum);
}

// let sol = fun2(5,10,cb);
// console.log(sol);

let arr = [1,2,3,4,5,6,7,8,9];

function cb2(a){
  console.log(a);
  // return a
}

// arr.forEach(cb2);

arr.forEach((a)=>{console.log(a*a);});

