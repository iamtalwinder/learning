const { ipcRenderer } = require("electron");

document.getElementById("drag").ondragstart = (event) => {
  event.preventDefault();
  ipcRenderer.send("ondragstart", "D:/JS/ChatApp/README.md");
};
