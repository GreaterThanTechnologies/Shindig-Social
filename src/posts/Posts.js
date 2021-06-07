import React, {Component, Fragment} from 'react'
import Post from './Post'
import PostForm from './PostForm'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'



class Posts extends Component {


  render() {
    return (

      <div>
        <ul>
          {this.props.posts && this.props.posts.map((post, i) => <li key={post.id}><Link to={`/posts/${post.id}`} >{post.name}</Link></li> )}
        </ul>
      </div>
    )
}

}

function mapStateToProps(state) {
  return {posts: state.posts}
}


export default connect(mapStateToProps)(Posts)
