// console.log("start");
// const promise = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     console.log("inside promise");
//     let num = Math.random() * 10;
//     if (num > 5) {
//       resolve(num);
//     } else {
//       reject(num);
//     }
//   },3000);  
// });
// console.log(promise);
// promise.then(()=>{}).catch(()=>{})
// promise.then((result)=>{}).catch((error)=>{})
// promise
//   .then((result) => {
//     console.log("promise resolved");
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log("promise rejected");
//     console.log(error);
//   });

// console.log("end");

// const fetchPromise = fetch("https://v2.jokeapi.dev/joke/Any?type=single");

// fetchPromise.then((res)=>{
//   res.json().then((data)=>console.log(data)).catch((error)=>console.log(error))
// }).then((error)=>{
//   console.log(error);
// })

// async function first (){

// }
const first = async ()=>{
  let res = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
  let data = await res.json();
  console.log(data.joke);
}
first();