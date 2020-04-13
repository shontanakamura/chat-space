class Message < ApplicationRecord
  belongs_to :group
  belomgs_to :user
  validates :content, presence: true, unless: :image?
end
