import React, {Component, Fragment} from 'react'
import Post from './Post'
import PostForm from './PostForm'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'



class Posts extends Component {


  render() {
      return (

        <>
          <ul>
            {this.props.posts && this.props.posts.map((post, i) => <li key={i}><Link to={`/posts/${post.id}`} >{post.body}</Link></li> )}
          </ul>
        </>
      )
  }
 
}

function mapStateToProps(state) {
  return {posts: state.posts}
}


export default connect(mapStateToProps)(Posts)
