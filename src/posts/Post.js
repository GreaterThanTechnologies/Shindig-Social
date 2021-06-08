import {useSelector, useDispatch} from 'react-redux'
import EditPostForm from './EditPostForm'
import deletePost from '../actions/deletePost'
import CommentForm from '../comments/CommentForm'
import Comment from '../comments/Comment'


export default function Post(props) {

  const posts = useSelector(function(state) {return state.posts})
  const post = posts.find(post => post.id === parseInt(props.match.params.id))

  const dispatch = useDispatch()

  const handleDelete = () => { 
    dispatch(deletePost(post.id))
    props.history.push("/posts")
  }

  return (
        <div className="post">
          
          <h1>
            {post && post.body}
          </h1>
          <button onClick={handleDelete}>Delete Post</button>
          <h3>Edit Post</h3><EditPostForm post={post}/>
          <h3>Add Comment</h3><CommentForm post={post}/>
          <h3>All Comments</h3>
          {post && post.comments.map(comment => <Post key={comment.id} body={comment}/>)}
        </div>
        )
}



