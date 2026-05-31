#!/usr/bin/env node

/**
 * Claude Stop Hook 示例
 * 当 Claude 停止时执行的操作
 */

console.log('=== Claude Stop Hook 触发 ===');
console.log('时间:', new Date().toISOString());
console.log('Claude 已停止运行');

// 这里可以添加你需要的逻辑
// 例如：记录日志、发送通知、清理临时文件等

module.exports = {
  name: 'stop-hook',
  description: '当 Claude 停止时触发的钩子'
};
