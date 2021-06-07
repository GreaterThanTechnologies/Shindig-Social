import React, {Component, Fragment} from 'react'
import Post from './Post'
import PostForm from './PostForm'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'



class Posts extends Component {


  render() {
      console.log("render")
      return (

        <div className="posts___ulDiv">
          <ul className="posts___ul">
            {this.props.posts && this.props.posts.map((post, i) => <li key={post.id}><Link to={`/posts/${post.id}`} >{post.body}</Link></li> )}
          </ul>
        </div>
      )
  }

}

function mapStateToProps(state) {
  console.log("mapStateToProps")
  return {posts: state.posts}
}


export default connect(mapStateToProps)(Posts)
