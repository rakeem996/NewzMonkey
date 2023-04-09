import React, { Component } from "react";
import Navbar from "./Navbar";
import Newz from "./Newz";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
          <BrowserRouter>
          <Navbar />
            <Routes>
              <Route exact path="/" element={<Newz pageSize={6} country={"in"} category={"general"} />} />
              <Route exact path="/home" element={<Newz pageSize={6} country={"in"} category={"general"} />} />
              <Route exact path="/general" element={<Newz pageSize={6} country={"in"} category={"general"} />} />
              <Route exact path="/entertainment" element={<Newz pageSize={6} country={"in"} category={"entertainment"} />} />
              <Route exact path="/business" element={<Newz pageSize={6} country={"in"} category={"business"} />} />
              <Route exact path="/health" element={<Newz pageSize={6} country={"in"} category={"health"} />} />
              <Route exact path="/science" element={<Newz pageSize={6} country={"in"} category={"science"} />} />
              <Route exact path="/sports" element={<Newz pageSize={6} country={"in"} category={"sports"} />} />
              <Route exact path="/technology" element={<Newz pageSize={6} country={"in"} category={"technology"} />} />
            </Routes>
          </BrowserRouter>
      </div>
    );
  }
}
