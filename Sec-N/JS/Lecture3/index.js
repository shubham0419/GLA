// const arrr = [1,2,"hii",true,[4,5,false]];
// console.log(arrr);

// Destructive methods
const arr = [1,2,3,4,5,6,7];
// arr.push(8);
// console.log(arr);
// const ele = arr.pop();
// console.log(arr);

// // shift & unshift
// arr.unshift(0);
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.splice(2,2);
// console.log(arr);
console.log(arr);
// arr.splice(3,0,10);
// arr.splice(3,0,10,11,12,13);
// console.log(arr);

// [1,2,3,4,5,6,7]
// arr.splice(4,2,20,22,24);
// console.log(arr);

// Non-Destructive function
// [1,2,3,4,5,6,7]
// const isPresent = arr.includes(7)
// console.log(isPresent);

// const slicedArr = arr.slice(3,5);
// console.log(slicedArr);

// const index = arr.indexOf(6);
// console.log(index);

// const lastIndex = arr.lastIndexOf(5);
// console.log(lastIndex);

// // [1,2,3,4,5,6,7]
// const str = arr.join(" ,");
// console.log(str);

// const newArr = ["this","is","another","array"];
// const combinedArr = arr.concat(["this","is","concated"],newArr);
// console.log(combinedArr);

// // reverse and sort - destructive method
// arr.reverse();
// console.log(arr);

// const toSort = [1,2,3,4,5,6,7,8,9,10,11,12];
// toSort.sort();
// console.log(toSort);

// Loop --------------------------------
// [1,2,3,4,5,6,7]

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

for(let item of arr){
  console.log(item);
}

