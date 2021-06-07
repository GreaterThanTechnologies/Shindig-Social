import {Link} from 'react-router-dom'


export default function SideBar(props) {
  return (
      <div className="sidebar">
          <Link to="/posts">Posts</Link>
          <Link to="/posts/new">New Post</Link>
      </div>
  )

}
