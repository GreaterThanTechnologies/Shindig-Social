import React from 'react'
import "../styles/Comment.css"


class Comment extends React.Component {

  render() {
    return <div className="comment">
        <div className="commentLi__div">
          <li className="comment__li">{this.props.body.content}</li>
        </div>
      </div>
  }

}

export default Comment

// presentational component
// stateless component