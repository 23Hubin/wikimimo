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
无论如何，在向 WikiMimo 提交贡献时，请务必首先阅读 [内容与代码规范]()、[注意事项](#注意事项) 和 [防破坏屏蔽方针](#防破坏屏蔽方针)。<!--  待补充 -->
:::

### GitHub Pull Request / 直接编辑已有条目（推荐）
::: note
目前 WikiMimo 仅接受在 GitHub 上的 Pull Request，其他平台（例如 Gitee、GitLab.com）的代码仅供镜像使用。请不要在 GitHub 之外的地方申请 Pull Request。

另外，为了让 WikiMimo 合并你的修改，**请务必在修改完成后提交 Pull Request**。（已经有 2 个人忘记了）
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
- 请不要做出虚假的、恶意（包括恶意夸大化）的、无用的、辱骂他人的、违反中国大陆法律的、无端“架空”的贡献。（“架空”这一点，除非是架空电视（））
- 即使你被列为“黑子”，你仍旧可以向 WikiMimo 做出贡献，但我 **只接受合理的、以事实为本的提议、诉求与贡献**，而有关解除黑名单、删除条目、破坏条目的请求，我会一律拒绝，同样，我更不欢迎刷屏请求，详见 [防破坏屏蔽方针](#防破坏屏蔽方针)。
- **请不要将所谓“放送圈”的任何破事丢到 广播电视 / 放送文化 分类。**（包括与广播电视 / 网络自媒体完全搭不上边，或者与黑子有关的恶性内容）  
  如果你真的很想这么做，首先，请好好想想，什么是“放送文化”？“放送文化”爱好者到底该做些什么？等你想好了这个问题之后，您可以考虑将条目加入到“网络异闻录”下的“混沌之境”分类，然后等待我的二次评判。

### 针对 Pull Request
- 在执行更改之前，请务必确认自己的 Fork 是否与上游保持一致（即没有 behind X commits），并及时 Fetch Upstream（当然如果使用链接编辑就可以避免这种问题），否则合并时将很难解决冲突。同样，为减少更多潜在冲突，每次开始更改前请务必基于 `preview` 分支再新建一个分支。
- 一切更改请基于 `preview` 分支。
- 如果新建条目，首先请确定条目是否已经正确归类，其次请在条目文档开头补充完全 Frontmatter 信息，同时也请确定好使用的内容协议（WikiMimo 主要采用 CC BY-SA 4.0），并做好 **开放转载** 的准备。Frontmatter 示例如下：

```md
---
title: 条目标题
copyright: CC BY-SA 4.0 协议 # 或者 3.0
author: 条目作者
---
```

- 请不要对 `/docs/.vuepress/` 文件夹下的内容做任何更改，尤其是配置文件（除非你需要额外开启 Hope 主题的某一插件）。
- 原则上我们不希望编辑者上传图片。
- 请尽量不要大幅修改已有条目，或在同一 Pull Request 中对大量条目进行修改，这只会无限延长我的代码审核时间。
- 建议在本地配置 Node.js 环境并安装 Yarn，同时在本地试运行自己的 Fork 代码，以确保内容正确展示。
- 修改或创建内容时，请尽可能依照[《少数派写作排版指南》](https://sspai.com/post/37815) 和[《中文文案排版指北》](https://github.com/mzlogin/chinese-copywriting-guidelines)来规范你的内容。
- 请不要修改任何未提供编辑链接（或者 Frontmatter 中注明 `editLink: false`）的条目。
- 理论上我有权直接对你 Pull Request 的内容进行协作修改。

### 针对提议
- 如果你在 B 站联系 @imgradeone 时发现被拉黑了，也不必灰心，请使用其他方式联系。但，还是那句话，我 **只接受合理的、以事实为本的提议、诉求与贡献**，而有关解除黑名单、删除条目、破坏条目的请求，我会一律拒绝。
- 不要因为我没（完全）接受你的提议而刷屏骚扰或逼迫。详见 [防破坏屏蔽方针](#防破坏屏蔽方针)。
- 提议时不要试图刷无意义内容（比如 `猴年棉花糖`、`按数字的时候，我们十年前－1`），详见 [防破坏屏蔽方针](#防破坏屏蔽方针)。<!-- 除非你很想被我踹飞或者臭骂一顿 -->

## 内容与代码规范
- WikiMimo 使用 CC BY-SA 4.0（也可能是 3.0）作为主内容协议，这就意味着，您在 WikiMimo 上做出的贡献将是 **可被转载并二次创作的**，因此请慎重考虑。如果您不想您的内容被商用，那您可以考虑使用 CC BY-NC-SA 协议，但请在文章开头和 Frontmatter 处注明。
- 修改或创建内容时，请尽可能依照[《少数派写作排版指南》](https://sspai.com/post/37815) 和[《中文文案排版指北》](https://github.com/mzlogin/chinese-copywriting-guidelines)来规范你的内容。
- 请避免将受版权保护的内容“搬运”到 WikiMimo 中。此外，由于百度百科的版权限制（以及极其低质的部分条目），我们不希望，也禁止任何人将百度百科的内容“搬运”到 WikiMimo 中。

## 防破坏屏蔽方针
WikiMimo 自始至终不希望本站的内容被恶意破坏，更不希望有恶意用户持续进行一系列骚扰、破坏。因此，我们设定了如下方针。

1. 在 Pull Request 或 Issue 中提交 **垃圾内容或刷屏** 的用户，imgradeone 将拒绝请求并关闭该 Pull Request 或关闭相应 Issue，并贴上 `won't merge` 和 `nonsense` 标签。单用户累计有 5 条 PR / Issue 被贴上 `nonsense` 标签后将被 imgradone 屏蔽。行为严重且违反 [GitHub 社区指导方针](https://docs.github.com/cn/site-policy/github-terms/github-community-guidelines) 者，imgradeone 也将向 GitHub 举报。  
2. 在 Pull Request 或 Issue 中提交 **违背事实、夸大事实内容** 的用户，imgradeone 将拒绝请求并关闭该 Pull Request 或关闭相应 Issue，并贴上 `won't merge` 和 `conflict` 标签，并可能根据您的社区行为选择是否屏蔽。
3. 在 Pull Request 或 Issue 中提交 **辱骂他人或违反中国大陆法律内容** 的用户，imgradeone 将拒绝请求并关闭该 Pull Request 或关闭相应 Issue，并贴上 `won't merge`、`nonsense`、`conflict`、`unfriendly` 标签，并按事态严重性选择是否屏蔽或举报。这可能是累计 3 次，也可能是直接屏蔽。
4. **试图通过 Pull Request 破坏 WikiMimo** 的用户将直接被屏蔽，并对相应内容贴上 `won't merge`、`nonsense`、`conflict`、`unfriendly` 标签。
5. 通过联系 imgradeone 提议时，如果出现 **辱骂、胁迫、挑拨** 等行为，imgradeone 将选择屏蔽，且不必告知。在你选择理性提议之前，请不要尝试更换联系方式再次提议。
6. 对于使用本文未列出的方式向 WikiMimo 提议者，imgradeone 极有可能忽视你的提议；如果向 WikiMimo 提议邮箱内发表与 WikiMimo 无关的内容，imgradeone 也将直接无视。
7. 此外，如果你选择在其他平台屏蔽 / 拉黑 imgradeone，且您之前提供的贡献违背了 WikiMimo 的方针，那么 imgradeone 有权选择双向屏蔽（包括扩大范围到邮箱、B 站账号、GitHub），且无需告知。

::: info 提示
被屏蔽的用户将无法继续在 GitHub 上继续与 imgradeone 执行任何互动，包括向 WikiMimo 提交代码。关于被屏蔽后不能做的事情，可参阅 [GitHub 的帮助文档](https://docs.github.com/cn/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account)。

**但，请您务必了解，被 imgradeone 屏蔽并不意味着您无法继续引用 WikiMimo 的内容。** 只要您遵循各页面底部注明的协议（通常是 CC BY-SA 4.0），您可以自由地引用 WikiMimo 的内容，并对其进行修改（**但如果做出修改，则必须做出修改申明**，我不希望歪曲内容造成的误导被归咎到我身上。同样，这也是 CC BY-SA 协议的要求。如果你不知道如何正确引用，请参考 [Creative Commons 提供的署名案例](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution)（英文）。）
:::
