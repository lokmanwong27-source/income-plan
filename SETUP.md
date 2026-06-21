# SETUP Guide — 帳號註冊指南（進度追蹤）

> ⏱ 總共約 30 分鐘。以下是進度：
> ✅ = 已完成   ❌ = 尚未完成   🔄 = 進行中

---

## ✅ Step 1: GitHub ✔️ 已完成

狀態：已完成（lokmanwong27@gmail.com）
程式碼已 push，Vercel auto-deploy 設定完成。

---

## ✅ Step 2: Vercel ✔️ 已完成

狀態：Vercel 已連結 GitHub，auto-deploy 啟用。
部署 URL：https://income-plan-git-main-lokman2.vercel.app

---

## 🔄 Step 3: Stripe — 部分完成

✅ Publishable Key 已提供：`pk_test_51TkUafCJYjGZsMP6SJHtgCkpFotlYYMq5sRj3yFh7SIx7qCQ3ypVInwcemg3YCXQ94eYAurGmqZ9IObISNts0Eup00W7siRnB2`

❌ 仍然需要：**Stripe Secret Key**（sk_test_...）

**操作步驟：**
1. 登入 https://dashboard.stripe.com/
2. 左側選單 → Developers → API Keys
3. 複製 **Secret Key**（sk_test_... 開頭）
4. 貼到 Vercel 專案的 Environment Variables：
   - 到 https://vercel.com/lokmanwong27-source/income-plan/settings/environment-variables
   - 新增變數名稱 `STRIPE_SECRET_KEY`
   - 貼上 Secret Key 的值
   - 按 Save
---

## ❌ Step 4: Cloudflare + 域名 — 尚未完成（需要你操作）

需要的東西：一個網域名稱（~$10/年）

**建議流程：**
1. 前往 https://dash.cloudflare.com/signup
2. 註冊免費帳號
3. 在註冊頁買一個域名（建議：`lnkflow.com` 或你喜歡的名字，約 $10/年）
4. 把域名給我，我來綁定 Vercel 和 Stripe


---

## ❌ Step 5: Gumroad — 尚未完成（需要你操作）

需要的東西：一個免費 Gumroad 帳號來上架數位商品

**操作步驟：**
1. 前往 https://gumroad.com/
2. 用 email 註冊
3. Settings → Payments → 設定 payout（銀行帳戶或 PayPal）
4. 把 Gumroad 用戶名給我

---

## 📋 已準備好上架的商品（Gumroad）

I. **React UI Component Pack** — 15 個元件 · $19（全套）/ $49（含原始碼授權）
   - demo: `products/react-components/preview.html`

II. **Premium SVG Icon Pack** — 30 個圖示 · $9（單包）/ $19（全套）
   - demo: `products/svg-icons/preview.html`

III. **HyperFrames Video Templates** — 5 個模板 · $19（單個）/ $49（全套）
   - demo: `products/hyperframes-pack/preview.html`

---

## 🚀 已完成（不需要你做任何事）

✅ GitHub repo 已建立，code 已 push
✅ Vercel auto-deploy 已啟用
✅ SaaS (Lnk.Flow) 前端 + Stripe 串接已開發完成
✅ React UI Component Pack（15 個元件、preview、package.json）
✅ SVG Icon Pack（30 個圖示、preview）
✅ HyperFrames Video Templates（5 個模板、preview）
✅ Automated Video Service API

## ⏳ 還需要你做的（只需這 3 步）

1. **Stripe Secret Key** → 貼到 Vercel env vars（5 分鐘）
2. **註冊 Gumroad** → 上架商品開始賣（5 分鐘）
3. **買一個域名** → $10/年（5 分鐘）

完成這三步後，就開始自動收錢了 💰
