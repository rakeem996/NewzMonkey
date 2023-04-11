import React, { Component } from "react";
import Navbar from "./Navbar";
import Newz from "./Newz";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {

  state = {
    progress: 0
  }

  setProgress = (newprogress) => {
    this.setState({progress: newprogress})
  }
  render() {
    return (
      <div>
          <BrowserRouter>
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
          <Navbar />
            <Routes>
              <Route exact path="/"  element={<Newz setProgress={this.setProgress} key="general" pageSize={6} country={"in"} category={"general"} />} />
              <Route exact path="/home" element={<Newz setProgress={this.setProgress} key="general" pageSize={6} country={"in"} category={"general"} />} />
              <Route exact path="/general" element={<Newz setProgress={this.setProgress} key="general"  pageSize={6} country={"in"} category={"general"} />} />
              <Route exact path="/entertainment" element={<Newz setProgress={this.setProgress} key="entertainment" pageSize={6} country={"in"} category={"entertainment"} />} />
              <Route exact path="/business" element={<Newz setProgress={this.setProgress} key="business" pageSize={6} country={"in"} category={"business"} />} />
              <Route exact path="/health"  element={<Newz setProgress={this.setProgress} key="health" pageSize={6} country={"in"} category={"health"} />} />
              <Route exact path="/science" element={<Newz setProgress={this.setProgress} key="science" pageSize={6} country={"in"} category={"science"} />} />
              <Route exact path="/sports"  element={<Newz setProgress={this.setProgress} key="sports" pageSize={6} country={"in"} category={"sports"} />} />
              <Route exact path="/technology" element={<Newz setProgress={this.setProgress} key="technology" pageSize={6} country={"in"} category={"technology"} />} />
            </Routes>
          </BrowserRouter>
      </div>
    );
  }
}
