export const selectExpenses = (expenses, categoryFilter) => {
  let expensesArr = Object.values(expenses);
  if (Number(categoryFilter) === 0) {
    return expenses;
  }
  return expensesArr.filter(
    expense => expense.category_id === Number(categoryFilter)
  );
};
