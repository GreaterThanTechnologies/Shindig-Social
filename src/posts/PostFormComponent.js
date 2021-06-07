import React from 'react'



class PostFormComponent extends React.Component {


  handleSubmit(e) {
    e.preventDefault()
    this.props.submitCallback(this.props.post)
  }

  handleChange = (e) => {this.props.updateStateInParent({[e.target.body]: e.target.value})}

  render = () => {

    return (
      <form className="postForm___form" onSubmit={this.handleSubmit.bind(this)}>
        <input className="postForm___formInout" type="text" onChange={this.handleChange} value={this.props.post && this.props.post.body} name="name"/>

        <input className="postForm___formSubmit" type="submit"/>
      </form>
  )
  }

}

export default PostFormComponent
