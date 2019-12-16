class CreateMovie {
    constructor() {
        this.formToggle();
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


} //CreateMovie class

let createMovie = new CreateMovie();