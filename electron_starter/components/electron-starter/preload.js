const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    sendMessage: (message) => ipcRenderer.send('my-channel', message),
    onMessage: (callback) => ipcRenderer.on('my-channel', callback),
});
