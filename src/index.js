import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import NavBar from "./components/NavBar/navbar";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import history from "./components/Routes/history";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  //If Strict mode enabled the api will call multiple times while used in Use Effect(page load).
  <React.StrictMode>
    <BrowserRouter history={history}>
      <NavBar/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
