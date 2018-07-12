import React from 'react';
import PieChart from 'react-simple-pie-chart';

const ExpensesPieChart = ({ expenses, categories }) => {

  let categoryExpenses = {};
  Object.values(expenses).map( e => {
    if (categoryExpenses[e.category]) {
      categoryExpenses[e.category] += e.amount;
    }
    else {
      categoryExpenses[e.category] = e.amount;
    }
  });

  function generateColor() {
    return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
    (Math.floor(Math.random() * 256)) + ',' +
    (Math.floor(Math.random() * 256)) + ')';
  }

  function colorArr() {
    let colors = [];
    for (let i = 0; i < 13; i++) {
      colors = colors.concat(generateColor());
    }
    return colors;
  }

  let slice = [];
  let cols = colorArr();

  let vals = Object.values(categoryExpenses);
    if (vals.length > 0) {
      vals.map( (item, i) => (
        slice = slice.concat([{
          color: cols[i],
          value: item
        }])
      ));
    }

  function colorLegend() {
    let cats = Object.keys(categoryExpenses);
    // debugger
    if (cats.length > 0) {
      let colores;
      return cats.map( (cat, i) => {
        return (
          <div key={i} style={{color: `${cols[i]}`}}>{cat}</div>
        );
      });
    }
  }
  return (
    <div>
      <div>{colorLegend()}</div>
      <PieChart
        className="pie-chart"
        slices={slice}
        />
    </div>
  );
};


export default ExpensesPieChart;
