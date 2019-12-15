class Movie {
    constructor() {
        this.eachMovie();
        this.getReview();
        // this.oneMovieCard();
    }

    eachMovie() {
        const eachCard = document.querySelector(".with-margin");
        eachCard.addEventListener('click', e => {
            if (e.target.className === "movie-title") {
                // console.log(e)
                const columnCard = document.querySelector('.row');
                columnCard.style.display = 'none'

                const movieId = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id
                this.getMovieData(movieId);
            }
        })

    } //eachMovie func

    getMovieData(movieId) {
        const url = `http://localhost:3000/api/v1/movies/${movieId}`
        fetch(url).then(resp => resp.json()).then(movie => {
            // this.oneMovieCard(movie)
            const columnCardDisplay = document.querySelector('.container');
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
                    <div class="review-input">
                        <input placeholder="Add review"></input>
                        <input type="submit" value="Add"></input>
                    <div>
                </div>
            </div>
        </div>
        `;
    } //onMovieCard func

    getReview() {
        fetch("http://localhost:3000/api/v1/reviews").then(resp => resp.json()).then(revs => console.log(revs))
    }


} //class closing brackets


const clickTitle = new Movie();