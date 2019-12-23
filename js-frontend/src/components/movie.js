class Movie {
  constructor() {
    this.eachMovie();
  }

  eachMovie() {
    const eachCard = document.querySelector(".with-margin");
    eachCard.addEventListener("click", e => {
      if (e.target.className === "movie-title") {
        const columnCard = document.querySelector(".row");
        const columnCard1 = document.querySelector(".row1");
        columnCard.style.display = "none";
        columnCard1.style.display = "none";

        const movieId =
          e.target.parentElement.parentElement.parentElement.parentElement
            .parentElement.id;
        this.getMovieData(movieId);
      }
    });
  } //eachMovie func

  getMovieData(movieId) {
    const url = `http://localhost:3000/api/v1/movies/${movieId}`;
    fetch(url)
      .then(resp => resp.json())
      .then(movie => {
        const columnCardDisplay = document.querySelector(".container");
        columnCardDisplay.innerHTML += this.oneMovieCard(movie);
      });
  } //getMovieData func

  oneMovieCard(movie) {
    return `
        <div class="col-md-12">
            <div class="card" id="">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="${movie.url}" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="${movie.url}" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">${movie.name} (${movie.released})</p>
                            <p class="subtitle is-6">${movie.genre}</p>
                        </div>
                    </div>
                    <div class="content">
                        <p>${movie.plot}</p><n /> 
                        <p>IMDB Rating: ${movie.ratings}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
  } //onMovieCard func
} //class closing brackets

const clickTitle = new Movie();
