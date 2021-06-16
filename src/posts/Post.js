import {useSelector, useDispatch} from 'react-redux'
import EditPostForm from './EditPostForm'
import deletePost from '../actions/deletePost'
import CommentForm from '../comments/CommentForm'
import Comment from '../comments/CommentContainer'
import "../styles/Post.css"
// stateless component #2

export default function Post(props) {

  const posts = useSelector(function(state) {return state.posts});
  const post = posts.find(post => post.id === parseInt(props.match.params.id))

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deletePost(post.id))
    props.history.push("/posts")
  }

  //render is not present, but when added, presents syntax error, missing semicolon
  // render() {
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
  // }
}