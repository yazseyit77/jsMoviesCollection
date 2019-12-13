class Movies {
    constructor() {
        this.movies = [];
        this.adapter = new MoviesLoader();
        this.fetchAndLoadMovies();
    }

    fetchAndLoadMovies() {
        this.adapter.getMovies();
    }
}

let movies = new Movies()

movies.fetchAndLoadMovies()