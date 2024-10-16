
// let a = Math.random()*100;

// // // if(a<5){
// // //   console.log("less");
// // // }else{
// // //   console.log("more");
// // // }

// // // // ternary operator #
// // // a<5?console.log("T less"):console.log("T More");
// // console.log(a);
// // if(a<20){
// //   console.log("less 20");
// // }else if(a<40){
// //   console.log("less 40");
// // }else if(a<60){
// //   console.log("less 60");
// // }else if(a<80){
// //   console.log("less 80");
// // }else{
// //   console.log("less 100");
// // }

// // a<20?console.log("T 20"):a<40?console.log("T 40"):a<60?console.log("T 60"):console.log("less T 80");

// let b = 20;
// let c = "20";

// if(b==c){
//   console.log(true);
// }else{
//   console.log(false);
// }

// if(b===c){
//   console.log(true);
// }else{
//   console.log(false);
// }

// let a = 10;
// if(a==="10"){
//   console.log(true);
// }else{
//   console.log(false);
// }

// if(a=="10" && a==="10" && a==100/10 && 1000/10){
//   console.log(true);
// }else{
//   console.log(false);
// }

// if(a=="10" || a==="10" || a==100/10 && a==1000/10){
//   console.log(true);
// }else{
//   console.log(false);
// }

// if((a=="10" || a==="10") && (a==100/10 && a==1000/10)){
//   console.log(true);
// }else{
//   console.log(false);
// }

// // let userAns = prompt("what is your age");
// // console.log(typeof(userAns),userAns);

// let str = "10002avhdaj"
// let numb = parseInt(str);

// let d = 100;
// let conv = d.toString();
// console.log(conv);

// let dd = d.toFixed(2);
// console.log((dd));
// console.log(typeof(dd));

// console.log(typeof(numb),numb);

// const num = prompt("Enter a number");
// // take the number by prompt
// // Q check a number is +ve or -ve or zero or string

// const result = isNaN(num)?"string":num<0?"-VE":num>0?"+Ve":"zero";
// console.log(result);

const arr = [3,"4",5,"6",7,"8",9,10,11,"12"];
// Q generate a random number number b/w 3 to 12 and check 
// what is type of that number in array 
let r = Math.round(Math.random()*(12-3))+3;

console.log(r);
for(let a of arr){
  (a==r) && console.log(typeof(a));
}

{
  let d = 10;
  var t = 20
}

console.log(t);
// console.log(d);

fun();

function fun(){
  let d = 10;
  console.log(10);
}
