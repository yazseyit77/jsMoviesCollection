class Movie < ApplicationRecord
  belongs_to :user, optional: true
  has_many :reviews
  validates :name, presence: true
  validates :url, presence: true
  validates :plot, length: { minimum: 50 }
  
  end
