export default function fetchPosts() {
  return (dispatch) => {
    fetch("http://localhost:3001/posts")
    .then(function(resp) {
      return resp.json()
    })
    .then((postsArray) => {
      dispatch({type: "FETCH_POSTS", payload: postsArray})
    })
  }
}
