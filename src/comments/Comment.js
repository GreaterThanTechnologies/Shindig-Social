import React from 'react'


class Comment extends React.Component {

  render() {
    return <div className="comment">
      <li className="comment__li">{this.props.body.content}</li>
      </div>
  }

}

export default Comment
