console.log("start");

const promise = new Promise((resolve,reject)=>{
  let randomNum = Math.random()*10;
  if(randomNum<5){
    resolve(randomNum);
  }else{
    reject(randomNum);
  }
});

promise.then((response)=>{
  console.log("resolved",response);
}).catch((error)=>{
  console.log("rejected",error);
});

console.log(promise);

console.log("end");

// api calling

let fetchPromise = fetch("https://official-joke-api.appspot.com/random_joke");

// fetchPromise.then((res)=>{
//   let data = res.json();
//   data.then((result)=>{
//     console.log(result);
//   }).catch((error)=>{
//     console.log(error);
//   });
// }).catch((error)=>{
//   console.log(error);
// });

// async function name() {
  
// }
console.log("start");
const getJokes = async ()=>{
  let res = await fetch("https://official-joke-api.appspot.com/random_joke");
  let data = await res.json();
  console.log(data);
}
getJokes();
console.log("end");