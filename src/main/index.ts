/*
 * @职业: 自由 开发者
 * @Description:
 * @Author: KeHan
 * @Date: 2024-02-05 15:04:44
 * @LastEditTime: 2024-03-08 13:37:03
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
import {
  callRestoreHealthPmc,
  callRestoreHealthScav,
  removeNegative,
  addItemM2,
  addMoney,
  addItemM3A1,
  addVelocity,
  add6B43,
  add6b47,
  MaxLevel
} from './personalInformation'

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
      // enableRemoteModule: true,
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      nodeIntegration: true,
      contextIsolation: false
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

  //以下代码是修改存档操作

  //恢复Pmc:_, ...args
  ipcMain.on('Call_RestoreHealth_Pmc', () => {
    const fileData: FileData = readDirectory('D:\\Garme\\Client.0.13.5.3.26535\\user\\profiles')
    if (fileData.fileDataList) {
      const targetObj = readJson(fileData.fileDataList[0].filePath)
      callRestoreHealthPmc(targetObj)

      writeJson(targetObj, fileData.fileDataList[0].filePath)
    }
  })

  //恢复scav
  ipcMain.on('Call_RestoreHealth_Scav', () => {
    const fileData: FileData = readDirectory('D:\\Garme\\Client.0.13.5.3.26535\\user\\profiles')
    if (fileData.fileDataList) {
      const targetObj = readJson(fileData.fileDataList[0].filePath)
      callRestoreHealthScav(targetObj)

      writeJson(targetObj, fileData.fileDataList[0].filePath)
    }
  })

  //添加m2
  ipcMain.on('Call_add_item_m2', () => {
    const fileData: FileData = readDirectory('D:\\Garme\\Client.0.13.5.3.26535\\user\\profiles')
    if (fileData.fileDataList) {
      const targetObj = readJson(fileData.fileDataList[0].filePath)
      addItemM2(targetObj)

      writeJson(targetObj, fileData.fileDataList[0].filePath)
    }
  })

  //添加Money
  ipcMain.on('Call_add_item_Money', () => {
    const fileData: FileData = readDirectory('D:\\Garme\\Client.0.13.5.3.26535\\user\\profiles')
    if (fileData.fileDataList) {
      const targetObj = readJson(fileData.fileDataList[0].filePath)
      addMoney(targetObj)
      writeJson(targetObj, fileData.fileDataList[0].filePath)
    }
  })

  //移除负面效果
  ipcMain.on('Call_remove_Negative', () => {
    const fileData: FileData = readDirectory('D:\\Garme\\Client.0.13.5.3.26535\\user\\profiles')
    if (fileData.fileDataList) {
      const targetObj = readJson(fileData.fileDataList[0].filePath)
      removeNegative(targetObj)
      writeJson(targetObj, fileData.fileDataList[0].filePath)
    }
  })

  //添加m3a1
  ipcMain.on('Call_add_item_m3a1', () => {
    const fileData: FileData = readDirectory('D:\\Garme\\Client.0.13.5.3.26535\\user\\profiles')
    if (fileData.fileDataList) {
      const targetObj = readJson(fileData.fileDataList[0].filePath)
      addItemM3A1(targetObj)

      writeJson(targetObj, fileData.fileDataList[0].filePath)
    }
  })

  //添加警用多用途单挂
  ipcMain.on('Call_add_item_Velocity', () => {
    const fileData: FileData = readDirectory('D:\\Garme\\Client.0.13.5.3.26535\\user\\profiles')
    if (fileData.fileDataList) {
      const targetObj = readJson(fileData.fileDataList[0].filePath)
      addVelocity(targetObj)

      writeJson(targetObj, fileData.fileDataList[0].filePath)
    }
  })

  //添俄重
  ipcMain.on('Call_add_item_6B43', () => {
    const fileData: FileData = readDirectory('D:\\Garme\\Client.0.13.5.3.26535\\user\\profiles')
    if (fileData.fileDataList) {
      const targetObj = readJson(fileData.fileDataList[0].filePath)
      add6B43(targetObj)

      writeJson(targetObj, fileData.fileDataList[0].filePath)
    }
  })

  //添俄头盔
  ipcMain.on('Call_add_item_6b47', () => {
    const fileData: FileData = readDirectory('D:\\Garme\\Client.0.13.5.3.26535\\user\\profiles')
    if (fileData.fileDataList) {
      const targetObj = readJson(fileData.fileDataList[0].filePath)
      add6b47(targetObj)

      writeJson(targetObj, fileData.fileDataList[0].filePath)
    }
  })

  //满级经验
  ipcMain.on('Call_add_item_MaxLevel', () => {
    const fileData: FileData = readDirectory('D:\\Garme\\Client.0.13.5.3.26535\\user\\profiles')
    if (fileData.fileDataList) {
      const targetObj = readJson(fileData.fileDataList[0].filePath)
      MaxLevel(targetObj)

      writeJson(targetObj, fileData.fileDataList[0].filePath)
    }
  })
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
