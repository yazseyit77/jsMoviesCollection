class About {
    constructor() {
        this.loadAbout();
    }

    addAbout() {
        return `
        <div class="row justify-content-md-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-content">
                    <h1 class=" title text-center">About</h1>
                    <br>
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
                            'There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.' - <em>Jeff Atwood</em>
                            </span>
                        </p>
                        </footer>
                    </div>
                </div>
            </div>
        `;
    }

    loadAbout() {
        const aboutBtn = document.querySelector('.about')
        aboutBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const notify = document.querySelector('.with-margin');
            notify.style.display = 'none';
            const columnCard = document.querySelector('.row');
            columnCard.style.display = 'none';

            const columnCardDisplay = document.querySelector('.container');
            columnCardDisplay.innerHTML += this.addAbout();
        });
    }
}

let triggerAbout = new About();