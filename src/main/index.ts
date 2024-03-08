/*
 * @职业: 自由 开发者
 * @Description:
 * @Author: KeHan
 * @Date: 2024-02-05 15:04:44
 * @LastEditTime: 2024-03-07 18:31:02
 * @LastEditors: KeHan
 */
import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import readDirectory from './readDirectory'
import { FileData } from './readDirectory'
import readJson from './readJson'
import writeJson from './writeJson'
function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 352,
    height: 680,
    minHeight: 680,
    minWidth: 352,
    maxHeight: 680,
    maxWidth: 352,
    show: false,
    maximizable: false, //最大化
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      nodeIntegration: true
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.

//以下代码是修改存档操作

//恢复Pmc:_, ...args
ipcMain.on('Call_RestoreHealth_Pmc', () => {
  //读取指定目录下的塔克夫
  const fileData: FileData = readDirectory('D:\\Garme\\Client.0.13.5.3.26535\\user\\profiles')
  if (fileData.fileDataList) {
    const targetObj = readJson(fileData.fileDataList[0].filePath)
    targetObj.characters.pmc.Health.BodyParts.Head.Health.Current = 35
    targetObj.characters.pmc.Health.BodyParts.Chest.Health.Current = 85
    targetObj.characters.pmc.Health.BodyParts.Stomach.Health.Current = 70
    targetObj.characters.pmc.Health.BodyParts.RightArm.Health.Current = 60
    targetObj.characters.pmc.Health.BodyParts.LeftArm.Health.Current = 60
    targetObj.characters.pmc.Health.BodyParts.RightLeg.Health.Current = 65
    targetObj.characters.pmc.Health.BodyParts.LeftLeg.Health.Current = 65
    targetObj.characters.pmc.Health.Hydration.Current = 100
    targetObj.characters.pmc.Health.Energy.Current = 100
    //写入数据
    writeJson(targetObj, fileData.fileDataList[0].filePath)
    // console.log('参数：', ..)
  }
})

//恢复scav
ipcMain.on('Call_RestoreHealth_Scav', () => {
  //读取指定目录下的塔克夫
  const fileData: FileData = readDirectory('D:\\Garme\\Client.0.13.5.3.26535\\user\\profiles')
  if (fileData.fileDataList) {
    const targetObj = readJson(fileData.fileDataList[0].filePath)
    targetObj.characters.scav.Health.BodyParts.Head.Health.Current = 35
    targetObj.characters.scav.Health.BodyParts.Chest.Health.Current = 85
    targetObj.characters.scav.Health.BodyParts.Stomach.Health.Current = 70
    targetObj.characters.scav.Health.BodyParts.RightArm.Health.Current = 60
    targetObj.characters.scav.Health.BodyParts.LeftArm.Health.Current = 60
    targetObj.characters.scav.Health.BodyParts.RightLeg.Health.Current = 65
    targetObj.characters.scav.Health.BodyParts.LeftLeg.Health.Current = 65
    targetObj.characters.scav.Health.Hydration.Current = 100
    targetObj.characters.scav.Health.Energy.Current = 100
    //写入数据
    writeJson(targetObj, fileData.fileDataList[0].filePath)
    // console.log('参数：', ..)
  }
})


//
/**
 * // 删除Effects属性
  for (let part in obj.BodyParts) {
    delete obj.BodyParts[part].Effects;
  }
  "BodyParts": {
					"Chest": {
						"Health": {
							"Current": 26,
							"Maximum": 85
						},
						"Effects": {
							"LightBleeding": {
								"Time": -1
							}
						}
					},
					"Head": {
						"Health": {
							"Current": 15,
							"Maximum": 50
						}
					},
					"LeftArm": {
						"Health": {
							"Current": 18,
							"Maximum": 60
						}
					},
					"LeftLeg": {
						"Health": {
							"Current": 20,
							"Maximum": 65
						}
					},
					"RightArm": {
						"Health": {
							"Current": 18,
							"Maximum": 60
						}
					},
					"RightLeg": {
						"Health": {
							"Current": 20,
							"Maximum": 65
						}
					},
					"Stomach": {
						"Health": {
							"Current": 21,
							"Maximum": 70
						}
					}
				},

  效果就是在：
  "Chest": {
						"Health": {
							"Current": 26,
							"Maximum": 85
						},
						"Effects": {
							"LightBleeding": {
								"Time": -1
							}
						}
					},中添加了Effects属性并增加负面效果
          骨折：Fracture
          销毁：Destroyed
          中毒：Poisoning
          颤栗：Tremor
          疼痛：Pain
          重度出血：HeavyBleeding
          轻度出血：LightBleeding
          脱水：Dehydration
          饥饿：Exhaustion
 */


//在存档中搜索：Inventory，这个是仓库
