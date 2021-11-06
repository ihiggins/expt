import * as ReactDOM from "react-dom";
import React from "react";

import "./App.css";
import Search from "../Components/Search";
import { RecoilRoot } from "recoil";
import Draw from "../Components/Draw";
import Nav from "../Components/Nav";

import { Divider } from "@mui/material";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <div className="content">
        <div className="left">
          <div className="left-header">Past Querys</div>
          <div className="left-content"></div>
        </div>
        <div className="right">
          <Search />
          <Draw />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById("root")
);
