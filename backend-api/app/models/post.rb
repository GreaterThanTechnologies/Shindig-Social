class Post < ApplicationRecord

  has_many :comments, dependent: :destroy

  validates :body, precense: true

end
