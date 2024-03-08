// 安装 ts-node 和 typescript（如果尚未安装）
// npm install -g ts-node typescript

// 创建一个 TypeScript 文件，例如 writeJson.ts

// writeJson.ts
import * as fs from 'fs';

// 定义一个函数，接受一个对象和一个 JSON 文件路径作为参数，将对象写入 JSON 文件
function writeJson(obj: any, jsonPath: string): void {
  try {
    // 将对象转换为 JSON 格式的字符串
    const jsonString = JSON.stringify(obj, null, 2);
    // 将 JSON 字符串写入 JSON 文件
    fs.writeFileSync(jsonPath, jsonString, 'utf8');
    // 打印成功信息
    console.log(`Object written to JSON file: ${jsonPath}`);
  } catch (error) {
    // 捕获并抛出错误
    throw new Error(`Error writing JSON file: ${(error as Error).message}`);
  }
}
export default writeJson;

// // 创建一个对象，用于测试
// const person = {
//   name: 'John',
//   age: 30,
//   email: 'john@example.com',
// };

// // 调用函数并传入对象和目标 JSON 文件路径
// const targetJson = '/path/to/your/json/file';
// writeJson(person, targetJson);
