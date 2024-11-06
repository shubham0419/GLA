


const promise = new Promise((resolve,reject)=>{
  setTimeout(() => {
    let num = Math.random()*10;
    if(num>5){
      resolve(num);
    }else{
      reject(num);
    }
  },1000);
});

promise.then((result)=>{
  console.log(result);
  console.log('Promise resolved')
}).catch((error)=>{
  console.log('Promise rejected')
  console.log(error);
});

console.log("end");


const arr = [10,18,2,5,6,20,15,19,4,1,13];

const second = new Promise((resolve,reject)=>{
  setTimeout(() => {
    let ind = Math.floor(Math.random()*arr.length);
    if(arr[ind]<10){
      resolve(arr[ind]);
    }else{
      reject(arr[ind]);
    }
  },500)
});

second.then((result)=>{
  console.log('Promise resolved')
  console.log(result);
}).catch((error)=>{
  console.log('Promise rejected')
  console.log(error);
});

arr = [true,false];
