/*
 * @职业: 自由 开发者
 * @Description:
 * @Author: KeHan
 * @Date: 2024-03-08 11:01:41
 * @LastEditTime: 2024-03-08 13:55:13
 * @LastEditors: KeHan
 */
// 定义一个函数，根据给定的长度生成一个随机数
const generateRandomNumber = (length: number) => {
  // 定义一个空字符串，用来存储随机数
  let randomNumber = "";
  // 定义一个包含所有可能的数字字符的字符串
  const digits = "0123456789abcdefghijklmnopqrstuvwxyz";
  // 循环 length 次，每次从 digits 中随机选择一个字符，拼接到 randomNumber 中
  for (let i = 0; i < length; i++) {
    randomNumber += digits[Math.floor(Math.random() * digits.length)];
  }
  // 返回生成的随机数
  return randomNumber;
};


export default generateRandomNumber;
