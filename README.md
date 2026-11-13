# 全文可 / Wenke Quan 的个人学术主页

基于 [PRISM](https://github.com/xyjoey/PRISM) 定制，对应[参考演示站](https://prism-demo.pages.dev/)。保留原模板的布局、衬线标题、金色点缀和深浅色主题，支持中文 / English 切换。网站会优先匹配浏览器语言，并记住手动选择。

已配置全文可 / Wenke Quan、哈尔滨工业大学计算学部博士生、具身智能、VLA 与强化学习研究方向，以及邮箱 quanwenke@stu.hit.edu.cn。已加入 LPG-DRL（第一作者，投稿中）和 ControlScene（第三作者，2026 年已发表）。头像使用通用占位图，后续可替换为个人照片。模板作者的照片、个人资料和示例论文已移除。

## 本地预览

需要 Node.js 22 或更新版本（建议使用 Node.js 22 LTS）。

```bash
npm ci
npm run dev
```

打开 `http://localhost:3000`。编辑内容文件后刷新页面即可。

## 修改个人资料

| 内容 | 英文 | 中文 |
| --- | --- | --- |
| 姓名、职位、学校、导航 | `content/config.toml` | `content_zh/config.toml` |
| 邮箱、GitHub、Google Scholar、ORCID | `content/config.toml` 中的 `[social]` | 默认共用英文配置 |
| 个人简介 | `content/bio.md` | `content_zh/bio.md` |
| 研究方向、首页栏目 | `content/about.toml` | `content_zh/about.toml` |
| 新闻动态 | `content/news.toml` | `content_zh/news.toml` |
| 个人简历 | `content/cv.md` | `content_zh/cv.md` |
| 学术论文 | `content/publications.bib` | 共用同一份文件 |

中文配置会覆盖英文配置中的同名设置；缺失的中文文件会回退到英文版本。不要把文件保存成 Word 格式，直接编辑 TOML、Markdown 和 BibTeX 文本即可。

将个人照片放到 `public/`，例如 `public/avatar.jpg`，并把 `content/config.toml` 中的 `avatar` 改为 `/avatar.jpg`。当前使用通用头像占位图。联系方式留空会隐藏相应图标，不会显示无效链接。

更新内容时，也请修改两份 `config.toml` 中的 `last_updated` 日期。

### 添加论文

把从 Google Scholar、Zotero 等工具导出的 BibTeX 放入 `content/publications.bib`。下面仅说明字段格式，请替换为真实论文后再使用：

```bibtex
@article{your_citation_key,
  title = {Your actual paper title},
  author = {Your Name and Coauthor Name},
  journal = {Journal Name},
  year = {2026},
  doi = {YOUR_ACTUAL_DOI},
  abstract = {Your abstract},
  selected = {true},
  description = {A short description of your work}
}
```

`selected = {true}` 将论文加入首页的精选列表。论文页支持搜索、按年份与类型筛选、展开摘要和查看 BibTeX。可选的 `code` 字段填写代码仓库地址；`preview = {figure.png}` 对应 `public/papers/figure.png`。姓名与配置中的姓名一致时会自动高亮。

`author_position = {1}` 或 `{3}` 标记你在该论文中的作者排序；`status = {submitted}` 表示投稿中，`status = {published}` 表示已发表，标签会随网页语言切换。投稿论文未提供年份时无需填写 `year`，网站不会自动推断发表年份。ControlScene 的完整作者名单已依据[合作者主页](https://liwrui.github.io/)补齐，LPG-DRL 的完整作者名单由主页作者提供，两篇论文的 DOI 仍待补充。作者和年份齐全后才会显示 BibTeX 按钮。

使用标准 BibTeX 的 `author = {First Author and Second Author and Wenke Quan}` 维护署名顺序。首页和论文页会自动显示作者列表，并突出显示与你的中英文姓名匹配的作者。

### 添加动态

在对应语言的 `news.toml` 中，删除 `news = []` 后按时间倒序填写：

```toml
[[news]]
date = "2026-11"
content = "在这里填写你的真实动态。"
```

### 添加教学、获奖或学术服务

`teaching.toml`、`awards.toml`、`services.toml` 已保留空白配置，暂未加入导航。填入真实内容后，在两份 `config.toml` 里添加对应导航即可。例如：

```toml
[[navigation]]
title = "Teaching"
type = "page"
target = "teaching"
href = "/teaching"
```

卡片内容格式：

```toml
type = "card"
title = "Teaching"
# 添加条目前删除原来的 items = []。

[[items]]
title = "Course name"
subtitle = "Your role"
date = "2026"
content = "A short description."
```

## 静态构建与检查

```bash
npm run lint
npm run typecheck
npm run build
```

静态网站生成在 `out/`。如已安装 Python 3，可运行 `npm run preview`，在 `http://localhost:8000` 检查构建结果。此网站无需后端，头像和字体不依赖原作者的网站。

## 发布到 GitHub Pages

1. 将代码提交并推送到 `WinkQuan/WinkQuan.github.io` 仓库的 `main` 分支。
2. 在 GitHub 仓库的 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。
3. 推送到 `main` 后，仓库中的部署工作流会检查代码、生成静态网站并发布。也可以在 **Actions** 中手动运行部署工作流。
4. 部署成功后，访问 `https://winkquan.github.io/`。

当前配置适用于这个用户主页仓库的根域名。请勿把仓库根目录直接作为静态网站发布源：需要发布的是构建产生的 `out/`，已由工作流处理。

## Credits / License

Based on [PRISM — Portfolio & Research Interface Site Maker](https://github.com/xyjoey/PRISM). The original MIT license is retained in [LICENSE](LICENSE).
