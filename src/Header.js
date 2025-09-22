import './Header.css';
import React, { useState } from 'react';
import { Apps, Notifications, Search, VideoCall } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { Link } from 'react-router-dom';

// import youtubelogo from "./assets/youtubelogo.png"; 


function Header() {
  const [inputSearch, setInputSearch] = useState("")

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">

          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="asdf"
          />
        </Link>

      </div>
      <div className="header__input">
        <input onChange={function searchOnChange(searchText) { setInputSearch(searchText.target.value) }} value={inputSearch} placeholder="search" type="text" />
        <Link to={`/search/${inputSearch}`} ><Search className="header__inputButton" />
        </Link>

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