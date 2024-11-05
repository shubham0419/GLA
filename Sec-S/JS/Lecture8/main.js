let arr = [1,2,3,4,5,6,7,8];
// MAp - returns a new modified array
function MapOverview(arr,cb){
  let ans = [];
  for(let ele of arr){
    ans.push(cb(ele));
  }
  return ans;
}
const square = (x)=>{
  return x*x;
}
let squareArr = MapOverview(arr,square);
let sqArr = arr.map(square);
console.log(sqArr);
let cubeArr = arr.map((ele)=>{
  return ele**3;
})
console.log(cubeArr);

// Filter -> returns a new filterd array
function helper(x){
  return x%2;
}
arr = [1,2,3,4,5,6,7,8]
function filterOverview(arr,cb){
  let ans = [];
  for(let ele of arr){
    if(cb(ele)){
      ans.push(ele);
    }
  }
  return ans;
}
console.log(filterOverview(arr,helper));
let oddArr = arr.filter((ele)=>{
  return ele%2;
})
let evenArr = arr.filter((ele)=>{
  return !(ele%2);
})

arr = [1,2,3,4,5,6,7,8]

let total = arr.reduce(()=>{},0)