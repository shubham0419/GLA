let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function square(x) {
  return x * x;
}
let squareArr = a.map(square);

const mapOverview = (arr,fun) => {
  const squareArr = [];
  for (let ele of arr) {
    squareArr.push(fun(ele));
  }
  return squareArr;
};

function cube(x){
  return x*x*x;
}
// console.log(mapOverview(a,cube));
// console.log(a.map(cube));
// console.log(mapOverview(a,square));
// a

// y=Index 
const newArr = a.map((x,y)=>{
  return Math.pow(x,y);
})

// console.log(newArr);

// filter
function odd(x){
  return x%2;
}

let oddArr = a.filter(odd);
console.log(oddArr);