import "./App.css";
import News from "./News.js";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

class App extends React.Component {
  pageSize = 20;
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar title="World News" />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News key="general" pageSize={this.pageSize} category="general" />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={this.pageSize}
                  category="technology"
                />
              }
            />
            <Route
              exact
              path="/sport"
              element={
                <News pageSize={this.pageSize} key="sport" category="sport" />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  pageSize={this.pageSize}
                  key="entertainment"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/politcs"
              element={
                <News pageSize={this.pageSize} key="politics" category="politics" />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News pageSize={this.pageSize} key="science" category="science" />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News pageSize={this.pageSize} key="health" category="health" />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News pageSize={this.pageSize} key="business" category="business" />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

App.propTypes = {
  pageSize: PropTypes.number,
};
