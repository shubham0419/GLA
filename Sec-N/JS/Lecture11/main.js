console.log("start");
const promise = new Promise((resolve, reject) => {
  setTimeout(()=>{
    console.log("inside promise");
    let num = Math.random() * 10;
    if (num > 5) {
      resolve(num);
    } else {
      reject(num);
    }
  },3000);  
});
console.log(promise);
// promise.then(()=>{}).catch(()=>{})
// promise.then((result)=>{}).catch((error)=>{})
promise
  .then((result) => {
    console.log("promise resolved");
    console.log(result);
  })
  .catch((error) => {
    console.log("promise rejected");
    console.log(error);
  });

console.log("end");