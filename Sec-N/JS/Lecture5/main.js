
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

let userAns = prompt("what is your age");

console.log(typeof(userAns),userAns);
