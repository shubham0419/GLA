console.log("start");

const first = new Promise((resolve, reject) => {
  setTimeout(() => {
    let num = Math.random() * 10;
    if (num < 5) {
      resolve(num);
    }else{
      reject(num);
    }
  }, 1000);
});

first.then((result)=>{
  console.log(result,"resolved");
}).catch((error)=>{
  console.log(error,"rejected");
});

console.log("end");

let arr = [12,3,78,3,6,10,5,1,2,33,4,44,45];

