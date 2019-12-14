class App {
    // constructor(name, genre, released, ratings, url, user_id, plot, awards, metaScore, boxOffice) {
    //     this.name = name;
    //     this.genre = genre;
    //     this.released = released;
    //     this.ratings = ratings;
    //     this.url = url;
    //     this.user_id = user_id;
    //     this.plot = plot;
    //     this.awards = awards;
    //     this.metaScore = metaScore;
    //     this.boxOffice = boxOffice;
    // }

    constructor() {
        this.movie = new Movie();
        this.movies = new Movies();
        this.triggerAbout = new About();
    }
}