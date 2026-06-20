#!/bin/bash
# deploy.sh — One-command deployment to Vercel/Render
# Usage: ./deploy.sh [environment]
#   ./deploy.sh production
#   ./deploy.sh staging

set -euo pipefail

ENV="${1:-production}"
APP_NAME=$(basename "$(git rev-parse --show-toplevel)" 2>/dev/null || echo "app")

echo "🚀 Deploying $APP_NAME to $ENV..."

# Check for uncommitted changes
if [[ -n "$(git status --porcelain)" ]]; then
  echo "⚠️  Uncommitted changes found. Stashing..."
  git stash --include-untracked
  STASHED=true
fi

# Deploy based on project type
if [[ -f "vercel.json" ]] || [[ -f "next.config.js" ]]; then
  echo "📦 Detected Vercel project"
  if command -v vercel &>/dev/null; then
    vercel --prod --yes
  else
    echo "❌ Vercel CLI not found. Install: npm i -g vercel"
    exit 1
  fi
elif [[ -f "render.yaml" ]] || [[ -f "Dockerfile" ]]; then
  echo "📦 Detected Render/Docker project"
  if [[ -f "render.yaml" ]]; then
    echo "Push to deploy branch triggers Render auto-deploy"
    git push origin HEAD:main
  fi
else
  echo "⚠️  No recognized deployment config found."
  echo "   Pushing to remote for auto-deployment..."
  git push origin HEAD
fi

# Unstash if needed
if [[ "${STASHED:-false}" == "true" ]]; then
  git stash pop 2>/dev/null || true
fi

echo "✅ Deploy to $ENV complete!"
echo "   $(git log -1 --oneline 2>/dev/null || echo '')"
