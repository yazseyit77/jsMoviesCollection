class Api < ApplicationRecord
    def self.get_movies
        name = "avengers"
        url = "https://www.omdbapi.com/?apikey=f6fd5f9b&t= " + name
        resp = RestClient.get(url)
        # byebug
        movies_hash = resp
        movies_hash
    end
end