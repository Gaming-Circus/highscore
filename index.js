const { app, BrowserWindow } = require('electron');
const path = require('path');

/**
 *
 *
 */
let appWindow;

/**
 *  events
 *
 */
app.on('ready', createAppWindow);
app.on('activate', onActivate);
app.on('window-all-closed', onWindowAllClosed);

/**
 *  set name of app
 *
 */
const appName = 'Highscrore';
app.setName(appName);

const appData = app.getPath('appData');
app.setPath('userData', path.join(appData, appName));

app.commandLine.appendSwitch('--autoplay-policy','no-user-gesture-required')

/**
 *
 *
 */
function onClosed() {
	appWindow = null;
}

/**
 *
 *
 */
function createAppWindow() {
	appWindow = new BrowserWindow({
		width: 1600,
		height: 1000,
        frame: true
	});

    appWindow.setMenu(null);

	appWindow.loadURL(`file://${__dirname}/dist/index.html`);
	appWindow.on('closed', onClosed);
    //appWindow.webContents.openDevTools();
}

/**
 *
 *
 */
function onWindowAllClosed() {
	if (process.platform !== 'darwin') {
		app.quit()
	}
}

/**
 *
 *
 */
function onActivate() {
	if (appWindow === null) {
		createAppWindow();
	}
}
