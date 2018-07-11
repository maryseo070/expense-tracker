class Expense < ApplicationRecord
  validates :amount, :date, presence: true

  belongs_to :category,
    foreign_key: :category_id,
    class_name: "Category"

  belongs_to :user,
    foreign_key: :user_id,
    class_name: "User"
end
