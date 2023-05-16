/*
 * @Author: along
 * @Description:
 * @Date: 2023-05-12 20:19:06
 * @LastEditors: along
 * @LastEditTime: 2023-05-12 20:19:14
 * @FilePath: /cxy-box/background.js
 */
// background.js
let color = '#3aa757'; // 默认背景色是绿色

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  // 输出带颜色的文字
  console.log('Default background color set to %cgreen', `color: ${color}`);
});
