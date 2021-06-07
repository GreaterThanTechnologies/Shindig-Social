import {useSelector, useDispatch} from 'react-redux'
import EditListForm from './EditPostForm'
import deleteList from '../actions/deletePost'
import CommentForm from '../comments/CommentForm'
import Comment from '../comments/Comment'


export default function Post(props) {

  const posts = useSelector(function(state) {return state.posts})
  const post = posts.find(post => post.id === parseInt(props.match.params.id))

  const dispatch = useDispatch()
  console.log(posts, post)

  const handleDelete = () => {
    dispatch(deleteList(post.id))
    props.history.push("/posts")
  }

  return (
        <>
          <h1>
              {post && post.name}
          </h1>
          <button onClick={handleDelete}>Delete List</button>
            <h3>Edit Post</h3><EditListForm post={post}/>
            <h3>Add Comment</h3><CommentForm post={post}/>
            <h3>All Comments</h3>
            {post && post.comments.map(comment => <Post key={comment.id} post={comment}/>)}
          </>
        )
}



