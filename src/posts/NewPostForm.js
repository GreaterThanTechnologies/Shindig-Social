import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import addPost from '../actions/addPost'
import "./NewPostForm.css"

import PostFormComponent from './PostFormComponent'
import React from 'react'

class NewPostForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {body:  ""}
  }

  handleSubmit(post) {
    this.props.addPost(post)
    this.props.history.push('/posts')
  }

  handleChange = (post) => {this.setState({...this.state, ...post})}

  render() {
    return (
      <PostFormComponent 
        submitCallback={this.handleSubmit.bind(this)}
        post={this.state}
        updateStateInParent={this.handleChange.bind(this)}
      />
    )
  }
}

export default withRouter(connect(null, {addPost})(NewPostForm))
