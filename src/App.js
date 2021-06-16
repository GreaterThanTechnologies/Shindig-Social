import PostsContainer from './posts/PostsContainer'
import SideBar from './sideBar/SideBar'
import "./styles/App.css"
// stateless component #7

function App(){
  return (

    //BEM naming convention
    <div className="app">
      <SideBar />
      <PostsContainer />
    </div>
  )
}

export default App