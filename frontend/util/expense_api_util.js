export const fetchExpenses = () => {
  return $.ajax({
    method: "GET",
    url: "/api/expenses"
  });
};

export const createExpense = expense => {
  return $.ajax({
    method: "POST",
    url: "/api/expenses",
    dataType: "json",
    data: { expense }
  });
};

export const fetchCategories = () => {
  return $.ajax({
    method: "GET",
    url: "/api/categories"
  });
};
