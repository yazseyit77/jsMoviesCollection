class MoviesCompare {
    constructor() {
        this.triggerMoviesCompare();
        this.addMovie();
    }

    triggerMoviesCompare() {
        const compareBtn = document.querySelector('.compare');
        compareBtn.addEventListener("click", (e) => {
            e.preventDefault();
            // console.log('clicked');
            const columnCardDisplay = document.querySelector('.row');
            columnCardDisplay.style.display = 'none';
            if (columnCardDisplay.style.display = 'none') {
                console.log("done!");
                const container = document.querySelector(".container");
                container.innerHTML += this.addMovie();
            }
        });
    }

    addMovie() {
        return `
                <div class="columns">
                    <div class="column">
                        <div id="left-autocomplete"></div>
                        <div id="left-summary"></div>
                    </div>

                    <div class="column">
                        <div id="right-autocomplete"></div>
                        <div id="right-summary"></div>
                    </div>
                </div>
                <div class="column is-half notification is-info tutorial">
                    <h1 class="title">Search For a Movie on Both Sides</h1>
                    <p class="subtitle">We will tell you which is best!</p>
                </div>
                `;
    }

}


// const trigger = new MoviesCompare;
// trigger.triggerMoviesCompare();