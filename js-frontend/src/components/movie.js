class Movie {
    constructor() {
        this.eachMovie();
    }

    eachMovie() {
        const eachCard = document.querySelector(".with-margin");
        eachCard.addEventListener('click', e => {
            if (e.target.className === "movie-title") {
                // console.log(e)
                const movieId = e.target.parentElement.parentElement.parentElement.parentElement.parentElement
                debugger
            }
        })

    } //eachMovie func


} //class closing brackets

const clickTitle = new Movie();