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

// ternary operatoer 

a==="10" ? console.log(true) : console.log(false);

a==10?a==="10"?console.log(true):console.log("type not matched")
:console.log(false);

if(a==10){
  if(a==="10"){
    console.log(true);
  }else{
    console.log('type not matched');
  }
}else{
  console.log(false);
}

const ab = prompt("write a paragraph");
// console.log(userPara);

// Q check a number is +ve or -ve or zero or string
(ab<0 || ab>0 || ab==0)?ab==0?console.log("zero"):ab<0?console.log('-Ve')
:console.log("+ve"):console.log("string");

const arr = [3,"4",5,"6",7,"8",9,10,11,"12"];
const random = Math.round(Math.random()*(12-3))+3;
// console.log(typeof("hii"));
// Q generate a random number number b/w 3 to 12 and check 
// what is type of that number in array      
let index = -1;
for(let i=0;i<arr.length;i++){
  if(random==arr[i]){
    index=i;
    break;
  }
}
console.log(random,typeof(arr[index]));

a==10 && console.log(true);
if(a==10) console.log(true);

