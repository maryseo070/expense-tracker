# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Category.destroy_all
Expense.destroy_all

user1 = User.create(
  username: "tester",
  password: "starwars"
)

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
investments = Category.create(
  name: "Investments"
)
Expense.create(
  amount: 1495.90,
  description: "June 2018 Rent",
  date: DateTime.new(2018, 07, 10),
  category_id: rent.id,
  user_id: user1.id
)

Expense.create(
  amount: 150.72,
  description: "June 2018 Utilities",
  date: DateTime.new(2018, 07, 05),
  category_id: utilities.id,
  user_id: user1.id
)

Expense.create(
  amount: 60.05,
  description: "May 2018 Fuel",
  date: DateTime.new(2018, 06, 01),
  category_id: fuel.id,
  user_id: user1.id
)

Expense.create(
  amount: 14.25,
  description: "Star Wars",
  date: DateTime.new(2018, 02, 01),
  category_id: entertainment.id,
  user_id: user1.id
)
