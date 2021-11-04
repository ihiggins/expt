import { ipcRenderer, remote } from 'electron'; // eslint-disable-line @typescript-eslint/no-unused-vars

/* eslint-disable @typescript-eslint/no-explicit-any */
window.ipcRenderer = ipcRenderer;
window.remote = remote;
window.require = require;