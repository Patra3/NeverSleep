const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');

// Main window object. 
let win;

// Initialize - create startup window and store the object.
const createWindow = () => {
  const win = new BrowserWindow({
    width: 350,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    frame: false,
    autoHideMenuBar: true
  });
  win.loadFile('index.html');
}

// onReady
app.whenReady().then(() => {
  createWindow();
});

// onAllWindowsClosed
app.on('window-all-closed', () => {

});