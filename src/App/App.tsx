import * as ReactDOM from "react-dom";
import React from "react";

import "./App.css";
import Search from "../Components/Search";
import { RecoilRoot } from "recoil";
import Draw from "../Components/Draw";

const App = () => {
  return (
    <div className="app">
      This is the main div?
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
