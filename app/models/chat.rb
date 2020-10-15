class Chat < ApplicationRecord
  belongs_to :user, optional: true
  mount_base64_uploader :attachment, AttachmentUploader # Tells rails to use this uploader for this model.
end
