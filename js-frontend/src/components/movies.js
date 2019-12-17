class Movies {
    constructor() {
        // this.movies = [];
        this.adapter = new MoviesLoader();
        this.fetchAndLoadMovies();
    }

    fetchAndLoadMovies() {
        this.adapter.getMovies()
            .then(movies => {
                for (const movie in movies) {
                    this.displayMovies(movies[movie]);
                }
            });
    }

    moviesCard(movie) {
        return `
        <div class="col-md-4">
            <div class="card" id="${movie.id}">
                <div class="card-image">
                    <figure class="image is-3.75by3">
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
                            <p class="title is-4"><a class="movie-title">${movie.name} (${movie.released})</a></p>
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
    }

    displayMovies(movie) {
        const movieGrid = document.querySelector('.row')
        movieGrid.innerHTML += this.moviesCard(movie);
    }

} // Movies class

let movies = new Movies();