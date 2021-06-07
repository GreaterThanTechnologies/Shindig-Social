import {useSelector, useDispatch} from 'react-redux'
import EditPostForm from './EditPostForm'
import deletePost from '../actions/deletePost'
import PostForm from '../posts/PostForm'
import Post from '../posts/Post'


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
          <button className="post___button" onClick={handleDelete}>Delete Post</button>
            <h3>Edit Post</h3><EditPostForm list={list}/>
            <h3>Add Comment</h3><PostForm list={list}/>
            <h3>All Comments</h3>
            {post && post.comments.map(todo => <Post key={comment.id} post={comment}/>)}
          </div>
        )
}



