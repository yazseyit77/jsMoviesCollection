class ChangeReleasedToBeStringInMovies < ActiveRecord::Migration[6.0]
  def change
    change_column :movies, :released, :string
  end
end
