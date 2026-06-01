# AI Hook Lab 🪝

AI 爆款开头生成器 — 输入主题，一键生成 10 个不同风格的爆款开头 hook。

## 功能

- 🎯 **多平台支持**：微信公众号、小红书、抖音、B站、微博、知乎
- 📝 **多内容类型**：知识科普、产品推广、观点输出、故事叙述、热点评论、教程指南
- 🤖 **多模型支持**：Claude、GPT-4o、DeepSeek（用户自选）
- ⭐ **结构化输出**：每个 hook 包含文案、风格标签、点击欲评分、推荐理由
- 📋 **一键复制**：单条复制 / 全部复制
- 📚 **历史记录**：保存到 localStorage，支持展开查看、删除、清空
- 🎨 **精美 UI**：暗色主题 + 渐变背景 + 响应式设计

## 快速开始

### 1. 安装依赖

```bash
cd ai-hook-lab
npm install
```

### 2. 配置 API Key

编辑 `.env.local`，至少配置一个：

```env
ANTHROPIC_API_KEY=your-key-here
OPENAI_API_KEY=your-key-here
DEEPSEEK_API_KEY=your-key-here
```

### 3. 启动开发服务器

```bash
npm run dev
```

打开 http://localhost:3000

### 4. 使用

1. 输入一个主题（如「AI 如何改变教育」）
2. 选择目标平台
3. 选择内容类型
4. 选择 AI 模型
5. 点击「生成 10 个爆款 Hook」

## 技术栈

- **框架**：Next.js 16 (App Router) + TypeScript
- **样式**：Tailwind CSS v4
- **图标**：Lucide React
- **AI SDK**：@anthropic-ai/sdk、openai
- **存储**：localStorage（无数据库）

## 项目结构

```
ai-hook-lab/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # 根布局
│   │   ├── page.tsx            # 主页面
│   │   ├── globals.css         # 全局样式
│   │   └── api/generate/
│   │       └── route.ts        # AI 生成 API
│   ├── components/
│   │   ├── Header.tsx          # 顶部导航
│   │   ├── HookForm.tsx        # 输入表单
│   │   ├── HookCard.tsx        # 单个 hook 卡片
│   │   ├── HookResults.tsx     # 结果展示
│   │   └── HistoryPanel.tsx    # 历史记录面板
│   ├── lib/
│   │   ├── types.ts            # TypeScript 类型
│   │   ├── prompts.ts          # Prompt 模板
│   │   └── providers.ts        # 多模型封装
│   └── hooks/
│       └── useHistory.ts       # localStorage hook
├── .env.local                  # API Keys（不提交到 git）
└── package.json
```

## License

MIT
