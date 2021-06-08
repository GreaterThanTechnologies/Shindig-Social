Post.delete_all
Comment.delete_all

Post.create(body: "Look at what I am doing here!")
Post.create(body: "Something seems pretty cool!")
Post.create(body: "Wait till the .css is done!")

Comment.create(content: "Looks neat! Keep going!", post_id: 1)
Comment.create(content: "Something? Everything!", post_id: 2)
Comment.create(content: "I can not wait! I love doing CSS", post_id: 3)
Comment.create(content: "I love it!", post_id: 1)
Comment.create(content: "For sure brother!", post_id: 2)
Comment.create(content: "It is going to look amazing!", post_id: 3)