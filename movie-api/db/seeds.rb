# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: "Yaz", password: "password")

Movie.create(name: "Sicario", 
url: "https://m.media-amazon.com/images/M/MV5BMjA5NjM3NTk1M15BMl5BanBnXkFtZTgwMzg1MzU2NjE@._V1_.jpg", 
genre: "Action, Crime, Drama ", 
ratings: "7.6", 
comments: "Great Cartel Movie", 
released: "2015", 
plot: "An idealistic FBI agent is enlisted by a government task force to aid in the escalating war against drugs at the border area between the U.S. and Mexico.",
awards: "Nominated for 3 Oscars. Another 15 wins & 151 nominations.",
box_office:"$84,872,444",
metascore: "82",
user_id: 1)

Movie.create(name: "Shooter", 
url: "https://images-na.ssl-images-amazon.com/images/I/91zsXzaWaEL._SY445_.jpg", 
genre: "Action, Drama, Thriller", 
ratings: "7.2",
comments: "Great Movie", 
released: "2007",
plot: "A marksman living in exile is coaxed back into action after learning of a plot to kill the President. Ultimately double-crossed and framed for the attempt, he goes on the run to find the real killer and the reason he was set up.",
awards: "2 nominations.",
box_office: "$95,696,996",
metascore: "53", 
user_id: 1)

Movie.create(name: "Deja Vu", 
url: "https://tvguide1.cbsistatic.com/rovi/showcards/movie/284448/16910365.jpg", 
genre: "Action, Crime, Sci-Fi", 
ratings: "7.0", 
comments: "Excellent Movie", 
released: "2006", 
plot: "After a ferry is bombed in New Orleans, an A.T.F. agent joins a unique investigation using experimental surveillance technology to find the bomber, but soon finds himself becoming obsessed with one of the victims.",
awards: "1 win & 6 nominations. ",
box_office: "$180,557,550",
metascore: "59",
user_id: 1)

Movie.create(name: "Snitch", 
url: "https://live.staticflickr.com/4804/43997526530_2cbd9a5a41_b.jpg", 
genre: "Drama, Thriller", 
ratings: "6.4", 
comments: "Nice Cartel Movie", 
released: "2013", 
plot: "A father goes undercover for the DEA in order to free his son, who was imprisoned after being set up in a drug deal.",
awards: "1 nomination.",
box_office: "$57,824,674",
metascore: "51",
user_id: 1)

Movie.create(name: "Training Day", 
url: "https://m.media-amazon.com/images/M/MV5BMDZkMTUxYWEtMDY5NS00ZTA5LTg3MTItNTlkZWE1YWRjYjMwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,666,1000_AL_.jpg", 
genre: "Crime, Drama, Thriller", 
ratings: "7.7", 
comments: "", 
released: "2001", 
plot: "On his first day on the job as a Los Angeles narcotics officer, a rookie cop goes beyond a full work day in training within the narcotics division of the L.A.P.D. with a rogue detective who isn't what he appears to be.",
awards: "Won 1 Oscar. Another 17 wins & 23 nominations. ",
box_office: "$104,876,233",
metascore: "69",
user_id: 1)

Movie.create(name: "Man on Fire", 
url: "https://m.media-amazon.com/images/M/MV5BODFlMmEwMDgtYjhmZi00ZTE5LTk2NWQtMWE1Y2M0NjkzOGYxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY268_CR0,0,182,268_AL_.jpg", 
genre: "Action, Crime, Drama ", 
ratings: "7.7", 
comments: "", 
released: "2004", 
plot: "In Mexico City, a former CIA operative swears vengeance on those who committed an unspeakable act against the family he was hired to protect.",
awards: "1 win & 7 nominations.",
box_office: "$130,293,714",
metascore: "47",
user_id: 1)

Movie.create(name: "Jack Reacher", 
url: "https://m.media-amazon.com/images/M/MV5BMTM1NjUxMDI3OV5BMl5BanBnXkFtZTcwNjg1ODM3OA@@._V1_UY268_CR2,0,182,268_AL_.jpg", 
genre: "Action, Crime, Thriller ", 
ratings: "7.0", 
comments: "", 
released: "2012", 
plot: "A homicide investigator digs deeper into a case involving a trained military sniper who shot five random victims.",
awards: "1 win & 5 nominations.",
box_office: "$218,340,595",
metascore: "50",
user_id: 1)

Movie.create(name: "Jack Reacher: Never Go Back", 
url: "https://m.media-amazon.com/images/M/MV5BODQ3ODQ3NDI4NV5BMl5BanBnXkFtZTgwMDY1Mzk5OTE@._V1_UX182_CR0,0,182,268_AL_.jpg", 
genre: "Action, Thriller", 
ratings: "6.1", 
comments: "", 
released: "2016", 
plot: "Jack Reacher must uncover the truth behind a major government conspiracy in order to clear his name while on the run as a fugitive from the law.",
awards: "1 win.",
box_office: "$162,146,076",
metascore: "47",
user_id: 1)

