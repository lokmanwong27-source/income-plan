# Lnk.Flow Studio — 自動化收入系統

> 完全自動化的多管道收入系統 — 由 Codex AI 全權維運

✅ **GitHub**: 已連結 · **Vercel**: 已部署 · **Stripe**: Publishable Key 已設定
🔄 開發中：Stripe Secret Key 設定、Gumroad 上架、域名綁定

## 三條現金流

```
┌──────────────────────────────────────────────────────┐
│                   Codex Income Engine                │
├──────────────────────────────────────────────────────┤
│  📦 Gumroad 數位商品  →  一次性收入  (第1週)        │
│  🏢 SaaS 訂閱服務    →  經常性收入  (第2-3週)       │
│  🤖 自動化服務       →  高單價收入  (第3-4週)       │
└──────────────────────────────────────────────────────┘
```

## 目錄結構

```
income-plan/                    # 根目錄
├── SETUP.md                    ← 帳號設定進度追蹤
├── README.md                   ← 本文件
├── products/                   ← Gumroad 數位商品（準備好上架）
│   ├── react-components/       ← 15 個 React UI 元件 · $19-49
│   ├── svg-icons/              ← 30 個 SVG 圖示 · $9-19
│   ├── hyperframes-pack/       ← 5 個 GSAP 影片模板 · $19-49
│   ├── icon-sets/              ← 舊版圖示集
│   ├── scripts/                ← 開發工具/部署腳本
│   └── index.html              ← 商品目錄頁
├── saas/                       ← SaaS (Lnk.Flow) Next.js 應用
│   ├── pages/                  ← Landing / Dashboard / Auth / Bio Page
│   ├── lib/                    ← DB / Stripe 整合
│   ├── styles/                 ← 全域樣式
│   └── package.json
└── services/
    └── video-service/          ← AI 自動化影片服務（API + 前端）
```

## 數位商品（Gumroad 準備上架）

| 商品 | 內容 | 價格 | 預覽 |
|------|------|------|------|
| React UI Component Pack | 15 個元件（Button, Modal, Tabs, Toast 等） | $19-49 | [預覽](products/react-components/preview.html) |
| Premium SVG Icon Pack | 30 個手繪 SVG 圖示（商業/社群/科技） | $9-19 | [預覽](products/svg-icons/preview.html) |
| HyperFrames Video Templates | 5 個 GSAP 動畫影片模板 | $19-49 | [預覽](products/hyperframes-pack/preview.html) |

## SaaS (Lnk.Flow)

正在 Vercel 上部署：https://income-plan-git-main-lokman2.vercel.app

- Link-in-bio 個人頁面工具
- Stripe 訂閱付款（需設定 Secret Key）
- 三個方案：Free / Pro $5 / Business $19

## 自動化服務

AI 影片製作服務 — 用戶貼腳本，自動產出動畫影片。
等 Gumroad/Stripe 設定完成即可上線。

## 收入預估

| 階段 | 產品 | 定價 | 目標用戶 | 月收入預估 |
|------|------|------|----------|-----------|
| 第1個月 | 數位商品 | $5-49/件 | 開發者、設計師 | $0-50 |
| 第2-3個月 | SaaS | $5-19/月 | 創作者、品牌 | $50-500+ |
| 第3-4個月 | 自動化服務 | $9-49/次 | 企業、行銷 | $100-500+ |

## 維運模式

所有產品的**開發、部署、更新、客服、監控**，全部由 Codex 自動處理。

**只需要你做這 3 步**（總共 ~10 分鐘）：
1. Stripe Secret Key 貼到 Vercel
2. 註冊 Gumroad 上架商品
3. 買一個域名（$10/年）

完成後，就可以開始收錢了。
