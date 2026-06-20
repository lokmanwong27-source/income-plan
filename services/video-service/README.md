# AI Video Generation Service

> Automated video creation service — pay, get a professional video
> Powered by Codex AI + HyperFrames

## How It Works

1. Customer submits a script/scenario via the web form
2. Payment is processed via Stripe/Gumroad
3. Codex AI generates the video using HyperFrames
4. Video is delivered via email or download link

## Service Tiers

| Tier | Price | Delivery | Content |
|------|-------|----------|---------|
| Basic | $9 | Within 24h | 15s social media clip |
| Pro | $29 | Within 12h | 30s branded video with music |
| Premium | $79 | Within 6h | 60s full production with voiceover |

## Tech Stack

- **Frontend**: Landing page + order form (HTML/CSS/JS)
- **Payment**: Stripe / Gumroad API
- **Generation**: HyperFrames CLI
- **Delivery**: Email via Resend/SendGrid API
- **Storage**: Cloudflare R2 or Vercel Blob

## Directory Structure

```
video-service/
├── frontend/           # Order page
│   ├── index.html     # Service landing page
│   ├── order.html     # Order form
│   └── success.html   # Post-purchase page
├── api/                # Backend
│   ├── order.js       # Create order
│   ├── generate.js    # Trigger video generation
│   └── webhook.js     # Stripe payment confirmation
├── templates/          # HyperFrames templates to use
└── delivery/           # Email + download logic
```

## Setup

1. Set up Stripe products for each tier
2. Configure email delivery (Resend API key)
3. Deploy frontend to Vercel
4. Deploy backend to Render (Node.js)

## Automation

Codex AI handles:
- Watching for new orders
- Generating videos automatically
- Sending delivery emails
- Handling customer inquiries

---

Powered by Codex AI
