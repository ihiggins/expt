import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
var ipcRenderer = window.require("electron").ipcRenderer;

var Answer = ({ question, answer, match }) => {
  var [copyText, setText] = useState("Copy");

  var handleCopy = (e) => {
    setText("Copied");
    
    ipcRenderer.send('copy',answer)
  };

  return (
    <div className="answer">
      <div className="text">{question}</div>

      <div className="single-chart">
        <svg viewBox="0 0 36 36" className="circular-chart">
          <path
            className="circle-bg"
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            strokeDasharray={`${match}, 100`}
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" className="percentage">
            {" "}
            {match}%
          </text>
        </svg>
      </div>
      <Tooltip title={copyText}>
        <div className="text" onClick={handleCopy}>
          {answer}
        </div>
      </Tooltip>
    </div>
  );
};

export default Answer;
