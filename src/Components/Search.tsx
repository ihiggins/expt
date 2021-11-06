import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { query } from "../Service/Atoms";

var ipcRenderer = window.require("electron").ipcRenderer;

const Search = () => {
  const [clip, setClip] = useRecoilState(query);

  useEffect(() => {
    ipcRenderer.on("clippy", (event, arg) => {
      setClip(arg);
    });
  }, []);

  return (
    <div className="search">
      <div className="sub-heading">Selected Question</div>
      <div className="clip-display">
        <div className="clip-text">{clip}</div>
      </div>
    </div>
  );
};

export default Search;
