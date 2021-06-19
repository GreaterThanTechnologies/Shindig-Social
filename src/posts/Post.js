import {useSelector, useDispatch} from 'react-redux'
import EditPostForm from './EditPostForm'
import deletePost from '../actions/deletePost'
import CommentForm from '../comments/CommentForm'
import Comment from '../comments/Comment'
import "../styles/Post.css"
// stateless component

export default function Post(props) {

  const posts = useSelector(function(state) {return state.posts});
  const post = posts.find(post => post.id === parseInt(props.match.params.id))
  console.log("Hello from Post.js")

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deletePost(post.id))
    props.history.push("/posts")
  }
    return(
      
      <>
        <h1>
          {post && post.body}
        </h1>
        <div className="editPost__box">
          <button
            className="editDelete__button"
            onClick={handleDelete}
            >
            Delete Post
            </button>
        </div>
          <h3>Edit Post</h3><EditPostForm post={post} />
          <h3>Add Comment</h3><CommentForm post={post} />
          <h3>All Comments</h3>
          {post && post.comments.map(comment => <Comment key={comment.id} body={comment}
          />)}
      </>
    )
  
}