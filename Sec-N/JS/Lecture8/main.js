let arr = [
  {
    "id": 1,
    "name": "John 1",
    "age": 25
  },
  {
    "id": 2,
    "name": "John 2",
    "age": 25
  },
  {
    "id": 3,
    "name": "John 3" ,
    "age": 25
  },
  {
    "id": 4,
    "name": "John 4",
    "age": 25
  },
]
// function cb(ele){
//   console.log(`hii ${ele.name} of id ${ele.id}`);
//   return ele.name;
// }
// arr.forEach(cb);

// arr.forEach(function (ele){
//   console.log(`hii ${ele.name} of id ${ele.id}`);
// })

// arr.forEach((ele)=>{
//     console.log(`hii ${ele.name} of id ${ele.id}`);
// })

let newArr = arr.map((ele)=>{
  return {
    newName : ele.name + " Doe",
    newAge : ele.age + 10,
  }
})
// console.log(newArr);

let a  = [1,2,3,4,5,6,7,8];

let squares = a.map((x)=>{
  return x*x;
})
console.log(squares);

// map overview

function MapOverview (arr,fun){
  let ans = [];
  for (let x of arr){
    let result = fun(x);
    ans.push(result);
  }
  return ans;
}

let sqArr = MapOverview(a,(y)=>{
  return y*y;
})
console.log(sqArr);

let cubes = a.map((ele)=>{
  return ele**3;
});

// Filter
a  = [1,2,3,4,5,6,7,8];

function helper(x){
  return x%2;
}
let odd = a.filter(helper);
function filterOverview(arr,fun){
  let ans = [];
  for(let ele of arr){
    if(fun(ele)){
      ans.push(ele);
    }
  }
  return ans;
}
console.log(odd);

let even = a.filter((ele)=>{
  return !(ele%2);
})

console.log(even);

let qstn = ["htis","is","si","sh","sit","issss","sssisis","not","s"];

const filteredArr = qstn.filter((ele)=>{
  return (ele.includes("i") && ele.includes("t"));
})
console.log(filteredArr);

// reduce - to do arithmatic on array

a  = [1,2,3,4,5,6,7,8];

let sum = a.reduce((accum,ele)=>{
  return accum+ele;
  // return accum*ele
},0);
console.log(sum);

let products = [
  {
    name:"coffee",
    mfg:"22/10/2024",
    exp:"20/10/2026",
    price:500,
  },
  {
    name:"coffee",
    mfg:"22/10/2024",
    exp:"20/10/2026",
    price:800,
  },
  {
    name:"coffee dark",
    mfg:"22/10/2024",
    exp:"20/10/2026",
    price:900,
  },
  {
    name:"coffee",
    mfg:"22/10/2024",
    exp:"20/10/2026",
    price:700,
  },
]

const totalBill = products.reduce((accum,ele)=>{
  return accum+ele.price;
},0)
console.log(totalBill);

// find 
const foundEle = products.find((ele)=>{
  return ele.name === "coffee dark";
})

console.log(foundEle);

