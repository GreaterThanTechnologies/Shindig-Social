import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import addPost from '../actions/addPost'
import editPost from '../actions/editPost'

class PostForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {body: (this.props.post ? this.props.post.body : ""), id:  (this.props.post ? this.props.post.id : "")}

  }

  componentDidUpdate(prevProps) { 
    if (prevProps.post === undefined) {
      this.setState({...this.props.post})
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.props.post) {
        this.props.editPosts(this.state)

    } else {
      const post = {body: this.state.body, id: Math.floor(Math.random() * Math.floor(100000000))}
      this.props.addPost(post) 
      this.props.history.push("/posts")
    }


  }

  handleChange = (e) => {this.setState({[e.target.body]: e.target.value})}


  render = () => {

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" onChange={this.handleChange} value={this.state.body} name="body"/>

        <input type="submit"/>
      </form>
  )
  }

}

export default withRouter(connect(null, {addPost: addPost, editPost: editPost})(PostForm))
