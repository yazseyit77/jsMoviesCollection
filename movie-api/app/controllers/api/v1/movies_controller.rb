class Api::V1::MoviesController < ApplicationController
    before_action :set_movie, only: [:show, :update, :destroy]

    def index
        @movies = Movie.all

        render json: @movies.to_json(:include => {:user => {:only => [:name]}}, :except => [:created_at, :updated_at]), status: 200


        # @movies = Api.get_movies
        # render json: @movies
    end

    def show

        render json: @movie, status: 200
    end

    def create
        @movie = Movie.new(movie_params)
        if @movie.save
            render json: @movie.to_json(:include => {:user => {:only => [:name]}}, :except => [:created_at, :updated_at]), status: 200
        else
            render json: ("Movie was not saved!").to_json
        end
    end

    def update
        @movie.update(movie_params)

        render json: ("Movie was deleted!").to_json, status: 200
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
        params.require(:movie).permit(:name, :url, :genre, :ratings, :comments, :released, :user_id)
    end
end
