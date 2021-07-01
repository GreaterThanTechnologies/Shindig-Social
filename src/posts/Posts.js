import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import "../styles/Posts.css"
import { TransferWithinAStation } from '@material-ui/icons'
import LikeButton from "./LikeButton"

function mapStateToProps(state) {
  console.log("Hello from mapStateToProps")
  return {posts: state.posts}
}


class Posts extends Component {



  render() {
    console.log("Hello from Posts.js")

    return (
      <div className="posts">
        <div className="posts__header">
          <h2>Here are the Posts...</h2> 
        </div>
        <div className="posts__body" >
          <ul>
            {this.props.posts && this.props.posts.map((post) => <li 
              className="postBody__li" 
              key={post.id}>
                <Link to={`/posts/${post.id}`} 
                  style={{textDecoration:"none"}}
                >
                {post.body}                                
                </Link> 
              {/* <div className="likeButton__container"> */}
                <LikeButton />
              {/* </div> */}


                </li>                 
              )              
            } 
          </ul>
          
        </div>
      </div>
    )
  } 
}

export default connect(mapStateToProps)(Posts)

