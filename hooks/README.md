# Claude Stop Hook 练习

## 什么是 Stop Hook？
Stop Hook 是 Claude Code 的一个功能，允许你在 Claude 停止运行时执行自定义操作。

## 文件结构
- `stop_hook_example.js` - Stop Hook 示例脚本
- `README.md` - 本说明文件

## 如何使用

### 1. 配置 Claude Code
在你的 Claude Code 设置中添加 hook 配置：

```json
{
  "hooks": {
    "stop": "./hooks/stop_hook_example.js"
  }
}
```

### 2. 测试 Hook
当你停止 Claude 时，hook 脚本会被自动执行。

## 示例功能
- 记录 Claude 停止的时间
- 执行清理操作
- 发送通知

## 练习任务
1. 修改 `stop_hook_example.js`，添加日志记录功能
2. 尝试在 hook 中执行系统命令
3. 创建一个更复杂的 hook，记录会话信息
