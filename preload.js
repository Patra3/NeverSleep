const { contextBridge, ipcRenderer } = require('electron/renderer');
contextBridge.exposeInMainWorld('electronApi', {
  sendUpdate: (update) => ipcRenderer.send('update', update),
  hideWindow: () => ipcRenderer.send('hideWindow', 0)
});