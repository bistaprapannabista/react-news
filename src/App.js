import "./App.css";
import News from "./News.js";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import LoadingBar from 'react-top-loading-bar';

class App extends React.Component {
  pageSize = 20;
  constructor(props) {
    super(props);
    this.state = { progress: 0 };
  }
  setProgress=(progress)=>{this.setState({progress:progress})}
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar title="World News" />
          <LoadingBar
            color="red"
            progress={this.state.progress}
            onLoaderFinished={() => this.setState({progress:0})}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress={this.setProgress}
                  key="general"
                  pageSize={this.pageSize}
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={this.setProgress}
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
                <News setProgress={this.setProgress} pageSize={this.pageSize} key="sport" category="sport" />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={this.setProgress}
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
                <News setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  key="politics"
                  category="politics"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  key="science"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News setProgress={this.setProgress} pageSize={this.pageSize} key="health" category="health" />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News setProgress={this.setProgress}
                  pageSize={this.pageSize}
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
}

export default App;

App.propTypes = {
  pageSize: PropTypes.number,
};
