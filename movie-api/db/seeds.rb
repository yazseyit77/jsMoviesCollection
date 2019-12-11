# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
@movie = Movie.create(name: "Shooter", url: "https://images-na.ssl-images-amazon.com/images/I/91zsXzaWaEL._SY445_.jpg", genre: "Action", ratings: "5 stars", comments: "Great Movie", released: "2005", user_id: 1)
@movie = Movie.create(name: "Deja Vu", url: "https://tvguide1.cbsistatic.com/rovi/showcards/movie/284448/16910365.jpg", genre: "Action, Crime, Drama", ratings: "4.5 stars", comments: "Excellent Movie", released: "2009", user_id: 1)
@movie = Movie.create(name: "Snitch", url: "https://live.staticflickr.com/4804/43997526530_2cbd9a5a41_b.jpg", genre: "Drama, Thriller", ratings: "5 stars", comments: "Nice Cartel Movie", released: "2013", user_id: 1)
@movie = Movie.create(name: "Sicario", url: "https://m.media-amazon.com/images/M/MV5BMjA5NjM3NTk1M15BMl5BanBnXkFtZTgwMzg1MzU2NjE@._V1_.jpg", genre: "Action, Adventure, Drama, Thriller", ratings: "5 stars", comments: "Great Cartel Movie", released: "2015", user_id: 1)
