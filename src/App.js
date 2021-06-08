import PostsContainer from './posts/PostsContainer'
import SideBar from './sideBar/SideBar'
import "./App.css"

function App(){
  return (
    //BEM naming convention
        <div className="app">
          <SideBar />
          <PostsContainer />
          {/* <Comment /> */}
        </div>
      )
}





export default App
