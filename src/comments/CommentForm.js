import React from 'react'
import {connect} from 'react-redux'
import addComment from '../actions/addComment'

class CommentForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {content: ""}
  }

  handleSubmit(e) {
    e.preventDefault()
    const comment = {...this.state, comment_id: this.props.comment.id}
    this.props.addComment(comment)
    this.setState({content: ""})
  }

  handleChange(e) {
      this.setState({[e.target.content]: e.target.value})
  }


  render() {

    return (
      <form className="comment___form" onSubmit={this.handleSubmit.bind(this)}>
        <input className="commentForm___input" type="text" onChange={this.handleChange.bind(this)} value={this.state.content} name="content"/>

        <input className="commentForm___submit" type="submit"/>
      </form>
  )
  }

}

export default connect(null, {addComment})(CommentForm)
