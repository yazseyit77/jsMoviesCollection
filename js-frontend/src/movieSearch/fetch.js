// var sMovie = "Avengers";
// var apikey = "f6fd5f9b";
// const url = "https://www.omdbapi.com/?apikey=" + apikey + "&t=" + sMovie;
// const ohterParams = {
//   method: "GET"
// };
// function fetchData(searchTerm) {
//     fetch(url, ohterParams)
//     .then(data => {
//         return data.json();
//     })
//     .then(res => {
//         console.log(res);
//     });
// }


function fetchData(searchTerm) {
    var apikey = "f6fd5f9b";
    const ohterParams = {
        method: "GET"
    };
    const url = "http://localhost:3000/api/v1/movies/" + searchTerm;
    fetch(url, ohterParams)
        .then(response => {
            return response.json();
        })
        .then(res => {
            console.log(res);
        });

    if (response.data.Error) {
        return [];
    }

    return response.data.Search;
}

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