class AddColumnsToMovies < ActiveRecord::Migration[6.0]
  def change
    add_column :movies, :plot, :string
    add_column :movies, :awards, :string
    add_column :movies, :box_office, :string
    add_column :movies, :metascore, :string
  end
end
