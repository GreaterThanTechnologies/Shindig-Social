export default function fetchPosts() {
  
  return (dispatch) => {
    fetch("http://localhost:3010/posts")
    .then(function(response) {
      return response.json()
    })
    .then((postsArray) => {
      dispatch({type: "FETCH_POSTS", payload: postsArray})
    })
  }
}
