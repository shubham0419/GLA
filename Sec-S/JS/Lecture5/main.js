
let a = Math.random()*100;

// if(a<5){
//   console.log("less");
// }else{
//   console.log("more");
// }

// // ternary operator #
// a<5?console.log("T less"):console.log("T More");
console.log(a);
if(a<20){
  console.log("less 20");
}else if(a<40){
  console.log("less 40");
}else if(a<60){
  console.log("less 60");
}else if(a<80){
  console.log("less 80");
}else{
  console.log("less 100");
}

a<20?console.log("T 20"):a<40?console.log("T 40"):a<60?console.log("T 60"):console.log("less T 80");