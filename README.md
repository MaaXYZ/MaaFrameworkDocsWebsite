# MaaFramework 文档网站

这是 [MaaFramework](https://github.com/MaaXYZ/MaaFramework) 的官方文档网站，使用 [Rspress](https://rspress.dev/) 构建。

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 本地开发

```bash
pnpm dev
```

访问 http://localhost:5173/ 查看文档网站。

### 构建

```bash
pnpm build
```

构建产物将生成在 `doc_build` 目录下。

### 预览构建结果

```bash
pnpm preview
```

## 文档结构

```
docs/
├── index.md          # 中文首页
├── public/           # 静态资源
│   └── maafw.png    # Logo
├── zh/              # 中文文档
│   ├── 1.1-快速开始.md
│   ├── 1.2-术语解释.md
│   ├── 2.1-集成文档.md
│   ├── 2.2-回调协议.md
│   ├── 3.1-任务流水线协议.md
│   ├── 3.2-ProjectInterface协议.md
│   ├── 4.1-构建指南.md
│   ├── 4.2-标准化接口设计.md
│   └── _meta.json   # 文档元数据
└── en/              # 英文文档
    ├── index.md     # 英文首页
    ├── 1.1-QuickStarted.md
    ├── 1.2-ExplanationOfTerms.md
    ├── 2.1-Integration.md
    ├── 2.2-CallbackProtocol.md
    ├── 3.1-PipelineProtocol.md
    ├── 3.2-ProjectInterface.md
    ├── 4.1-BuildGuide.md
    ├── 4.2-StandardizedInterfaceDesign.md
    └── _meta.json   # 文档元数据
```

## 功能特性

- 📚 **多语言支持**: 支持中英文文档，自动切换语言
- 🔍 **全文搜索**: 内置搜索功能，快速查找内容
- 📱 **响应式设计**: 适配各种设备屏幕
- 🎯 **自动大纲**: 自动生成文档大纲，方便导航
- 🌙 **暗色模式**: 支持明暗主题切换
- ⚡ **快速构建**: 基于 Rspress，构建速度极快

## 贡献指南

欢迎提交 PR 改进文档！

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 许可证

本文档遵循与 MaaFramework 相同的开源协议。
