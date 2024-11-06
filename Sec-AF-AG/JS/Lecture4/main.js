let a =10;

if(a=="10"){
  console.log(true);
}else{
  console.log(false);
}

if(a==="10"){
  console.log(true);
}else{
  console.log(false);
}
a = 10;
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

let ans = a==="10"?true:false;

let ans2 = a=="10"?(a==="10"?"string":"number"):"not equal";

let d = prompt("enter number");
// take the number by prompt
// Q check a number is +ve or -ve or zero or string

let result = d==0?"zero":(d<0?"-ve":(d>0?"+ve":"string"))
console.log(result);