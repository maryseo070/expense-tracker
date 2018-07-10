class Api::ExpensesController < ApplicationController
  def index
    @expenses = Expense.all
  end

  def show
    @expense = Expense.find(params[:id])
    @category = @expense.category.name
  end

  def create
    @expense = Expense.new(expense_params)
    if @expense.save

      render template: "api/expenses/show.json.jbuilder"
    else
      render json: ["error - expense controller"], status: 403
    end
  end

  private
  def expense_params
    params
    .require(:expense)
    .permit(:amount, :description, :date, :category)
  end

end
