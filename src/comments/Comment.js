import React from 'react'


class Comment extends React.Component {

  render() {
    return <div className="comment">
      <li className="comment___li">{this.props.comment.content}</li>
      </div>
  }

}

export default Comment
