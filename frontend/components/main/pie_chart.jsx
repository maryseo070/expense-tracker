import React from 'react';
import PieChart from 'react-simple-pie-chart';


const ExpensesPieChart = ({ expenses, categories }) => {

  // let totalExpenses = 0;
  // Object.values(expenses).map( e => {
  //   totalExpenses += e.amount;
  // });
  let categoryExpenses = {};
  Object.values(expenses).map( e => {
    if (categoryExpenses[e.category]) {
      categoryExpenses[e.category] += e.amount;
    }
    else {
      categoryExpenses[e.category] = e.amount;
    }
  });

  let slice = [];
  if (Object.values(categoryExpenses) > 0) {
    slice = Object.values(categoryExpenses).map( item => {
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      return {
        color: randomColor,
        value: item
      };
    });
  }

  return (
    <div>hi</div>
    // <PieChart
    //   className="pie-chart"
    //   slices={[
    //     {slice}
    //   ]}
    // />
);
};

// slices={[
//   {
//     color: "green",
//     value: 10,
//   },
//   {
//     color: "steelblue",
//     value: 20,
//   },
// ]}
export default ExpensesPieChart;
