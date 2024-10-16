// function fun(x,y,z){
//   return x+y+z;
// }

function fun(x,y,z){
  return x-y-z;
}

const result = fun(5,"7",10);
console.log(result);

// default parameters 
function fun1(x,y=10,z=20){
  let obj = {
    result:x+y+z
  }
  return obj;
  // return {result:x+y+z}
}
// console.log(fun1(5,5)); 
console.log(fun1(5,1,1));

function test(a,b){
  return (a+b<0)
}

const ans = test(5,10);
console.log(ans);
console.log(typeof(ans));


// arrow function

// const arrow = (a,b)=>{
//   return a+b;
// }

const arrow = (a,b)=>a+b;

let ans1 = arrow(5,5);
console.log(ans1);

//

// console.log(d);
// var d=10;

let newAns = fun1(10,10);

console.log(newAns);

function fun1(a,b){
  return a+b;
}

