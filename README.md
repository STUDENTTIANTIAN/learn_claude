# Claude Code 学习项目

我最近在面 agent 开发岗位，但是很多都问是否拥有 Harness Engineer 的经验以及 Claude Code 多 Agent 项目的经验，所以我特地对 agent 进行学习，并进行记录。

## 项目简介

这是一个 Claude Code 学习项目，用于记录和实践 Claude Code 的各种功能，包括：
- Agent 开发和 Harness Engineering
- Claude Code Skills 安装和使用
- Hook 机制（Stop Hook、Start Hook 等）
- 多 Agent 项目实践
- 自动化工作流开发
- Claude Code 插件系统
- **全栈 Web 应用开发**（AI Hook Lab — Next.js + 多模型 AI 集成）

---

## 学习记录

### 2026年5月31日（第一天）

#### 学习来源
抖音中一个 Claude Code 入门视频

#### 完成的学习任务

1. ✅ **创建 Claude Stop Hook 练习项目**
   - 学习了 stop hook 的基本概念和使用方法
   - Stop Hook 是 Claude Code 的一个功能，允许你在 Claude 停止运行时执行自定义操作
   - 文件位置: `hooks/` 目录
   - 创建了示例脚本: `hooks/stop_hook_example.js`
   - 配置方式：在 Claude Code settings 中添加 hook 配置

2. ✅ **安装 PPTX Skill**
   - 从 GitHub 克隆了 `CustomPPTXSkillClaudeCode` 仓库
   - 创建了详细的安装指南: `pptxskill_installation_guide.md`
   - 学习了 Claude Code Skills 的安装和配置方法
   - PPTX Skill 支持两种格式：PowerPoint (.pptx) 和 LaTeX Beamer
   - 触发关键词：slides、deck、presentation、talk、lecture

3. ✅ **实践 PPTX 生成**
   - 使用 python-pptx 生成了美股市场日报 PPT
   - 学习了 python-pptx 库的使用方法，包括：
     - 幻灯片布局和尺寸设置（16:9 宽屏）
     - 样式常量定义（颜色、字体、字号）
     - 指数卡片、板块表现表格、个股卡片等组件
     - 结构化数据驱动的幻灯片生成
   - 生成的文件: `us_stock_market_2026_05_31.pptx`
   - 脚本文件: `us_stock_ppt.py`（约 350 行代码）

4. ✅ **项目初始化和版本控制**
   - 初始化了 Git 仓库
   - 配置了 .gitignore 文件
   - 推送到 GitHub: https://github.com/STUDENTTIANTIAN/learn_claude

#### 学到的知识点
- Claude Code 的 Hook 机制：可以在 Claude 启动、停止等时刻执行自定义操作
- Claude Code Skills：可扩展的插件系统，支持自定义功能
- python-pptx 库：用于生成 PowerPoint 演示文稿
- Git 基础操作：init、add、commit、push

---

### 2026年6月1日（第二天）

#### 完成的学习任务

1. ✅ **学习并安装 Superpowers 插件**
   - **安装方式**：通过 `/plugin` 命令一键安装，`/reload-plugins` 重新加载
   - **加载结果**：1 个 plugin、7 个 agents、1 个 hook
   - **Superpowers 是什么**：Claude Code 的社区增强插件，提供了一套完整的多 Agent 协作能力
   - **提供的 Agent 类型**：
     | Agent | 用途 | 特点 |
     |-------|------|------|
     | `claude` | 通用任务 | 默认 catch-all agent，全工具访问 |
     | `claude-code-guide` | 使用指南 | 回答 Claude Code 功能、配置、用法问题 |
     | `evidence-researcher` | 证据研究 | 严谨、来源优先、结构化输出，自带持久化记忆 |
     | `Explore` | 只读搜索 | 大规模文件/目录/命名规范搜索，只读不修改 |
     | `general-purpose` | 通用研究 | 复杂多步任务、代码搜索、并行执行 |
     | `Plan` | 架构设计 | 设计实现方案，识别关键文件，评估架构取舍 |
     | `statusline-setup` | 状态栏 | 配置 Claude Code 用户界面状态栏 |
   - **提供的核心能力**：
     - 🔄 **Workflow 编排系统**：确定性多阶段工作流，支持 pipeline（流水线）和 parallel（并行）模式
     - 🧠 **Agent 持久化记忆**：每个 agent 可拥有独立的文件记忆系统，跨会话保持上下文
     - 🛡️ **工作树隔离**：`isolation: "worktree"` 让 agent 在独立 git 分支中工作，互不干扰
     - 📊 **结构化输出**：通过 JSON Schema 约束 agent 返回格式，确保结果可解析
     - 🔌 **MCP/LSP 集成**：支持外部工具服务器和语言服务器接入
   - **学到的 Workflow 质量模式**：
     - 对抗性验证（Adversarial Verify）：多个独立怀疑者验证每个发现，多数否决则淘汰
     - 视角多样化验证（Perspective-Diverse Verify）：不同角度（正确性、安全、性能、复现）审查
     - 评委面板（Judge Panel）：N 次独立尝试，多评委评分，综合最优解
     - 循环直到干燥（Loop-Until-Dry）：连续 K 轮无新发现则停止，避免遗漏
     - 多模态扫描（Multi-Modal Sweep）：多 agent 各自盲搜，交叉去重
     - 完整性批评者（Completeness Critic）：最终检查遗漏的模态、未验证的声明

