// 安装 ts-node 和 typescript（如果尚未安装）
// npm install -g ts-node typescript

// 创建一个 TypeScript 文件，例如 readDirectory.ts

// readDirectory.ts
import * as fs from 'fs';
import * as path from 'path';

// 定义一个接口，描述文件或文件夹的信息
export interface FileData {
  filePath: string; // 文件或文件夹的完整路径
  fileType: string; // 文件或文件夹的类型，例如 "file" 或 "directory"
  fileName: string; // 文件或文件夹的名字
  fileSize: number; // 文件或文件夹的大小，以字节为单位
  fileDataList?: FileData[]; // 如果是文件夹，文件夹内的文件或文件夹的信息列表
}

// 定义一个递归函数，接受一个目录路径作为参数，返回一个文件或文件夹的信息对象
function readDirectory(directoryPath: string): FileData {
  try {
    // 获取文件或文件夹的状态信息
    const stats = fs.statSync(directoryPath);
    // 创建一个文件或文件夹的信息对象
    const fileData: FileData = {
      filePath: directoryPath, // 设置文件或文件夹的完整路径
      fileType: stats.isFile() ? "file" : "directory", // 设置文件或文件夹的类型
      fileName: path.basename(directoryPath), // 设置文件或文件夹的名字
      fileSize: stats.size, // 设置文件或文件夹的大小
    };
    // 判断是否是文件夹
    if (stats.isDirectory()) {
      // 读取文件夹中的所有文件和文件夹
      const files = fs.readdirSync(directoryPath);
      // 创建一个空的文件或文件夹的信息列表
      fileData.fileDataList = [];
      // 遍历每一个文件或文件夹
      files.forEach((file) => {
        // 拼接完整的文件或文件夹路径
        const filePath = path.join(directoryPath, file);
        // 递归调用函数，传入文件或文件夹路径，获取其信息对象
        const subFileData = readDirectory(filePath);
        // 将信息对象添加到列表中
        if (fileData.fileType === "directory" && fileData.fileDataList) {
          // do something with fileData.fileDataList
          fileData.fileDataList.push(subFileData);
        }
      });
    }
    // 返回文件或文件夹的信息对象
    return fileData;
  } catch (error) {
    // 捕获并抛出错误
    throw new Error(`Error reading directory: ${(error as Error).message}`);
  }
}

// // 调用函数并传入目标文件夹路径
// const targetDirectory = 'D:\\Garme\\Client.0.13.5.3.26535\\user\\profiles';
// // 获取目标文件夹的信息对象
// const targetFileData = readDirectory(targetDirectory);
// // 将信息对象转换为 JSON 格式的字符串
// const targetFileDataJSON = JSON.stringify(targetFileData, null, 2);
// // 打印 JSON 格式的字符串
// console.log(targetFileDataJSON);

export default readDirectory;
