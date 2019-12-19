class Movies {
    constructor() {
        this.adapter = new MoviesLoader();
        this.fetchAndLoadMovies();
        this.deleteMovie();
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
                    <figure class="image is-3.85by3">
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
                        <p>IMDB Rating: ${movie.ratings}
                            <button id="deleteBtn" class="button is-danger is-outlined is-pulled-right is-small">
                                <span>Remove</span>
                                <span class="icon is-small">
                                    <i class="fas fa-times"></i>
                                </span>
                            </button>
                        </p>
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

    deleteMovie() {
        const eachCard = document.querySelector(".with-margin");
        eachCard.addEventListener('click', e => {
            e.preventDefault();
            if (e.target.parentElement.id === "deleteBtn") {
                const movieId = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
                fetch(`http://localhost:3000/api/v1/movies/${movieId}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8'
                        }
                    }).then(resp => resp.json())
                    .then(res => res)
                window.location.reload(true); //reloads the page from server + clears the browser cache
            } // if
            // window.location.reload(false);
        })
    } // deleteMovie()

} // Movies class

let movies = new Movies();