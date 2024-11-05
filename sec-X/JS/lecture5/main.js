function square(x){
  console.log("inside square");
  return x * x;
}

function higher(cb){
  // console.log("inside higher");
  let sq = cb(10);
  console.log("inside higher");
  return sq + 100;
}

// console.log(higher(square));

let arr = [1,2,3,4,5,6,7,8,9];
// map
function sq(x){
  return x*x;
}
// let sqArr = arr.map(sq);
let sqArr = arr.map((x)=>{
  return x*x;
})
console.log(sqArr);

let cube = arr.map((ele)=>{
  return ele**3;
})
console.log(cube);
arr = [1,2,3,4,5,6,7,8,9]
// filter
function odd(ele){
  return ele%2;
}
function even(ele){
  return !(ele%2);
}
let oddArr = arr.filter(odd);
let evenArr = arr.filter(even);
oddArr = arr.filter((ele)=>{
  return ele%2;
})
console.log(evenArr);
console.log(oddArr);
arr = [1,2,3,4,5,6,7,8,9]
let sum = arr.reduce((ele,accum)=>{
  return accum+ele;
},0);
console.log(sum);