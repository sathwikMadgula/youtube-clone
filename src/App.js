import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";
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
                <div className="app__page">
                  <Sidebar />
                  <SearchPage />
                </div>
                {/* <h1> Search page</h1> */}
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
