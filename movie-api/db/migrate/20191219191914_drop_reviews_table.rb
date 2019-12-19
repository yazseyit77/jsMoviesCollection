class DropReviewsTable < ActiveRecord::Migration[6.0]
  def change
    drop_table :reviews do |t|
      t.integer :rating
      t.text :comment
      t.integer :user_id
      t.integer :movie_id
      t.timestamps null: false
    end
  end
end
