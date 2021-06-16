import React from 'react'
import "./Comment.css"


class CommentContainer extends React.Component {

  render() {
    return <div className="comment">
        <div className="commentLi__div">
          <li className="comment__li">{this.props.body.content}</li>
        </div>
      </div>
  }

}

export default CommentContainer

// presentational component
// stateless component #1