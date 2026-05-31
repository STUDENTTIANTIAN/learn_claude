我最近在面agent开发岗位，但是很多都问是否拥有 harness engineeer的经验以及claude code 多agent项目的经验，所以我特地对agent进行学习，并进行记录

我今天学习了 抖音中一个视频的claudecode 入门视频

## 项目简介

这是一个 Claude Code 学习项目，用于记录和实践 Claude Code 的各种功能，包括：
- Agent 开发和 Harness Engineering
- Claude Code Skills 安装和使用
- Hook 机制（Stop Hook、Start Hook 等）
- 多 Agent 项目实践
- 自动化工作流开发

## 学习记录

### 2026年5月31日（第一天）

#### 完成的学习任务
1. ✅ **创建 Claude Stop Hook 练习项目**
   - 学习了 stop hook 的基本概念和使用方法
   - 文件位置: `hooks/` 目录
   - 创建了示例脚本: `hooks/stop_hook_example.js`

2. ✅ **安装 PPTX Skill**
   - 从 GitHub 克隆了 `CustomPPTXSkillClaudeCode`
   - 创建了详细的安装指南: `pptxskill_installation_guide.md`
   - 学习了 Claude Code Skills 的安装和配置方法

3. ✅ **实践 PPTX 生成**
   - 使用 pptxskill 生成了美股市场日报 PPT
   - 学习了 python-pptx 库的使用方法
   - 生成的文件: `us_stock_market_2026_05_31.pptx`
   - 脚本文件: `us_stock_ppt.py`

4. ✅ **项目初始化和版本控制**
   - 初始化了 Git 仓库
   - 配置了 .gitignore 文件
   - 推送到 GitHub: https://github.com/STUDENTTIANTIAN/learn_claude

#### 学到的知识点
- Claude Code 的 Hook 机制：可以在 Claude 启动、停止等时刻执行自定义操作
- Claude Code Skills：可扩展的插件系统，支持自定义功能
- python-pptx 库：用于生成 PowerPoint 演示文稿
- Git 基础操作：init、add、commit、push

### 2026年6月1日（明天计划）

#### 待完成的学习任务
1. ⏳ **深入学习 Hook 机制**
   - 学习 Start Hook、PreToolUse Hook 等其他类型的 Hook
   - 实践更多 Hook 示例

2. ⏳ **学习多 Agent 项目**
   - 了解 Claude Code 的多 Agent 架构
   - 实践 Agent 间的协作和通信

3. ⏳ **探索 Harness Engineering**
   - 学习 Harness 的概念和应用场景
   - 实践构建简单的 Harness 项目

4. ⏳ **完善 PPTX Skill**
   - 自定义 PPTX 模板和样式
   - 学习更多 python-pptx 高级功能

## 文件结构

```
learn_claude/
├── README.md                      # 项目说明和学习记录（本文件）
├── .gitignore                     # Git 忽略配置
├── hooks/                         # Hook 练习目录
│   ├── README.md                  # Hook 练习说明
│   └── stop_hook_example.js       # Stop Hook 示例脚本
├── pptxskill_installation_guide.md # PPTX Skill 安装指南
├── us_stock_ppt.py                # 美股 PPT 生成脚本
└── CustomPPTXSkillClaudeCode/     # PPTX Skill 仓库（已克隆）
```

## 常用命令

```bash
# 运行美股 PPT 生成脚本
python us_stock_ppt.py

# 查看 Git 状态
git status

# 提交更改
git add .
git commit -m "描述你的更改"

# 推送到 GitHub
git push origin main
```

## 参考资源

- [Claude Code 官方文档](https://docs.anthropic.com/en/docs/claude-code)
- [Claude Code Skills 仓库](https://github.com/anthropics/claude-code-skills)
- [python-pptx 文档](https://python-pptx.readthedocs.io/)
- [Git 官方教程](https://git-scm.com/book)

## 下次继续

明天（2026年6月1日）将继续学习以下内容：
1. Hook 机制的深入学习
2. 多 Agent 项目实践
3. Harness Engineering 探索

**当前进度**: 第一天完成 ✅