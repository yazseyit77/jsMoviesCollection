const createAutoComplete = ({
    root,
    renderOption,
    onOptionSelect,
    inputValue,
    fetchData
}) => {
    //appends the dropdown menu in the container div
    root.innerHTML = `
        <label><b>Search</b></label>
        <input class="input" />
        <div class="dropdown">
            <div class="dropdown-menu">
            <div class="dropdown-content results"></div>
            </div>
        </div>
        `;

    //selects HTML
    const input = root.querySelector("input");
    const dropdown = root.querySelector(".dropdown");
    const resultsWrapper = root.querySelector(".results");

    const onInput = async event => {
        const items = await fetchData(event.target.value);
        //removes dropdown if input is empty
        if (!items.length) {
            dropdown.classList.remove("is-active");
            return;
        }

        resultsWrapper.innerHTML = "";
        dropdown.classList.add("is-active");
        for (let item of items) {
            const option = document.createElement("a");


            //appends movies title/img into dropdown
            option.classList.add("dropdown-item");
            option.innerHTML = renderOption(item);

            //when user selects from the movies,
            //the input gets replaced with the movie title that user selected
            option.addEventListener("click", () => {
                dropdown.classList.remove("is-active");
                input.value = inputValue(item);
                onOptionSelect(item);
            });

            resultsWrapper.appendChild(option);
        }
    };
    //search input, added timer to activate search after we stop typing
    input.addEventListener("input", debounce(onInput, 500));

    //close dropdown menu if we click outside of it
    document.addEventListener("click", event => {
        if (!root.contains(event.target)) {
            dropdown.classList.remove("is-active");
        }
    });
};