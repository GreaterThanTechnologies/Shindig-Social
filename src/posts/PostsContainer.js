import React, {Component} from 'react'
import Posts from './Posts'
import Post from './Post'
import NewPostForm from './NewPostForm'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import fetchPosts from '../actions/fetchPosts'
// stateless component #4, acces to state through Redux connect
// 3 routes

class PostsContainer extends Component {

  componentDidMount() {
      this.props.fetchPosts()
  }

  render() {
    console.log("Hello from PostsContainer.js")

    return (
      <div className="posts__cdm">
        <Switch>
          <Route path="/posts/new">
            <NewPostForm className="newPost__form" />
          </Route>
          <Route exact path="/posts">
            <Posts />
          </Route>
          <Route path='/posts/:id' render={(props) => <Post {...props}/>}/>
        </Switch>
      </div>
    )
  }
}

export default connect(null, {fetchPosts})(PostsContainer)

