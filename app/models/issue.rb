class Issue < ActiveRecord::Base
  attr_accessible :issue_date, :number, :theme
end
