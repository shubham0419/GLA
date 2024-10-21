// let b = `hello`;
// console.log(typeof(b));
// console.log(b);
// console.log(b[3]);

// // function/Methods on string
// let newB = b.substr(2,4);
// console.log(newB);

// let slicedB = b.slice(1,4);
// console.log(slicedB);

// // let replaceSingle  = b.replace("l","p");
// // console.log(replaceSingle);

// let date = "18-10-2024";

// // let b = `hello`;
// let newDate = date.replaceAll("-","/");
// // console.log(newDate);

// let isPresent = b.includes("llo");
// // console.log(isPresent);

// let index = b.indexOf("lloo");
// // console.log(index);

// let concated = b.concat(" WorlD"," !!");
// console.log(b);
// // console.log(concated);

// let lower = concated.toLowerCase();
// let upper = concated.toUpperCase();
// // console.log(lower,upper);

// let newStr = lower+upper;
// // console.log(newStr);

// let str = "this is a string"

// let strArr = str.split(" ");
// // console.log(strArr);

// // ------------------------------------
// // Array Destructive methods
// // remove at index
// let arr = [1,2,3,4,5,6,7,8];
// // arr.splice(4,2);
// console.log(arr);

// // add at index 
// // arr.splice(3,0,10,20,30,40)
// console.log(arr);

// // both add and remove
// arr.splice(5,2,100,200);
// console.log(arr);

// arr.reverse();

let a = [1,2,3,4,5,6,7,8];

let ans = a.includes(5);
let ans2 = a.indexOf(6);
let ans3 = a.concat([12,13,14],[21,22,23,24]);
let ans4 = a.slice(2,10);
let ans5 = a.join(" ");
// console.log(a);
// console.log(ans5);

// loops
for(let ele of a){
  console.log(ele);
}


