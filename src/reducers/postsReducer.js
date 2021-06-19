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






      //the issue lies in here I believe
    case "ADD_COMMENT":
      const updatedIndex = state.posts.findIndex(post => post.id === action.payload.data.attributes.post_id)
      const updatedPost = state.posts[updatedIndex]

      updatedPost.comments = [...updatedPost.comments, action.payload.data.attributes]
      console.log(action.payload.data.attributes.post_id)
      console.log(updatedPost)
      return {posts: state.posts.map(post => post.id === updatedPost.id ? updatedPost : post)} 

      default: return state
  }
}


