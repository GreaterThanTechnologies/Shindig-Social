
class TodoSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :post_id
end