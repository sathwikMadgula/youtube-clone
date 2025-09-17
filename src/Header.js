import './Header.css';
import React from 'react';
import { Apps, Notifications, Search, VideoCall } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";

// import youtubelogo from "./assets/youtubelogo.png"; 


function Header() {
  return (
    <div className="header">
         <MenuIcon />
         <p></p>
         {/* <img src="/youtubelogo.png" alt="asdf"></img> */}
         {/* <img src={youtubelogo} alt="asdf"></img> */}
         
         <img 
            className="header__logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" 
            alt="asdf"
          />
          <input type="text"/> 
          <Search /> 
          <VideoCall /> 
          <Apps />  
          <Notifications />    
          <Avatar 
            src="./assets/avatar.svg"
          />   
   </div>
  );
}


export default Header;