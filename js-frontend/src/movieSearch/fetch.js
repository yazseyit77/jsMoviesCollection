// var sMovie = "Avengers";
// const ohterParams = {
//   method: "GET"
// };

// var apikey = "f6fd5f9b";
// const url = "https://www.omdbapi.com/?apikey=" + apikey + "&t=" + sMovie;
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

// //other api
// // my api key = c45be98a3e375a031f8dda83cfc52f39
// const url = "https://api.themoviedb.org/3/discover/movie?page=1-10&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=c45be98a3e375a031f8dda83cfc52f39"
//     fetch(url)
//     .then(data => {
//         return data.json();
//     })
//     .then(res => {
//         console.log(res);
//     });



// very useful

// function fetchData(searchTerm) {
//     const url = "https://api.themoviedb.org/3/search/movie?api_key=c45be98a3e375a031f8dda83cfc52f39&language=en-US&query="+searchTerm+"&page=1&include_adult=false";
//     fetch(url)
//         .then(response => {
//             return response.json();
//         })
//         .then(res => {
//             console.log(res.results);
//         });
// }

// from this api in ruby backend:
// fetch("http://localhost:3000/api/v1/movies").then(resp => resp.json()).then(resp => console.log(resp))



// games api very easy to fetch
// fetch("https://api.rawg.io/api/games").then(resp => resp.json()).then(resp => resp.results.forEach(e => {console.log(e)}))