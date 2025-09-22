import React from "react";
import "./SearchPage.css"
import { TuneOutlined } from "@mui/icons-material";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function Searchpage() {
    return (
        <div className="SearchPage">
            <div className="SearchPage__filter">
                <TuneOutlined />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://yt3.ggpht.com/ytc/AKedOLQ0t6W0mYgN-ExampleProfileImage=s176-c-k-c0x00ffffff-no-rj"
                channel="Tech Explained"
                verified
                subs="1.2M"
                noOfVideos={450}
                description="Technology tutorials, reviews, and tips every week!"
            />
            <hr />
            <VideoRow
                views="2.1M"
                subs="1.2M"
                description="Learn React.js from scratch in this complete tutorial."
                timestamp="2 weeks ago"
                channel="Tech Explained"
                title="React JS Crash Course 2025"
                image="https://i.ytimg.com/vi/w7ejDZ8SWv8/hqdefault.jpg"
            />
            <VideoRow
                views="1.2M"
                subs="2.5M"
                description="A comprehensive guide to mastering React.js in 2025."
                timestamp="2 weeks ago"
                channel="Tech Insights"
                title="React.js Crash Course 2025"
                image="https://i.ytimg.com/vi/xyz12345/hqdefault.jpg"
            />
            <VideoRow
                views="560K"
                subs="890K"
                description="Follow this 20-minute workout to burn calories and build strength."
                timestamp="3 days ago"
                channel="Daily Fitness"
                title="20 Min Full Body Workout"
                image="https://i.ytimg.com/vi/ml6cT4AZdqI/hqdefault.jpg"
            />
            <VideoRow
                views="1.2M"
                subs="2.5M"
                description="A comprehensive guide to mastering React.js in 2025."
                timestamp="2 weeks ago"
                channel="Tech Insights"
                title="React.js Crash Course 2025"
                image="https://i.ytimg.com/vi/xyz12345/hqdefault.jpg"
            />

            <VideoRow
                views="910K"
                subs="500K"
                description="Top 10 coding interview questions and answers in 2025."
                timestamp="2 weeks ago"
                channel="Code Masters"
                title="Top 10 Coding Interview Questions"
                image="https://i.ytimg.com/vi/poo0BXryffI/hqdefault.jpg"
            />

            <VideoRow
                views="1.8M"
                subs="3.1M"
                description="Relax and chill with this 3-hour lofi hip hop mix 🎧."
                timestamp="3 months ago"
                channel="Lofi Beats"
                title="3 Hour Lofi Hip Hop Mix - Study & Relax"
                image="https://i.ytimg.com/vi/jfKfPfyJRdk/hqdefault.jpg"
            />

            <VideoRow
                views="250K"
                subs="120K"
                description="Quick morning yoga routine to boost energy and flexibility."
                timestamp="6 days ago"
                channel="Yoga With Emma"
                title="10 Minute Morning Yoga"
                image="https://i.ytimg.com/vi/v7AYKMP6rOE/hqdefault.jpg"
            />

            <VideoRow
                views="4.7M"
                subs="10M"
                description="Official music video of the hit single of the year!"
                timestamp="1 month ago"
                channel="Star Music"
                title="New Hit Single (Official Video)"
                image="https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg"
            />
            <VideoRow
                views="1.8M"
                subs="2.0M"
                description="Step-by-step guide to building a modern web application with Vue.js."
                timestamp="1 month ago"
                channel="Web Dev Tutorials"
                title="Vue.js Web App Tutorial"
                image="https://i.ytimg.com/vi/jkl91011/hqdefault.jpg"
            />
            <VideoRow
                views="560K"
                subs="890K"
                description="Follow this 20-minute workout to burn calories and build strength."
                timestamp="3 days ago"
                channel="Daily Fitness"
                title="20 Min Full Body Workout"
                image="https://i.ytimg.com/vi/ml6cT4AZdqI/hqdefault.jpg"
            />

        </div>
    )
}

export default Searchpage