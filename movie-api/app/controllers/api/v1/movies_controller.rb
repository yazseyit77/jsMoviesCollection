class Api::V1::MoviesController < ApplicationController
    before_action :set_movie, only: [ :update, :destroy]

    def index
        @movies = Movie.all
        render json: @movies.to_json(:include => {:user => {:only => [:name]}, :reviews => {:only => [:rating, :comment]}}, :except => [:created_at, :updated_at]), status: 200

        # @movies = Api.get_movies("avengers")
        # render json: @movies
    end

    def show
        @movie = Api.get_movies(movie)
        render json: @movie, status: 200
    end

    def create
        @movie = Movie.new(movie_params)
        if @movie.save
            render json: @movie.to_json(:include => {:user => {:only => [:name]}, :reviews => {:only => [:rating, :comment]}}, :except => [:created_at, :updated_at]), status: 200
        else
            render json: ("Movie was not saved!").to_json
        end
    end

    def update
        @movie.update(movie_params)
        render json: ("Movie was updated!").to_json, status: 200
    end

    def destroy
        @movie.destroy
        render json: {movieId: @movie.id}
    end

    private
    def set_movie
        @movie = Movie.find(params[:id])
    end

    def movie_params
        params.require(:movie).permit(:name, :url, :genre, :ratings, :comments, :released, :plot, :awards, :box_office, :metascore, :user_id)
    end
end
