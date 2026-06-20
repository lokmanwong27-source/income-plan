#!/bin/bash
# env-check.sh — Validate all required environment variables are set
# Usage: ./env-check.sh .env.example

set -euo pipefail

ENV_FILE="${1:-.env.example}"
MISSING=false

if [[ ! -f "$ENV_FILE" ]]; then
  echo "❌ Template file not found: $ENV_FILE"
  exit 1
fi

echo "🔍 Checking environment variables against: $ENV_FILE"
echo ""

while IFS= read -r line || [[ -n "$line" ]]; do
  # Skip comments and empty lines
  [[ "$line" =~ ^#.*$ ]] && continue
  [[ -z "$line" ]] && continue

  # Extract variable name (before = or :)
  VAR_NAME=$(echo "$line" | sed 's/[=:].*//' | tr -d ' ')
  [[ -z "$VAR_NAME" ]] && continue

  if [[ -z "${!VAR_NAME:-}" ]]; then
    echo "   ⚠️  Missing: $VAR_NAME"
    MISSING=true
  else
    VALUE="${!VAR_NAME}"
    DISPLAY="${VALUE:0:20}..."
    echo "   ✅ $VAR_NAME = $DISPLAY"
  fi
done < "$ENV_FILE"

echo ""
if [[ "$MISSING" == "true" ]]; then
  echo "❌ Some variables are missing!"
  exit 1
else
  echo "✅ All environment variables are set!"
fi
