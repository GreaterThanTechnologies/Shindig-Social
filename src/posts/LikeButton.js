import React from 'react'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

class LikeButton extends React.Component {

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

          return (
            <div className="likeButton__Container">
                <div className="like__button">
                    <button onClick={this.handleClick}>
                        <ThumbUpAltIcon />
                        <p>Likes: {this.state.likes}</p>
                    </button>
                </div>
            </div>
          )
      }
    }

  export default LikeButton
