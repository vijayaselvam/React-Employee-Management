import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Create from "../create";
import Read from "../read";
import Update from "../update";
import Home from "../home";

//Adding all routing pages/elements here
export default class RoutesNav extends Component {
  render() {
    return (
      // <BrowserRouter history={history}>
        <Routes>
          {/* <Route path="/" exact element={<App />} /> */}
          <Route path="/home" exact element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      // </BrowserRouter>
    );
  }
}
