# Expense Tracker

Live link: https://expense-tracker1.herokuapp.com/

![](app/assets/images/readme1.png)

- Allows users to sign up/log in and track their expenses. Expenses are comprised of an amount, description, date, and category.
- The Expense Index displays expenses with the most recent on top and can be filtered by category.
- A simple pie chart helps users visualize how their expenses are broken down by category.
- To use the app, you can create a new profile by signing up with a username and password. However, if you'd like to see a profile with 4 expenses already seeded, you can use the username: "tester", password: "starwars" (on the seeds.rb file as user1) to log in.
- Technologies used: Ruby on Rails and PostgreSQL backend, ReactJS and Redux frontend with a react-simple-pie-chart. Deployed on Heroku
  ![](app/assets/images/readme2.png)
- Local Setup Instructions: clone this repo, navigate into the project directory, run `npm run start` in one tab of your command line to start webpack watch and `rails server` in another to run the rails server. Open up your browser and visit localhost:3000.
