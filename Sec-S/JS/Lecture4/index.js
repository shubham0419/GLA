
const obj = {
  name:"kuchbhi",
  age:24,
  studing:false,
  arr:[1,2,3,4,5],
}
// // console.log([1,2,3,4,5,6,7,8]);
// console.log(obj);
// console.log(obj.arr);
// console.log(obj["arr"]);
// console.log(obj.arr[2]);

// // obj.college = "GLA";
// obj["college"] = "GLA"
// console.log(obj);

// obj.name = "this is changed";
// console.log(obj);

// -------------------- Loops -------------------
let arr = [1,2,3,4,5,6,7,8,9];
// let i = 0;

// while(i<arr.length){
//   console.log(arr[i]);
//   i++;
// }
// [1,2,3,4,5,6,7,8,9]
// for(let i=0;i<arr.length;i++){
//   console.log(arr[i]);
// }
// [1,2,3,4,5,6,7,8,9]
// for (const item of arr) {
//   console.log(item);
// }
// for (const item in arr) {
//   console.log(item,"->",arr[item]);
// }

// {
//   name:"kuchbhi",
//   age:24,
//   studing:false,
//   arr:[1,2,3,4,5],
// }

for(let key in obj){
  console.log(key,"->",obj[key]);
}

const complexObj = {
  membership:{
    name:"Mega",
    price:20000,
    devices :[
      {
        deviceName:"Iphone 12",
        ipAddress:"122.681.32.4"
      }
    ]
  }
}

