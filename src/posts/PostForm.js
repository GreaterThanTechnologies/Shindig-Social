import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import addPost from '../actions/addPost'
import editPost from '../actions/editPost'

class PostForm extends React.Component {
  constructor(props) {
    console.log("Hello from PostForm.js")
    super(props)
    this.state = {body: (this.props.post ? this.props.post.body : ""), id:  (this.props.post ? this.props.post.id : "")}
  }

  componentDidUpdate(prevProps) { 
    if (prevProps.post === undefined) {
      this.setState({...this.props.post})
    }     
  }

  handleSubmit(e) {
    console.log("Top of handleSubmit")
    e.preventDefault()
    
    if (this.props.post) {
        this.props.editPosts(this.state)
        console.log("Hello from 'if' PostForm.js")
    } else {
      console.log("Before addPost")
      const post = {body: this.state.body, id: this.state.post.id}
      this.props.addPost(post) 
      console.log("After addPost")
      this.props.history.push("/posts")
      console.log("Hello from 'else' PostForm.js")
    }
  }
  handleChange = (e) => {this.setState({[e.target.body]: e.target.value})}

  render = () => {
    return (
      <div className="post__form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" onChange={this.handleChange} value={this.state.body} name="body"/>
          <input className="postForm__inputSubmit" type="submit"/>
        </form>
      </div>
    ) 
  }      

 


}

export default withRouter(connect(null, {addPost: addPost, editPost: editPost })(PostForm))
