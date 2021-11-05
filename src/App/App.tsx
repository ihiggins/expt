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
      <Search />
      <Draw />
    </div>
  );
};

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById("root")
);
