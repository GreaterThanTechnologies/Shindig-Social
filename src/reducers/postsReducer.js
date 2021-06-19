export default function postsReducer(state = {posts: []}, action) {
  switch (action.type) {
    case "ADD_POST":
      console.log("Hello from ADD_POST")

      return {posts: [...state.posts, action.payload]}
    case "DELETE_POST":
      console.log("Hello from DELETE_POST")

      return {posts: state.posts.filter(post => post.id !== Number(action.payload))}
    case "EDIT_POST":
      console.log("Hello FROM EDIT_POST")

      const editedPostsArray = state.posts.map(post => post.id === action.payload.id ? action.payload : post)
      return {posts: editedPostsArray}
    case "FETCH_POSTS":
      console.log("Hello from FETCH_POSTS")

      return {posts: action.payload}
    case "ADD_COMMENT":
      console.log("Hello from ADD_COMMENT")

      const updatedIndex = state.posts.findIndex(post => post.id === action.payload.data.attributes.post_id)
      const updatedPost = state.posts[updatedIndex]
      updatedPost.comments = [...updatedPost.comments, action.payload.data.attributes]
      return {posts: state.posts.map(post => post.id === updatedPost.id ? updatedPost : post)} 

      default: return state
      
  }
}