2. ✅ **学习 Claude Code Agent 系统底层机制**
   - 理解了 Agent 的核心能力：
     - 可以访问所有工具（Read、Edit、Write、Bash、Grep、Glob 等）
     - 支持后台运行（`run_in_background: true`）：agent 在后台异步完成任务
     - 支持 worktree 隔离（`isolation: "worktree"`）：在独立 git 分支中工作
     - 支持结构化输出（通过 schema 参数）：返回值强制符合 JSON Schema
     - 支持自定义 subagent_type：通过 `.claude/agents/*.md` 定义专用 agent
   - 理解了 Agent 与主会话的关系：
     - Agent 的最终文本就是返回值，不直接展示给用户
     - 主会话通过 `Agent` 工具的结果获取 agent 的输出
     - 可通过 `SendMessage` 与已有 agent 继续交互
     - agent 可以在 `worktree` 隔离环境中运行，避免文件冲突
   - 理解了 Workflow 编排的运行机制：
     - 脚本是纯 JavaScript（非 TypeScript），在 async 上下文中运行
     - 内置 `phase()`、`log()`、`parallel()`、`pipeline()` 等编排原语
     - 支持 `budget` 控制 token 消耗上限
     - 支持 `resume` 恢复中断的工作流（通过 runId）

3. ✅ **配置自定义 Agent**
   - 创建了 `evidence-researcher` 自定义 agent（位于 `.claude/agents/`）
   - Agent 功能：严谨的研究专家，擅长事实核查、信息验证、背景材料收集
   - 特点：
     - 自主规划搜索策略，不需要用户提供材料
     - 严格的来源优先级体系（原始研究 > 权威机构 > 多视角来源）
     - 强制交叉验证（关键数据点需要至少 2 个独立可验证来源）
     - 证据分类系统：[事实]、[推测]、[不确定]、[待验证]
     - 结构化输出格式：研究主题、核心发现、证据强度评估、不确定性说明、后续建议

4. ✅ **学习 Claude Code 工作流系统（Workflow）**
   - 了解了 Workflow 工具的核心概念：
     - 确定性多步骤编排（循环、条件、扇出）
     - 多阶段工作流：Scan → Fix → Verify 等模式
     - 支持 pipeline（流水线）和 parallel（并行）两种模式
   - 学习了常用的质量模式：
     - 对抗性验证（Adversarial Verify）：多个独立怀疑者验证每个发现
     - 视角多样化验证（Perspective-Diverse Verify）：不同角度审查
     - 评委面板（Judge Panel）：多角度独立尝试，评分综合
     - 循环直到干燥（Loop-Until-Dry）：未知规模的发现任务
     - 多模态扫描（Multi-Modal Sweep）：多角度并行搜索
     - 完整性批评者（Completeness Critic）：最终检查遗漏

