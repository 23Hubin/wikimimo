---
title: WikiMimo 贡献指南
icon: pen
copyright: CC BY-SA 4.0 协议
editLink: false
---

作为一个完全由个人独立运营的 Wiki，WikiMimo 虽坚持“以事实为根本”，但仍旧无法做到 100% 的准确、客观（尤其是某些条目已经被我明确标注“不可避免地具有极其强烈的主观性”），因此我将始终欢迎更多人为 WikiMimo 做出真心的贡献。

## 参与贡献
目前，您可以通过 GitHub Pull Request 或联系提议的方式向 WikiMimo 提议、贡献。

::: warning
无论如何，在向 WikiMimo 提交贡献时，请务必首先阅读内容与代码规范、[注意事项](#注意事项) 和防破坏屏蔽方针。
:::

### GitHub Pull Request / 直接编辑已有条目（推荐）
::: note
目前 WikiMimo 仅接受在 GitHub 上的 Pull Request，其他平台（例如 Gitee、GitLab.com）的代码仅供镜像使用。请不要在 GitHub 之外的地方申请 Pull Request。
:::

1. 请首先注册一个 GitHub 账号，并尽可能正确设置你的资料。
2. 在 WikiMimo 某一条目页面下点击“编辑此页”按钮，此时将会 Fork 一份 WikiMimo 代码仓库到你的 GitHub 账号中。
3. 在了解 Markdown 语法和 VuePress（及 Hope 主题）的特殊语法后，您可以直接在线编辑该条目的对应 Markdown 文档，完成后即可 Propose Changes。
4. 接下来 GitHub 将引导你创建 Pull Request。请务必检查 base 分支是否为 `preview` 分支，然后再填写 Pull Request 信息。请尽可能在标题和描述中注明你编辑的条目标题，以及你对相应编辑的描述。
5. 提交 Pull Request 后，等待 imgradeone 对提交的内容进行审核，审核完成后，内容将首先合入 [预览站点](https://preview.wikimimo.com)，然后再合入主站。

### GitHub Pull Request / 本地编辑
::: info 提示
鉴于直接修改代码可能有点难度，并可能引入一些意外问题，我仍然建议一般用户使用在线编辑的方式。
:::

1. 请首先注册一个 GitHub 账号，并尽可能正确设置你的资料。
2. 打开 [WikiMimo 的 GitHub 仓库页面](https://github.com/imgradeone/wikimimo/)，然后点击页面上的 Fork 按钮来 Fork 一份仓库。
3. 将你刚刚 Fork 的仓库 Clone 到本地。
4. 在准备下一次更改之前，请 **在 GitHub 仓库页面中执行一次 Fetch upstream，然后再基于 `preview` 分支来新建一个分支** 以最小化潜在问题。
5. 使用你喜欢的编辑器（例如 VS Code）编辑或创建某一条目。请务必使用 Markdown 格式。
6. 完成更改并提交后，您可以创建 Pull Request。请务必检查 base 分支是否为 `preview` 分支，然后再填写 Pull Request 信息。请尽可能在标题和描述中注明你编辑的条目标题，以及你对相应编辑的描述。
7. 提交 Pull Request 后，等待 imgradeone 对提交的内容进行审核，审核完成后，内容将首先合入 [预览站点](https://preview.wikimimo.com)，然后再合入主站。

### 提议
如果你对内容有异议或补充意见，您可以通过许多方式向我提议。对于有用的提议，我将在鸣谢名单中感谢你的贡献。

1. 在 GitHub 上 [创建 Issue](https://github.com/imgradeone/wikimimo/issues)
2. 在哔哩哔哩私信用户 [@imgradeone](https://space.bilibili.com/107483999)（不推荐，回应不及时）
3. 通过邮箱 imgradeone+wikimimo@outlook.com 或 thisis+wikimimo@imgrade.one 联系，并在主题注明“WikiMimo”字样（对于 WikiMimo 事务，请务必只使用这些邮箱；同样，非 WikiMimo 事务也请不要使用这些邮箱联系）

## 注意事项
在提交 Pull Request 和提议之前，请务必注意：

### 通用注意事项
- 你的贡献必须具有建设性。如果涉及事件，请 **尽可能多地提供证据内容**，包括但不限于网页链接、聊天记录截图，并尽可能使用诸如 [Wayback Machine](https://web.archive.org) 或 [Archive.today](https://archive.ph) 等存档服务来提前备份内容。
- 请不要做出虚假的、恶意的、无用的、辱骂他人的、违反中国大陆法律的、无端“架空”的贡献。（“架空”这一点，除非是架空电视（））
- 即使你被列为“黑子”，你仍旧可以向 WikiMimo 做出贡献，但我 **只接受合理的提议、诉求与贡献**，而有关解除黑名单、删除条目、破坏条目的请求，我会一律拒绝。

### 针对 Pull Request
