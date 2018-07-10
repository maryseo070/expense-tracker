json.set! "expense" do |expense|
  json.partial! 'expense', expense: @expense
  json.category @category
end