5. ✅ **构建 AI Hook Lab 全栈 Web 应用**
   - **项目简介**：AI 爆款开头生成器，用户输入主题后 AI 一次生成 10 个不同风格的爆款开头 hook
   - **项目位置**：`ai-hook-lab/` 目录
   - **技术栈**：Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Lucide React
   - **核心功能**：
     - 🎯 多平台支持：微信公众号、小红书、抖音、B站、微博、知乎
     - 📝 多内容类型：知识科普、产品推广、观点输出、故事叙述、热点评论、教程指南
     - 🤖 多模型支持：Claude (Anthropic)、GPT-4o (OpenAI)、DeepSeek（用户自选）
     - ⭐ 结构化输出：每个 hook 包含文案、风格标签、点击欲评分（1-10）、推荐理由
     - 📋 一键复制：单条复制 / 全部复制
     - 📚 历史记录：保存到 localStorage，支持展开查看、删除、清空
     - 🎨 精美 UI：暗色主题 + 渐变背景 + 骨架屏加载 + 响应式设计
   - **架构设计**：
     - API Route（`/api/generate`）：服务端处理 AI 调用，API key 放在 `.env.local`，不暴露到前端
     - 多 Provider 封装：统一接口 `generateHooks()`，内部根据选择的模型调用不同 SDK
     - Prompt 工程：针对不同平台和内容类型定制 prompt，要求 AI 返回结构化 JSON
     - JSON 解析：支持从 markdown code block 中提取 JSON，容错处理
   - **组件结构**：
     - `Header.tsx` — 顶部导航（Logo + 标题）
     - `HookForm.tsx` — 输入表单（主题 + 平台/类型/模型选择 + 生成按钮）
     - `HookCard.tsx` — 单个 hook 卡片（文案 + 风格标签 + 评分徽章 + 复制按钮）
     - `HookResults.tsx` — 10 个卡片的网格布局 + 复制全部
     - `HistoryPanel.tsx` — 历史记录面板（折叠/展开/删除/清空）
   - **文件清单**：
     - `ai-hook-lab/src/lib/types.ts` — TypeScript 类型定义（Platform, ContentType, LLMProvider, HookResult 等）
     - `ai-hook-lab/src/lib/prompts.ts` — 结构化 prompt 模板（针对 7 平台 × 6 内容类型定制）
     - `ai-hook-lab/src/lib/providers.ts` — 多 LLM 封装（Claude SDK / OpenAI SDK / DeepSeek 兼容格式）
     - `ai-hook-lab/src/app/api/generate/route.ts` — API Route（输入校验 + 调用 provider + 错误处理）
     - `ai-hook-lab/src/hooks/useHistory.ts` — localStorage 历史记录 Hook
     - `ai-hook-lab/.env.local` — API Key 配置（ANTHROPIC_API_KEY / OPENAI_API_KEY / DEEPSEEK_API_KEY）

#### 学到的知识点
- **Superpowers 插件**：一键安装即可获得 7 个预置 Agent + Workflow 编排能力
- **Agent 架构**：多种专用 agent，各有不同能力和工具访问权限，可通过 `.claude/agents/*.md` 自定义
- **Workflow 编排**：确定性多阶段工作流，支持并行（parallel）和流水线（pipeline）两种模式
- **Agent 持久化记忆**：每个 agent 可拥有独立的文件记忆系统，跨会话保持上下文
- **证据研究方法论**：严格的来源验证、交叉检查、证据分级体系
- **自定义 Agent 开发**：通过 markdown 文件定义 agent 的行为、工具权限和输出格式
- **Next.js App Router**：使用 `app/` 目录结构，`layout.tsx` + `page.tsx` 组合
- **API Route 安全**：API key 放在 `.env.local`，通过 `process.env` 在服务端读取，前端无法访问
- **多模型适配**：统一接口封装不同 AI SDK（Anthropic SDK / OpenAI SDK / DeepSeek 兼容格式）
- **Prompt 工程**：结构化 prompt 设计，针对不同平台/内容类型定制指令，要求 JSON 输出
- **JSON 解析容错**：从 markdown code block 中提取 JSON，处理格式不规范的 AI 返回
- **localStorage 持久化**：无数据库场景下的历史记录方案，限制 50 条防止存储膨胀
- **Tailwind CSS v4**：暗色主题设计、渐变背景、响应式网格布局

---

## 文件结构

```
learn_claude/
├── README.md                          # 项目说明和学习记录（本文件）
├── .gitignore                         # Git 忽略配置
├── hooks/                             # Hook 练习目录
│   ├── README.md                      # Hook 练习说明
│   └── stop_hook_example.js           # Stop Hook 示例脚本
├── pptxskill_installation_guide.md    # PPTX Skill 安装指南
├── us_stock_ppt.py                    # 美股 PPT 生成脚本
├── us_stock_market_2026_05_31.pptx    # 生成的美股市场日报
├── CustomPPTXSkillClaudeCode/         # PPTX Skill 仓库（已克隆）
│   ├── SKILL.md                       # Skill 定义文件
│   ├── assets/                        # LaTeX 宏文件等资源
│   ├── scripts/                       # 渲染脚本
│   ├── templates/                     # PPTX 和 Beamer 模板
│   ├── references/                    # 样式参考文档
│   └── evals/                         # 测试用例
├── ai-hook-lab/                       # AI Hook Lab 全栈应用 ⭐ NEW
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx             # 根布局
│   │   │   ├── page.tsx               # 主页面
│   │   │   ├── globals.css            # 全局样式
│   │   │   └── api/generate/
│   │   │       └── route.ts           # AI 生成 API（服务端）
│   │   ├── components/
│   │   │   ├── Header.tsx             # 顶部导航
│   │   │   ├── HookForm.tsx           # 输入表单
│   │   │   ├── HookCard.tsx           # 单个 hook 卡片
│   │   │   ├── HookResults.tsx        # 结果展示
│   │   │   └── HistoryPanel.tsx       # 历史记录面板
│   │   ├── lib/
│   │   │   ├── types.ts               # TypeScript 类型定义
│   │   │   ├── prompts.ts             # Prompt 模板
│   │   │   └── providers.ts           # 多模型 Provider 封装
│   │   └── hooks/
│   │       └── useHistory.ts          # localStorage Hook
│   ├── .env.local                     # API Keys（不提交到 git）
│   └── README.md                      # 项目说明
└── .claude/
    └── agents/
        └── evidence-researcher.md     # 自定义证据研究 Agent
```

