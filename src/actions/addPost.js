export default function addPost(post) {
  
  return function(dispatch) {
    fetch("http://localhost:3010/posts", {
      method: "POST",
      headers: {Accept: "application/json", "Content-Type": "application/json"},
      body: JSON.stringify({post: post})
    }).then(resp => resp.json())
    .then(post => dispatch({type: "ADD_POST", payload: post}))
    console.log("Hello from addPost.js")

  }

}