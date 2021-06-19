export default function editPost(post) {

  return function(dispatch) {
    fetch(`http://localhost:3010/posts/${post.id}`, {
      method: "PATCH",
      headers: {Accept: "application/json", "Content-Type": "application/json"},
      body: JSON.stringify({post: post})
    }).then(resp => resp.json())
    .then(post => dispatch({type: "EDIT_POST", payload: post}))
    console.log("Hello from editPost.js")

  }
  
}
