class CreateMovie {
    constructor() {
        this.formToggle();
        this.create();
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
        const name = document.querySelector('.name');
        const year = document.querySelector('.year').value;
        const genre = document.querySelector('.genre').value;
        const picture = document.querySelector('.picture').value;
        const summary = document.querySelector('.summary').value;
        const rating = document.querySelector('.rating').value;
        const button = document.querySelector('.create');
        button.addEventListener("click", (e) => {
            e.preventDefault();
            // console.log(name.value)
            fetch("http://localhost:3000/api/v1/movies", {

            })
        })
    }


} //CreateMovie class

let createMovie = new CreateMovie();