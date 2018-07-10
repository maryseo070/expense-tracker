import React, { Component } from 'react';
import ExpenseIndexContainer from './../expense_index/expense_index_container';
import TopNav from './../top_nav/top_nav';

class Main extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <section>
        <ExpenseIndexContainer />
        <TopNav />
      </section>
    );
  }
}

export default Main;
