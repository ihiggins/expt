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
    <div>
      <input
        id="CLIP"
        type="text"
        value={clip}
        onChange={(e) => setClip(e.target.value)}
      />
    </div>
  );
};

export default Search;
