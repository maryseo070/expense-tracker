class CreateExpenses < ActiveRecord::Migration[5.1]
  def change
    create_table :expenses do |t|
      t.float :amount, null: false
      t.string :description
      t.date :date
      t.integer :category_id
      t.timestamps
    end
  end
end
