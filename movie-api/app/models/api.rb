class Api < ApplicationRecord
    def self.get_movies(movies)
        # name = "avengers"
        url = "https://www.omdbapi.com/?apikey=f6fd5f9b&t=#{movies}"
        resp = RestClient.get(url)
        # byebug
        movies_hash = JSON(resp.body)
        movies_hash
    end
end