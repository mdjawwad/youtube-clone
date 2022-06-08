import React from "react";
import "./_sidebar.scss";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/action/auth.action";
import { Link } from "react-router-dom";

function Sidebar({ sidebar, handleToggleSidebar }) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
      <Link to="/">
        <li>
          <MdHome size={28} />
          <span> Home </span>
        </li>
      </Link>
<Link to='/feed/subscription'>


      <li>
        <MdSubscriptions size={28} />
        <span>Subscriptions</span>
      </li>
</Link>
      <li>
        <MdThumbUp size={28} />
        <span>Liked Video</span>
      </li>
      <li>
        <MdHistory size={28} />
        <span>History</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={28} />
        <span>I don't Like</span>
      </li>
      <hr />

      <li onClick={handleLogout}>
        <MdExitToApp size={28} />
        <span>Log Out</span>
      </li>

      <hr />
    </nav>
  );
}

export default Sidebar;
