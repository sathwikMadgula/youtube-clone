import './Header.css';
import React from 'react';
import { Apps, Notifications, Search, VideoCall } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";

// import youtubelogo from "./assets/youtubelogo.png"; 


function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="asdf"
        />
      </div>
      <div className="header__input">
        <input placeholder="search" type="text" />
        <Search className="header__inputButton" />
      </div>

      <div className="header__icons">
        <VideoCall className="header__icon" />
        <Apps className="header__icon" />
        <Notifications className="header__icon" />
        <Avatar className="header__icon"
          src="./assets/avatar.svg"
        />
      </div>

    </div>
  );
}


export default Header;