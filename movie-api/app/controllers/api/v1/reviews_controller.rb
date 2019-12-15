class Api::V1::ReviewsController < ApplicationController

    def index
        @reviews = Review.all
        render json: @reviews.to_json(:except => [:created_at, :updated_at]), status: 200
    end


    def new
        @review = Review.new
    end

    def create
        @review = Review.new(review_params)
        @review.movie_id = @movie.id
        @review.user_id = current_user.id

        if @review.save 
            @movie = @review.movie 
            render json: @review.to_json(:include => {:movie => {:only => [:name]}}), status: 200
        else
            render json: ("Movie was not saved!").to_json
        end
    end

    def update
        @review.update(review_params)

        render json: ("Review was updated!").to_json, status: 200
    end

    def destroy
        @review.destroy
        render json: {reviewId: @review.id}
    end

    private

    def review_params
        params.require(:review).permit(:rating, :comment)
    end

    def find_movie
        @movie = Movie.find(params[:movie_id])
    end

end
