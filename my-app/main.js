import dotenv from "dotenv";
dotenv.config();
import { app, BrowserWindow, ipcMain, screen } from "electron";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let isMinimized = true;
let win;
let screenSize;
function createWindow() {
  screenSize = screen.getPrimaryDisplay().workAreaSize;

  win = new BrowserWindow({
    width: screenSize.width ,
    height: screenSize.height ,
    transparent: true,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.removeMenu();

  if (process.env.NODE_ENV === "development") {
    win.loadURL("http://localhost:5173");
  } else {
    win.loadFile("dist/index.html");
  }
}

ipcMain.on("window:minimize", () => {
  if (win) win.minimize();
});

ipcMain.on("window:close", () => {
  if (win) win.close();
});

ipcMain.on("window:restore", () => {
  if (isMinimized) {
    if (win) win.setSize(800, 600);
    if (win) win.center();
  } else {
    if (win) win.setSize(screenSize.width, screenSize.height);
    if (win) win.center();
  }
  isMinimized = !isMinimized;
});



app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
