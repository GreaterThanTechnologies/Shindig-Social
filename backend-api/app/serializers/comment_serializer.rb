
class CommentSerializer

  include FastJsonapi::ObjectSerializer
  attributes :content, :post_id, :id
  
end