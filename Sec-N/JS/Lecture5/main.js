
// let a = 10;

// let b = "10";

// if(a==b){
//   console.log(true);
// }else{
//   console.log(false);
// }

// if(a===b){
//   console.log(true);
// }else{
//   console.log(false);
// }


// let c = "100";

// if((c==100 && c<=200 && !c) || c<=100){
//   console.log(true);
// }else{
//   console.log(false);
// }

let a = 10;
// if(a=="10"){
//   console.log(true);
// }

if(a==="10"){
  console.log(true);
}else{
  console.log(false);
}

if(a=="10" && a==="10" && a==100/10 && 1000/10){
  console.log(true);
}else{
  console.log(false);
}

if(a=="10" || a==="10" || a==100/10 && a==1000/10){
  console.log(true);
}else{
  console.log(false);
}

if((a=="10" || a==="10") && (a==100/10 && a==1000/10)){
  console.log(true);
}else{
  console.log(false);
}

let d = prompt("enter number");
// take the number by prompt
// Q check a number is +ve or -ve or zero or string

isNaN(d)?d<0?console.log("-ve"):d>0?console.log("+ve")
:console.log("zero"):console.log("string");



const arr = [3,"4",5,"6",7,"8",9,10,11,"12"];
// Q generate a random number number b/w 3 to 12 and check 
// what is type of that number in array  

let r = Math.round(Math.random()*(12-3)) + 3;






