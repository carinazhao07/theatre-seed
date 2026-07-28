# 种戏官网

「种戏」公益戏剧教育项目官方网站——零门槛 · 纯公益 · 聚焦县域。

## 开发

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)。

## 技术栈

- Next.js (App Router) + TypeScript + Tailwind CSS
- Framer Motion（滚动揭示、数字动画、悬停）
- 内容数据：`src/lib/camps.ts`、`src/lib/stories.ts`、`src/lib/site.ts`

## 页面

| 路径 | 说明 |
|------|------|
| `/` | 首页 |
| `/about` | 关于我们 |
| `/camps` | 营期与归档 |
| `/camps/[slug]` | 单届详情（含 2026 夏日程） |
| `/stories` | 声音与改变 |
| `/join` | 参与支持 |

## 更新营期

在 `src/lib/camps.ts` 追加或修改条目，并将图片放入 `public/images/`。将 `status` 设为 `ongoing` / `completed` 即可切换「进行中」展示。
