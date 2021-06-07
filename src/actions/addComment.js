export default function addBody(body) {

  return function(dispatch) {
    fetch("http://localhost:3001/comments", {
      method: "POST",
      headers: {Accept: "application/json", "Content-Type": "application/json"},
      body: JSON.stringify({comment: body})
    }).then(resp => resp.json())
    .then(body => dispatch({type: "ADD_BODY", payload: body}))

  }
}
