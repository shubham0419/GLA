// const arr = [1,2,3,"hii",true,["hii2",false]];

// console.log(arr[0]); // acces val at particular index
// console.log(arr);

// // const delVal = arr.pop();
// // console.log(delVal); // delete last val from array

// // console.log(arr);
// // arr.push(delVal);

// // console.log(arr);

// // To push ele at 0th index

// arr.unshift("this is pushed");
// console.log(arr);

// const firstVal = arr.shift();
// console.log(arr);

// // delete element at a particular index
// // arr.splice(3,1);
// arr.splice(1,3);
// console.log(arr);

// // arr.splice(1,0,"2");
// arr.splice(1,0,"2","3",4,false);
// console.log(arr);

// non destructive methods
const a = [1,2,3,4,5,6,7,8,9,10,11];

const newArr = a.slice(2,7);

console.log(a);
console.log(newArr);

const isExist = a.includes(17); 
console.log(isExist);

const strOfA = a.join(" ");
console.log(strOfA);

const newStr = a.toString();
console.log(newStr);

// destructive method
const reverseA = a.reverse();
console.log(reverseA);