class PostsController < ApplicationController

  def index
    render json: Post.all, include: [comments: {only: [:content]}], except: [:created_at, :updated_at]
  end

  def create
    post = Post.new(post_params)
    if post.save
      render json: post, include: [comments: {only: [:content]}], except: [:created_at, :updated_at]
    else
      render json: {message: post.errors.full_messages}
    end
  end

  def update
    post = Post.find_by(id: params[:id])
    post.update(post_params)
    render json: post, include: [comments: {only: [:content]}], except: [:created_at, :updated_at]
  end

  def destroy
    post = Post.find_by(id: params[:id])
    post.destroy
    render json: {message: "successfully deleted!"}
  end

  #####
  private

  def post_params
    params.require(:post).permit(:body)
  end
end