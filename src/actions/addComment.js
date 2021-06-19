export default function addComment(content) {

  return function(dispatch) {
    fetch("http://localhost:3010/comments", {
      method: "POST",
      headers: {Accept: "application/json", "Content-Type": "application/json"},
      body: JSON.stringify({comment: content})
    }).then(resp => resp.json())
      .then(content => {
        console.log(content)
      dispatch({type: "ADD_COMMENT", payload: content}
    
  )})
  }
}
