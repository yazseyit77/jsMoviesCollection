class CreateMovie {
    constructor() {
        this.formToggle();
        this.create();
        this.getFormData();
        this.loadMovie = new Movie();
    }

    formToggle() {
        let showForm = false
        document.addEventListener("DOMContentLoaded", () => {
            const addBtn = document.querySelector('.btnToggle')
            const toyForm = document.querySelector('.row1')
            toyForm.style.display = 'none'
            addBtn.addEventListener('click', () => {
                // hide & seek with the form
                showForm = !showForm
                if (showForm) {
                    toyForm.style.display = 'block'
                } else {
                    toyForm.style.display = 'none'
                }
            })
        })
    } // fromToggle

    create() {
        // const formData = this.getFormData();
        const button = document.querySelector('.create');
        button.addEventListener("click", (e) => {
            e.preventDefault();
            // console.log(name.value)
            fetch("http://localhost:3000/api/v1/movies", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(this.getFormData())
                }).then(resp => resp.json())
                .then(movie => {
                    this.loadMovie.fetchAndLoadMovies(movie);
                })
        })
    } // create func

    getFormData() {
        return {
            name: document.querySelector('.name').value,
            url: document.querySelector('.picture').value,
            ratings: document.querySelector('.rating').value,
            released: document.querySelector('.year').value,
            genre: document.querySelector('.genre').value,
            plot: document.querySelector('.summary').value,
            user_id: 1
        };
    } // getFormData func


} //CreateMovie class

let createMovie = new CreateMovie();