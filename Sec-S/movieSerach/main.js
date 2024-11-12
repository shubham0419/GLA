const form = document.getElementById("movieform");
const movieContainer = document.getElementById("container");
const manipulateHtml = (data) => {
  try {
    for (let movie of data) {
      const div = document.createElement("div");
      const img = document.createElement("img");
      img.setAttribute("src", movie.show.image.original);
      div.innerHTML = `<h2>${movie.name}</h2> ${movie.summary}`;
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
    manipulateHtml(data);
  } catch (error) {
    console.log(error);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  try {
    console.log(e.target.children[0].value);
    let data = getMovies(e.target.children[0].value);
  } catch (error) {
    console.log(error);
  }
});
