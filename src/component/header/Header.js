import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import "../header/_header.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header({ handleToggleSidebar }) {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`search/${input}`);
  };
  const [input, setInput] = useState("");

  const user = useSelector((state) => state.auth?.user);
  return (
    <div className=" header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />

      <Link to="/">
        <img
          src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt=""
          className="header__logo"
        />
      </Link>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value = {input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header__icons">
        <MdApps size={28} />
        <MdNotifications size={28} />
        <img src={user?.photoURL} alt="avatar" className="mr-3 rounded-circle" />
      </div>
    </div>
  );
}

export default Header;
