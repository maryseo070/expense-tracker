import React, { Component } from 'react';
import ExpenseIndexContainer from './../expense_index/expense_index_container';
import TopNavContainer from './../top_nav/top_nav_container';

class Main extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <section>
        <TopNavContainer />
        <ExpenseIndexContainer />
      </section>
    );
  }
}

export default Main;
