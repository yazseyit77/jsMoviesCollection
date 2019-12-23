class Api::V1::MoviesController < ApplicationController
    # before_filter :authorize
    before_action :set_movie, only: [:show, :update, :destroy]
    # respond_to :json, :html

    def index
        @movies = Movie.all
        render json: @movies.to_json(:include => {:user => {:only => [:name]}}, :except => [:created_at, :updated_at]), status: 200
        
        # @movie = Api.search(params[:name])
        # render json: @movie.to_json

        # @movies = Api.get_movies("avengers")
        # render json: @movies
    end

    
    def search
        @movie_search = Movie.find_by(name: params[:name])
        # respond_with(@movie_search, :include => :status)
        render json:@movie_search.to_json
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
        params.require(:movie).permit(:search, :name, :url, :genre, :ratings, :comments, :released, :plot, :awards, :box_office, :metascore, :user_id)
    end
end
