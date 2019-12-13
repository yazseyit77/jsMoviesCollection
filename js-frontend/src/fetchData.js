// document.addEventListener("DOMContentLoaded", function () {

// })
function getMovies() {
    return fetch("http://localhost:3000/api/v1/movies")
        .then(resp => resp.json())
        .then(movies => {
            for (const movie in movies) {
                displayMovies(movies[movie]);
            }
        })
}
getMovies()

function moviesCard(movie) {
    return `
        <div class="card" style="display:float-right">
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
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
        </div>
    `;
}

function displayMovies(movie) {
    const movieGrid = document.querySelector('.column')

    movieGrid.innerHTML += moviesCard(movie);
}