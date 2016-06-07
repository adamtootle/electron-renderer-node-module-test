const Electron = require('electron');
const app = Electron.app;
const BrowserWindow = Electron.BrowserWindow;

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    // width: 280,
    width: 1000,
    height: 600,
  });

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + app.getAppPath() + '/index.html');

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
});