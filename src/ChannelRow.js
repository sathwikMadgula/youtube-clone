import React from "react";
import { Avatar } from "@mui/material";
import "./ChannelRow.css";
import { CheckCircleOutlineOutlined } from "@mui/icons-material";

function ChannelRow({image,subs,noOfVideos,channel,verified,description}) {
    return (
        <div className="ChannelRow">
          <Avatar className="ChannelRow__logo" alt={channel} src={image} /> 
          <div className="ChannelRow__text"></div>
          <h4>{channel} {verified && <CheckCircleOutlineOutlined />} </h4>
          <p>{subs} subscribers . {noOfVideos} Videos </p>
          <p>{description}</p>
        </div>
    )
}

export default ChannelRow;