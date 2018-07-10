class Category < ApplicationRecord
  validates :name, presence: true

  has_many :expenses,
    foreign_key: :category_id,
    class_name: "Expense"
end
