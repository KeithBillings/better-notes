const { app, BrowserWindow, screen, ipcMain } = require('electron');
const fs = require('fs');
const path = require('path');

function createWindow() {
  // Ensure the app is ready before calling screen API
  app.whenReady().then(() => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    // Create the browser window.
    let win = new BrowserWindow({
      width: width / 2, // Half of the screen width
      height: height, // Full screen height
      x: width / 2,
			y: 0,
      webPreferences: {
        nodeIntegration: true,
      },
    });

    // Load the index.html of the app.
    win.loadFile('index.html');
  });
}

app.on('ready', createWindow);

// Listen for 'save-note' event from renderer process
ipcMain.on('save-note', (event, noteContent) => {
  const filePath = path.join(app.getPath('documents'), 'MyNotes.txt');
  fs.writeFile(filePath, noteContent, (err) => {
    if (err) {
      // Handle error
      console.error('File write failed:', err);
      return;
    }
    console.log('File written successfully');
  });
});
