

// const fetchPromise = fetch("https://official-joke-api.appspot.com/random_joke");

// fetchPromise.then((response)=>{
//   response.json().then((data)=>{
//     console.log(data);
//   }).catch((error)=>{
//     console.error(error);
//   })
// }).catch((error)=>{
//   console.log(error);
// });

// async function getJoke() {
  
// }
console.log("start");
const getJokes = async ()=>{
  let res = await fetch("https://official-joke-api.appspot.com/random_joke");
  let data = await res.json();
  console.log(data);
}
getJokes();
console.log("end");