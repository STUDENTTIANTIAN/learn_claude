# PPTX Skill 安装指南

## 已完成的步骤
✅ 已克隆 CustomPPTXSkillClaudeCode 仓库到本地

## 安装步骤

### 1. 配置 Claude Code Skills
将 skill 添加到 Claude Code 配置中：

```bash
# 方法1：使用 claude 命令添加
claude skill add ./CustomPPTXSkillClaudeCode

# 方法2：手动配置 - 编辑 ~/.claude/settings.json
```

在 `~/.claude/settings.json` 中添加：
```json
{
  "skills": [
    {
      "name": "custom-pptx",
      "path": "D:\\agent\\claude\\learn_claude\\CustomPPTXSkillClaudeCode"
    }
  ]
}
```

### 2. 配置 LaTeX 宏文件
编辑 `CustomPPTXSkillClaudeCode/assets/symbols.tex`，添加你的自定义宏：

```latex
% 示例宏
\newcommand{\R}{\mathbb{R}}
\newcommand{\E}{\mathbb{E}}
\DeclareMathOperator*{\argmin}{arg\,min}
```

### 3. 安装依赖（可选）
如果你需要完整的 pptx 生成功能，需要安装：

```bash
# 安装 python-pptx
pip install python-pptx

# 安装 LaTeX（如果尚未安装）
# Windows: 安装 MiKTeX 或 TeX Live
# Mac: brew install --cask mactex
# Linux: sudo apt install texlive-full
```

### 4. 测试 Skill
在 Claude Code 中测试：

```
claude
> 帮我创建一个关于机器学习的演示文稿
```

Claude 应该会询问你想要 `.pptx` 文件还是 LaTeX Beamer 格式。

## 使用方法

### 触发关键词
以下关键词会触发 pptx skill：
- slides（幻灯片）
- deck（演示文稿）
- presentation（演示）
- talk（演讲）
- lecture（讲座）

### 示例命令
```
> 帮我把这篇论文转换成演示文稿
> 创建一个关于深度学习的 PPT
> 生成一个 Beamer 格式的学术报告
```

## 文件结构说明

```
CustomPPTXSkillClaudeCode/
├── SKILL.md                    # Skill 定义文件（Claude 读取）
├── README.md                   # 说明文档
├── assets/
│   ├── symbols.tex             # LaTeX 宏文件（需要编辑）
│   ├── beamer_preamble.tex     # Beamer 前导文件
│   └── packages/               # 自定义 LaTeX 包
├── inputs/                     # 放置源论文 .tex 文件
├── scripts/
│   └── render_equation.py      # LaTeX 公式渲染脚本
├── templates/
│   ├── pptx_deck.py            # PPTX 模板脚本
│   └── beamer_deck.tex         # Beamer 模板文件
├── references/
│   ├── pptx_patterns.md        # PPTX 样式参考
│   └── beamer_patterns.md      # Beamer 样式参考
└── evals/
    └── evals.json              # 测试用例
```

## 注意事项

1. **公式渲染**：使用真实的 LaTeX 渲染，不是 matplotlib mathtext
2. **自定义宏**：在 `symbols.tex` 中定义的宏会在所有幻灯片中可用
3. **格式选择**：始终询问用户想要 pptx 还是 beamer 格式
4. **源材料**：可以将论文 .tex 文件放在 `inputs/` 目录中作为参考

## 故障排除

### 公式渲染失败
- 检查 `symbols.tex` 中是否有未定义的宏
- 确保 LaTeX 已正确安装
- 查看错误信息中的行号和宏名称

### Skill 未触发
- 确认 skill 已正确添加到 Claude Code 配置
- 尝试使用触发关键词（slides, deck, presentation 等）

## 下一步

1. 编辑 `assets/symbols.tex` 添加你的自定义宏
2. 测试创建简单的演示文稿
3. 根据需要调整设计偏好（在 SKILL.md 中修改）
