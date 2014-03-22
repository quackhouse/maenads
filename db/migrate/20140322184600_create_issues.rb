class CreateIssues < ActiveRecord::Migration
  def change
    create_table :issues do |t|
      t.integer :number
      t.date :issue_date
      t.string :theme

      t.timestamps
    end
  end
end