---

## 常用命令

```bash
# 运行美股 PPT 生成脚本
python us_stock_ppt.py

# 启动 AI Hook Lab
cd ai-hook-lab && npm run dev    # 开发模式
cd ai-hook-lab && npm run build  # 生产构建

# 查看 Git 状态
git status

# 提交更改
git add .
git commit -m "描述你的更改"

# 推送到 GitHub
git push origin main

# Claude Code 插件管理
/plugin              # 安装插件
/reload-plugins      # 重新加载插件

# Claude Code 内置命令
/help                # 查看帮助
/clear               # 清除上下文
/tasks               # 查看任务列表
/workflows           # 查看工作流
```

---

## Claude Code 核心功能速查

### Hook 类型
| Hook | 触发时机 | 用途 |
|------|---------|------|
| Start Hook | Claude 启动时 | 初始化、加载配置 |
| Stop Hook | Claude 停止时 | 清理、日志记录 |
| PreToolUse Hook | 工具调用前 | 输入验证、权限检查 |
| PostToolUse Hook | 工具调用后 | 结果处理、日志记录 |

### Agent 类型
| Agent | 用途 | 特点 |
|-------|------|------|
| claude | 通用任务 | 默认 agent，全工具访问 |
| claude-code-guide | 使用指南 | 回答 Claude Code 相关问题 |
| evidence-researcher | 证据研究 | 严谨、来源优先、结构化输出 |
| Explore | 只读搜索 | 大规模文件搜索，不修改文件 |
| general-purpose | 通用研究 | 复杂多步任务 |
| Plan | 架构设计 | 设计实现方案，不写代码 |
| statusline-setup | 状态栏 | 配置用户界面 |

### Workflow 模式
| 模式 | 说明 | 适用场景 |
|------|------|---------|
| pipeline | 流水线，每项独立处理 | 多阶段独立处理 |
| parallel | 并行，等待所有完成 | 需要所有结果的场景 |
| loop-until-dry | 循环直到无新发现 | 未知规模的发现任务 |
| adversarial verify | 对抗性验证 | 确保发现的正确性 |

---

## 参考资源

- [Claude Code 官方文档](https://docs.anthropic.com/en/docs/claude-code)
- [Claude Code Skills 仓库](https://github.com/anthropics/claude-code-skills)
- [python-pptx 文档](https://python-pptx.readthedocs.io/)
- [Git 官方教程](https://git-scm.com/book)
- [Claude Agent SDK 文档](https://docs.anthropic.com/en/docs/agents-and-tools/claude-agent-sdk)
- [Next.js 文档](https://nextjs.org/docs)
- [Anthropic SDK (Node.js)](https://docs.anthropic.com/en/api/sdks)
- [OpenAI SDK (Node.js)](https://platform.openai.com/docs/libraries)
- [DeepSeek API 文档](https://platform.deepseek.com/api-docs)
- [Superpowers 插件](https://github.com/anthropics/claude-code-superpowers) — Claude Code 社区增强插件，提供多 Agent 编排能力

---

## 下次继续

### 待完成的学习任务
1. ⏳ **深入学习 Hook 机制**
   - 学习 Start Hook、PreToolUse Hook 等其他类型的 Hook
   - 实践更多 Hook 示例

2. ⏳ **多 Agent 项目实践**
   - 实践 Agent 间的协作和通信
   - 使用 Workflow 编排多 Agent 工作流

3. ⏳ **Harness Engineering 探索**
   - 学习 Harness 的概念和应用场景
   - 实践构建简单的 Harness 项目

4. ⏳ **完善 PPTX Skill**
   - 自定义 PPTX 模板和样式
   - 学习更多 python-pptx 高级功能

5. ⏳ **深入实践 Superpowers 插件**
   - 用 Workflow 编排一个完整的代码审查工作流
   - 自定义更多 agent 并配置持久化记忆
   - 实践 agent worktree 隔离模式

6. ⏳ **完善 AI Hook Lab**
   - 添加流式输出（Streaming）支持
   - 添加更多 hook 风格模板
   - 部署到 Vercel

---

**当前进度**: 第二天完成 ✅（共 2 天学习）
