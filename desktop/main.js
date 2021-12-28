const { app, BrowserWindow, nativeTheme,Menu, MenuItem } = require('electron');


const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600
	})

	win.loadFile('index.html')
}

const mainMenuTemplate = [

{
	label:'Dosya',
	submenu:[

	{
		label: 'Yenile',
		role:'reload'
	},
	{
		label:'Çıkış',
		accelerator:process.platform == "darwin" ? "Command + Q" : "Ctrl + Q",
		role:"quit"
	},

	],

},
{
	label:'Dev Tools',
	submenu:[
	{
		label:'Detaylar',
		click(item,focusedWindow){
			focusedWindow.toggleDevTools();
		}
	}
	]
}
]

app.whenReady().then(() => {

	createWindow()

	Menu.setApplicationMenu(Menu.buildFromTemplate(mainMenuTemplate))

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow()
		}
	})
	app.on('window-all-closed', () => {
		if (process.platform !== 'darwin') {
			app.quit()
		}
	})

})

