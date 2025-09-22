import React from "react";
import './VideoRow.css'

function VideoRow({ views, subs, description, timestamp, channel, title, image }) {
    return (
        <div className="VideoRow">
            <img className="VideoCard__thumbnail" src={image} alt="" />
            <div className="VideoRow__text"></div>
            <h3>{title}</h3>
            <p className="VideoRow__headline">{channel} .{" "}
                <span className="VideoRow__subs">
                <span className="VideoRow__subsNumber" >{subs}</span> 
                subscribers </span>{" "} {views} views . {timestamp}</p>
            <p className="VideoRow__description">{description}</p>
        </div>
    )
}

export default VideoRow