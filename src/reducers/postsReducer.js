export default function postsReducer(state = {posts: []}, action) {

  switch (action.type) {
      case "ADD_POST":
        return {posts: [...state.posts, action.payload]}
      case "DELETE_POST":
        return {posts: state.posts.filter(post => post.id !== action.payload)}
      case "EDIT_POST":
        const editedPostsArray = state.posts.map(post => post.id === action.payload.id ? action.payload : post)
        return {posts: editedPostsArray}
      case "FETCH_POSTS":
        return {posts: action.payload}
      case "ADD_BODY":
        const updatedPost = state.posts.find(post => post.id === action.payload.postId) // first find list that todo is associated with
        updatedPost.comments = [...updatedPost.comments, action.payload] // replace todos property on the list
        return {posts: state.posts.map(post => post.id === updatedPost.id ? updatedPost : post)} //return new state with update list todos
      default:
        return state
  }
}


