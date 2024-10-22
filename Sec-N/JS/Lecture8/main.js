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
})