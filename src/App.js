import React from 'react';
import Header from './Header';
import './App.css';

function App() {
  return (
    //BEM class name convention
    <div className="app">
     {/*<h1>hello sathwik lets build a youtube clone</h1> */}
         <Header />

     {/* Header  -> <Header /> */}
     {/* Sidebar -> <Sidebar /> */}
     {/* RecommendedVideos */}
    </div>
  );
}

export default App;
