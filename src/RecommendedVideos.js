import React from "react";
import VideoCard from "./VideoCard";
import "./RecommendedVideos.css"

function RecommendedVideos() {
    return (
        <div className="RecommendedVideos">
            <h2>Recommended</h2>
            <div className="RecommendedVideos__Videos">
                <VideoCard
                    title="Learn React in 30 Minutes"
                    views="1.2M views"
                    timestamp="2 weeks ago"
                    channel="Code Academy"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLQexamplechannel=s88-c-k-c0x00ffffff-no-rj"
                    image="https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg" />
                <VideoCard
                    title="Arch Linux Setup Guide for Beginners"
                    views="45K views"
                    timestamp="3 days ago"
                    channel="LinuxWorld"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLQotherexample=s88-c-k-c0x00ffffff-no-rj"
                    image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg" />
                <VideoCard
                    title="JavaScript Full Course 2025"
                    views="3.4M views"
                    timestamp="1 month ago"
                    channel="Programming Hub"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLQdummyexample=s88-c-k-c0x00ffffff-no-rj"
                    image="https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg" />
                <VideoCard
                    title="Mastering Flexbox in CSS"
                    views="780K views"
                    timestamp="6 months ago"
                    channel="DesignSimplified"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLQflexavatar=s88-c-k-c0x00ffffff-no-rj"
                    image="https://i.ytimg.com/vi/JJSoEo8JSnc/hqdefault.jpg" />
                <VideoCard
                    title="React.js Crash Course 2025"
                    views="2.1M views"
                    timestamp="3 weeks ago"
                    channel="TechWithTim"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLQreactavatar=s88-c-k-c0x00ffffff-no-rj"
                    image="https://i.ytimg.com/vi/w7ejDZ8SWv8/hqdefault.jpg" />
                <VideoCard
                    title="React JS Full Course 2025"
                    views="3.7M views"
                    timestamp="2 months ago"
                    channel="freeCodeCamp.org"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLSEB2l9Z_vLHxvGxjguZmCwnJgn5t2MSgkXvQ=s88-c-k-c0x00ffffff-no-rj"
                    image="https://i.ytimg.com/vi/bMknfKXIFA8/hqdefault.jpg" />
                <VideoCard
                    title="Linux Terminal Basics Tutorial"
                    views="520K views"
                    timestamp="1 year ago"
                    channel="ProgrammingKnowledge"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLQt4akzI1bM28jC84twJZ3-J0ZPh44RtWNHgg=s88-c-k-c0x00ffffff-no-rj"
                    image="https://i.ytimg.com/vi/ZtqBQ68cfJc/hqdefault.jpg" />
            </div>

        </div>
    )
}

export default RecommendedVideos