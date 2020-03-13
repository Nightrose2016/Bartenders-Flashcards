class Recipe < ApplicationRecord
    has_many :ingrediants, dependent: :destroy
end
