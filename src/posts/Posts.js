import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import "./Posts.css"

function mapStateToProps(state) {
  return {posts: state.posts}
}

class Posts extends Component {

  render() {
    return (
      <div className="posts">
        <div className="posts__header">
          <h2>Here are the Posts...</h2> 
        </div>
        <div className="posts__body" >
          <ul>
            {this.props.posts && this.props.posts.map((post, i) => <li 
              className="postBody__li" 
              key={post.id}>
                <Link to={`/posts/${post.id}`} 
                  style={{textDecoration:"none"}}
                >
                {post.body}
                </Link></li> 
              )
            }
          </ul>
        </div>
      </div>
    )
  } 
}

export default connect(mapStateToProps)(Posts)

