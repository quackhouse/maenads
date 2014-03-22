class Article < ActiveRecord::Base
  attr_accessible :article_date, :author, :body, :issue_id, :picture_link, :title
end
