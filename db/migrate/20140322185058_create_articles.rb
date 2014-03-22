class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :picture_link
      t.string :title
      t.string :author
      t.integer :issue_id
      t.text :body
      t.date :article_date

      t.timestamps
    end
  end
end
