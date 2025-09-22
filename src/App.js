import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import './App.css';
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/search/:sathwik_gudda"
            element={
              <>
                <Header />
                <h1> Search page</h1>
              </>
            }
          >
          </Route>
          
          <Route
            path="/"
            element={
              <>
                <Header />
                <div className="app__page">
                  <Sidebar />
                  <RecommendedVideos />
                  {/* <h1> Home page</h1> */}
                </div>

              </>
            }
          >
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
