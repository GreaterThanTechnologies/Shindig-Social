export default function postsReducer(state = {posts: []}, action) {
  switch (action.type) {
    case "ADD_POST":
      return {posts: [...state.posts, action.payload]}
    case "DELETE_POST":
      return {posts: state.posts.filter(post => post.id !== Number(action.payload))}
    case "EDIT_POST":
      const editedPostsArray = state.posts.map(post => post.id === action.payload.id ? action.payload : post)
      return {posts: editedPostsArray}
    case "FETCH_POSTS":
      return {posts: action.payload}
    case "ADD_COMMENT":
      const updatedPost = state.posts.find(post => post.id === action.payload.id ? action.payload : post)
      updatedPost.comments = [...updatedPost.comments, action.payload] 
      // console.log(updatedPost)
      return {posts: state.posts.map(post => post.id === updatedPost.id ? updatedPost : post)} 

      default: return state
  }
}


