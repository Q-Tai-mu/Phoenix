/*
 * @职业: 自由 开发者
 * @Description:
 * @Author: KeHan
 * @Date: 2024-03-07 16:37:48
 * @LastEditTime: 2024-03-07 16:38:04
 * @LastEditors: KeHan
 */
// 安装 ts-node 和 typescript（如果尚未安装）
// npm install -g ts-node typescript

// 创建一个 TypeScript 文件，例如 readJson.ts

// readJson.ts
import * as fs from 'fs';

// 定义一个函数，接受一个 JSON 文件路径作为参数，返回一个对象
function readJson(jsonPath: string): any {
  try {
    // 读取 JSON 文件的内容，返回一个字符串
    const jsonString = fs.readFileSync(jsonPath, 'utf8');
    // 解析 JSON 字符串，返回一个对象
    const obj = JSON.parse(jsonString);
    // 返回对象
    return obj;
  } catch (error) {
    // 捕获并抛出错误
    throw new Error(`Error reading JSON file: ${(error as Error).message}`);
  }
}

// // 调用函数并传入目标 JSON 文件路径
// const targetJson = 'D:\\Garme\\Client.0.13.5.3.26535\\user\\profiles\\5b71794e8914f477ff9d4b3b.json';
// // 获取 JSON 文件的对象
// const targetObj = readJson(targetJson);
// // 打印对象
// console.log(targetObj);

export default readJson;
