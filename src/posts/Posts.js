import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import "../styles/Posts.css"
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';


function mapStateToProps(state) {
  console.log("Hello from mapStateToProps")
  return {posts: state.posts}
}


class Posts extends Component {

  constructor(props) {
    super(props)
    this.state = {
      likes: 0
    }
  }

  handleClick = (e) => {
    console.log("clicked like button")
    const newLikeCount = this.state.likes + 1
    this.setState({
      likes: newLikeCount
    })
    console.log(this.state.likes)
  }
  

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

                <div className="likeButton_container">                  
                    <div className="like__button">
                      <button>
                        <ThumbUpAltRoundedIcon 
                          onClick={this.handleClick}

                          /><p>Likes: {this.state.likes}</p>
                      </button>
                    </div>  
                </div> 



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

