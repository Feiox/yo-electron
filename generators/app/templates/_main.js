var app = require('app');
var BrowserWindow = require('browser-window');
var mainWindow = null;

require('crash-reporter').start();

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({'use-content-size': true, fullscreen: true, "node-integration": false});
  mainWindow.loadUrl('file://' + __dirname + '/app/index.html');
  // mainWindow.openDevTools();
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});