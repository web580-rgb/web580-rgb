const { app, BrowserWindow } = require('electron') // 引入app 与 窗口
let win = null

function createWindow () {
  // 新建浏览器窗口
  win = new BrowserWindow({
    width: 500,
    height: 200,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile('index.html') //  加载html页面
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

// 当全部窗口关闭时退出
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

