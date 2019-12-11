//triggers createAutoComplete from autocomplete.js
createAutoComplete({
    root: document.querySelector('.autocomplete'),
    renderOption(movie) {
        const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
        return `
          <img src="${imgSrc}" />
          ${movie.Title} (${movie.Year})
      `
    },

    //triggers onMovieSelect from autocomplete.js
    onOptionSelect(movie) {
        onMovieSelect(movie);
    },
    inputValue(movie) {
        return movie.Title;
    },
    //convert to fetch
    async fetchData(searchTerm) {
        const response = await axios.get("http://www.omdbapi.com", {
            params: {
                apikey: "f6fd5f9b",
                s: searchTerm //to search by name
                // i: "tt0848228" //to search by movie_id
            }
        });

        if (response.data.Error) {
            return [];
        }

        return response.data.Search;
    }
});


//convert to fetch!!
//returns the info about the selected movie in a card below the input
const onMovieSelect = async movie => {
    const response = await axios.get("http://www.omdbapi.com", {
        params: {
            apikey: "f6fd5f9b",
            i: movie.imdbID //to search by movie_id
        }
    });
    document.querySelector("#summary").innerHTML = movieTemplate(response.data);
};

//appends selected movie info in HTML
const movieTemplate = (movieDetail) => {
    return `
      <article class="media">
        <figure class="media-left">
          <p class="image">
            <img src="${movieDetail.Poster}" />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <h1>${movieDetail.Title}</h1>
            <h1>${movieDetail.Genre}</h1>
            <p>${movieDetail.Plot}</p>
          </div>
        </div>
      </article>
      <article class="notification is-primary">
        <p class="title">${movieDetail.Awards}</p>
        <p class="subtitle">Awards</p>
      </article>
      <article class="notification is-primary">
        <p class="title">${movieDetail.BoxOffice}</p>
        <p class="subtitle">Box Office</p>
      </article>
      <article class="notification is-primary">
        <p class="title">${movieDetail.Metascore}</p>
        <p class="subtitle">Metascore</p>
      </article>
      <article class="notification is-primary">
        <p class="title">${movieDetail.imdbRating}</p>
        <p class="subtitle">IMDB Rating</p>
      </article>
      <article class="notification is-primary">
        <p class="title">${movieDetail.imdbVotes}</p>
        <p class="subtitle">IMDB Votes</p>
      </article>
    `;
};