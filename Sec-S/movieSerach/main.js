const form = document.getElementById("movieform");
const movieContainer = document.getElementById("container");
const nigthMode = document.getElementById("nightToggle");

let movies = [];

nigthMode.addEventListener("click",(e)=>{
  document.body.classList.toggle("nightMode");
  if(document.body.classList.contains("nightMode")){
    nigthMode.innerText = "Day Mode";
  }else{
    nigthMode.innerText = "Night Mode";
  }
})

const manipulateHtml = () => {
  try {
    for (let movie of movies) {
      const div = document.createElement("div");
      div.className = "movieContainer";
      const img = document.createElement("img");
      img.setAttribute("class","banner");
      img.setAttribute("src", movie.show.image.original);
      div.innerHTML = `<h4>${movie.show.rating.average}</h4><h2>${movie.show.name}</h2> ${movie.show.summary}`;
      div.prepend(img);
      movieContainer.append(div);
    }
  } catch (error) {
    console.log(error);
  }
};

const getMovies = async (search) => {
  try {
    const res = await fetch(`http://api.tvmaze.com/search/shows?q=${search}`);
    const data = await res.json();
    movies = data;
    manipulateHtml();
  } catch (error) {
    console.log(error);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  try {
    console.log(e.target.children[0].value);
    getMovies(e.target.children[0].value);
  } catch (error) {
    console.log(error);
  }
});
