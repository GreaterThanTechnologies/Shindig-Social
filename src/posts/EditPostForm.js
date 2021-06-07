import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {useState} from 'react'
import addPost from '../actions/addPost'
import editPost from '../actions/editPost'
import PostFormComponent from './PostFormComponent'
import React from 'react'

class EditPostForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {name: (this.props.post ? this.props.post.name : ""), id:  (this.props.post ? this.props.post.id : "")}
  }

  componentDidUpdate(prevProps) {
    if (prevProps.post === undefined) {
      this.setState({...this.props.post})
    }
  }

  handleChange = (post) => {this.setState({...this.state, ...post})}

  render() {
    return (
      <PostFormComponent submitCallback={this.props.editPost} post={this.state} updateStateInParent={this.handleChange.bind(this)}/>
    )
  }


}

export default withRouter(connect(null, {editPost})(EditPostForm))
