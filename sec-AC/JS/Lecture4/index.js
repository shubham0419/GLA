
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