class CommentsController < ApplicationController

  def create
    comment = Comment.new(comment_params)
    if comment.save
      render json: CommentSerializer.new(comment)
    else
      render json: {message: comment.errors.full_messages}
    end
  end

  ####
  private

  def comment_params
    params.require(:comment).permit(:content, :post_id, :id)
  end

end


