const isDev = require('electron-is-dev');

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
      title: 'BetterNotes', // this is not working
      frame: false, // Disable the default frame
      titleBarStyle: 'hidden',
      webPreferences: {
        nodeIntegration: true,
      },
      icon: path.join(__dirname, '/assets/logo.png'),
    });

		isDev ? console.log('Running in development') : console.log('Running in production');


    win.loadURL(
      isDev
        ? 'http://localhost:3000' // URL from Webpack Dev Server
        : `file://${path.join(__dirname, '../dist/index.html')}` // Production path
    );

    if (process.platform === 'darwin') {
      // Set the dock icon (MacOS)
      const filePath = path.join(__dirname, 'assets/logo.png');
      app.dock.setIcon(filePath);

      // Set the about panel options (MacOS)
      app.setAboutPanelOptions({
        applicationName: 'BetterNotes',
        applicationVersion: '0.0.1',
        version: 'Inital Release',
        credits: 'Keith Billings',
        authors: 'Keith Billings',
        iconPath: filePath,
        text: 'A better way to take notes.',
      });
    }

    // Load the index.html of the app.
    // win.loadFile('dist/index.html');
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
