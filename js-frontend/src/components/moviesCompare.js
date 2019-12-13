class MoviesCompare {
    constructor() {
        this.createAutocomplete = createAutoComplete();
    }

    triggerMoviesCompare() {
        const compareBtn = document.querySelector('.compare');
        compareBtn.addEventListener("click", (e) => {
            e.preventDefault();
            console.log('clicked');
        });
    }

}