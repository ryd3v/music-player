const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 525,
    webPreferences: {
      nodeIntegration: true,
    },
    resizable: true,
  });
  win.loadFile('index.html');
}

app.on('ready', createWindow);
