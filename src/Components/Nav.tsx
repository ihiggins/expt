//@ts-ignore
var ipcRenderer = window.require("electron").ipcRenderer;
import Button from "@mui/material/Button";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
import { IconButton } from "@mui/material";

const Nav = () => {
  // let w = BrowserWindow.getCurrentWindow()

  var handleClose = () => {
    ipcRenderer.send('close','close')​
  };
  var handleMin = () => {
    ipcRenderer.send('min','min')​
  };

  return (
    <div className="nav">
      EXPT
      <div className="nav-control">
      
        <IconButton aria-label="close" color="primary" onClick={handleMin}>
          <HorizontalRuleOutlinedIcon />
        </IconButton>
        <IconButton color="error" aria-label="close" onClick={handleClose}>
          <CloseOutlinedIcon />
        </IconButton>

      </div>
    </div>
  );
};

export default Nav;