Movie.create(name: "Mission: Impossible - Ghost Protocol", 
url: "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_UX182_CR0,0,182,268_AL_.jpg", 
genre: "Action, Adventure, Thriller", 
ratings: "7.4", 
comments: "", 
released: "2011", 
plot: "The IMF is shut down when it's implicated in the bombing of the Kremlin, causing Ethan Hunt and his new team to go rogue to clear their organization's name.",
awards: "5 wins & 30 nominations.",
box_office: "$694,713,380",
metascore: "73",
user_id: 1)

Movie.create(name: "Mission: Impossible - Fallout", 
url: "https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_UX182_CR0,0,182,268_AL_.jpg", 
genre: "Action, Adventure, Thriller", 
ratings: "7.8", 
comments: "", 
released: "2018", 
plot: "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.",
awards: "Nominated for 1 BAFTA Film Award. Another 19 wins & 36 nominations.",
box_office: "$791,115,104",
metascore: "86",
user_id: 1)

Movie.create(name: "Mission: Impossible - Rogue Nation", 
url: "https://m.media-amazon.com/images/M/MV5BOTFmNDA3ZjMtN2Y0MC00NDYyLWFlY2UtNTQ4OTQxMmY1NmVjXkEyXkFqcGdeQXVyNTg4NDQ4NDY@._V1_UX182_CR0,0,182,268_AL_.jpg", 
genre: "Action, Adventure, Thriller", 
ratings: "7.4", 
comments: "", 
released: "2015", 
plot: "Ethan and team take on their most impossible mission yet, eradicating the Syndicate - an International rogue organization as highly skilled as they are, committed to destroying the IMF.",
awards: "6 wins & 24 nominations.",
box_office: "$682,714,267",
metascore: "75",
user_id: 1)

Movie.create(name: "Fast & Furious Presents: Hobbs & Shaw", 
url: "https://m.media-amazon.com/images/M/MV5BOTIzYmUyMmEtMWQzNC00YzExLTk3MzYtZTUzYjMyMmRiYzIwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY268_CR1,0,182,268_AL_.jpg", 
genre: "Action, Adventure ", 
ratings: "6.5", 
comments: "", 
released: "2019", 
plot: "Lawman Luke Hobbs, Dwayne The Rock Johnson and outcast Deckard Shaw (Jason Statham) form an unlikely alliance when a cyber-genetically enhanced villain threatens the future of humanity.",
awards: "13 nominations.",
box_office: "$758,910,100",
metascore: "60",
user_id: 1)

Movie.create(name: "The Fate of the Furious", 
url: "https://m.media-amazon.com/images/M/MV5BMjMxODI2NDM5Nl5BMl5BanBnXkFtZTgwNjgzOTk1MTI@._V1_UX182_CR0,0,182,268_AL_.jpg", 
genre: "Action, Adventure, Thriller ", 
ratings: "6.7", 
comments: "", 
released: "2017", 
plot: "When a mysterious woman seduces Dominic Toretto (Vin Diesel) into the world of terrorism and a betrayal of those closest to him, the crew face trials that will test them as never before.",
awards: "1 win & 11 nominations.",
box_office: "$1,236,005,118",
metascore: "56",
user_id: 1)

Movie.create(name: "Furious 7", 
url: "https://m.media-amazon.com/images/M/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_UX182_CR0,0,182,268_AL_.jpg", 
genre: "Action, Adventure, Thriller ", 
ratings: "7.2", 
comments: "", 
released: "2015", 
plot: "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.
",
awards: "Nominated for 1 Golden Globe. Another 33 wins & 34 nominations.",
box_office: "$1,515,047,671",
metascore: "67",
user_id: 1)

Movie.create(name: "Avengers: Endgame", 
url: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", 
genre: "Action, Adventure, Drama", 
ratings: "8.5", 
comments: "", 
released: "2019", 
plot: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
awards: "0",
box_office: "$2,797,800,564",
metascore: "78",
user_id: 1)

Movie.create(name: "Avengers: Infinity War", 
url: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX182_CR0,0,182,268_AL_.jpg", 
genre: "Action, Adventure, Sci-Fi", 
ratings: "8.5", 
comments: "", 
released: "2018", 
plot: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
awards: "Top Rated Movies #61 | Nominated for 1 Oscar. Another 44 wins & 64 nominations.",
box_office: "$2,048,359,754",
metascore: "68",
user_id: 1)

Movie.create(name: "Avengers: Age of Ultron", 
url: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UX182_CR0,0,182,268_AL_.jpg", 
genre: "Action, Adventure, Sci-Fi", 
ratings: "7.3", 
comments: "", 
released: "2015", 
plot: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
awards: "8 wins & 47 nominations.",
box_office: "$1,402,805,868",
metascore: "66",
user_id: 1)