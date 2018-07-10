json.set! "categories" do
  @categories.each do |category|
    json.set! category.id do
       json.partial! "cateogry", category: category
    end
  end
end
