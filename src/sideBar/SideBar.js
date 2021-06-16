import {Link} from 'react-router-dom'
import "./SideBar.css"
import shindigLogo from '../images/shindigLogo.png'
import shindigWords from '../images/shindigWords.png'
import PostAddRoundedIcon from '@material-ui/icons/PostAddRounded';
import SidebarOption from "./SidebarOption"
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';

export default function SideBar(props) {
  return (

    <div className="sidebar">
      <img className="sidebar__logo" src={shindigLogo}
        alt=""
      />

      <div className="sidebar__links">
        <Link to="/posts" style={{textDecoration:"none"}}>
          <SidebarOption Icon={PostAddRoundedIcon} text="Posts" />
        </Link>

        <Link to="/posts/new" style={{textDecoration:"none"}}>
          <SidebarOption Icon={ChatBubbleOutlineRoundedIcon} text="New Post" />
        </Link>

      </div>

      <img className="sidebar__shindigWords" src={shindigWords} alt="" />

    </div>
  )

}

// stateless component #6
