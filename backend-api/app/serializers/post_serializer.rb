class PostSerializer

  include FastJsonapi::ObjectSerializer

  attributes :body

  attribute :comments do |post|
    TodoSerializer.new(post.comments).as_json["data"]
  end
  
end