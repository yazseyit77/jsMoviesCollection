class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name
      t.string :url
      t.string :genre
      t.string :ratings
      t.string :comments
      t.date :released
      t.timestamps
    end
  end
end
