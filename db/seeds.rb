# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Category.destroy_all
Expense.destroy_all

food = Category.create(
  name: "Food"
)
utilities = Category.create(
  name: "Utilities"
)
rent = Category.create(
  name: "Rent"
)
fuel = Category.create(
  name: "Fuel"
)
travel = Category.create(
  name: "Travel"
)
entertainment = Category.create(
  name: "Entertainment"
)
insurance = Category.create(
  name: "Insurance"
)
shopping = Category.create(
  name: "Shopping"
)
gifts = Category.create(
  name: "Gifts"
)

misc = Category.create(
  name: "Misc"
)

rent = Expense.create(
  amount: 1500,
  description: "July 2018 Rent",
  date: DateTime.new(2018, 07, 10),
  category_id: rent.id
)
