class About {
    constructor() {
        this.loadAbout();
        this.addAbout();
        this.displayAbout();
    }

    addAbout() {
        return `
        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src="none" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img src="" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">My Name is</p>
                        <p class="subtitle is-6"></p>
                    </div>
                </div>
                <div class="content">
                    <p></p><n /> 
                    <p>IMDB Rating: </p>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
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
            const columnCardDisplay = document.querySelector('.column');
            columnCardDisplay.innerHTML += this.addAbout();
        })
    }

    displayAbout() {

    }

}

let triggerAbout = new About();
triggerAbout.loadAbout();