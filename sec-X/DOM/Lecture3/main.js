const container = document.getElementById("container");
const punchlineBtn = document.getElementById("getPunchline");
let punchline = "";

const newJokeBtn = document.getElementById("newJoke");

newJokeBtn.addEventListener("click",()=>{
  getJokes();
})

let name = localStorage.getItem("name");
name = JSON.parse(name);
console.log(typeof(name),name[0].age);

const createJoke = (joke)=>{
  const h2 = document.createElement("h2");
  h2.textContent = joke.setup;
  punchline = joke.punchline;
  container.innerHTML = "";
  punchlineBtn.style.display = "block"
  container.append(punchlineBtn);
  container.prepend(h2);
}

punchlineBtn.addEventListener("click",()=>{
  punchlineBtn.style.display = "none"
  const h3 = document.createElement("h3");
  h3.innerText = punchline;
  container.append(h3);
})

const getJokes = async ()=>{
  let arr = [{
      age:29,
      name:"John",
    }]
  let stringofArr = JSON.stringify(arr);
  console.log(stringofArr);
  localStorage.setItem("name",stringofArr);

  let response = await fetch("https://official-joke-api.appspot.com/random_joke");
  let data = await response.json();
  createJoke(data);
};

getJokes();

