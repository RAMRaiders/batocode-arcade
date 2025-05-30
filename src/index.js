import { app, BrowserWindow, globalShortcut } from 'electron';

app.commandLine.appendSwitch('lang', 'en-US');

let win = null;

function createWindow() {
  win = new BrowserWindow({
    fullscreen: true,
    kiosk: true,
    show: false,
    backgroundColor: '#000000',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: true
    }
  });

  win.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
    console.error('Failed to load URL:', errorDescription, errorCode);
  });

  win.loadURL('https://arcade.makecode.com/kiosk')
    .catch(err => console.error('Error loading URL:', err));

  win.webContents.on('did-finish-load', () => {
    win.show();
  });

  win.on('closed', () => {
    win = null;
    app.quit();
  });

  win.webContents.session.webRequest.onCompleted((details) => {
  if (details.statusCode >= 400) {
    console.error('Failed request:', details);
  }
});
}

process.on('SIGINT', () => {
  console.log('Received SIGINT, exiting.');
  app.quit();
});

process.on('SIGTERM', () => {
  console.log('Received SIGTERM, exiting.');
  app.quit();
});

app.whenReady().then(() => {
  createWindow();

  globalShortcut.register('Shift+F5', () => {
    console.log('Reloading...');
    if (win && !win.isDestroyed()) {
      win.reload();
    }
  });

  globalShortcut.register('F12', () => {
    win.webContents.toggleDevTools();
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});