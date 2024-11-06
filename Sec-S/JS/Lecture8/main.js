// let arr = [1,2,3,4,5,6,7,8];
// // MAp - returns a new modified array
// function MapOverview(arr,cb){
//   let ans = [];
//   for(let ele of arr){
//     ans.push(cb(ele));
//   }
//   return ans;
// }
// const square = (x)=>{
//   return x*x;
// }
// let squareArr = MapOverview(arr,square);
// let sqArr = arr.map(square);
// console.log(sqArr);
// let cubeArr = arr.map((ele)=>{
//   return ele**3;
// })
// console.log(cubeArr);

// // Filter -> returns a new filterd array
// function helper(x){
//   return x%2;
// }
// arr = [1,2,3,4,5,6,7,8]
// function filterOverview(arr,cb){
//   let ans = [];
//   for(let ele of arr){
//     if(cb(ele)){
//       ans.push(ele);
//     }
//   }
//   return ans;
// }
// console.log(filterOverview(arr,helper));
// let oddArr = arr.filter((ele)=>{
//   return ele%2;
// })
// let evenArr = arr.filter((ele)=>{
//   return !(ele%2);
// })

// arr = [1,2,3,4,5,6,7,8]

// let total = arr.reduce((ele,accum)=>{
//   return accum+ele
// },0);

let cart = [
  {name:"apple",price:10,quantity:2},
  {name:"banana",price:5,quantity:3},
  {name:"orange",price:7,quantity:1}
];

// let cartToatal = cart.reduce((accum,product)=>{
//   return accum + (product.price * product.quantity);
// },0)
// console.log(cartToatal);

// let product = cart.find((ele)=>{
//   return ele.name === "apple"
// })
// console.log(product);

let arr = [13,22,33,1,5,10,2,5];
// let IncreasingOrder = arr.sort((a,b)=>{
//   return a-b;
// });
// console.log(IncreasingOrder);
// let decreasingOrder = arr.sort((a,b)=>{
//   return b-a;
// });
// console.log(decreasingOrder);

cart = [
  {name:"apple",price:10,quantity:2},
  {name:"banana",price:5,quantity:3},
  {name:"orange",price:7,quantity:1}
];

let incOrder = cart.sort((a,b)=>{
  return a.price-b.price;
})
console.log(incOrder);