//just fetches the data
class MoviesLoader {

    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1/movies";
    }

    getMovies() {
        return fetch(this.baseUrl)
            .then(resp => resp.json());
    }
}
// const loader = new MoviesLoader();
// loader.getMovies()