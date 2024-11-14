const form = document.getElementById("movieForm");

const createMvieElement = (movies)=>{
  
}

const getMovies = async (search)=>{
  let res = await fetch(`http://api.tvmaze.com/search/shows?q=${search}`);
  let data = await res.json();
  createMvieElement(data);
}

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  let search = e.target.children[0].value;
  getMovies(search);
})
// console.log(form.parentElement);
// console.log(form.nextElementSibling);
// console.log(form.previousElementSibling);