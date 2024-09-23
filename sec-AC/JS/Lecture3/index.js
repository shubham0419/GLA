let arr = [1,2,3,4,5,6,7,8,9];

// console.log(arr.slice(2,5));
// console.log(arr.includes("5"));

// arr.splice(5,0,"5",true);
// console.log(arr);

// arr.splice(5,2,"6",false,null);
// console.log(arr);

// to push on 0th index
// arr.unshift(10,12);
// console.log(arr);

// // to delete on 0th index
// arr.shift();
// console.log(arr);

// let i = 0;
// while(i<arr.length){
//   console.log(arr[i]);
//   i++;
// }

// for(let i=0;i<arr.length;i++){
//   console.log(`element at ${i}th index is ${arr[i]}`);
// }

// for(let item of arr){
//   console.log(item);
// }

// for(let item in arr){
//   console.log(item);
// }

// console.log(arr.join(" | "));

const obj = {
  place:"GLA",
  year:3,
  jsStarted:true,
}

console.log(obj);
console.log(obj["jsStarted"]);
console.log(obj.place);

obj.newKey = "this is pushed";
obj["another"] = "hiiiii"

for(let key in obj){
  console.log(key);
}

// for(let key in arr){
//   console.log(key);
// }

const complex = {
  names : ["hii","this is a arr",1,2,3,4],
  insideObj : {
    name:"hii",
    age:20
  }
}

console.log(complex.insideObj.age);
console.log(complex.names[1]);