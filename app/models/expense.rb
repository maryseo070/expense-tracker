class Expense < ApplicationRecord
  validates :amount, :date, presence: true

  belongs_to :category,
    foreign_key: :category_id,
    class_name: "Category"
    
end
