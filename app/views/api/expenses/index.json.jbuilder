json.set! "expenses" do
  @expenses.each do |expense|
    json.set! expense.id do
      json.partial! 'expense', expense: expense
    end
  end
end
