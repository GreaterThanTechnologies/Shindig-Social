import PostsContainer from './posts/PostsContainer'
import SideBar from './sideBar/SideBar'
import "./styles/App.css"
// stateless component #7

function App(){
  console.log("Hello from App.js")

  return (


    //BEM naming convention
    <div className="app">

      <SideBar />
      <PostsContainer />
    </div>
  )
}
export default App