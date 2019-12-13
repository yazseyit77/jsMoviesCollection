class About {
    constructor() {
        this.loadAbout();
        this.addAbout();
        this.displayAbout();
    }

    addAbout() {
        return `
            <div class="column is-one-quarter">
            </div>
            <div class="column">
                <div class="card">
                    <div class="card-content">
                    <h1 class="title">About</h1>
                    <p>
                        This application is intended to be used for movie collection, movie comparing as an API Practice. It has no advertising feature, it is not intended for commercial use.
                    </p>
                    <p>
                        The owner of this Web Application is a young enthusiast, learning programming as a beginner level.
                    </p>
                    </div>
                    <footer class="card-footer">
                        <p class="card-footer-item">
                            <span>
                            “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.” - <em>Jeff Atwood</em>
                            </span>
                        </p>
                        </footer>
                    </div>
                </div>
            <div class="column is-one-quarter">
            </div>
        `;
    }

    loadAbout() {
        const aboutBtn = document.querySelector('.about')
        aboutBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const columnCard = document.querySelectorAll('.column');
            columnCard.forEach(function (e) {
                e.style.display = 'none';
            });
            this.displayAbout();
            const columnCardDisplay = document.querySelector('.columns');
            columnCardDisplay.innerHTML += this.addAbout();
        })
    }

    displayAbout() {

    }

}

let triggerAbout = new About();
triggerAbout.loadAbout();