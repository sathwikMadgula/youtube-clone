import React from "react";
import SidebarRow from "./SidebarRow";
import { ExpandMoreOutlined, History, OndemandVideo, ThumbUpAltOutlined, VideoLibrary, WatchLater, Whatshot } from "@mui/icons-material";
import { Subscriptions } from "@mui/icons-material";
import "./Sidebar.css"
import { Home } from "@mui/icons-material";


function Sidebar() {
    return (
        <div className="Sidebar">
            {/* <h1>I am a Sidebar</h1> */}
            <SidebarRow selected Icon={Home} title="Home" />
            <SidebarRow Icon={Whatshot} title="Trending" />
            <SidebarRow Icon={Subscriptions} title="Subscription" />
            <hr />
            <SidebarRow Icon={VideoLibrary} title="Library" />
            <SidebarRow Icon={History} title="History" />
            <SidebarRow Icon={OndemandVideo} title="Your Videos" />
            <SidebarRow Icon={WatchLater} title="Watch later" />
            <SidebarRow Icon={ThumbUpAltOutlined} title="Liked Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="Show More" />
            <hr />

        </div>
    )
}



export default Sidebar