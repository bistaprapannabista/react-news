import "./App.css";
import News from "./components/News.js";
import PropTypes from "prop-types";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import { useState } from "react";

const App = () => {
  const pageSize = 20;
  const[progress,setProgress]=useState(0);
    return (
      <div className="App">
        <Router>
          <Navbar title="World News" />
          <LoadingBar
            color="red"
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress={setProgress}
                  key="general"
                  pageSize={pageSize}
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={setProgress}
                  key="technology"
                  pageSize={pageSize}
                  category="technology"
                />
              }
            />
            <Route
              exact
              path="/sport"
              element={
                <News setProgress={setProgress} pageSize={pageSize} key="sport" category="sport" />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={setProgress}
                  pageSize={pageSize}
                  key="entertainment"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/politcs"
              element={
                <News setProgress={setProgress}
                  pageSize={pageSize}
                  key="politics"
                  category="politics"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News setProgress={setProgress}
                  pageSize={pageSize}
                  key="science"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News setProgress={setProgress} pageSize={pageSize} key="health" category="health" />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News setProgress={setProgress}
                  pageSize={pageSize}
                  key="business"
                  category="business"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
}

export default App;

App.propTypes = {
  pageSize: PropTypes.number,
};
