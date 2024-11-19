const form  = document.getElementById("movieForm");
const moviesContainer = document.getElementById("movies-container");

let movies = localStorage.getItem("movies");
let moviesObj = JSON.parse(movies);


if(moviesObj.length >0){
  createMovieElements();
}

function createMovieElements (){
  moviesContainer.innerHTML = "";
  for(let movie of moviesObj){
    const singleMovie = document.createElement("div");
    singleMovie.classList.add("singlMovie");
    const banner = document.createElement("img");
    banner.className = "banner";
    banner.src = movie.show.image.original;
    let summary = movie.show.summary.slice(0,100);
    if(movie.show.summary.length>100){
      summary += "...";
    }
    singleMovie.innerHTML = `<h2>${movie.show.name}</h2>
    <h4>${movie.show.rating.average}</h4>
    ${summary}`
    singleMovie.prepend(banner);
    moviesContainer.append(singleMovie);
  }
  
}

const getMovies = async (search)=>{
  const res = await fetch(`http://api.tvmaze.com/search/shows?q=${search}`);
  const data = await res.json();
  let stringofArr = JSON.stringify(data);
  localStorage.clear();
  localStorage.setItem("movies",stringofArr);
  createMovieElements();
}

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  let input = e.target.children[0];
  let search = input.value.trim();
  input.value = "";
  getMovies(search);
});

