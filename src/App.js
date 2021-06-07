import PostsContainer from './posts/PostsContainer'
import SideBar from './SideBar'


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
